import React, { useEffect, useState } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import Select from 'react-select';
import { KTIcon } from '../_metronic/helpers';

const ProductMetaData = ({ metadata, data, setData }) => {

    console.log("ProductMetaData metadata", metadata);
    // Drug Substance State
    const [allDsManufacturers, setAllDsManufacturers] = useState([]);
    const [dsOptions, setDsOptions] = useState([]);
    const [dsManufacturerOptions, setDsManufacturerOptions] = useState([]);
    const [selectedDrugSubstance, setSelectedDrugSubstance] = useState(null);
    const [selectedDsManufacturer, setSelectedDsManufacturer] = useState([]);

    // Drug Product State
    const [allDpManufacturers, setAllDpManufacturers] = useState([]);
    const [dpOptions, setDpOptions] = useState([]);
    const [dpManufacturerOptions, setDpManufacturerOptions] = useState([]);
    const [selectedDrugProduct, setSelectedDrugProduct] = useState(null);
    const [selectedDpManufacturer, setSelectedDpManufacturer] = useState([]);

    // Common State
    const [selectionMode, setSelectionMode] = useState('substance');
    const [manufacturerOptions, setManufacturerOptions] = useState([]);
    const [selectedManufacturer, setSelectedManufacturer] = useState(null);
    const [itemsForManufacturer, setItemsForManufacturer] = useState([]);
    const [selectedItems, setSelectedItems] = useState([]);
    const [activeTab, setActiveTab] = useState('substance');

    // Initialize data
    useEffect(() => {
        if (metadata?.drug_substance) {
            // Drug Substance Initialization
            const availableSubstances = metadata.drug_substance.filter(
                substance => !data.drug_substance?.some(
                    selected => selected.substance === substance.substance
                )
            );

            setDsOptions(availableSubstances);

            const allDsManufacturersList = metadata.drug_substance.flatMap(
                substance => substance.ds_manufacturers
            );
            setAllDsManufacturers(allDsManufacturersList);

            const uniqueDsManufacturerNames = [...new Set(
                allDsManufacturersList.map(m => m.substance_manufacturer)
            )];
            setManufacturerOptions(uniqueDsManufacturerNames);
        }

        if (metadata?.drug_product) {
            // Drug Product Initialization

            const availableProducts = metadata.drug_product.filter(
                product => !data.drug_product?.some(
                    selected => selected.drug_product === product.drug_product

                )
            );

            setDpOptions(availableProducts);

            const allDpManufacturersList = metadata.drug_product.flatMap(
                product => product.dp_manufacturers
            );
            setAllDpManufacturers(allDpManufacturersList);

            const uniqueDpManufacturerNames = [...new Set(
                allDpManufacturersList.map(m => m.product_manufacturer)
            )];
            setManufacturerOptions(uniqueDpManufacturerNames);
        }
    }, [metadata, data.drug_substance, data.drug_product]);

    // Common Handlers
    const handleItemChange = (selectedOption) => {
        if (!selectedOption) {
            if (activeTab === 'substance') {
                setSelectedDrugSubstance(null);
                setDsManufacturerOptions([]);
                setSelectedDsManufacturer([]);
            } else {
                setSelectedDrugProduct(null);
                setDpManufacturerOptions([]);
                setSelectedDpManufacturer([]);
            }
            return;
        }

        const selectedId = selectedOption.value;

        if (activeTab === 'substance') {
            const selectedSubstance = metadata.drug_substance.find(substance => substance.id === selectedId);
            setSelectedDrugSubstance(selectedSubstance);
            setDsManufacturerOptions(selectedSubstance.ds_manufacturers);
            setSelectedDsManufacturer([]);
        } else {
            const selectedProduct = metadata.drug_product.find(product => product.id === selectedId);
            setSelectedDrugProduct(selectedProduct);
            setDpManufacturerOptions(selectedProduct.dp_manufacturers);
            setSelectedDpManufacturer([]);
        }
    };

    const handleManufacturerChange = (selectedOption) => {
        const manufacturerName = selectedOption ? selectedOption.value : null;
        setSelectedManufacturer(manufacturerName);

        if (manufacturerName) {
            if (activeTab === 'substance') {
                const substances = metadata.drug_substance.filter(
                    substance => substance.ds_manufacturers.some(
                        m => m.substance_manufacturer === manufacturerName
                    )
                );
                const availableSubstances = substances.filter(
                    substance => !data.drug_substance?.some(
                        selected => selected.substance === substance.substance
                    )
                );
                setItemsForManufacturer(availableSubstances);
            } else {
                const products = metadata.drug_product.filter(
                    product => product.dp_manufacturers.some(
                        m => m.product_manufacturer === manufacturerName
                    )
                );
                const availableProducts = products.filter(
                    product => !data.drug_product?.some(
                        selected => selected.product === product.product
                    )
                );
                setItemsForManufacturer(availableProducts);
            }
        } else {
            setItemsForManufacturer([]);
        }
        setSelectedItems([]);
    };

    const handleItemsChange = (selectedOptions) => {
        // Handle "Select All" selection
        if (selectedOptions?.some(opt => opt.value === "select-all")) {
            // Select all available items
            const allItemIds = itemsForManufacturer.map(item => item.id);
            setSelectedItems(allItemIds);
        }
        // Handle "Select All" deselection
        else if (action === "deselect-option" && option?.value === "select-all") {
            // Deselect all items
            setSelectedItems([]);
        }
        // Regular selection handling
        else {
            const items = selectedOptions
                ? selectedOptions
                    .filter(opt => opt.value !== "select-all")
                    .map(opt => opt.value)
                : [];
            setSelectedItems(items);
        }
    };

    const handleConfirm = () => {
        if (selectionMode === 'substance') {
            if (activeTab === 'substance') {
                if (!selectedDrugSubstance || selectedDsManufacturer.length === 0) {
                    alert("Please select both a substance and at least one manufacturer");
                    return;
                }

                const selectedManufacturers = dsManufacturerOptions.filter(
                    mfg => selectedDsManufacturer.includes(mfg.id)
                );

                setData({
                    ...data,
                    drug_substance: [
                        ...data.drug_substance,
                        {
                            substance: selectedDrugSubstance.substance,
                            manufacturer: selectedManufacturers.map(m => m.substance_manufacturer),
                            manufacturerIds: selectedDsManufacturer
                        }
                    ]
                });

                setDsOptions(prev => prev.filter(
                    substance => substance.id !== selectedDrugSubstance.id
                ));
            } else {
                if (!selectedDrugProduct || selectedDpManufacturer.length === 0) {
                    alert("Please select both a product and at least one manufacturer");
                    return;
                }

                const selectedManufacturers = dpManufacturerOptions.filter(
                    mfg => selectedDpManufacturer.includes(mfg.id)
                );

                setData({
                    ...data,
                    drug_product: [
                        ...data.drug_product,
                        {
                            product: selectedDrugProduct.drug_product,
                            manufacturer: selectedManufacturers.map(m => m.product_manufacturer),
                            manufacturerIds: selectedDpManufacturer
                        }
                    ]
                });

                setDpOptions(prev => prev.filter(
                    product => product.id !== selectedDrugProduct.id
                ));
            }
        } else {
            if (selectedManufacturer && selectedItems.length > 0) {
                if (activeTab === 'substance') {
                    const manufacturerIds = allDsManufacturers
                        .filter(m => m.substance_manufacturer === selectedManufacturer)
                        .map(m => m.id);

                    const newSubstances = selectedItems.map(substanceId => {
                        const substance = metadata.drug_substance.find(s => s.id === substanceId);
                        return {
                            substance: substance.substance,
                            manufacturer: [selectedManufacturer],
                            manufacturerIds: manufacturerIds.filter(id =>
                                substance.ds_manufacturers.some(m => m.id === id)
                            )
                        };
                    });

                    setData({
                        ...data,
                        drug_substance: [...data.drug_substance, ...newSubstances]
                    });

                    setDsOptions(dsOptions.filter(
                        substance => !selectedItems.includes(substance.id)
                    ));
                } else {
                    const manufacturerIds = allDpManufacturers
                        .filter(m => m.product_manufacturer === selectedManufacturer)
                        .map(m => m.id);

                    const newProducts = selectedItems.map(productId => {
                        const product = metadata.drug_product.find(p => p.id === productId);
                        return {
                            product: product.drug_product,
                            manufacturer: [selectedManufacturer],
                            manufacturerIds: manufacturerIds.filter(id =>
                                product.dp_manufacturers.some(m => m.id === id)
                            )
                        };
                    });

                    setData({
                        ...data,
                        drug_product: [...data.drug_product, ...newProducts]
                    });

                    setDpOptions(dpOptions.filter(
                        product => !selectedItems.includes(product.id)
                    ));
                }
            }
        }

        resetSelection();
    };

    const resetSelection = () => {
        if (selectionMode === 'substance') {
            if (activeTab === 'substance') {
                setSelectedDrugSubstance(null);
                setSelectedDsManufacturer([]);
            } else {
                setSelectedDrugProduct(null);
                setSelectedDpManufacturer([]);
            }
        } else {
            setSelectedManufacturer(null);
            setItemsForManufacturer([]);
            setSelectedItems([]);
        }
    };

    const handleSelectChange = (e, field) => {
        setData({ ...data, [field]: e });
    };

    const handleCancel = () => {
        resetSelection();
    };

    const handleDeleteItem = (index, itemData, type) => {
        if (type === 'substance') {
            const newDrugSubstances = [...data.drug_substance];
            newDrugSubstances.splice(index, 1);
            setData({ ...data, drug_substance: newDrugSubstances });

            const substanceToRestore = metadata.drug_substance.find(
                sub => sub.substance === itemData.substance
            );
            if (substanceToRestore) {
                setDsOptions(prev => [...prev, substanceToRestore]);
            }
        } else {
            const newDrugProducts = [...data.drug_product];
            newDrugProducts.splice(index, 1);
            setData({ ...data, drug_product: newDrugProducts });

            const productToRestore = metadata.drug_product.find(
                prod => prod.product === itemData.product
            );
            if (productToRestore) {
                setDpOptions(prev => [...prev, productToRestore]);
            }
        }
    };

    const handleTabSelect = (tab) => {
        setActiveTab(tab);
        resetSelection();

        // Update manufacturer options based on the active tab
        if (tab === 'substance' && metadata?.drug_substance) {
            const uniqueManufacturerNames = [...new Set(
                metadata.drug_substance.flatMap(
                    substance => substance.ds_manufacturers.map(m => m.substance_manufacturer)
                )
            )];
            setManufacturerOptions(uniqueManufacturerNames);
        } else if (tab === 'product' && metadata?.drug_product) {
            const uniqueManufacturerNames = [...newSet(
                metadata.drug_product.flatMap(
                    product => product.dp_manufacturers.map(m => m.product_manufacturer)
                )
            )];
            setManufacturerOptions(uniqueManufacturerNames);
        }
    };

    return (
        <div className="flex-column" data-kt-stepper-element="content">
            <div className='row mb-10'>
                <div className='col-md-4 col-sm-12'>
                    <label className="form-label">Indication</label>
                    <Select
                        options={(metadata?.indications || []).map((val) => ({ label: val.indication, value: val.indication }))}
                        name='indication'
                        onChange={(e) => handleSelectChange(e, 'indication')}
                        className="react-select-container"
                        classNamePrefix="react-select"
                        placeholder=''
                        isClearable
                        value={typeof data.indication === 'object' && data.indication !== null
                            ? data.indication : { label: data.indication, value: data.indication }}
                        menuPortalTarget={document.body}
                        styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }}
                    />
                </div>
                <div className='col-md-4 col-sm-12'>
                    <label className="form-label">Dosage form</label>
                    <Select
                        options={(metadata?.dosage_form || []).map((val) => ({ label: val.form, value: val.form }))}
                        name='dosage_form'
                        onChange={(e) => handleSelectChange(e, 'dosage_form')}
                        className="react-select-container"
                        classNamePrefix="react-select"
                        placeholder=''
                        isClearable
                        value={typeof data.dosage_form === 'object' && data.dosage_form !== null
                            ? data.dosage_form : { label: data.dosage_form, value: data.dosage_form }}
                        menuPortalTarget={document.body}
                        styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }}
                    />
                </div>
                <div className='col-md-4 col-sm-12'>
                    <label className="form-label">Excipient</label>
                    <Select
                        options={(metadata?.excipients || []).map((val) => ({ label: val.excipient, value: val.excipient }))}
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
            <div>
                <Tabs
                    className="nav-line-tabs nav-stretch fs-5 fw-bold mb-5"
                    defaultActiveKey="substance"
                    id="drug-tabs"
                    activeKey={activeTab}
                    onSelect={handleTabSelect}
                >
                    <Tab eventKey="substance" title={<span className="d-flex align-items-center">Drug Substance</span>}>
                        <div>
                            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                <button
                                    type="button"
                                    className="btn btn-sm btn-primary"
                                    data-bs-toggle='modal'
                                    data-bs-target='#kt_modal_drug_item'
                                    onClick={() => {
                                        setSelectionMode('substance');
                                        setActiveTab('substance');
                                    }}
                                >
                                    Add By Substance
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-sm btn-primary ms-2"
                                    data-bs-toggle='modal'
                                    data-bs-target='#kt_modal_drug_item'
                                    onClick={() => {
                                        setSelectionMode('manufacturer');
                                        setActiveTab('substance');
                                    }}
                                >
                                    Add By Manufacturer
                                </button>
                            </div>
                            <table className="table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4">
                                <thead className='fw-bold'>
                                    <tr>
                                        <th className='text-center'>Drug Substance</th>
                                        <th className='text-center'>Drug Substance Manufacturer</th>
                                        <th className='text-center'>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.drug_substance?.map((val, index) => (
                                        <tr key={index}>
                                            <td className='text-center'>
                                                {val.substance}
                                            </td>
                                            <td className='text-center'>
                                                {val.manufacturer.map((manufacturer, mIndex) => (
                                                    <div key={mIndex}>
                                                        {manufacturer}
                                                    </div>
                                                ))}
                                            </td>
                                            <td className='text-center'>
                                                <button
                                                    className="btn btn-sm btn-danger"
                                                    onClick={() => handleDeleteItem(index, val, 'substance')}
                                                >
                                                    <KTIcon iconName="trash-square" className="fs-2" />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </Tab>
                    <Tab eventKey="product" title={<span className="d-flex align-items-center">Drug Product</span>}>
                        <div>
                            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                <button
                                    type="button"
                                    className="btn btn-sm btn-primary"
                                    data-bs-toggle='modal'
                                    data-bs-target='#kt_modal_drug_item'
                                    onClick={() => {
                                        setSelectionMode('substance');
                                        setActiveTab('product');
                                    }}
                                >
                                    Add By Product
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-sm btn-primary ms-2"
                                    data-bs-toggle='modal'
                                    data-bs-target='#kt_modal_drug_item'
                                    onClick={() => {
                                        setSelectionMode('manufacturer');
                                        setActiveTab('product');
                                    }}
                                >
                                    Add By Manufacturer
                                </button>
                            </div>
                            <table className="table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4">
                                <thead className='fw-bold'>
                                    <tr>
                                        <th className='text-center'>Drug Product</th>
                                        <th className='text-center'>Drug Product Manufacturer</th>
                                        <th className='text-center'>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.drug_product?.map((val, index) => (

                                        <tr key={index}>
                                            <td className='text-center'>
                                                {val.product}
                                            </td>
                                            <td className='text-center'>
                                                {val.manufacturer.map((manufacturer, mIndex) => (
                                                    <div key={mIndex}>
                                                        {manufacturer}
                                                    </div>
                                                ))}
                                            </td>
                                            <td className='text-center'>
                                                <button
                                                    className="btn btn-sm btn-danger"
                                                    onClick={() => handleDeleteItem(index, val, 'product')}
                                                >
                                                    <KTIcon iconName="trash-square" className="fs-2" />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </Tab>
                </Tabs>
            </div>

            <div className='modal fade' id='kt_modal_drug_item' aria-hidden='true'>
                <div className='modal-dialog modal-m'>
                    <div className='modal-content rounded'>
                        <div className='modal-header justify-content-end border-0 pb-0'>
                            <div className='btn btn-sm btn-icon btn-active-color-primary' data-bs-dismiss='modal'>
                                {/* Close icon */}
                            </div>
                        </div>
                        <div className='modal-body pt-0 pb-15 px-5 px-xl-20'>
                            {selectionMode === 'substance' ? (
                                <>
                                    <Select
                                        options={(activeTab === 'substance' ? dsOptions : dpOptions).map((val) => ({
                                            label: activeTab === 'substance' ? val.substance : val.drug_product,
                                            value: val.id
                                        }))}
                                        onChange={handleItemChange}
                                        className="react-select-container"
                                        classNamePrefix="react-select"
                                        placeholder={`Search for ${activeTab === 'substance' ? 'drug substance' : 'drug product'}`}
                                        value={
                                            (activeTab === 'substance' ? selectedDrugSubstance : selectedDrugProduct) ? {
                                                label: activeTab === 'substance'
                                                    ? selectedDrugSubstance.substance
                                                    : selectedDrugProduct.drug_product,
                                                value: activeTab === 'substance'
                                                    ? selectedDrugSubstance.id
                                                    : selectedDrugProduct.id
                                            } : null
                                        }
                                        menuPortalTarget={document.body}
                                        styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }}
                                    />
                                    <Select
                                        options={[
                                            {
                                                label: `Select All Manufacturers`,
                                                value: "select-all",
                                                isDisabled: (activeTab === 'substance'
                                                    ? dsManufacturerOptions
                                                    : dpManufacturerOptions).length === 0
                                            },
                                            ...(activeTab === 'substance'
                                                ? dsManufacturerOptions
                                                : dpManufacturerOptions).map(mfg => ({
                                                    label: activeTab === 'substance'
                                                        ? mfg.substance_manufacturer
                                                        : mfg.product_manufacturer,
                                                    value: mfg.id
                                                }))
                                        ]}
                                        isMulti
                                        onChange={(selectedOptions, action) => {
                                            if (action.option?.value === "select-all") {
                                                const allManufacturerIds = (activeTab === 'substance'
                                                    ? dsManufacturerOptions
                                                    : dpManufacturerOptions).map(mfg => mfg.id);
                                                if (activeTab === 'substance') {
                                                    setSelectedDsManufacturer(allManufacturerIds);
                                                } else {
                                                    setSelectedDpManufacturer(allManufacturerIds);
                                                }
                                            } else {
                                                const selectedIds = selectedOptions
                                                    ? selectedOptions
                                                        .filter(opt => opt.value !== "select-all")
                                                        .map(opt => opt.value)
                                                    : [];
                                                if (activeTab === 'substance') {
                                                    setSelectedDsManufacturer(selectedIds);
                                                } else {
                                                    setSelectedDpManufacturer(selectedIds);
                                                }
                                            }
                                        }}
                                        value={
                                            (activeTab === 'substance'
                                                ? dsManufacturerOptions
                                                : dpManufacturerOptions)
                                                .filter(mfg => (activeTab === 'substance'
                                                    ? selectedDsManufacturer
                                                    : selectedDpManufacturer).includes(mfg.id))
                                                .map(mfg => ({
                                                    label: activeTab === 'substance'
                                                        ? mfg.substance_manufacturer
                                                        : mfg.product_manufacturer,
                                                    value: mfg.id
                                                }))
                                        }
                                        isDisabled={activeTab === 'substance' ? !selectedDrugSubstance : !selectedDrugProduct}
                                        placeholder="Select manufacturers"
                                        className="react-select-container mt-3"
                                        classNamePrefix="react-select"
                                    />
                                </>
                            ) : (
                                <>
                                    <Select
                                        options={(manufacturerOptions || []).map(name => ({
                                            label: name,
                                            value: name
                                        }))}
                                        onChange={handleManufacturerChange}
                                        className="react-select-container"
                                        classNamePrefix="react-select"
                                        placeholder={`Search for ${activeTab === 'substance' ? 'substance' : 'product'} manufacturer`}
                                        value={selectedManufacturer ? {
                                            label: selectedManufacturer,
                                            value: selectedManufacturer
                                        } : null}
                                        menuPortalTarget={document.body}
                                        styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }}
                                    />
                                    <Select
                                        options={[
                                            {
                                                label: `Select All ${activeTab === 'substance' ? 'Substances' : 'Products'}`,
                                                value: "select-all",
                                                isDisabled: itemsForManufacturer.length === 0
                                            },
                                            ...(itemsForManufacturer || []).map((val) => ({
                                                label: activeTab === 'substance' ? val.substance : val.drug_product,
                                                value: val.id
                                            }))
                                        ]}
                                        isMulti
                                        onChange={handleItemsChange}
                                        className="react-select-container mt-3"
                                        classNamePrefix="react-select"
                                        placeholder={`Select ${activeTab === 'substance' ? 'substances' : 'products'}`}
                                        isDisabled={!selectedManufacturer}
                                        value={
                                            (itemsForManufacturer || [])
                                                .filter(item => selectedItems.includes(item.id))
                                                .map(item => ({
                                                    label: activeTab === 'substance' ? item.substance : item.drug_product,
                                                    value: item.id
                                                }))
                                        }
                                        menuPortalTarget={document.body}
                                        styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }}
                                    />
                                </>
                            )}

                            <div className='d-flex flex-center flex-row-fluid pt-12'>
                                <button
                                    type='reset'
                                    className='btn btn-light me-3'
                                    data-bs-dismiss='modal'
                                    onClick={handleCancel}
                                >
                                    Cancel
                                </button>

                                <button
                                    type="button"
                                    className='btn btn-primary'
                                    data-bs-dismiss='modal'
                                    onClick={handleConfirm}
                                    disabled={
                                        selectionMode === 'substance'
                                            ? (activeTab === 'substance'
                                                ? !selectedDrugSubstance || selectedDsManufacturer.length === 0
                                                : !selectedDrugProduct || selectedDpManufacturer.length === 0)
                                            : !selectedManufacturer || selectedItems.length === 0
                                    }
                                >
                                    Save
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductMetaData;