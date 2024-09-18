import React, { useState } from 'react';
import Select from 'react-select';

const ProductMetaData = ({
    metadata,
    data,
    handleSelectChange,
    manufacturerOptions,
    dpmanufacturerOptions,
    handleDrugSubstanceChange,
    handleDrugProductChange,
    handleDpManufacturerChange,
    handleManufacturerChange,
    addDrugSubstanceFields,
    addDrugProductFields,
    removeDrugProductFields,
    removeDrugSubstanceFields
}) => {

    // If metadata is empty, fall back to data.drug_substance to populate options
    const drugSubstanceOptions = metadata?.drug_substance?.length > 0
        ? metadata.drug_substance.map(val => ({ label: val.substance, value: val.substance }))
        : data?.drug_substance?.length > 0
            ? data.drug_substance.map(val => ({ label: val.drug_substance, value: val.drug_substance }))
            : [];

    const drugProductOptions = metadata?.drug_product?.length > 0
        ? metadata.drug_product.map(val => ({ label: val.drug_product, value: val.drug_product }))
        : data?.drug_product?.length > 0
            ? data.drug_product.map(val => ({ label: val.drug_product, value: val.drug_product }))
            : [];


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
            <fieldset>
                <legend>Drug substances</legend>
                {data.drug_substance.map((element, index) => (
                    <div key={index}>
                        {index === 0 ? (
                            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                <button
                                    type="button"
                                    onClick={() => addDrugSubstanceFields()}
                                    className='nav-link btn btn-flex flex-center btn-active-success btn-color-green-600 btn-active-color-white rounded-2 w-20px h-30px active'
                                >
                                    +
                                </button>
                            </div>
                        ) : (
                            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                <button
                                    type="button"
                                    onClick={() => removeDrugSubstanceFields(index)}
                                    className='nav-link btn btn-flex flex-center btn-active-danger btn-color-gray-600 btn-active-color-white rounded-2 w-20px h-30px active'
                                >
                                    X
                                </button>
                            </div>
                        )}
                        <div className='row mb-10'>
                            <div className='col-md-6 col-sm-12'>
                                <label className="form-label">Drug substance</label>
                                <Select
                                    options={drugSubstanceOptions}
                                    name="drug_substance"
                                    onChange={(e) => handleDrugSubstanceChange(index, e)}
                                    className="react-select-container"
                                    classNamePrefix="react-select"
                                    placeholder=''
                                    isClearable
                                    value={drugSubstanceOptions.find(option => option.value == data.drug_substance[index]?.drug_substance) || []}
                                    menuPortalTarget={document.body}
                                    styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }}
                                />
                            </div>
                            <div className='col-md-6 col-sm-12'>
                                <label className="form-label">Drug substance manufacturer</label>
                                <Select
                                    options={manufacturerOptions[data.drug_substance[index]?.drug_substance] || []}
                                    name="manufacturer"
                                    onChange={(e) => handleManufacturerChange(index, e)}
                                    className="react-select-container"
                                    classNamePrefix="react-select"
                                    placeholder=''
                                    isClearable
                                    isMulti
                                    value={data.drug_substance[index]?.manufacturer || []}
                                    menuPortalTarget={document.body}
                                    styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }}
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </fieldset>

            <fieldset>
                <legend>Drug Products</legend>
                {data.drug_product.map((element, index) => (
                    <div key={index}>
                        {index === 0 ? (
                            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                <button
                                    type="button"
                                    onClick={() => addDrugProductFields()}
                                    className='nav-link btn btn-flex flex-center btn-active-success btn-color-green-600 btn-active-color-white rounded-2 w-20px h-30px active'
                                >
                                    +
                                </button>
                            </div>
                        ) : (
                            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                <button
                                    type="button"
                                    onClick={() => removeDrugProductFields(index)}
                                    className='nav-link btn btn-flex flex-center btn-active-danger btn-color-gray-600 btn-active-color-white rounded-2 w-20px h-30px active'
                                >
                                    X
                                </button>
                            </div>
                        )}
                        <div className='row mb-10'>
                            <div className='col-md-6 col-sm-12'>
                                <label className="form-label">Drug product</label>
                                <Select
                                    options={drugProductOptions}
                                    name="drug_product"
                                    onChange={(e) => handleDrugProductChange(index, e)}
                                    className="react-select-container"
                                    classNamePrefix="react-select"
                                    placeholder=''
                                    isClearable
                                    value={drugProductOptions.find(option => option.value === data.drug_product[index]?.drug_product) || null}
                                    menuPortalTarget={document.body}
                                    styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }}
                                />
                            </div>
                            <div className='col-md-6 col-sm-12'>
                                <label className="form-label">Drug product manufacturer</label>
                                <Select
                                    options={dpmanufacturerOptions[data.drug_product[index]?.drug_product] || []}
                                    name="manufacturer"
                                    onChange={(e) => handleDpManufacturerChange(index, e)}
                                    className="react-select-container"
                                    classNamePrefix="react-select"
                                    placeholder=''
                                    isClearable
                                    isMulti
                                    value={data.drug_product[index]?.manufacturer || []}
                                    menuPortalTarget={document.body}
                                    styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }}
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </fieldset>

        </div>
    );
}

export default ProductMetaData;
