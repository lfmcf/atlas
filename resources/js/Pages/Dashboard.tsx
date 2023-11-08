/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC, useEffect, useRef, useState } from 'react'
import { useIntl } from 'react-intl'
import { toAbsoluteUrl } from '../../js/_metronic/helpers'
import { PageTitle } from '../../js/_metronic/layout/core'
import { ListsWidget6 } from '../../js/_metronic/partials/widgets'
import Authenticated from '../Layouts/AuthenticatedLayout'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
//import DateRangePicker from 'react-bootstrap-daterangepicker';
import 'bootstrap-daterangepicker/daterangepicker.css';
import Chart from "react-apexcharts";
import { getCSSVariableValue } from '../_metronic/assets/ts/_utils'
import { router } from '@inertiajs/react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import DatePicker from 'react-datepicker';
import moment from 'moment'
import "react-datepicker/dist/react-datepicker.css";
import $ from 'jquery';
import "datatables.net-dt/js/dataTables.dataTables";
import clsx from 'clsx'
import countries from 'i18n-iso-countries'
import enLocale from 'i18n-iso-countries/langs/en.json';
import ReactCountryFlag from 'react-country-flag';
import axios from 'axios'

countries.registerLocale(enLocale)

ChartJS.register(ArcElement, Tooltip, Legend);
const MySwal = withReactContent(Swal)

const choptions = {
    chart: {
        fontFamily: 'inherit'
    },
    cutoutPercentage: 75,
    responsive: true,
    maintainAspectRatio: false,
    cutout: '75%',
    title: {
        display: false
    },
    animation: {
        animateScale: true,
        animateRotate: true
    },
    tooltips: {
        enabled: true,
        intersect: false,
        mode: 'nearest',
        bodySpacing: 5,
        yPadding: 10,
        xPadding: 10,
        caretPadding: 0,
        displayColors: false,
        backgroundColor: '#20D489',
        titleFontColor: '#ffffff',
        cornerRadius: 4,
        footerSpacing: 0,
        titleSpacing: 0
    },
    plugins: {
        legend: {
            display: false
        }
    }
}

const options = {
    chart: {
        id: "basic-bar",
        fontFamily: 'inherit',
        type: 'bar',
        toolbar: {
            show: false
        }
    },
    xaxis: {
        categories: ['Jun', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false
        },
        labels: {
            style: {
                colors: getCSSVariableValue('--bs-gray-500'),
                fontSize: '13px'
            }
        },
        crosshairs: {
            fill: {
                gradient: {
                    opacityFrom: 0,
                    opacityTo: 0
                }
            }
        }
    },
    yaxis: {
        labels: {
            style: {
                colors: getCSSVariableValue('--bs-gray-500'),
                fontSize: '13px'
            },
            formatter: function (val) {
                return parseInt(val) + 2
            }
        }
    },
    fill: {
        opacity: 1
    },
    tooltip: {
        style: {
            fontSize: '12px'
        },
        // y: {
        //     formatter: function (val) {
        //         return + val + "K"
        //     }
        // }
    },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: '22%',
            borderRadius: 5,
            dataLabels: {
                position: "top" // top, center, bottom
            },
        },

    },
    legend: { show: false },
    dataLabels: {
        enabled: true,
        offsetY: -30,
        style: {
            fontSize: '13px',
            colors: [getCSSVariableValue('--bs-gray-900')]
        },
        formatter: function (val) {

            if (val == 0) {
                return ''
            } else {
                return val
            }
        }
    },
    stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
    },
    colors: [getCSSVariableValue('--bs-primary'), getCSSVariableValue('--bs-primary-light')],
    grid: {
        borderColor: getCSSVariableValue('--bs-border-dashed-color'),
        strokeDashArray: 4,
        yaxis: {
            lines: {
                show: true
            }
        }
    }
}

