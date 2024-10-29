import React from 'react';
import Select from 'react-select';

const GeneralInformation = ({ data, myErrors, handleChange, handleSelectChange, selectStyles }) => {

    return (
        <div className="flex-column current" data-kt-stepper-element="content">
            <div className="row mb-10">
                <div className='col-md-4 col-sm-12'>
                    <label className="form-label">Dossier contact</label>
                    <input type="text" className="form-control form-control-solid" defaultValue={data.dossier_contact} name="dossier_contact" readOnly onChange={handleChange} />
                </div>
                <div className='col-md-4 col-sm-12'>
                    <label className="form-label" title='Enter a Dossier Title. Ex : ORALAIR_EU_Seq 0137'>Object</label>
                    <input type="text" className="form-control form-control-solid" name="object" defaultValue={data.object} onChange={handleChange} />
                </div>
                <div className='col-md-4 col-sm-12'>
                    <label className="form-label" title='The product selected in the previous form'>Product</label>
                    <input type="text" className="form-control form-control-solid" name="productName" defaultValue={data.productName} onChange={handleChange} />
                </div>
            </div>
            <div className="row mb-10">
                <div className='col-md-4 col-sm-12'>
                    <label className="form-label" title='The country selected in the previous form'>Submission country</label>
                    <input type="text" className="form-control form-control-solid" name="country" defaultValue={data.country ? data.country.value : ''} disabled />
                </div>
                <div className='col-md-4 col-sm-12'>
                    <label className="form-label" title='Choose the Dossier type' style={{ color: myErrors.dossier_type ? 'red' : '' }}>Dossier type (*)</label>
                    <Select options={[
                        { label: 'Baseline Dossier (M1-M2-M3)', value: 'Baseline Dossier (M1-M2-M3)', delai: 5 },
                        { label: 'Baseline Dossier (M1-M5)', value: 'Baseline Dossier (M1-M5)', delai: 9 },
                        { label: 'Marketing Authorisation Dossier / BLA (m1-m5)', value: 'Marketing Authorisation Dossier / BLA (m1-m5)', delai: 9 },
                        { label: 'Variation Dossier', value: 'Variation Dossier', delai: 3 },
                        { label: 'Responses to questions Dossier', value: 'Responses to questions Dossier', delai: 3 },
                        { label: 'PSUR/ PSUSA Dossier', value: 'PSUR/ PSUSA Dossier', delai: 3 },
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
                    <input type="text" className="form-control form-control-solid" name="dossier_count" defaultValue={data.dossier_count} style={{ borderColor: myErrors.dossier_count ? 'red' : '' }} onChange={handleChange} />
                </div>
            </div>
            <div className="row mb-10">
                <div className='col-12'>

                    <label className="form-label">Remarks</label>
                    <textarea className="form-control form-control-solid" rows={3} defaultValue={data.remarks} name="remarks" onChange={handleChange} />
                </div>

            </div>
        </div>
    )
}

export default GeneralInformation