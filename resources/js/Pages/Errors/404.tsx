

const notFound = () => {
    return (
        <div className="d-flex flex-column flex-root">
            <div className="d-flex flex-column flex-center flex-column-fluid">
                <div className="d-flex flex-column flex-center text-center p-10">
                    <div className="card card-flush w-lg-650px py-5">
                        <div className="card-body py-15 py-lg-20">
                            <h1 className="fw-bolder fs-2hx text-gray-900 mb-4">Oops!</h1>
                            <div className="fw-semibold fs-6 text-gray-500 mb-7">We can't find that page.</div>
                            <div className="mb-3">
                                <img src="assets/media/auth/404-error.png" className="mw-100 mh-300px theme-light-show" />
                                <img src="assets/media/auth/404-error-dark.png" className="mw-100 mh-300px theme-dark-show" />
                            </div>
                            <div className="mb-0">
                                <a href="" className="btn btn-sm btn-primary">Return Home</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default notFound;