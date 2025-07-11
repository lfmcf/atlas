import { FC, MutableRefObject, useEffect, useRef, useState } from 'react'
import Authenticated from '../../../Layouts/AuthenticatedLayout'
import { StepperComponent } from '../../../_metronic/assets/ts/components'
import { Instance } from 'flatpickr/dist/types/instance'
import clsx from 'clsx'
import ReactCountryFlag from 'react-country-flag'
import { KTIcon } from '../../../_metronic/helpers'
import { useForm } from '@inertiajs/react'
import Select, { SingleValue } from 'react-select'
import Flatpickr from "react-flatpickr";
import 'flatpickr/dist/flatpickr.css';
import { publishingMrpSubmissionType } from '../../Lab/MetaDataList'
import DropZone from '../../../Components/Dropzone'
import axios from 'axios'
import StatusComponent from '../../../Components/StatusComponent'
import GeneralInformation from '../../../Components/GeneralInformation'
import MrpProductMetaData from '../../../Components/MrpProductMetaData'
import ProductMetaData from '../../../Components/ProductMetaData';
import { ConfirmationMessage } from '../../../_metronic/partials/modals/confimation/ConfirmationMessage';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal)

const Create = (props: any) => {

    const { metadata, folder } = props;

    var params = new URLSearchParams(window.location.search);

    const [myErrors, setMyErroes] = useState({ dossier_type: '', dossier_count: '', submission_type: new Array(), submission_mode: new Array(), submission_unit: new Array(), sequence: new Array() })
    const [isModalOpen, setModalOpen] = useState(false);
    const [actionType, setActionType] = useState('');

    const { data, setData, post, processing, errors, clearErrors, reset } = useForm({
        id: folder ? folder._id : '',
        form: folder ? folder.form : 'Publishing',
        region: folder ? folder.region : params.get('region'),
        procedure: folder ? folder.procedure : params.get('procedure'),
        productName: folder ? folder.product_name : params.get('product'),
        dossier_contact: folder ? folder.dossier_contact : props.auth.user.trigramme,
        object: folder ? folder.object : '',
        country: folder ? folder.country : '',
        dossier_type: folder ? folder.dossier_type : '',
        dossier_count: folder ? folder.dossier_count : '',
        remarks: folder ? folder.remarks : '',
        mt: folder ? folder.mt : [],
        drug_substance: folder ? folder.drug_substance : [],
        drug_product: folder ? folder.drug_product : [],
        dosage_form: folder ? folder.dosage_form : '',
        excipient: folder ? folder.excipient : '',
        doc: folder && folder.doc !== null ? folder.doc : [],
        docremarks: folder ? folder.docremarks : '',
        deadline: new Date(),
        request_date: new Date(),
        status: folder ? folder.status : '',
        created_by: props.auth.user.id,
        car_deadline: folder ? folder.car_deadline : false,
        car_remarks: folder ? folder.car_remarks : '',
    })

    if (!metadata) {
        return <div>
            <h1>Error</h1>
            <p>Error while fetching metadata</p>
        </div>
    }

    const [multiData, setMultiData] = useState({
        uuid: metadata[0]?.uuid, submission_type: '', submission_mode: '', trackingNumber: metadata[0]?.tracking_numbers[0].numbers, submission_unit: '', applicant: metadata[0]?.applicant,
        agencyCode: metadata[0]?.agencyCode, inventedName: metadata[0]?.invented_name, mtd: metadata[0]?.mtd, inn: metadata[0]?.inn, sequence: metadata[0]?.sequence,
        r_sequence: metadata[0]?.r_sequence, submission_description: '', remarks: ''
    });



    const stepperRef = useRef<HTMLDivElement | null>(null)
    const stepper = useRef<StepperComponent | null>(null)


    useEffect(() => {
        stepper.current = StepperComponent.createInsance(stepperRef.current as HTMLDivElement)
    }, [])

    const nextStep = () => {
        // setHasError(false)

        if (!stepper.current) {
            return
        }

        if (stepper.current.getCurrentStepIndex() === 1) {
            if (!data.dossier_type || !data.dossier_count) {
                if (!data.dossier_type) {
                    setMyErroes((preveState) => {
                        return {
                            ...preveState,
                            dossier_type: 'this field is required'
                        }
                    })
                }
                if (!data.dossier_count) {
                    setMyErroes((preveState) => {
                        return {
                            ...preveState,
                            dossier_count: 'this field is required'
                        }
                    })
                }

                return
            }
        }

        let check = false;

        if (stepper.current.getCurrentStepIndex() === 2) {
            for (let j = 0; j < data.mt.length; j++) {
                if (!data.mt[j].submission_type) {
                    setMyErroes((prevState) => {
                        const newVal = { ...prevState };
                        if (j >= 0 && j < newVal.submission_type.length) {
                            newVal.submission_type[j] = 'this field is required';
                        }
                        else {
                            newVal.submission_type.push('this field is required');
                        }
                        return newVal;
                    });
                    check = true;
                }
                if (!data.mt[j].submission_mode) {
                    setMyErroes((prevState) => {
                        const newVal = { ...prevState };
                        if (j >= 0 && j < newVal.submission_mode.length) {
                            newVal.submission_mode[j] = 'this field is required';
                        }
                        else {
                            newVal.submission_mode.push('this field is required');
                        }
                        return newVal;
                    });
                    check = true;
                }
                if (!data.mt[j].submission_unit) {
                    setMyErroes((prevState) => {
                        const newVal = { ...prevState };
                        if (j >= 0 && j < newVal.submission_unit.length) {
                            newVal.submission_unit[j] = 'this field is required';
                        }
                        else {
                            newVal.submission_unit.push('this field is required');
                        }
                        return newVal;
                    });
                    check = true;
                }
                if (!data.mt[j].sequence) {
                    setMyErroes((prevState) => {
                        const newVal = { ...prevState };
                        if (j >= 0 && j < newVal.sequence.length) {
                            newVal.sequence[j] = 'this field is required';
                        }
                        else {
                            newVal.sequence.push('this field is required');
                        }
                        return newVal;
                    });
                    check = true;
                }

            };
        }

        if (check) {
            return
        }

        stepper.current.goNext()
    }

    const prevStep = () => {
        if (!stepper.current) {
            return
        }

        stepper.current.goPrev()
    }


    const handleSelectChange = (e, name) => {
        if (name == 'dossier_type') {
            setMyErroes((preveState) => {
                return {
                    ...preveState,
                    dossier_type: ''
                }
            })
        }
        setData(name, e)
    }

    const handleChange = (e) => {
        if (e.target.name == 'dossier_count') {
            setMyErroes((preveState) => {
                return {
                    ...preveState,
                    dossier_count: ''
                }
            })
        }
        setData(e.target.name, e.target.value)
    }

    const handleUploadFileChange = (e) => {
        let instData = { ...data }
        instData.doc.push(...e)
        setData(instData)
    }

    const handleMetaChange = (e, id) => {
        if (e.target.name == 'sequence') {
            let arr = { ...myErrors }
            arr.sequence[id] = ''
            setMyErroes(arr)
        }
        let prevData = { ...data }
        prevData.mt[id][e.target.name] = e.target.value
        setData(prevData)
    }

    const handleMetaSelectChange = (e, name, id) => {

        if (name == 'submission_type') {
            let arr = { ...myErrors }
            arr.submission_type[id] = ''
            setMyErroes(arr)
        }
        if (name == 'submission_unit') {
            let arr = { ...myErrors }
            arr.submission_unit[id] = ''
            setMyErroes(arr)
        }
        if (name == 'submission_mode') {
            let arr = { ...myErrors }
            arr.submission_mode[id] = ''
            setMyErroes(arr)
        }

        let prevData = { ...data }
        prevData.mt[id][name] = e
        setData(prevData)
    }

    const handleMultipleSelectChange = (e, name) => {
        const perdata = { ...multiData }
        perdata[name] = e
        setMultiData(perdata)
    }

    const handleMultipleChange = (e) => {
        const perdata = { ...multiData }
        perdata[e.target.name] = e.target.value
        setMultiData(perdata)
    }

    const [isCheck, setIsCheck] = useState([]);
    const [isCheckAll, setIsCheckAll] = useState(false);

    const [list, setList] = useState(metadata);


    const handleMultiCountryChange = (e) => {

        const { id, checked } = e.target;
        setIsCheck([...isCheck, parseInt(id)]);

        if (!checked) {

            setIsCheck(isCheck.filter(item => item != id));
        }

    }

    const handleSelectAll = e => {
        setIsCheckAll(!isCheckAll);
        setIsCheck(list.map(li => li.id));
        if (isCheckAll) {
            setIsCheck([]);
        }
    };

    const handleCheckBoxChange = (e) => {
        setData(e.target.name, e.target.checked)
    }

    const handleSubmitMulti = () => {
        let perdata = { ...data }
        let myarr = { ...myErrors }

        perdata.mt.map((cnt, i) => {
            if (isCheck.includes(cnt.id)) {
                if (multiData.submission_type) {
                    myarr.submission_type[i] = ''
                }
                if (multiData.submission_mode) {
                    myarr.submission_mode[i] = ''
                }
                if (multiData.submission_unit) {
                    myarr.submission_unit[i] = ''
                }
                if (multiData.sequence) {
                    myarr.sequence[i] = ''
                }
                perdata.mt[i].uuid = multiData.uuid
                perdata.mt[i].submission_type = multiData.submission_type
                perdata.mt[i].submission_mode = multiData.submission_mode
                perdata.mt[i].trackingNumber = multiData.trackingNumber
                perdata.mt[i].submission_unit = multiData.submission_unit
                perdata.mt[i].applicant = multiData.applicant
                perdata.mt[i].inventedName = multiData.inventedName
                perdata.mt[i].mtd = multiData.mtd
                perdata.mt[i].inn = multiData.inn
                perdata.mt[i].sequence = multiData.sequence
                perdata.mt[i].r_sequence = multiData.r_sequence
                perdata.mt[i].submission_description = multiData.submission_description
                perdata.mt[i].remarks = multiData.remarks
            }
        })
        setMyErroes(myarr)
        setData(perdata)
    }

    useEffect(() => {
        let arr = { ...data };
        metadata.map((mtd, i) => {
            arr.mt.push({
                id: mtd.id, country: mtd.country, uuid: mtd?.uuid, submission_type: '', submission_mode: '', trackingNumber: mtd.tracking_numbers[0].numbers,
                submission_unit: '', applicant: mtd.applicant, agencyCode: mtd.agencyCode, inventedName: mtd.invented_name, inn: mtd.inn, sequence: '',
                r_sequence: '', submission_description: '', remarks: ''
            })
        })
        setData(arr)
    }, [])


    useEffect(() => {
        let date = new Date();
        let hour = date.getHours();
        let delai = data.dossier_type ? data.dossier_type.delai : 0;
        let deadline = new Date();
        let count = 1;

        if (hour > 12) {
            delai = delai + 1
        }

        while (count < delai) {
            deadline = new Date(date.setDate(date.getDate() + 1));
            if (deadline.getDay() != 0 && deadline.getDay() != 6) {

                count++;
            }
        }

        setData('deadline', new Date(deadline));

    }, [data.dossier_type]);

    const handleSubmit = (e, type) => {
        e.preventDefault();
        MySwal.fire({
            title: type == 'save' ? 'Click on "Yes" to save your request or click on "No, return" to return to the form.' :
                'Click on "Yes" to submit your request or click on "No, return" to return to the form.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, proceed!',
            cancelButtonText: 'No, return',
        }).then((result) => {
            if (result.isConfirmed) {
                post(route('publishing_initiate', { type: type }));
            }
        })
        // setModalOpen(true);
        // setActionType(type);
    }

    const handleCancel = () => {
        setModalOpen(false);
    }

    const handleConfirm = (type) => {
        //setModalOpen(false);
        post(route('publishing_initiate', { type: type }));
    }

    const removeAll = () => {
        let instData = { ...data }
        let filesfromserver = []
        instData.doc.map((file => {
            file.link ? filesfromserver.push(file.name) : ''
        }))

        if (filesfromserver.length > 0) {
            axios.post('delete-file-pub', { docs: filesfromserver, id: data.id })
        }
        instData.doc = []
        setData(instData)
    }

    const deleletFile = (i) => {

        if (i.link) {
            let filesfromserver = []
            filesfromserver.push(i.name)
            axios.post('delete-file-pub', { docs: filesfromserver, id: data.id })
        }
        var arr = { ...data }
        let index = arr.doc.map((el) => el.name).indexOf(i.name);
        arr.doc.splice(index, 1)
        setData(arr)
    }

    const selectStyles = (hasErrors) => ({
        control: (styles) => ({
            ...styles,
            ...(hasErrors && { borderColor: 'red !important' }),
        }),
    });

    const goNextStep = (i) => {

        if ((!data.dossier_type || !data.dossier_count) && (i == 2 || i == 3 || i == 4 || i == 5)) {

            if (!data.dossier_type) {
                setMyErroes((preveState) => {
                    return {
                        ...preveState,
                        dossier_type: 'this field is required'
                    }
                })
            }
            if (!data.dossier_count) {
                setMyErroes((preveState) => {
                    return {
                        ...preveState,
                        dossier_count: 'this field is required'
                    }
                })
            }
            return

        }

        let check = false;

        for (let j = 0; j < data.mt.length; j++) {

            if ((!data.mt[j].submission_type || !data.mt[j].submission_mode || !data.mt[j].submission_unit || !data.mt[j].sequence) && (i == 3 || i == 4 || i == 5)) {

                if (!data.mt[j].submission_type) {
                    setMyErroes((prevState) => {
                        const newVal = { ...prevState };
                        if (j >= 0 && j < newVal.submission_type.length) {
                            newVal.submission_type[j] = 'this field is required';
                        }
                        else {

                            newVal.submission_type.push('this field is required');
                        }
                        return newVal;
                    });
                }
                if (!data.mt[j].submission_mode) {
                    setMyErroes((prevState) => {
                        const newVal = { ...prevState };
                        if (j >= 0 && j < newVal.submission_type.length) {
                            newVal.submission_mode[j] = 'this field is required';
                        }
                        else {

                            newVal.submission_mode.push('this field is required');
                        }
                        return newVal;
                    });
                }
                if (!data.mt[j].submission_unit) {
                    setMyErroes((prevState) => {
                        const newVal = { ...prevState };
                        if (j >= 0 && j < newVal.submission_type.length) {
                            newVal.submission_unit[j] = 'this field is required';
                        }
                        else {

                            newVal.submission_unit.push('this field is required');
                        }
                        return newVal;
                    });
                }
                if (!data.mt[j].sequence) {
                    setMyErroes((prevState) => {
                        const newVal = { ...prevState };
                        if (j >= 0 && j < newVal.submission_type.length) {
                            newVal.sequence[j] = 'this field is required';
                        }
                        else {

                            newVal.sequence.push('this field is required');
                        }
                        return newVal;
                    });
                }
                check = true;
            }
        };

        if (check) {
            return
        }

        stepper.current?.goto(i)
    }

    const addDrugSubstanceFields = () => {
        setData('drug_substance', [...data.drug_substance, { 'drug_substance': '', 'manufacturer': '' }])
    }

    const addDrugProductFields = () => {
        setData('drug_product', [...data.drug_product, { 'drug_product': '', 'manufacturer': '' }])
    }

    const removeDrugProductFields = (i) => {
        let instData = { ...data }
        instData.drug_product.splice(i, 1)
        setData(instData)
    }

    const removeDrugSubstanceFields = (i) => {
        let instData = { ...data }
        instData.drug_substance.splice(i, 1)
        setData(instData)
    }





    const [manufacturerOptions, setManufacturerOptions] = useState({});
    const [dpmanufacturerOptions, setDpManufacturerOptions] = useState({});

    const handleDrugSubstanceChange = (index, selectedOption) => {
        console.log(selectedOption)
        let newFormValues = { ...data };
        newFormValues.drug_substance[index]['drug_substance'] = selectedOption ? selectedOption.value : '';
        setData(newFormValues);

        const substanceId = selectedOption?.value;
        const relatedManufacturers = metadata[0]?.drug_substance.find(
            substance => substance.substance === substanceId
        )?.ds_manufacturers.map(manufacturer => ({
            label: manufacturer.substance_manufacturer,
            value: manufacturer.substance_manufacturer
        })) || [];


        setManufacturerOptions(prev => ({
            ...prev,
            [substanceId]: relatedManufacturers
        }));
    };

    // Handle Drug Product Change
    const handleDrugProductChange = (index, selectedOption) => {
        let newFormValues = { ...data };
        newFormValues.drug_product[index]['drug_product'] = selectedOption ? selectedOption.value : '';
        setData(newFormValues);

        const substanceId = selectedOption?.value;

        const relatedManufacturers = metadata[0].drug_product.find(
            drug_product => drug_product.drug_product === substanceId
        )?.dp_manufacturers.map(manufacturer => ({
            label: manufacturer.product_manufacturer,
            value: manufacturer.product_manufacturer
        })) || [];


        setDpManufacturerOptions(prev => ({
            ...prev,
            [substanceId]: relatedManufacturers
        }));
    };

    // Handle Manufacturer Change
    const handleManufacturerChange = (index, selectedOptions) => {

        setData((prevData) => {
            // Create a copy of the drug_product array
            const updatedDrugProducts = [...prevData.drug_substance];

            // Append the new value to the manufacturer array at the specific index
            updatedDrugProducts[index] = {
                ...updatedDrugProducts[index],
                // manufacturer: [
                //     //...updatedDrugProducts[index].manufacturer,  Keep the existing manufacturers
                //     selectedOptions // Add the new manufacturer value
                // ]
                manufacturer: selectedOptions
            };

            // Return the updated data object with the modified drug_product array
            return { ...prevData, drug_substance: updatedDrugProducts };
        });
    };


    // Handle Manufacturer Change
    const handleDpManufacturerChange = (index, selectedOptions) => {

        setData((prevData) => {
            // Create a copy of the drug_product array
            const updatedDrugProducts = [...prevData.drug_product];

            // Append the new value to the manufacturer array at the specific index
            updatedDrugProducts[index] = {
                ...updatedDrugProducts[index],
                // manufacturer: [
                //     //...updatedDrugProducts[index].manufacturer,  Keep the existing manufacturers
                //     selectedOptions // Add the new manufacturer value
                // ]
                manufacturer: selectedOptions
            };

            // Return the updated data object with the modified drug_product array
            return { ...prevData, drug_product: updatedDrugProducts };
        });
    };

    return (
        <>
            {folder ?
                <div className='d-flex justify-content-between align-items-center'>
                    <a href="#" onClick={() => window.history.back()} className="btn btn-sm fw-bold btn-secondary mb-2">
                        <i className="ki-duotone ki-black-left fs-3">
                        </i>
                    </a>
                    <StatusComponent status={data.status} />
                </div>
                : ''}
            <div className="stepper stepper-pills" id="kt_stepper_example_basic" ref={stepperRef}>
                <div className="stepper-nav flex-center flex-wrap mb-10">

                    <div className="stepper-item mx-8 my-4 current" data-kt-stepper-element="nav">
                        <div className="stepper-wrapper d-flex align-items-center" onClick={() => stepper.current?.goto(1)} style={{ cursor: 'pointer' }}>
                            {/* <!--begin::Icon--> */}
                            <div className="stepper-icon w-40px h-40px">
                                <i className="stepper-check fas fa-check"></i>
                                <span className="stepper-number">1</span>
                            </div>
                            {/* <!--end::Icon--> */}

                            {/* <!--begin::Label--> */}
                            <div className="stepper-label">
                                <h3 className="stepper-title">
                                    Step 1
                                </h3>

                                <div className="stepper-desc">
                                    General information
                                </div>
                            </div>
                            {/* <!--end::Label--> */}
                        </div>
                        {/* <!--begin::Line--> */}
                        <div className="stepper-line h-40px"></div>
                        {/* <!--end::Line--> */}
                    </div>
                    <div className="stepper-item mx-8 my-4" data-kt-stepper-element="nav">
                        <div className="stepper-wrapper d-flex align-items-center" onClick={() => goNextStep(2)} style={{ cursor: 'pointer' }}>
                            {/* <!--begin::Icon--> */}
                            <div className="stepper-icon w-40px h-40px">
                                <i className="stepper-check fas fa-check"></i>
                                <span className="stepper-number">2</span>
                            </div>
                            {/* <!--begin::Icon--> */}

                            {/* <!--begin::Label--> */}
                            <div className="stepper-label">
                                <h3 className="stepper-title">
                                    Step 2
                                </h3>

                                <div className="stepper-desc">
                                    Submission metadata
                                </div>
                            </div>
                            {/* <!--end::Label--> */}
                        </div>
                        {/* <!--end::Wrapper--> */}

                        {/* <!--begin::Line--> */}
                        <div className="stepper-line h-40px"></div>
                        {/* <!--end::Line--> */}
                    </div>
                    <div className="stepper-item mx-8 my-4" data-kt-stepper-element="nav">
                        <div className="stepper-wrapper d-flex align-items-center" onClick={() => goNextStep(3)} style={{ cursor: 'pointer' }}>
                            {/* <!--begin::Icon--> */}
                            <div className="stepper-icon w-40px h-40px">
                                <i className="stepper-check fas fa-check"></i>
                                <span className="stepper-number">3</span>
                            </div>
                            {/* <!--begin::Icon--> */}

                            {/* <!--begin::Label--> */}
                            <div className="stepper-label">
                                <h3 className="stepper-title">
                                    Step 3
                                </h3>

                                <div className="stepper-desc">
                                    Product metadata
                                </div>
                            </div>
                            {/* <!--end::Label--> */}
                        </div>
                        {/* <!--end::Wrapper--> */}

                        {/* <!--begin::Line--> */}
                        <div className="stepper-line h-40px"></div>
                        {/* <!--end::Line--> */}
                    </div>
                    <div className="stepper-item mx-8 my-4" data-kt-stepper-element="nav">
                        <div className="stepper-wrapper d-flex align-items-center" onClick={() => goNextStep(4)} style={{ cursor: 'pointer' }}>
                            {/* <!--begin::Icon--> */}
                            <div className="stepper-icon w-40px h-40px">
                                <i className="stepper-check fas fa-check"></i>
                                <span className="stepper-number">4</span>
                            </div>
                            {/* <!--begin::Icon--> */}

                            {/* <!--begin::Label--> */}
                            <div className="stepper-label">
                                <h3 className="stepper-title">
                                    Step 4
                                </h3>

                                <div className="stepper-desc">
                                    Documents
                                </div>
                            </div>
                            {/* <!--end::Label--> */}
                        </div>
                        {/* <!--end::Wrapper--> */}

                        {/* <!--begin::Line--> */}
                        <div className="stepper-line h-40px"></div>
                        {/* <!--end::Line--> */}
                    </div>
                    <div className="stepper-item mx-8 my-4" data-kt-stepper-element="nav">
                        <div className="stepper-wrapper d-flex align-items-center" onClick={() => goNextStep(5)} style={{ cursor: 'pointer' }}>
                            {/* <!--begin::Icon--> */}
                            <div className="stepper-icon w-40px h-40px">
                                <i className="stepper-check fas fa-check"></i>
                                <span className="stepper-number">5</span>
                            </div>
                            {/* <!--begin::Icon--> */}

                            {/* <!--begin::Label--> */}
                            <div className="stepper-label">
                                <h3 className="stepper-title">
                                    Step 5
                                </h3>

                                <div className="stepper-desc">
                                    Delivery details
                                </div>
                            </div>
                            {/* <!--end::Label--> */}
                        </div>
                        {/* <!--end::Wrapper--> */}

                        {/* <!--begin::Line--> */}
                        <div className="stepper-line h-40px"></div>
                        {/* <!--end::Line--> */}
                    </div>
                </div>

                <form className="form" onSubmit={handleSubmit} id="kt_stepper_example_basic_form">

                    <div className="mb-5">

                        <GeneralInformation
                            data={data}
                            myErrors={myErrors}
                            handleChange={handleChange}
                            handleSelectChange={handleSelectChange}
                            selectStyles={selectStyles}
                        />

                        <div className="flex-column" data-kt-stepper-element="content">
                            <div className='d-flex justify-content-end mb-1'>
                                <a href='#' className='btn btn-secondary btn-sm' data-bs-toggle='modal' data-bs-target='#kt_modal_multi_data_update'>
                                    <i className="fa-solid fa-plus"></i>
                                </a>

                            </div>
                            <div className="d-flex flex-column flex-md-row rounded border p-10">

                                <ul className="nav nav-tabs nav-line-tabs border-0 flex-row flex-md-column me-5 mb-3 mb-md-0 fs-6">
                                    <div className='position-relative d-inline-block' style={{ flex: '1 1 auto', whiteSpace: 'nowrap', overflowX: 'hidden', overflowY: 'auto', height: 'calc(100vh - 240px)' }}>
                                        <div className='d-flex flex-column'>


                                            {metadata.map((mt: any, i: number) => (
                                                <li className="nav-item w-md-150px me-0 pe-5" key={i} >
                                                    <a
                                                        className={"nav-link mx-0 my-2" + (i === 0 ? ' active' : '')}
                                                        data-bs-toggle="tab"
                                                        href={"#kt_vtab_pane_" + i}
                                                        style={{ color: myErrors.submission_type[i] || myErrors.submission_unit[i] || myErrors.submission_mode[i] || myErrors.sequence[i] ? 'red' : '' }}
                                                    >
                                                        {mt.country}
                                                    </a>
                                                </li>
                                            ))}
                                        </div>
                                    </div>

                                </ul>
                                <div className='tab-content w-100'>
                                    {data.mt.map((mt, i) => (
                                        <div className={'tab-pane fade' + (i === 0 ? ' active show' : '')} id={"kt_vtab_pane_" + i} key={i}>
                                            <div className='row mb-10'>
                                                <div className='col-4'>
                                                    <label className="form-label">UUID</label>
                                                    <input type="text" className="form-control form-control-solid" value={mt.uuid} name="uuid" onChange={(e) => handleMetaChange(e, i)} />
                                                </div>
                                                <div className='col-4'>
                                                    <label className="form-label" title='Choose the submission type' style={{ color: myErrors.submission_type[i] ? 'red' : '' }}>Submission type (*)</label>
                                                    <Select options={publishingMrpSubmissionType}
                                                        name='submission_type'
                                                        onChange={(e) => handleMetaSelectChange(e, 'submission_type', i)}
                                                        className="react-select-container"
                                                        classNamePrefix="react-select"
                                                        placeholder=''
                                                        isClearable
                                                        value={mt.submission_type}
                                                        menuPortalTarget={document.body}
                                                        styles={selectStyles(myErrors.submission_type[i])}
                                                    />
                                                </div>
                                                <div className='col-4'>
                                                    <label className="form-label" title='Choose the submission mode' style={{ color: myErrors.submission_mode[i] ? 'red' : '' }}>Submission mode (*)</label>
                                                    <Select options={[
                                                        { label: 'Single', value: 'Single' },
                                                        { label: 'Grouping', value: 'Grouping' },
                                                        { label: 'Worksharing', value: 'Worksharing' },
                                                    ]}
                                                        name='submission_mode'
                                                        onChange={(e) => handleMetaSelectChange(e, 'submission_mode', i)}
                                                        className="react-select-container"
                                                        classNamePrefix="react-select"
                                                        placeholder=''
                                                        isClearable
                                                        value={mt.submission_mode}
                                                        menuPortalTarget={document.body}
                                                        styles={selectStyles(myErrors.submission_mode[i])}
                                                    />
                                                </div>
                                            </div>
                                            <div className='row mb-10'>
                                                <div className='col-4'>
                                                    <label className="form-label">Procedure Tracking N°</label>
                                                    <input type="text" className="form-control form-control-solid" name="tracking" value={mt.trackingNumber} onChange={(e) => handleMetaChange(e, i)} />
                                                </div>
                                                <div className='col-4'>
                                                    <label className="form-label" title='Choose the applicable submission unit' style={{ color: myErrors.submission_unit[i] ? 'red' : '' }}>Submission unit (*)</label>
                                                    <Select options={[
                                                        { label: 'initial', value: 'initial' },
                                                        { label: 'validation-response', value: 'validation-response' },
                                                        { label: 'response', value: 'response' },
                                                        { label: 'additional-info', value: 'additional-info' },
                                                        { label: 'closing', value: 'closing' },
                                                        { label: 'consolidating', value: 'consolidating' },
                                                        { label: 'corrigendum', value: 'corrigendum' },
                                                        { label: 'reformat', value: 'reformat' },
                                                    ]}
                                                        name='submission_unit'
                                                        onChange={(e) => handleMetaSelectChange(e, 'submission_unit', i)}
                                                        className="react-select-container"
                                                        classNamePrefix="react-select"
                                                        placeholder=''
                                                        isClearable
                                                        value={mt.submission_unit}
                                                        menuPortalTarget={document.body}
                                                        styles={selectStyles(myErrors.submission_unit[i])}
                                                    />
                                                </div>
                                                <div className='col-4'>
                                                    <label className="form-label">Applicant</label>
                                                    <input type="text" className="form-control form-control-solid" name="applicant" value={mt.applicant} onChange={(e) => handleMetaChange(e, i)} />
                                                </div>
                                            </div>
                                            <div className='row mb-10'>
                                                <div className='col-4'>
                                                    <label className="form-label">Agency code</label>
                                                    <input type="text" className="form-control form-control-solid" name="agency_code" value={mt.agencyCode} onChange={(e) => handleMetaChange(e, i)} />
                                                </div>
                                                <div className='col-4'>
                                                    <label className="form-label">Invented name</label>
                                                    <input type="text" className="form-control form-control-solid" name="inventedName" value={mt.inventedName} onChange={(e) => handleMetaChange(e, i)} />
                                                </div>
                                                <div className='col-4'>
                                                    <label className="form-label">INN</label>
                                                    <input type="text" className="form-control form-control-solid" name="inn" value={mt.inn} onChange={(e) => handleMetaChange(e, i)} />
                                                </div>
                                            </div>
                                            <div className='row mb-10'>
                                                <div className='col-4'>
                                                    <label className="form-label" title='Enter the sequence number' style={{ color: myErrors.sequence[i] ? 'red' : '' }}>Sequence (*)</label>
                                                    <input type="text" className="form-control form-control-solid" name="sequence" value={mt.sequence} style={{ borderColor: myErrors.sequence[i] ? 'red' : '' }} onChange={(e) => handleMetaChange(e, i)} />
                                                </div>
                                                <div className='col-4'>
                                                    <label className="form-label">Related Sequence</label>
                                                    <input type="text" className="form-control form-control-solid" name="r_sequence" value={mt.r_sequence} onChange={(e) => handleMetaChange(e, i)} />
                                                </div>
                                                <div className='col-4'>
                                                    <label className="form-label">Submission description</label>
                                                    <input type="text" className="form-control form-control-solid" name="submission_description" value={mt.submission_description} onChange={(e) => handleMetaChange(e, i)} />
                                                </div>
                                            </div>
                                            <div className='row mb-10'>
                                                <div className='col-12'>
                                                    <label className="form-label">Remarks</label>
                                                    <textarea className="form-control form-control-solid" rows={3} name="remarks" value={mt.remarks} onChange={(e) => handleMetaChange(e, i)} />
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        {/* <div className="flex-column" data-kt-stepper-element="content">
                            <MrpProductMetaData
                                metadata={metadata}
                                data={data}
                                setData={setData}
                            />
                        </div> */}

                        <ProductMetaData
                            metadata={metadata[0]}
                            data={data}
                            setData={setData}
                        // drugSubstanceOptions={drugSubstanceOptions}
                        //drugProductOptions={drugProductOptions}
                        // handleSelectChange={handleSelectChange}
                        // handleDrugSubstanceChange={handleDrugSubstanceChange}
                        // handleManufacturerChange={handleManufacturerChange}
                        // handleDrugProductChange={handleDrugProductChange}
                        // handleDpManufacturerChange={handleDpManufacturerChange}
                        // manufacturerOptions={manufacturerOptions}
                        // dpmanufacturerOptions={dpmanufacturerOptions}
                        // addDrugSubstanceFields={addDrugSubstanceFields}
                        // addDrugProductFields={addDrugProductFields}
                        // removeDrugProductFields={removeDrugProductFields}
                        // removeDrugSubstanceFields={removeDrugSubstanceFields}
                        />


                        <div className="flex-column" data-kt-stepper-element="content">
                            <div className='row mb-10'>
                                <div className='col-md-2 col-lg-2 col-sm-12'>
                                    <label className="form-label">Attached documents</label>
                                </div>
                                <div className='col-md-6 col-lg-6 col-sm-12'>
                                    <DropZone files={data.doc} upload={handleUploadFileChange} deleletFile={deleletFile} removeAll={removeAll} />
                                </div>
                            </div>
                            <div className="row mb-10">
                                <label className="form-label">Remarks</label>
                                <textarea className="form-control form-control-solid" rows={3} name="docremarks" placeholder="" onChange={handleChange} />
                            </div>
                        </div>
                        <div className="flex-column" data-kt-stepper-element="content">
                            <div className='row mb-10'>
                                <div className='col-6'>
                                    <label htmlFor="" className="form-label">Request date</label>
                                    <Flatpickr
                                        data-enable-time
                                        value={data.request_date}
                                        className="form-control"
                                        options={{ dateFormat: "d-M-Y H:i" }}
                                        disabled
                                    />
                                </div>
                                <div className='col-6'>
                                    <label htmlFor="" className="form-label">Delivery deadline</label>
                                    <Flatpickr
                                        data-enable-time
                                        value={data.deadline}
                                        className="form-control"
                                        options={{ dateFormat: "d-M-Y H:i" }}
                                        disabled
                                    />
                                </div>
                            </div>
                            <div className="mb-10">
                                <div className='my-4' style={{ display: 'flex', alignItems: 'center' }}>
                                    <label className='form-label my-0 me-4' data-toggle='tooltip' title='Field for the CAR adjusted deadline'>Urgent Request</label>
                                    <label className='form-check form-switch form-check-custom form-check-solid'>
                                        <input className='form-check-input' name='car_deadline' type='checkbox' value={data.car_deadline} onChange={handleCheckBoxChange} />
                                    </label>

                                </div>
                            </div>
                            {data.car_deadline &&
                                <div>
                                    <label className="form-label">Urgency Details</label>
                                    <textarea className="form-control form-control-solid" rows={3} name="car_remarks" defaultValue={data.car_remarks} placeholder="" onChange={handleChange} />
                                </div>
                            }
                        </div>
                    </div>

                    {/* <!--begin::Actions--> */}
                    <div className="d-flex flex-stack">
                        {/* <!--begin::Wrapper--> */}
                        <div className="me-2">
                            <button type="button" className="btn btn-light btn-active-light-primary" data-kt-stepper-action="previous" onClick={prevStep}>
                                Back
                            </button>
                        </div>
                        {/* <!--end::Wrapper-->

                        <!--begin::Wrapper--> */}
                        <div>
                            <button type="button" className="btn btn-primary m-3" data-kt-stepper-action="submit" onClick={(e) => handleSubmit(e, 'save')}>
                                <span className="indicator-label">
                                    Save
                                </span>
                            </button>
                            <button type="submit" className="btn btn-primary" data-kt-stepper-action="submit" onClick={(e) => handleSubmit(e, 'submit')}>
                                <span className="indicator-label">
                                    Submit
                                </span>
                                <span className="indicator-progress">
                                    Please wait... <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
                                </span>
                            </button>

                            <button type="button" className="btn btn-primary" data-kt-stepper-action='next' onClick={nextStep}>
                                Continue
                            </button>
                        </div>
                        {/* <!--end::Wrapper--> */}
                    </div>
                    {/* <!--end::Actions--> */}
                </form>

                {/* multi update modal */}

                <div className='modal fade' id='kt_modal_multi_data_update' aria-hidden='true'>
                    <div className='modal-dialog modal-xl'>
                        <div className='modal-content rounded'>
                            <div className='modal-header justify-content-end border-0 pb-0'>
                                <div className='btn btn-sm btn-icon btn-active-color-primary' data-bs-dismiss='modal'>
                                    <KTIcon iconName='cross' className='fs-1' />
                                </div>
                            </div>

                            <div className='modal-body pt-0 pb-15 px-5 px-xl-20'>
                                <div className='mb-13 text-center'>
                                    <h1 className='mb-3'>Multi update</h1>

                                    <div className='text-muted fw-bold fs-5'>
                                        Apply update for selected countries{' '}
                                        {/* <a href='#' className='link-primary fw-bolder'>
                                    Pricing Guidelines
                                </a> */}
                                        .
                                    </div>
                                </div>

                                <div className=''>
                                    <div className='row mt-10'>
                                        <div className='col-lg-12 mb-10 mb-lg-0'>
                                            <form className='row'>
                                                <div className='col-6'>
                                                    <div className='mb-10'>
                                                        <label className="form-label">UUID</label>
                                                        <input type="text" className="form-control form-control-solid" name="uuid" defaultValue={metadata[0]?.uuid} onChange={handleMultipleChange} />
                                                    </div>
                                                    <div className='mb-10'>
                                                        <label className="form-label">Submission type</label>
                                                        <Select options={publishingMrpSubmissionType}
                                                            name='submission_type'
                                                            onChange={(e) => handleMultipleSelectChange(e, 'submission_type')}
                                                            className="react-select-container"
                                                            classNamePrefix="react-select"
                                                            placeholder=''
                                                            isClearable
                                                            value={metadata[0]?.submission_type}
                                                            menuPortalTarget={document.body}
                                                            styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }), container: base => ({ width: '100%' }) }}
                                                        />
                                                    </div>
                                                    <div className='mb-10'>
                                                        <label className="form-label">Submission mode</label>
                                                        <Select options={[
                                                            { label: 'Single', value: 'Single' },
                                                            { label: 'Grouping', value: 'Grouping' },
                                                            { label: 'Worksharing', value: 'Worksharing' },
                                                        ]}
                                                            name='submission_mode'
                                                            onChange={(e) => handleMultipleSelectChange(e, 'submission_mode')}
                                                            className="react-select-container"
                                                            classNamePrefix="react-select"
                                                            placeholder=''
                                                            isClearable
                                                            value={metadata[0]?.submission_mode}
                                                            menuPortalTarget={document.body}
                                                            styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }), container: base => ({ width: '100%' }) }}
                                                        />
                                                    </div>
                                                    <div className='mb-10'>
                                                        <label className="form-label">Procedure Tracking N°</label>
                                                        <input type="text" className="form-control form-control-solid" defaultValue={metadata[0]?.tracking_numbers[0].numbers} name="trackingNumber" onChange={handleMultipleChange} />
                                                    </div>
                                                    <div className='mb-10'>
                                                        <label className="form-label">Submission unit</label>
                                                        <Select options={[
                                                            { label: 'initial', value: 'initial' },
                                                            { label: 'validation-response', value: 'validation-response' },
                                                            { label: 'response', value: 'response' },
                                                            { label: 'additional-info', value: 'additional-info' },
                                                            { label: 'closing', value: 'closing' },
                                                            { label: 'consolidating', value: 'consolidating' },
                                                            { label: 'corrigendum', value: 'corrigendum' },
                                                            { label: 'reformat', value: 'reformat' },
                                                        ]}
                                                            name='submission_unit'
                                                            onChange={(e) => handleMultipleSelectChange(e, 'submission_unit')}
                                                            className="react-select-container"
                                                            classNamePrefix="react-select"
                                                            placeholder=''
                                                            isClearable
                                                            value={metadata[0]?.submission_unit}
                                                            menuPortalTarget={document.body}
                                                            styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }), container: base => ({ width: '100%' }) }}
                                                        />
                                                    </div>

                                                    <div className='mb-10'>
                                                        <label className="form-label">Applicant</label>
                                                        <input type="text" className="form-control form-control-solid" defaultValue={metadata[0]?.applicant} name="applicant" onChange={handleMultipleChange} />
                                                    </div>
                                                </div>
                                                <div className='col-6'>
                                                    <div className='mb-10'>
                                                        <label className="form-label">Invented name</label>
                                                        <input type="text" className="form-control form-control-solid" defaultValue={metadata[0]?.invented_name} name="inventedName" onChange={handleMultipleChange} />
                                                    </div>
                                                    <div className='mb-10'>
                                                        <label className="form-label">INN</label>
                                                        <input type="text" className="form-control form-control-solid" defaultValue={metadata[0]?.inn} name="inn" onChange={handleMultipleChange} />
                                                    </div>
                                                    <div className='mb-10'>
                                                        <label className="form-label">Sequence</label>
                                                        <input type="text" className="form-control form-control-solid" defaultValue={metadata[0]?.sequence} name="sequence" onChange={handleMultipleChange} />
                                                    </div>
                                                    <div className='mb-10'>
                                                        <label className="form-label">Related Sequence</label>
                                                        <input type="text" className="form-control form-control-solid" defaultValue={metadata[0]?.r_seqeunce} name="r_sequence" onChange={handleMultipleChange} />
                                                    </div>
                                                    <div className='mb-10'>
                                                        <label className="form-label">Submission description</label>
                                                        <input type="text" className="form-control form-control-solid" defaultValue={metadata[0]?.submission_description} name="submission_description" onChange={handleMultipleChange} />
                                                    </div>
                                                </div>
                                            </form>
                                        </div>

                                        <div className='col-lg-12'>
                                            <div className='row'>
                                                <div className="col-4 d-flex align-items-center mb-5" >
                                                    <div className="me-5 position-relative">
                                                        <div className="symbol symbol-35px symbol-circle">
                                                            <ReactCountryFlag
                                                                className="emojiFlag"
                                                                countryCode="EU"
                                                                aria-label="Europe"
                                                                svg
                                                                style={{ width: '25px', height: '25px', borderRadius: '4px' }}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="fw-semibold" style={{ width: '40%' }}>
                                                        <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary">All Countries</a>
                                                        <div className="text-gray-400">All</div>
                                                    </div>
                                                    <div className="badge badge-light">
                                                        <input type='checkbox' name="multicountry" value='all' onChange={handleSelectAll} checked={isCheckAll} />
                                                    </div>
                                                </div>
                                                {metadata?.map((mt: any, i: string) => {

                                                    return (
                                                        <div key={i} className="col-4 d-flex align-items-center mb-5" >
                                                            <div className="me-5 position-relative">
                                                                <div className="symbol symbol-35px symbol-circle">
                                                                    <ReactCountryFlag
                                                                        className="emojiFlag"
                                                                        countryCode={mt.code}
                                                                        aria-label={mt.country}
                                                                        svg
                                                                        style={{ width: '25px', height: '25px', borderRadius: '4px' }}
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="fw-semibold" style={{ width: '40%' }}>
                                                                <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary">{mt.country}</a>
                                                                <div className="text-gray-400">{mt.code}</div>
                                                            </div>

                                                            <div className="badge badge-light ">
                                                                <input type='checkbox'
                                                                    id={mt.id}
                                                                    name={mt.country}
                                                                    value={mt.country}
                                                                    onChange={handleMultiCountryChange}
                                                                    checked={isCheck.includes(mt.id) ? true : false}
                                                                />
                                                            </div>
                                                        </div>
                                                    )
                                                })}


                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='d-flex flex-center flex-row-fluid pt-12'>
                                    <button type='reset' className='btn btn-light me-3' data-bs-dismiss='modal'>
                                        Cancel
                                    </button>

                                    <button type='submit' className='btn btn-primary' data-bs-dismiss='modal' onClick={handleSubmitMulti}>
                                        Update
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </div>
            <ConfirmationMessage show={isModalOpen} onCancel={handleCancel} actionType={actionType} onConfirm={handleConfirm} />
        </>
    )

}

Create.layout = page => <Authenticated children={page} auth={page.props.auth} />

export default Create;