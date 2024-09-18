import react from 'react'

const InsertProductMetaData = ({
    handleChange,
    data,
    addDrugSubstanceFields,
    removeDrugSubstanceFields,
    addDrugProductFields,
    removeDrugProductFields,
    setData
}) => {

    const handleExcipientChange = (e) => {
        const excipients = e.target.value.split(';').map(item => item.trim());
        setData({
            ...data,
            excipient: excipients
        });
    };

    const handleDrugSubstanceInputChange = (index, e) => {
        const newDrugSubstances = [...data.drug_substance];
        newDrugSubstances[index][e.target.name] = e.target.value;
        setData({ ...data, drug_substance: newDrugSubstances });
    };

    const handleManufacturerInputChange = (index, e) => {
        const newDrugSubstances = [...data.drug_substance];
        newDrugSubstances[index].manufacturer = e.target.value.split(';').map(item => item.trim());
        setData({ ...data, drug_substance: newDrugSubstances });
    };

    const handleDrugProductInputChange = (index, e) => {
        const newDrugProducts = [...data.drug_product];
        newDrugProducts[index][e.target.name] = e.target.value;
        setData({ ...data, drug_product: newDrugProducts });
    };

    const handleDpManufacturerInputChange = (index, e) => {
        const newDrugProducts = [...data.drug_product];
        newDrugProducts[index].manufacturer = e.target.value.split(';').map(item => item.trim());
        setData({ ...data, drug_product: newDrugProducts });
    };

    return (
        <div className="flex-column" data-kt-stepper-element="content">
            <div className='row mb-10'>
                <div className='col-md-4 col-sm-12'>
                    <label className="form-label">Indication</label>
                    <input
                        type="text"
                        name="indication"
                        value={data.indication || ''}
                        onChange={handleChange}
                        className="form-control"
                    />
                </div>
                <div className='col-md-4 col-sm-12'>
                    <label className="form-label">Dosage form</label>
                    <input
                        type="text"
                        name="dosage_form"
                        value={data.dosage_form || ''}
                        onChange={handleChange}
                        className="form-control"
                    />
                </div>
                <div className='col-md-4 col-sm-12'>
                    <label className="form-label">Excipient</label>
                    <input
                        type="text"
                        name="excipient"
                        value={data.excipient.join('; ') || ''}
                        onChange={handleExcipientChange}
                        className="form-control"
                        placeholder="Enter excipients separated by ;"
                    />
                </div>
            </div>

            <fieldset>
                <legend>Drug substances</legend>
                {data.drug_substance.map((element, index) => (
                    <div key={index}>
                        {index === 0 ? (
                            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                <button type="button" onClick={() => addDrugSubstanceFields()}>Add</button>
                            </div>
                        ) : (
                            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                <button type="button" onClick={() => removeDrugSubstanceFields(index)}>Remove</button>
                            </div>
                        )}
                        <div className='row mb-10'>
                            <div className='col-md-4 col-sm-12'>
                                <label className="form-label">Drug substance</label>
                                <input
                                    type="text"
                                    name="drug_substance"
                                    value={element.drug_substance || ''}
                                    onChange={(e) => handleDrugSubstanceInputChange(index, e)}
                                    className="form-control"
                                />
                            </div>
                            <div className='col-md-8 col-sm-12'>
                                <label className="form-label">Drug substance manufacturer</label>
                                <input
                                    type="text"
                                    name="manufacturer"
                                    value={element.manufacturer.join('; ') || ''}
                                    onChange={(e) => handleManufacturerInputChange(index, e)}
                                    className="form-control"
                                    placeholder="Enter manufacturers, separated by ;"
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
                                <button type="button" onClick={() => addDrugProductFields()}>Add</button>
                            </div>
                        ) : (
                            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                <button type="button" onClick={() => removeDrugProductFields(index)}>Remove</button>
                            </div>
                        )}
                        <div className='row mb-10'>
                            <div className='col-md-4 col-sm-12'>
                                <label className="form-label">Drug product</label>
                                <input
                                    type="text"
                                    name="drug_product"
                                    value={element.drug_product || ''}
                                    onChange={(e) => handleDrugProductInputChange(index, e)}
                                    className="form-control"
                                />
                            </div>
                            <div className='col-md-8 col-sm-12'>
                                <label className="form-label">Drug product manufacturer</label>
                                <input
                                    type="text"
                                    name="manufacturer"
                                    value={element.manufacturer.join('; ') || ''}
                                    onChange={(e) => handleDpManufacturerInputChange(index, e)}
                                    className="form-control"
                                    placeholder="Enter manufacturers, separated by ;"
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </fieldset>
        </div>
    );
}

export default InsertProductMetaData