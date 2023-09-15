
import moment from 'moment';
import ReactCountryFlag from "react-country-flag"
import StatusComponent from './StatusComponent';

const ShowData = ({ data, postsPerPage, currentPage }) => {
    // const { postsPerPage, currentPage, } = this.state;
    const indexOfLastPage = currentPage * postsPerPage;
    const indexOfFirstPage = indexOfLastPage - postsPerPage;
    const currentPosts = Object.entries(data).slice(indexOfFirstPage, indexOfLastPage).map(entry => entry[1]);

    try {
        return currentPosts.map((item, index) => {
            return (
                <tbody>
                    {currentPosts ? Object.values(data).map((row, i) => (
                        <tr key={i}>
                            {/* <td>
                            <div className='form-check form-check-sm form-check-custom form-check-solid'>
                                <input className='form-check-input widget-9-check' type='checkbox' value='1' />
                            </div>
                        </td> */}
                            <td>
                                <span className='fs-7'>
                                    {typeof row.product_name === 'object' && row.product_name ?
                                        row.product_name.value : row.product_name}
                                </span>

                                {/* <a href='#' className='text-dark fw-bold text-hover-primary fs-6'></a> */}
                            </td>
                            <td>

                                {typeof row.country === 'object' && row.country ?
                                    <>
                                        <ReactCountryFlag
                                            countryCode={row.country.code}
                                            aria-label={row.country.value}
                                            title={row.country.value}
                                            svg
                                            style={{
                                                width: '1.5em',
                                                height: '1.5em',
                                            }}
                                        />
                                    </> : row.country}
                            </td>
                            <td>
                                <span className='fs-7'>
                                    {row.sequence}
                                </span>
                            </td>

                            <td>
                                <StatusComponent status={row.status} />
                            </td>
                            <td>
                                <span className='fs-7'>
                                    {row.dossier_type ? row.dossier_type.value : ''}
                                </span>
                            </td>
                            <td>
                                <span className='fs-7'>
                                    {row.request_date ? moment(row.request_date).format("DD-MMM-YYYY") : ''}
                                </span>
                            </td>
                            <td>
                                <span className='fs-7'>
                                    {row.updated_at ? moment(row.updated_at).format("DD-MMM-YYYY") : ''}
                                </span>
                            </td>

                            {/* <td>
                            <div className='d-flex justify-content-end flex-shrink-0'>
                                
                                <a
                                    href='#'
                                    className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                                >
                                    <KTIcon iconName='pencil' className='fs-3' />
                                </a>
                                <a
                                    href='#'
                                    className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm'
                                >
                                    <KTIcon iconName='trash' className='fs-3' />
                                </a>
                            </div>
                        </td> */}
                        </tr>
                    )) : ''}
                </tbody>
            )
        })
    } catch (e) {
        alert(e.message)
    }
}

export default ShowData;