const doptions = {
    series: [20, 100, 15, 25],
    chart: {
        fontFamily: 'inherit',
        type: 'donut',
        width: 250,
    },
    plotOptions: {
        pie: {
            donut: {
                size: '50%',
                labels: {
                    value: {
                        fontSize: '10px'
                    }
                }
            }
        }
    },
    colors: [
        getCSSVariableValue('--bs-info'),
        getCSSVariableValue('--bs-success'),
        getCSSVariableValue('--bs-primary'),
        getCSSVariableValue('--bs-danger')
    ],
    stroke: {
        width: 0
    },
    labels: ['Approved', 'Change', 'Correction'],
    legend: {
        show: false,
    },
    fill: {
        type: 'false',
    }
};

const coptions = {
    chart: {
        type: 'area',
        height: 350,
        toolbar: {
            show: false
        }
    },
    legend: {
        show: false
    },
    dataLabels: {
        enabled: false
    },
    fill: {
        type: 'solid',
        opacity: 1
    },
    stroke: {
        curve: 'smooth',
        show: true,
        width: 3,
        colors: [getCSSVariableValue('--bs-primary'), getCSSVariableValue('--bs-success')]
    },
    xaxis: {
        categories: ['Jun', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false
        },
        labels: {
            style: {
                colors: getCSSVariableValue('--bs-gray-500'),
                fontSize: '12px'
            }
        },
        crosshairs: {
            position: 'front',
            stroke: {
                color: getCSSVariableValue('--bs-primary'),
                width: 1,
                dashArray: 3
            }
        },
        tooltip: {
            enabled: true,
            formatter: undefined,
            offsetY: 0,
            style: {
                fontSize: '12px'
            }
        }
    },
    yaxis: {
        labels: {
            style: {
                colors: getCSSVariableValue('--bs-gray-500'),
                fontSize: '12px',
            }
        }
    },
    states: {
        normal: {
            filter: {
                type: 'none',
                value: 0
            }
        },
        hover: {
            filter: {
                type: 'none',
                value: 0
            }
        },
        active: {
            allowMultipleDataPointsSelection: false,
            filter: {
                type: 'none',
                value: 0
            }
        }
    },
    tooltip: {
        style: {
            fontSize: '12px',
        },
        y: {
            formatter: function (val) {
                return val + " dossiers"
            }
        }
    },
    colors: [getCSSVariableValue('--bs-primary-light'), getCSSVariableValue('--bs-success-light')],
    grid: {
        borderColor: getCSSVariableValue('--bs-gray-200'),
        strokeDashArray: 4,
        yaxis: {
            lines: {
                show: true
            }
        }
    },
    markers: {
        //size: 5,
        colors: [getCSSVariableValue('--bs-primary-light'), getCSSVariableValue('--bs-success-light')],
        strokeColor: [getCSSVariableValue('--bs-primary'), getCSSVariableValue('--bs-success')],
        strokeWidth: 3
    }
}

