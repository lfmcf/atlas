import { FC, MutableRefObject, useCallback, useEffect, useRef, useState } from 'react'
import Authenticated from '../../../../Layouts/AuthenticatedLayout'
import { StepperComponent } from '../../../../_metronic/assets/ts/components'
import Flatpickr from "react-flatpickr";
import 'flatpickr/dist/flatpickr.css';
import Select from 'react-select';
import moment from 'moment';
import { useForm } from '@inertiajs/react';
import { gcccountry } from '../../../Lab/MetaDataList';
import DropZone from '../../../../Components/Dropzone';
import axios from 'axios';
import StatusComponent from '../../../../Components/StatusComponent';

const InitiateDuplicate = (props: any) => {

    const stepperRef = useRef<HTMLDivElement | null>(null)
    const stepper = useRef<StepperComponent | null>(null)
    const { folder, products, countries, metapro } = props
    const [trOptions, setTrOptions] = useState([])
    const [myErrors, setMyErroes] = useState({ dossier_type: '', dossier_count: '', submission_type: '', submission_mode: '', sequence: '' })

    const { data, setData, post, processing, errors, clearErrors, reset } = useForm({
        id: folder ? folder._id : '',
        form: folder ? folder.form : 'Publishing',
        region: folder ? folder.region : '',
        procedure: folder ? folder.procedure : '',
        product_name: folder ? folder.product_name : '',
        dossier_contact: folder ? folder.dossier_contact : props.auth.user.trigramme.toUpperCase(),
        object: folder ? folder.object : '',
        country: { value: folder.country.value, label: folder.country.value, code: folder.country.code },
        dossier_type: folder ? folder.dossier_type : '',
        dossier_count: folder ? folder.dossier_count : '',
        remarks: folder ? folder.remarks : '',
        tracking: folder ? folder.tracking : '',
        trackingExtra: folder ? folder.trackingExtra : '',
        applicant: folder.applicant,
        agency_code: folder.agency_code,
        atc: folder ? folder.atc : '',
        submission_type: folder ? folder.submission_type : '',
        submission_mode: folder ? folder.submission_mode : '',
        invented_name: folder ? folder.invented_name : '',
        inn: folder.inn,
        sequence: folder ? folder.sequence : '',
        r_sequence: folder ? folder.r_sequence : '',
        uuid: folder ? folder.uuid : folder.uuid,
        submission_description: folder ? folder.submission_description : '',
        mtremarks: folder ? folder.mtremarks : '',
        indication: folder ? folder.indication : '',
        manufacturer: folder ? folder.manufacturer : '',
        drug_substance: folder ? folder.drug_substance : '',
        drug_substance_manufacturer: folder ? folder.drug_substance_manufacturer : '',
        drug_product: folder ? folder.drug_product : '',
        drug_product_manufacturer: folder ? folder.drug_product_manufacturer : '',
        dosage_form: folder ? folder.dosage_form : '',
        excipient: folder ? folder.excipient : '',
        doc: folder && folder.doc !== null ? folder.doc : [],
        docremarks: folder ? folder.docremarks : '',
        request_date: new Date,
        deadline: new Date,
        status: folder ? folder.status : '',
    });

    useEffect(() => {
        stepper.current = StepperComponent.createInsance(stepperRef.current as HTMLDivElement)
    }, [])

    useEffect(() => {
        let date = new Date();
        let hour = date.getHours();
        let delai = data.dossier_type ? data.dossier_type.delai : '';
        let deadline = new Date();
        let count = 1;

        if (hour < 12) {
            delai = delai
        } else {
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

    const nextStep = () => {

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

        if (stepper.current.getCurrentStepIndex() === 2) {
            if (!data.submission_type || !data.submission_mode || !data.sequence) {
                if (!data.submission_type) {
                    setMyErroes((preveState) => {
                        return {
                            ...preveState,
                            submission_type: 'this field is required'
                        }
                    })
                }
                if (!data.submission_mode) {
                    setMyErroes((preveState) => {
                        return {
                            ...preveState,
                            submission_mode: 'this field is required'
                        }
                    })
                }
                if (!data.sequence) {
                    setMyErroes((preveState) => {
                        return {
                            ...preveState,
                            sequence: 'this field is required'
                        }
                    })
                }
                return
            }
        }

        stepper.current.goNext()
    }

    const prevStep = () => {
        if (!stepper.current) {
            return
        }

        stepper.current.goPrev()
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
        if (e.target.name == 'sequence') {
            setMyErroes((preveState) => {
                return {
                    ...preveState,
                    sequence: ''
                }
            })
        }
        setData(e.target.name, e.target.value)
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
        if (name == 'dossier_count') {
            setMyErroes((preveState) => {
                return {
                    ...preveState,
                    dossier_count: ''
                }
            })
        }
        if (name == 'submission_type') {
            setMyErroes((preveState) => {
                return {
                    ...preveState,
                    submission_type: ''
                }
            })
        }
        if (name == 'submission_mode') {
            setMyErroes((preveState) => {
                return {
                    ...preveState,
                    submission_mode: ''
                }
            })
        }
        if (name == "product_name") {
            setData(name, e.value)
        } else {
            setData(name, e)
        }
    }

    const handleUploadFileChange = (e) => {
        let instData = { ...data }
        instData.doc.push(...e)
        setData(instData)
    }

    const handleSubmit = (e, type) => {
        e.preventDefault();
        post(route('store-publishing-nat-gcc-duplicate', { type: type }));
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

    useEffect(() => {
        axios.post('getMetaDataForDuplicate', { product: data.product_name, procedure: data.procedure, country: data.country }).then(res => {

            let tn = res.data.trackingNumber
            tn = tn.split(/\r?\n/)
            let tno = []
            // if (tn.length > 1) {
            tno = tn.map((val) => {
                return { label: val, value: val }
            })
            // }
            setTrOptions(tno)
            setData(data => ({
                ...data,
                agency_code: res.data.agencyCode,
                applicant: res.data.applicant,
                uuid: res.data.uuid,
                inn: res.data.inn
            }))
        })
    }, [data.product_name, data.country])

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
        if ((!data.submission_type || !data.submission_mode || !data.sequence) && (i == 3 || i == 4 || i == 5)) {

            if (!data.submission_type) {
                setMyErroes((preveState) => {
                    return {
                        ...preveState,
                        submission_type: 'this field is required'
                    }
                })
            }
            if (!data.submission_mode) {
                setMyErroes((preveState) => {
                    return {
                        ...preveState,
                        submission_mode: 'this field is required'
                    }
                })
            }
            if (!data.sequence) {
                setMyErroes((preveState) => {
                    return {
                        ...preveState,
                        sequence: 'this field is required'
                    }
                })
            }
            return
        }
        stepper.current?.goto(i)
    }

    const handleSelectChangeTracking = (e, action) => {
        if (action.action == 'clear') {
            setData('tracking', '')
        } else {
            setData('tracking', e.value)
        }
    }

    return (
        <div className="stepper stepper-pills" id="kt_stepper_example_basic" ref={stepperRef}>
            <div className="stepper-nav flex-center flex-wrap mb-10">
                <div className="stepper-item mx-8 my-4 current" data-kt-stepper-element="nav">
                    <div className="stepper-wrapper d-flex align-items-center" onClick={() => stepper.current?.goto(1)} style={{ cursor: 'pointer' }}>
                        <div className="stepper-icon w-40px h-40px">
                            <i className="stepper-check fas fa-check"></i>
                            <span className="stepper-number">1</span>
                        </div>
                        <div className="stepper-label">
                            <h3 className="stepper-title">
                                Step 1
                            </h3>

                            <div className="stepper-desc">
                                General information
                            </div>
                        </div>
                        <div className="stepper-line h-40px"></div>
                    </div>
                </div>
                <div className="stepper-item mx-8 my-4" data-kt-stepper-element="nav">
                    <div className="stepper-wrapper d-flex align-items-center" onClick={() => goNextStep(2)} style={{ cursor: 'pointer' }}>
                        <div className="stepper-icon w-40px h-40px">
                            <i className="stepper-check fas fa-check"></i>
                            <span className="stepper-number">2</span>
                        </div>
                        <div className="stepper-label">
                            <h3 className="stepper-title">
                                Step 2
                            </h3>

                            <div className="stepper-desc">
                                Submission metadata
                            </div>
                        </div>
                    </div>
                    <div className="stepper-line h-40px"></div>
                </div>
                <div className="stepper-item mx-8 my-4" data-kt-stepper-element="nav">
                    <div className="stepper-wrapper d-flex align-items-center" onClick={() => goNextStep(3)} style={{ cursor: 'pointer' }}>
                        <div className="stepper-icon w-40px h-40px">
                            <i className="stepper-check fas fa-check"></i>
                            <span className="stepper-number">3</span>
                        </div>
                        <div className="stepper-label">
                            <h3 className="stepper-title">
                                Step 3
                            </h3>

                            <div className="stepper-desc">
                                Product metadata
                            </div>
                        </div>
                    </div>
                    <div className="stepper-line h-40px"></div>
                </div>
                <div className="stepper-item mx-8 my-4" data-kt-stepper-element="nav">
                    <div className="stepper-wrapper d-flex align-items-center" onClick={() => goNextStep(4)} style={{ cursor: 'pointer' }}>
                        <div className="stepper-icon w-40px h-40px">
                            <i className="stepper-check fas fa-check"></i>
                            <span className="stepper-number">4</span>
                        </div>
                        <div className="stepper-label">
                            <h3 className="stepper-title">
                                Step 4
                            </h3>

                            <div className="stepper-desc">
                                Documents
                            </div>
                        </div>
                    </div>
                    <div className="stepper-line h-40px"></div>
                </div>
                <div className="stepper-item mx-8 my-4" data-kt-stepper-element="nav">
                    <div className="stepper-wrapper d-flex align-items-center" onClick={() => goNextStep(5)} style={{ cursor: 'pointer' }}>
                        <div className="stepper-icon w-40px h-40px">
                            <i className="stepper-check fas fa-check"></i>
                            <span className="stepper-number">5</span>
                        </div>
                        <div className="stepper-label">
                            <h3 className="stepper-title">
                                Step 5
                            </h3>

                            <div className="stepper-desc">
                                Delivery details
                            </div>
                        </div>
                    </div>
                    <div className="stepper-line h-40px"></div>
                </div>
            </div>
            <form className="form" id="kt_stepper_example_basic_form" onSubmit={handleSubmit}>
                <div className="mb-5">
                    <div className="flex-column current" data-kt-stepper-element="content">
                        <div className="row mb-10">
                            <div className='col-md-4 col-sm-12'>
                                <label className="form-label">Dossier contact</label>
                                <input type="text" className="form-control form-control-solid" defaultValue={data.dossier_contact} name="dossier_contact" readOnly onChange={handleChange} />
                            </div>
                            <div className='col-md-4 col-sm-12'>
                                <label className="form-label">Object</label>
                                <input type="text" className="form-control form-control-solid" name="object" defaultValue={data.object} onChange={handleChange} />
                            </div>
                            <div className='col-md-4 col-sm-12'>
                                <label className="form-label">Product</label>
                                {/* <input type="text" className="form-control form-control-solid" name="product_name" defaultValue={data.product_name} onChange={handleChange} /> */}
                                <Select
                                    options={products.map((pr) => {
                                        return { label: pr.name, value: pr.name }
                                    })}
                                    name="product_name"
                                    className="react-select-container"
                                    classNamePrefix="react-select"
                                    placeholder=''
                                    isClearable
                                    defaultValue={[{ value: data.product_name, label: data.product_name }]}
                                    menuPortalTarget={document.body}
                                    styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }}
                                    onChange={(e) => handleSelectChange(e, 'product_name')}
                                />
                            </div>
                        </div>
                        <div className="row mb-10">
                            <div className='col-md-4 col-sm-12'>
                                <label className="form-label">Submission country</label>
                                {/* <input type="text" className="form-control form-control-solid" name="country" defaultValue={data.country.value} /> */}
                                <Select
                                    options={countries.map((c) => {
                                        return { label: c.name, value: c.name, code: c.code }
                                    })}
                                    name="country"
                                    className="react-select-container"
                                    classNamePrefix="react-select"
                                    placeholder=''
                                    isClearable
                                    value={data.country}
                                    menuPortalTarget={document.body}
                                    styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }}
                                    onChange={(e) => handleSelectChange(e, 'country')}
                                />
                            </div>
                            <div className='col-md-4 col-sm-12'>
                                <label className="form-label" title='Choose the Dossier type' style={{ color: myErrors.dossier_type ? 'red' : '' }}>Dossier type (*)</label>
                                <Select options={[
                                    { label: 'Baseline Dossier (M1-M2-M3)', value: 'Baseline Dossier (M1-M2-M3)', delai: 5 },
                                    { label: 'Baseline Dossier (M1-M5)', value: 'Baseline Dossier (M1-M5)', delai: 9 },
                                    { label: 'Marketing Authorisation Dossier / BLA (m1-m5)', value: 'Marketing Authorisation Dossier / BLA (m1-m5)', delai: 9 },
                                    { label: 'Renewal Dossier', value: 'Renewal Dossier', delai: 9 },
                                    { label: 'Variation Dossier', value: 'Variation Dossier', delai: 3 },
                                    { label: 'Responses to questions Dossier', value: 'Responses to questions Dossier', delai: 3 },
                                    { label: 'PSUR/ PSUSA Dossier', value: 'PSUR/ PSUSA Dossier' },
                                    { label: 'Current View (Draft seq)', value: 'Current View (Draft seq)', delai: 1 },
                                ]}
                                    name='dossier_type'
                                    onChange={(e) => handleSelectChange(e, 'dossier_type')}
                                    className="react-select-container"
                                    classNamePrefix="react-select"
                                    placeholder=''
                                    isClearable
                                    value={data.dossier_type}
                                    menuPortalTarget={document.body}
                                    styles={selectStyles(myErrors.dossier_type)}
                                />
                            </div>
                            <div className='col-md-4 col-sm-12'>
                                <label className="form-label" title='Enter the number of documents in Publishing dossier' style={{ color: myErrors.dossier_count ? 'red' : '' }}>Dossier count (*)</label>
                                <input type="text" className="form-control form-control-solid" name="dossier_count" style={{ borderColor: myErrors.dossier_count ? 'red' : '' }} defaultValue={data.dossier_count} onChange={handleChange} />
                            </div>
                        </div>
                        <div className="row mb-10">
                            <div className='col-12'>
                                <label className="form-label">Remarks</label>
                                <textarea className="form-control form-control-solid" rows={3} defaultValue={data.remarks} name="remarks" onChange={handleChange} />
                            </div>

                        </div>
                    </div>
                    <div className="flex-column" data-kt-stepper-element="content">
                        <div className="row mb-10">
                            <div className='col-md-4 col-sm-12'>
                                <label className="form-label">Procedure Tracking N°</label>
                                <div className='d-flex align-items-center'>
                                    <Select options={trOptions}
                                        name='tracking'
                                        onChange={(e, action) => handleSelectChangeTracking(e, action)}
                                        className="react-select-container"
                                        classNamePrefix="react-select"
                                        placeholder=''
                                        isClearable
                                        defaultValue={folder.tracking ? { value: folder.tracking, label: folder.tracking } : ''}
                                        menuPortalTarget={document.body}
                                        styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }), container: base => ({ ...base, width: '50%' }) }}
                                    />
                                    <input type='text' className='form-control form-control-solid' value={data.tracking} name="tracking" style={{ width: '50%' }} onChange={handleChange} />
                                </div>
                            </div>
                            <div className='col-md-4 col-sm-12'>
                                <label className="form-label">Applicant</label>
                                <input type="text" className="form-control form-control-solid" name="applicant" defaultValue={data.applicant} onChange={handleChange} />
                            </div>
                            <div className='col-md-4 col-sm-12'>
                                <label className="form-label">Agency code</label>
                                <input type="text" className="form-control form-control-solid" name="agency_code" defaultValue={data.agency_code} onChange={handleChange} />
                            </div>
                        </div>
                        <div className="row mb-10">
                            <div className='col-md-4 col-sm-12'>
                                <label className="form-label">ATC</label>
                                <input type="text" className="form-control form-control-solid" name="atc" defaultValue={data.atc} onChange={handleChange} />
                            </div>
                            <div className='col-md-4 col-sm-12'>
                                <label className="form-label" title='Choose the submission type' style={{ color: myErrors.submission_type ? 'red' : '' }}>Submission type (*)</label>
                                <Select options={[
                                    { label: 'Active submission', value: 'Active submission' },
                                    { label: 'Extension submission', value: 'Extension submission' },
                                    { label: 'New Marketing Authorization Application - Generics', value: 'New Marketing Authorization Application - Generics' },
                                    { label: 'New Marketing Authorization Application - New Chemical Entity', value: 'New Marketing Authorization Application - New Chemical Entity' },
                                    { label: 'New Marketing Authorization Application - Biological Products', value: 'New Marketing Authorization Application - Biological Products' },
                                    { label: 'New Marketing Authorization Application - Radiopharmaceuticals', value: 'New Marketing Authorization Application - Radiopharmaceuticals' },
                                    { label: 'None (in the case of reformatting the application)', value: 'None (in the case of reformatting the application)' },
                                    { label: 'Plasma Master File', value: 'Plasma Master File' },
                                    { label: 'Periodic Safety Update Report', value: 'Periodic Safety Update Report' },
                                    { label: 'PSUR single assessment procedure', value: 'PSUR single assessment procedure' },
                                    { label: 'Renewal (Yearly or 5-Yearly)', value: 'Renewal (Yearly or 5-Yearly)' },
                                    { label: 'Risk Management Plan', value: 'Risk Management Plan' },
                                    { label: 'Transfer of Marketing Authorization', value: 'Transfer of Marketing Authorization' },
                                    { label: 'Urgent Safety Restriction', value: 'Urgent Safety Restriction' },
                                    { label: 'Variation Type I', value: 'Variation Type I' },
                                    { label: 'Variation Type II', value: 'Variation Type II' },
                                    { label: 'Withdrawal during assessment or withdrawal of Marketing Authorization', value: 'Withdrawal during assessment or withdrawal of Marketing Authorization' },
                                ]}
                                    name='submission_type'
                                    onChange={(e) => handleSelectChange(e, 'submission_type')}
                                    className="react-select-container"
                                    classNamePrefix="react-select"
                                    placeholder=''
                                    isClearable
                                    value={data.submission_type}
                                    menuPortalTarget={document.body}
                                    styles={selectStyles(myErrors.submission_type)}
                                />
                            </div>
                            <div className='col-md-4 col-sm-12'>
                                <label className="form-label" title='Choose the applicable submission unit' style={{ color: myErrors.submission_mode ? 'red' : '' }}>Submission unit (*)</label>
                                <Select options={[
                                    { label: 'Initial submission to start any regulatory activity', value: 'Initial submission to start any regulatory activity' },
                                    { label: 'Response to any kind of question, validation issues out-standing information requested by the agency', value: 'Response to any kind of question, validation issues out-standing information requested by the agency' },
                                    { label: 'Othe additional information (should only be used if response is not suitable)', value: 'Othe additional information (should only be used if response is not suitable)' },
                                    { label: 'Closing (provides the final documents in the GCC procedure following the decision of the GCC committee)', value: 'Closing (provides the final documents in the GCC procedure following the decision of the GCC committee)' },
                                    { label: 'Correction of the published annexes in the GCC procedure (usually shortly after approval)', value: 'Correction of the published annexes in the GCC procedure (usually shortly after approval)' },
                                    { label: 'Reformatting of an existing submission application from any format to Ectd', value: 'Reformatting of an existing submission application from any format to Ectd' },
                                ]}
                                    name='submission_mode'
                                    onChange={(e) => handleSelectChange(e, 'submission_mode')}
                                    className="react-select-container"
                                    classNamePrefix="react-select"
                                    placeholder=''
                                    isClearable
                                    value={data.submission_mode}
                                    menuPortalTarget={document.body}
                                    styles={selectStyles(myErrors.submission_mode)}
                                />
                            </div>
                        </div>
                        <div className="row mb-10">
                            <div className='col-md-4 col-sm-12'>
                                <label className="form-label">Invented name</label>
                                <input type="text" className="form-control form-control-solid" name="invented_name" value={data.product_name} onChange={handleChange} />
                            </div>
                            <div className='col-md-4 col-sm-12'>
                                <label className="form-label">INN</label>
                                <input type="text" className="form-control form-control-solid" name="inn" defaultValue={data.inn} onChange={handleChange} />
                            </div>
                            <div className='col-md-4 col-sm-12'>
                                <label className="form-label" title='Enter the sequence number' style={{ color: myErrors.sequence ? 'red' : '' }}>Sequence (*)</label>
                                <input type="text" className="form-control form-control-solid" name="sequence" style={{ borderColor: myErrors.sequence ? 'red' : '' }} defaultValue={data.sequence} onChange={handleChange} />
                            </div>
                        </div>
                        <div className="row mb-10">
                            <div className='col-md-4 col-sm-12'>
                                <label className="form-label">Related Sequence</label>
                                <input type="text" className="form-control form-control-solid" name="r_sequence" defaultValue={data.r_sequence} onChange={handleChange} />
                            </div>
                            <div className='col-md-4 col-sm-12'>
                                <label className="form-label">UUID</label>
                                <input type="text" className="form-control form-control-solid" name="uuid" defaultValue={data.uuid} onChange={handleChange} />
                            </div>
                            <div className='col-md-4 col-sm-12'>
                                <label className="form-label">Submission description</label>
                                <input type="text" className="form-control form-control-solid" name="submission_description" defaultValue={data.submission_description} onChange={handleChange} />
                            </div>
                        </div>
                        <div className='row mb-10'>
                            <div className='col-12'>
                                <label className="form-label">Remarks</label>
                                <textarea rows={3} className="form-control form-control-solid" defaultValue={data.mtremarks} name='mtremarks' onChange={handleChange} />
                            </div>
                        </div>
                    </div>
                    <div className="flex-column" data-kt-stepper-element="content">
                        <div className='row mb-10'>
                            <div className='col-md-4 col-sm-12'>
                                <label className="form-label">Indication</label>
                                <Select options={metapro?.indication.map((val) => ({ label: val, value: val }))}
                                    name='indication'
                                    onChange={(e) => handleSelectChange(e, 'indication')}
                                    className="react-select-container"
                                    classNamePrefix="react-select"
                                    placeholder=''
                                    isClearable
                                    value={data.indication}
                                    menuPortalTarget={document.body}
                                    styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }}
                                />
                            </div>

                            <div className='col-md-4 col-sm-12'>
                                <label className="form-label">Drug substance</label>
                                <Select options={metapro?.substance.map((val) => ({ label: val, value: val }))}
                                    name='drug_substance'
                                    onChange={(e) => handleSelectChange(e, 'drug_substance')}
                                    className="react-select-container"
                                    classNamePrefix="react-select"
                                    placeholder=''
                                    isClearable
                                    isMulti
                                    value={data.drug_substance}
                                    menuPortalTarget={document.body}
                                    styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }}
                                />
                            </div>
                            <div className='col-md-4 col-sm-12'>
                                <label className="form-label">Drug substance manufacturer</label>
                                <Select options={metapro?.ds_manufacturer.map((val) => ({ label: val, value: val }))}
                                    name='drug_substance_manufacturer'
                                    onChange={(e) => handleSelectChange(e, 'drug_substance_manufacturer')}
                                    className="react-select-container"
                                    classNamePrefix="react-select"
                                    placeholder=''
                                    isClearable
                                    value={data.drug_substance_manufacturer}
                                    menuPortalTarget={document.body}
                                    styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }}
                                />
                            </div>
                        </div>
                        <div className='row mb-10'>

                            <div className='col-md-4 col-sm-12'>
                                <label className="form-label">Drug product</label>
                                <Select options={metapro?.drug_product.map((val) => ({ label: val, value: val }))}
                                    name='drug_product'
                                    onChange={(e) => handleSelectChange(e, 'drug_product')}
                                    className="react-select-container"
                                    classNamePrefix="react-select"
                                    placeholder=''
                                    isClearable
                                    value={data.drug_product}
                                    menuPortalTarget={document.body}
                                    styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }}
                                />
                            </div>
                            <div className='col-md-4 col-sm-12'>
                                <label className="form-label">Drug product manufacturer</label>
                                <Select options={metapro?.dp_manufacturer.map((val) => ({ label: val, value: val }))}
                                    name='drug_product_manufacturer'
                                    onChange={(e) => handleSelectChange(e, 'drug_product_manufacturer')}
                                    className="react-select-container"
                                    classNamePrefix="react-select"
                                    placeholder=''
                                    isClearable
                                    value={data.drug_product_manufacturer}
                                    menuPortalTarget={document.body}
                                    styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }}
                                />
                            </div>
                            <div className='col-md-4 col-sm-12'>
                                <label className="form-label">Dosage form</label>
                                <Select options={metapro?.dosage.map((val) => ({ label: val, value: val }))}
                                    name='dosage_form'
                                    onChange={(e) => handleSelectChange(e, 'dosage_form')}
                                    className="react-select-container"
                                    classNamePrefix="react-select"
                                    placeholder=''
                                    isClearable
                                    value={data.dosage_form}
                                    menuPortalTarget={document.body}
                                    styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }}
                                />
                            </div>
                        </div>
                        <div className='row mb-10'>

                            <div className='col-md-4 col-sm-12'>
                                <label className="form-label">Excipient</label>
                                <Select options={metapro?.excipient.map((val) => ({ label: val, value: val }))}
                                    name='excipient'
                                    onChange={(e) => handleSelectChange(e, 'excipient')}
                                    className="react-select-container"
                                    classNamePrefix="react-select"
                                    placeholder=''
                                    isClearable
                                    isMulti
                                    value={data.excipient}
                                    menuPortalTarget={document.body}
                                    styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }}
                                />
                            </div>
                        </div>
                    </div>
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
                            <textarea className="form-control form-control-solid" rows={3} name="docremarks" defaultValue={data.docremarks} placeholder="" onChange={handleChange} />
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

                        </div>
                    </div>
                </div>
                <div className="d-flex flex-stack">

                    <div className="me-2">
                        <button type="button" className="btn btn-light btn-active-light-primary" data-kt-stepper-action="previous" onClick={prevStep}>
                            Back
                        </button>
                    </div>
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
                </div>
            </form>
        </div>
    )
}

InitiateDuplicate.layout = page => <Authenticated children={page} auth={page.props.auth} />

export default InitiateDuplicate;