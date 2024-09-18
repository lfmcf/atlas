import ProductMetaData from "./ProductMetaData"
import Select from "react-select"

const MrpProductMetaData = ({ metadata, data, setData }) => {

    const handleSelectChange = (e, name, i) => {
        let arr = { ...data }
        arr.pt[i][name] = e
        setData(arr)
    }

    const handleDrugSubstanceChange = (i, index, e) => {
        let arr = { ...data }
        arr.pt[i].drug_substance[index] = e
        setData(arr)
    }

    const handleDrugProductChange = (i, index, e) => {
        let arr = { ...data }
        arr.pt[i].drug_product[index] = e
        setData(arr)
    }

    const handleManufacturerChange = (i, index, e) => {
        let arr = { ...data }
        arr.pt[i].drug_substance[index].manufacturer = e
        setData(arr)
    }

    const handleProductManufacturerChange = (i, index, e) => {
        let arr = { ...data }
        arr.pt[i].drug_product[index].manufacturer = e
        setData(arr)
    }

    const addDrugSubstanceFields = (i) => {
        let arr = { ...data }
        arr.pt[i].drug_substance.push({ 'drug_substance': '', 'manufacturer': '' })
        setData(arr)
    }

    const removeDrugSubstanceFields = (i, index) => {
        let arr = { ...data }
        arr.pt[i].drug_substance.splice(index, 1)
        setData(arr)
    }

    const addDrugProductFields = (i) => {
        let arr = { ...data }
        arr.pt[i].drug_product.push({ 'drug_product': '', 'manufacturer': '' })
        setData(arr)
    }

    console.log(data.pt)

    const removeDrugProductFields = (i, index) => {
        let arr = { ...data }
        arr.pt[i].drug_product.splice(index, 1)
        setData(arr)
    }

    return (
        <div className="d-flex flex-column flex-md-row rounded border p-10">
            <ul className="nav nav-tabs nav-line-tabs border-0 flex-row flex-md-column me-5 mb-3 mb-md-0 fs-6">
                <div className='position-relative d-inline-block' style={{ flex: '1 1 auto', whiteSpace: 'nowrap', overflowX: 'hidden', overflowY: 'auto', height: 'calc(100vh - 240px)' }}>
                    <div className='d-flex flex-column'>
                        {metadata.map((mt, i) => (
                            <li className="nav-item w-md-150px me-0 pe-5" key={i} >
                                <a
                                    className={"nav-link mx-0 my-2" + (i === 0 ? ' active' : '')}
                                    data-bs-toggle="tab"
                                    href={"#tab_pane_" + i}

                                >
                                    {mt.country}
                                </a>
                            </li>
                        ))}
                    </div>
                </div>
            </ul>
            <div className='tab-content w-100'>
                {metadata.map((mt, i) => (
                    <div className={'tab-pane fade' + (i === 0 ? ' active show' : '')} id={"tab_pane_" + i} key={i}>
                        <div className='row mb-10'>
                            <div className='col-md-4 col-sm-12'>
                                <label className="form-label">Indication</label>
                                <Select
                                    options={(mt?.indications || []).map((val) => ({ label: val.indication, value: val.indication }))}
                                    name='indication'
                                    onChange={(e) => handleSelectChange(e, 'indication', i)}
                                    className="react-select-container"
                                    classNamePrefix="react-select"
                                    placeholder=''
                                    isClearable
                                    value={data.pt[i]?.indication}
                                    // value={typeof data.pt[i].indication === 'object' && data.pt[i].indication !== null
                                    //     ? data.pt[i].indication : { label: data.pt[i].indication, value: data.pt[i].indication }}
                                    menuPortalTarget={document.body}
                                    styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }}
                                />
                            </div>

                            <div className='col-md-4 col-sm-12'>
                                <label className="form-label">Dosage form</label>
                                <Select
                                    options={(mt?.dosage_form || []).map((val) => ({ label: val.form, value: val.form }))}
                                    name='dosage_form'
                                    onChange={(e) => handleSelectChange(e, 'dosage_form', i)}
                                    className="react-select-container"
                                    classNamePrefix="react-select"
                                    placeholder=''
                                    isClearable
                                    value={data.pt[i]?.dosage_form}
                                    menuPortalTarget={document.body}
                                    styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }}
                                />
                            </div>
                            <div className='col-md-4 col-sm-12'>
                                <label className="form-label">Excipient</label>
                                <Select
                                    options={(mt?.excipients || []).map((val) => ({ label: val.excipient, value: val.excipient }))}
                                    name='excipient'
                                    onChange={(e) => handleSelectChange(e, 'excipient', i)}
                                    className="react-select-container"
                                    classNamePrefix="react-select"
                                    placeholder=''
                                    isClearable
                                    isMulti
                                    value={data.pt[i]?.excipient}
                                    menuPortalTarget={document.body}
                                    styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }}
                                />
                            </div>
                        </div>
                        <fieldset>
                            <legend>Drug substances</legend>
                            {data.pt[i]?.drug_substance.map((element, index) => (
                                <div key={index}>
                                    {index === 0 ? (
                                        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                            <button type="button" onClick={() => addDrugSubstanceFields(i)}>Add</button>
                                        </div>
                                    ) : (
                                        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                            <button type="button" onClick={() => removeDrugSubstanceFields(i, index)}>Remove</button>
                                        </div>
                                    )}
                                    <div className='row'>
                                        <div className='col-md-4 col-sm-12'>
                                            <label className="form-label">Drug substance</label>
                                            <Select
                                                options={metadata[i]?.drug_substance.map(val => ({ label: val.substance, value: val.substance })) || []}
                                                name="drug_substance"
                                                onChange={(e) => handleDrugSubstanceChange(i, index, e)}
                                                className="react-select-container"
                                                classNamePrefix="react-select"
                                                placeholder=''
                                                isClearable
                                                //value={drugSubstanceOptions.find(option => option.value == data.drug_substance[index]?.drug_substance) || []}
                                                menuPortalTarget={document.body}
                                                styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }}
                                            />
                                        </div>
                                        <div className='col-md-8 col-sm-12'>
                                            <label className="form-label">Drug substance manufacturer</label>
                                            <Select
                                                options={metadata[i].drug_substance[index]?.ds_manufacturers?.map(val => ({ label: val.substance_manufacturer, value: val.substance_manufacturer })) || []}
                                                name="manufacturer"
                                                onChange={(e) => handleManufacturerChange(i, index, e)}
                                                className="react-select-container"
                                                classNamePrefix="react-select"
                                                placeholder=''
                                                isClearable
                                                isMulti
                                                //value={data.drug_substance[index]?.manufacturer || []}
                                                menuPortalTarget={document.body}
                                                styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </fieldset>
                        <fieldset>
                            <legend>Drug products</legend>
                            {data.pt[i]?.drug_product.map((element, index) => (
                                <div key={index}>
                                    {index === 0 ? (
                                        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                            <button type="button" onClick={() => addDrugProductFields(i)}>Add</button>
                                        </div>
                                    ) : (
                                        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                            <button type="button" onClick={() => removeDrugProductFields(i, index)}>Remove</button>
                                        </div>
                                    )}
                                    <div className='row'>
                                        <div className='col-md-4 col-sm-12'>
                                            <label className="form-label">Drug product</label>
                                            <Select
                                                options={metadata[i]?.drug_product.map(val => ({ label: val.product, value: val.product })) || []}
                                                name="drug_product"
                                                onChange={(e) => handleDrugProductChange(i, index, e)}
                                                className="react-select-container"
                                                classNamePrefix="react-select"
                                                placeholder=''
                                                isClearable
                                                //value={drugSubstanceOptions.find(option => option.value == data.drug_substance[index]?.drug_substance) || []}
                                                menuPortalTarget={document.body}
                                                styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }}
                                            />
                                        </div>
                                        <div className='col-md-8 col-sm-12'>
                                            <label className="form-label">Drug product manufacturer</label>
                                            <Select
                                                options={metadata[i].drug_product[index]?.dp_manufacturers?.map(val => ({ label: val.product_manufacturer, value: val.product_manufacturer })) || []}
                                                name="manufacturer"
                                                onChange={(e) => handleProductManufacturerChange(i, index, e)}
                                                className="react-select-container"
                                                classNamePrefix="react-select"
                                                placeholder=''
                                                isClearable
                                                isMulti
                                                //value={data.drug_substance[index]?.manufacturer || []}
                                                menuPortalTarget={document.body}
                                                styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </fieldset>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MrpProductMetaData