const DashboardPage = ({ RequetNumber, totalRequet, PublishingCount, formattingCount, acceptance, correction, update, perMonthFor, perMonthPub, totalclosed, productCountry }) => {

    const [startDate, setStartDate] = useState(new Date());
    const [dateStart, setDateStart] = useState(new Date());
    const [currentPage, setCurrentPage] = useState(1);
    const [pageNumbers, setpageNumbers] = useState([]);
    const [nombrePages, setnombrePages] = useState(0);
    const [tb, setTb] = useState();
    //const year = moment(startDate).format('yyyy');

    const productTableRef = useRef()

    const data = {
        labels: ['Formatting', 'Publishing', 'Submission'],
        datasets: [
            {
                data: [formattingCount, PublishingCount, 0],
                backgroundColor: ['#00A3FF', '#50CD89', '#E4E6EF']
            },
        ],
    }



    useEffect(() => {
        const table = $(productTableRef.current).DataTable({
            "info": false,
            'order': [],
            'pageLength': 5,
        })

        setnombrePages(table.page.info().pages);

        setTb(table)

        return function () {
            table.destroy()
        }

    }, [])

    useEffect(() => {
        let myarr = Array.from({ length: nombrePages }, (v, i) => i + 1)
        setpageNumbers(myarr)
    }, [nombrePages])


    const handleStartDateChange = (date) => {
        setStartDate(date)
        axios.get('getFormByYear', { params: { year: date } }).then(res => {
            console.log(res)
        })
    }

    const pagination = (number) => {

        setCurrentPage(number)
        tb.page(number - 1).draw('page')
    }

    const handleprevious = () => {
        let number = tb.page.info().page
        setCurrentPage(number)
        tb.page(number - 1).draw('page')
    }

    const handlenext = () => {
        let number = tb.page.info().page + 1
        setCurrentPage(number + 1)
        tb.page(number).draw('page')
    }

    return (
        <>
            <div className="row g-5 g-xl-10">
                <div className="col-xl-4 mb-xl-10">
                    <div className="card card-flush h-xl-100">

                        <div className="card-header rounded bgi-no-repeat bgi-size-cover bgi-position-y-top bgi-position-x-center align-items-start h-250px" style={{ backgroundImage: "url('storage/media/svg/shapes/top-green.png')" }} data-bs-theme="light">

                            <h3 className="card-title align-items-start flex-column text-white pt-15">
                                <span className="fw-bold fs-2x mb-3">My Tasks</span>
                                <div className="fs-4 text-white">
                                    <span className="opacity-75">You have </span>
                                    <span className="position-relative d-inline-block">
                                        <a href="#" className="link-white opacity-75-hover fw-bold d-block mb-1" onClick={() => { router.get('tasks') }}>{totalRequet}</a>

                                        <span className="position-absolute opacity-50 bottom-0 start-0 border-2 border-body border-bottom w-100"></span>

                                    </span>
                                    <span className="opacity-75"> to complete</span>
                                </div>
                            </h3>

                            {/* <div className="card-toolbar pt-5">

                            <button className="btn btn-sm btn-icon btn-active-color-primary btn-color-white bg-white bg-opacity-25 bg-hover-opacity-100 bg-hover-white bg-active-opacity-25 w-20px h-20px" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end" data-kt-menu-overflow="true">
                                <i className="ki-duotone ki-dots-square fs-4">
                                    <span className="path1"></span>
                                    <span className="path2"></span>
                                    <span className="path3"></span>
                                    <span className="path4"></span>
                                </i>
                            </button>

                            <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px" data-kt-menu="true">

                                <div className="menu-item px-3">
                                    <div className="menu-content fs-6 text-dark fw-bold px-3 py-4">Quick Actions</div>
                                </div>

                                <div className="separator mb-3 opacity-75"></div>

                                <div className="menu-item px-3">
                                    <a href="#" className="menu-link px-3">New Ticket</a>
                                </div>

                                <div className="menu-item px-3">
                                    <a href="#" className="menu-link px-3">New Customer</a>
                                </div>

                                <div className="menu-item px-3" data-kt-menu-trigger="hover" data-kt-menu-placement="right-start">

                                    <a href="#" className="menu-link px-3">
                                        <span className="menu-title">New Group</span>
                                        <span className="menu-arrow"></span>
                                    </a>

                                    <div className="menu-sub menu-sub-dropdown w-175px py-4">

                                        <div className="menu-item px-3">
                                            <a href="#" className="menu-link px-3">Admin Group</a>
                                        </div>

                                        <div className="menu-item px-3">
                                            <a href="#" className="menu-link px-3">Staff Group</a>
                                        </div>

                                        <div className="menu-item px-3">
                                            <a href="#" className="menu-link px-3">Member Group</a>
                                        </div>

                                    </div>

                                </div>

                                <div className="menu-item px-3">
                                    <a href="#" className="menu-link px-3">New Contact</a>
                                </div>

                                <div className="separator mt-3 opacity-75"></div>

                                <div className="menu-item px-3">
                                    <div className="menu-content px-3 py-3">
                                        <a className="btn btn-primary btn-sm px-4" href="#">Generate Reports</a>
                                    </div>
                                </div>

                            </div>

                        </div> */}

                        </div>

                        <div className="card-body mt-n5">
                            <div className="mt-n20 position-relative">
                                <div className="row g-3 g-lg-6">
                                    {RequetNumber.map((requet, i) => (
                                        <div className="col-12" key={i}>
                                            <div className="bg-gray-100 d-flex align-items-center bg-opacity-70 rounded-2 px-6 py-5">
                                                <span className="text-gray-700 fw-bolder d-block fs-2qx lh-1 ls-n1 me-3 ">{requet.total}</span>
                                                <span className="text-gray-500 fw-semibold fs-6">{requet.status}</span>
                                            </div>
                                        </div>
                                    )

                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="card card-flush h-lg-100">
                        <div className="card-header mt-6">
                            <div className="card-title flex-column">
                                <h3 className="fw-bold mb-1">Total Requests</h3>
                                {/* <div className="fs-6 fw-semibold text-gray-400">24 Overdue Tasks</div> */}
                            </div>
                            {/* <div className="card-toolbar">
                                <a href="#" className="btn btn-light btn-sm">View Tasks</a>
                            </div> */}
                        </div>
                        <div className="card-body p-9 pt-5">
                            <div className="d-flex flex-wrap">
                                <div className="position-relative d-flex flex-center h-175px w-175px me-15 mb-7">
                                    <div className="position-absolute translate-middle start-50 top-50 d-flex flex-column flex-center">
                                        <span className="fs-2qx fw-bold">{formattingCount + PublishingCount}</span>
                                        <span className="fs-6 fw-semibold text-gray-400">Total Req</span>
                                    </div>
                                    <Doughnut data={data} options={choptions} />
                                </div>
                                <div className="d-flex flex-column justify-content-center flex-row-fluid pe-11 mb-5">
                                    <div className="d-flex fs-6 fw-semibold align-items-center mb-3">
                                        <div className="bullet bg-primary me-3"></div>
                                        <div className="text-gray-400">Formatting</div>
                                        <div className="ms-auto fw-bold text-gray-700">{formattingCount}</div>
                                    </div>
                                    <div className="d-flex fs-6 fw-semibold align-items-center mb-3">
                                        <div className="bullet bg-success me-3"></div>
                                        <div className="text-gray-400">Publishing</div>
                                        <div className="ms-auto fw-bold text-gray-700">{PublishingCount}</div>
                                    </div>

                                    <div className="d-flex fs-6 fw-semibold align-items-center">
                                        <div className="bullet bg-gray-300 me-3"></div>
                                        <div className="text-gray-400">Submission</div>
                                        <div className="ms-auto fw-bold text-gray-700">0</div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="col-md-6 col-lg-6 col-xl-6 col-xxl-3 mb-md-5 mb-xl-10">
                    <CardsWidget17 className='mb-5 mb-xl-10' PublishingCount={PublishingCount} formattingCount={formattingCount} />
                </div> */}
                <div className="col-lg-6">
                    <div className="card h-xl-100">
                        <div className='card-header mb-5'>
                            <h3 className='card-title align-items-center flex-column'>
                                <span className='card-label fw-bold text-gray-800'>Some subject</span>
                            </h3>
                        </div>
                        <div className="card-body pb-3">
                            <div className="d-flex flex-wrap flex-md-nowrap">
                                <div className="me-md-5 w-100">
                                    <div className="d-flex border border-gray-300 border-dashed rounded p-6 mb-6">
                                        <div className="d-flex align-items-center flex-grow-1 me-2 me-sm-5">
                                            <div className="symbol symbol-50px me-4">
                                                <span className="symbol-label">
                                                    <i className="ki-duotone ki-timer fs-2qx text-primary">
                                                        <span className="path1"></span>
                                                        <span className="path2"></span>
                                                        <span className="path3"></span>
                                                    </i>
                                                </span>
                                            </div>
                                            <div className="me-2">
                                                <a href="#" className="text-gray-800 text-hover-primary fs-6 fw-bold">Approved</a>
                                                {/* <span className="text-gray-400 fw-bold d-block fs-7">Great, you always attending class. keep it up</span> */}
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <span className="text-dark fw-bolder fs-2x">{acceptance}</span>
                                            <span className="fw-semibold fs-2 text-gray-600 mx-1 pt-1">/</span>
                                            <span className="text-gray-600 fw-semibold fs-2 me-3 pt-2">{totalclosed}</span>
                                            <span className="badge badge-lg badge-light-success align-self-center px-2">95%</span>
                                        </div>
                                    </div>
                                    <div className="d-flex border border-gray-300 border-dashed rounded p-6 mb-6">
                                        <div className="d-flex align-items-center flex-grow-1 me-2 me-sm-5">
                                            <div className="symbol symbol-50px me-4">
                                                <span className="symbol-label">
                                                    <i className="ki-duotone ki-element-11 fs-2qx text-primary">
                                                        <span className="path1"></span>
                                                        <span className="path2"></span>
                                                        <span className="path3"></span>
                                                        <span className="path4"></span>
                                                    </i>
                                                </span>
                                            </div>
                                            <div className="me-2">
                                                <a href="#" className="text-gray-800 text-hover-primary fs-6 fw-bold">Change</a>
                                                {/* <span className="text-gray-400 fw-bold d-block fs-7">Don’t forget to turn in your task</span> */}
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <span className="text-dark fw-bolder fs-2x">{update}</span>
                                            <span className="fw-semibold fs-2 text-gray-600 mx-1 pt-1">/</span>
                                            <span className="text-gray-600 fw-semibold fs-2 me-3 pt-2">{totalclosed}</span>
                                            <span className="badge badge-lg badge-light-success align-self-center px-2">92%</span>
                                        </div>
                                    </div>
                                    <div className="d-flex border border-gray-300 border-dashed rounded p-6 mb-6">
                                        <div className="d-flex align-items-center flex-grow-1 me-2 me-sm-5">
                                            <div className="symbol symbol-50px me-4">
                                                <span className="symbol-label">
                                                    <i className="ki-duotone ki-abstract-24 fs-2qx text-primary">
                                                        <span className="path1"></span>
                                                        <span className="path2"></span>
                                                    </i>
                                                </span>
                                            </div>
                                            <div className="me-2">
                                                <a href="#" className="text-gray-800 text-hover-primary fs-6 fw-bold">Correction</a>
                                                {/* <span className="text-gray-400 fw-bold d-block fs-7">You take 12 subjects at this semester</span> */}
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <span className="text-dark fw-bolder fs-2x">{correction}</span>
                                            <span className="fw-semibold fs-2 text-gray-600 mx-1 pt-1">/</span>
                                            <span className="text-gray-600 fw-semibold fs-2 me-3 pt-2">{totalclosed}</span>
                                            <span className="badge badge-lg badge-light-warning align-self-center px-2">80%</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between flex-column w-225px w-md-600px mx-auto mx-md-0 pt-3 pb-10">
                                    {/* <div className="fs-4 fw-bold text-gray-900 text-center mb-5">
                                        Session Attendance
                                        <br />for Current Academic Year
                                    </div> */}
                                    <Chart options={doptions} series={[acceptance, update, correction]} type='donut' />
                                    <div className="mx-auto">

                                        <div className="d-flex align-items-center mb-2">

                                            <div className="bullet bullet-dot w-8px h-7px bg-success me-2"></div>

                                            <div className="fs-8 fw-semibold text-muted">Change</div>

                                        </div>

                                        <div className="d-flex align-items-center mb-2">

                                            <div className="bullet bullet-dot w-8px h-7px bg-primary me-2"></div>

                                            <div className="fs-8 fw-semibold text-muted">Correction</div>

                                        </div>

                                        <div className="d-flex align-items-center mb-2">

                                            <div className="bullet bullet-dot w-8px h-7px bg-info me-2"></div>

                                            <div className="fs-8 fw-semibold text-muted">Approved</div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className='card card-flush h-lg-100'>
                        <div className='card-header pt-7 mb-5'>
                            <h3 className='card-title align-items-start flex-column'>
                                <span className='card-label fw-bold text-gray-800'>Product by country</span>
                                <span className='text-gray-400 mt-1 fw-semibold fs-6'>...</span>
                            </h3>
                        </div>
                        <div className='card-body pt-0'>
                            <div className='table-responsive'>
                                <table className='table table-row-dashed table-row-gray-200 align-middle gs-0 gy-4' ref={productTableRef}>
                                    <thead >
                                        <tr>
                                            <th >Country</th>
                                            <th >Produit</th>
                                            <th >Formatting</th>
                                            <th >Publishing</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {productCountry.map((val, i) => (
                                            <tr key={i}>
                                                <td>
                                                    <div className='d-flex align-items-center'>
                                                        <div className='symbol symbol-45px me-2'>
                                                            {/* <img src='assets/media/flags/united-states.svg' /> */}
                                                            <ReactCountryFlag
                                                                countryCode={countries.getAlpha2Code(val.cnt, "en")}
                                                                svg
                                                                style={{
                                                                    width: '2em',
                                                                    height: '2em',
                                                                }}
                                                            />
                                                        </div>
                                                        <div className='d-flex justify-content-start flex-column'>
                                                            <span className='text-dark fw-bold text-hover-primary fs-6'>{val.cnt}</span>
                                                            <span className='text-muted fw-semibold text-muted d-block fs-7'>{countries.getAlpha2Code(val.cnt, "en")}</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span className='text-gray-700 fw-bold fs-6 me-3 d-block'>
                                                        {val.pr}
                                                    </span>
                                                </td>
                                                <td>
                                                    <span className='text-gray-500 fw-bold fs-6 me-3 d-block'>{val.formatting}</span>
                                                </td>
                                                <td>
                                                    <span className='text-gray-500 fw-bold fs-6 me-3 d-block'>{val.publishing}</span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                <div className="row paginate_row">
                                    {/* <div className="col-sm-12 col-md-5 d-flex align-items-center justify-content-center justify-content-md-start">
                                        <div className="dataTables_length" id="kt_profile_overview_table_length">
                                            <label>
                                                <select name="kt_profile_overview_table_length" aria-controls="kt_profile_overview_table" className="form-select form-select-sm form-select-solid" onChange={handlePageLengthChange}>
                                                    <option value="5">5</option>
                                                    <option value="10" selected>10</option>
                                                    <option value="15">15</option>
                                                    <option value="50">50</option>
                                                    <option value="100">100</option>
                                                </select>
                                            </label>
                                        </div>
                                    </div> */}
                                    <div className="col-12 col-md-12 d-flex align-items-center justify-content-end justify-content-md-end">
                                        <div className="dataTables_paginate paging_simple_numbers" id="kt_profile_overview_table_paginate">
                                            <ul className="pagination">
                                                <li className={clsx("paginate_button page-item previous", currentPage === 1 ? 'disabled' : '')} id="kt_profile_overview_table_previous">
                                                    <a href="#" aria-controls="kt_profile_overview_table" className="page-link" onClick={handleprevious}>
                                                        <i className="previous"></i></a>
                                                </li>
                                                {/* <li className="paginate_button page-item active"><a href="#" aria-controls="kt_profile_overview_table" data-dt-idx="1" tabIndex="0" className="page-link">1</a>
										</li><li className="paginate_button page-item "><a href="#" aria-controls="kt_profile_overview_table" data-dt-idx="2" tabIndex="0" className="page-link">2</a></li>
										<li className="paginate_button page-item "><a href="#" aria-controls="kt_profile_overview_table" data-dt-idx="3" tabIndex="0" className="page-link">3</a></li> */}
                                                {
                                                    pageNumbers.map(number => (

                                                        <li key={number} className={currentPage === number ? 'page-item active' : 'paginate_button page-item'}>
                                                            <button onClick={() => pagination(number)} className="page-link"> {number} </button>
                                                        </li>
                                                    ))
                                                }
                                                <li className={clsx('paginate_button page-item next', currentPage === nombrePages ? 'disabled' : '')} id="kt_profile_overview_table_next">
                                                    <a href="#" aria-controls="kt_profile_overview_table" className="page-link" onClick={handlenext}>
                                                        <i className="next"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-lg-6 col-md-6 mb-5 mb-xl-10'>
                    <div className='card card-flush h-xxl-100 h-lg-100'>
                        <div className="card-header pt-7">

                            <h3 className="card-title align-items-start flex-column">
                                <span className="card-label fw-bold text-gray-800">Requests per month</span>
                                <span className="text-gray-400 mt-1 fw-semibold fs-6">18</span>
                            </h3>

                            <div className="card-toolbar">
                                <DatePicker
                                    dateFormat="yyyy"
                                    showYearPicker selected={dateStart}
                                    onChange={(date) => setDateStart(date)}
                                    className="form-select form-select-solid form-select-sm fw-bold w-100px"
                                    yearItemNumber={6}
                                />
                            </div>
                        </div>
                        <div className='card-body d-flex flex-column justify-content-between pb-5 px-0'>
                            <ul className='nav nav-pills nav-pills-custom mb-3 mx-9' role='tablist'>
                                <li className='nav-item mb-3 me-3 me-lg-6'>
                                    <a className='nav-link btn btn-outline btn-flex btn-active-color-primary flex-column overflow-hidden w-80px h-85px pt-5 pb-2 active'
                                        data-bs-toggle="tab"
                                        href='#kt_charts_widget_10_tab_content_1'>
                                        <div className='nav-icon mb-3'>
                                            <i className='ki-duotone ki-ship fs-1 p-0'>
                                                <span className='path1'></span>
                                                <span className='path2'></span>
                                                <span className='path3'></span>
                                            </i>
                                            <span className='nav-text text-gray-800 fw-bold fs-6 lh-1'>Formatting</span>
                                            <span className='bullet-custom position-absolute bottom-0 w-100 h-4px bg-primary'></span>
                                        </div>
                                    </a>
                                </li>
                                <li className='nav-item mb-3 me-3 me-lg-6'>
                                    <a className='nav-link btn btn-outline btn-flex btn-active-color-primary flex-column overflow-hidden w-80px h-85px pt-5 pb-2'
                                        data-bs-toggle="tab"
                                        href='#kt_charts_widget_10_tab_content_2'>
                                        <div className="nav-icon mb-3">
                                            <i className='ki-duotone ki-ship fs-1 p-0'>
                                                <span className='path1'></span>
                                                <span className='path2'></span>
                                                <span className='path3'></span>
                                            </i>
                                            <span className='nav-text text-gray-800 fw-bold fs-6 lh-1'>Publishing</span>
                                            <span className='bullet-custom position-absolute bottom-0 w-100 h-4px bg-primary'></span>
                                        </div>
                                    </a>
                                </li>
                                {/* <li className='nav-item mb-3 me-3 me-lg-6'>
                                    <a className='nav-link btn btn-outline btn-flex btn-active-color-primary flex-column overflow-hidden w-80px h-85px pt-5 pb-2'
                                        data-bs-toggle="tab"
                                        href='#kt_charts_widget_10_tab_content_3'>
                                        <div className="nav-icon mb-3">
                                            <i className='ki-duotone ki-ship fs-1 p-0'>
                                                <span className='path1'></span>
                                                <span className='path2'></span>
                                                <span className='path3'></span>
                                            </i>
                                            <span className='nav-text text-gray-800 fw-bold fs-6 lh-1'>Both</span>
                                            <span className='bullet-custom position-absolute bottom-0 w-100 h-4px bg-primary'></span>
                                        </div>
                                    </a>
                                </li> */}
                            </ul>
                            <div className='tab-content ps-4 pe-6'>
                                <div className='tab-pane fade active show' id="kt_charts_widget_10_tab_content_1">
                                    <Chart
                                        options={options}
                                        series={[{ name: 'Formatting', data: perMonthFor }]}
                                        type="bar"
                                        height={270}
                                    />
                                </div>
                                <div className='tab-pane fade' id="kt_charts_widget_10_tab_content_2">
                                    <Chart
                                        options={options}
                                        series={[{ name: 'Publishing', data: perMonthPub }]}
                                        type="bar"
                                        height={270}
                                    />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 mb-5 mb-xl-10">
                    <div className="card card-flush h-lg-100">
                        <div className="card-header mt-6">
                            <div className="card-title flex-column">
                                <h3 className="fw-bold mb-1">Tasks Over Time</h3>
                                <div className="fs-6 d-flex text-gray-400 fs-6 fw-semibold">
                                    <div className="d-flex align-items-center me-6">
                                        <span className="menu-bullet d-flex align-items-center me-2">
                                            <span className="bullet bg-success"></span>
                                        </span>Formatting</div>
                                    <div className="d-flex align-items-center">
                                        <span className="menu-bullet d-flex align-items-center me-2">
                                            <span className="bullet bg-primary"></span>
                                        </span>Publishing</div>
                                </div>
                            </div>
                            <div className="card-toolbar">
                                {/* <select name="status" data-control="select2" data-hide-search="true" className="form-select form-select-solid form-select-sm fw-bold w-100px">
                                    <option value="1">2020</option>
                                    <option value="2">2021</option>
                                    <option value="3" >2022</option>
                                    <option value="4" selected>2023</option>
                                </select> */}
                                <DatePicker
                                    dateFormat="yyyy"
                                    showYearPicker selected={startDate}
                                    onChange={handleStartDateChange}
                                    className="form-select form-select-solid form-select-sm fw-bold w-100px"
                                    yearItemNumber={6}
                                />

                            </div>
                        </div>
                        <div className="card-body pt-10 pb-0 px-5">
                            <Chart options={coptions} series={[{ name: 'Formatting', data: perMonthFor },
                            { name: 'Publishing', data: perMonthPub }]}
                                type='area'
                            />
                        </div>
                    </div>
                </div>
                {/* <div className='col-md-5'>
                    <ListsWidget6 className='' acceptance={acceptance} correction={correction} update={update} />
                </div> */}
            </div>
            {/* <div className='row'> */}

            {/* </div> */}
        </>
    )
}

const Dashboard = (props: any) => {
    // const intl = useIntl()
    const RequetNumber = props.RequestNumber
    const formattingsCount = props.formattingCount
    const PublishingCount = props.publishingCount
    const acceptance = props.acceptance
    const correction = props.correction
    const update = props.update
    const perMonthFor = props.perMonthFor
    const perMonthPub = props.perMonthPub
    const totalRequet = Object.values(RequetNumber).reduce((a, b) => a + b['total'], 0)
    const totalclosed = props.totalclosed
    const productCountry = props.productCountry

    useEffect(() => {
        if (props.flash.message) {
            MySwal.fire({
                title: <p>Done !</p>,
                icon: 'success',
                text: props.flash.message,
            })
        }
    }, [])



    return (
        <>
            <PageTitle breadcrumbs={[]}>
                {/* {intl.formatMessage({ id: 'MENU.DASHBOARD' })} */}
            </PageTitle>
            <DashboardPage
                RequetNumber={RequetNumber}
                totalRequet={totalRequet}
                formattingCount={formattingsCount}
                PublishingCount={PublishingCount}
                acceptance={acceptance}
                correction={correction}
                update={update}
                perMonthFor={perMonthFor}
                perMonthPub={perMonthPub}
                totalclosed={totalclosed}
                productCountry={productCountry}
            />

        </>

    )
}

Dashboard.layout = page => <Authenticated children={page} auth={page.props.auth} />

export default Dashboard;