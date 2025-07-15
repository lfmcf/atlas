const ShowPM = ({ folder }) => {

    return (
        <div className='tab-pane fade' id='kt_aside_tab_3' role='tabpanel'>
            <div className="row mb-7">
                <label className="col-lg-4 fw-semibold text-muted">Indication</label>
                <div className="col-lg-8">
                    <span className="fw-bold fs-6 text-gray-800">{folder.indication ? folder.indication.value : ''}</span>
                </div>
            </div>
            <div className="row mb-7">
                <label className="col-lg-4 fw-semibold text-muted">Drug substance</label>
                <div className="col-lg-8">
                    <span className="fw-bold fs-6 text-gray-800">{folder.drug_substance ? folder.drug_substance.map((sub) => (
                        <>
                            <li>{sub.substance}</li>
                            <ul>
                                {sub.manufacturer?.map((man) => (
                                    <li>{man}</li>
                                ))}
                            </ul>
                        </>
                    )) : ''}

                    </span>

                </div>
            </div>
            <div className="row mb-7">
                <label className="col-lg-4 fw-semibold text-muted">Drug product</label>
                <div className="col-lg-8">
                    <span className="fw-bold fs-6 text-gray-800">{folder.drug_product ? folder.drug_product.map((product) => (
                        <>
                            <li>{product.product}</li>
                            <ul>
                                {product.manufacturer?.map((man) => (
                                    <li>{man}</li>
                                ))}
                            </ul>
                        </>
                    )) : ''}</span>

                </div>
            </div>
            <div className="row mb-7">
                <label className="col-lg-4 fw-semibold text-muted">Dosage form</label>
                <div className="col-lg-8">
                    <span className="fw-bold fs-6 text-gray-800">{folder.dosage_form ? folder.dosage_form.value : ''}</span>
                </div>
            </div>
            <div className="row mb-7">
                <label className="col-lg-4 fw-semibold text-muted">Excipient</label>
                <div className="col-lg-8">
                    <span className="fw-bold fs-6 text-gray-800">{folder.excipient ? folder.excipient.map((ex) => (
                        <li>{ex.value}</li>
                    )) : ''}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default ShowPM