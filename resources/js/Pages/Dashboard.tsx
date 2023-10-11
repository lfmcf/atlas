/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC, useEffect } from 'react'
import { useIntl } from 'react-intl'
import { toAbsoluteUrl } from '../../js/_metronic/helpers'
import { PageTitle } from '../../js/_metronic/layout/core'
import {
    ListsWidget2,
    ListsWidget3,
    ListsWidget4,
    ListsWidget6,
    TablesWidget5,
    TablesWidget10,
    MixedWidget8,
    CardsWidget7,
    CardsWidget17,
    CardsWidget20,
    ListsWidget26,
    EngageWidget10,
    ChartsWidget6,
    ChartsWidget8,
    ChartsWidget7,
    ChartsWidget5,
    ChartsWidget4,
    ChartsWidget3,
    ChartsWidget2,
    ChartsWidget1,
    StatisticsWidget1,
    StatisticsWidget2,
    StatisticsWidget3,
    StatisticsWidget4,
    StatisticsWidget5,
    StatisticsWidget6,
} from '../../js/_metronic/partials/widgets'
import Authenticated from '../Layouts/AuthenticatedLayout'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import DateRangePicker from 'react-bootstrap-daterangepicker';
import 'bootstrap-daterangepicker/daterangepicker.css';
import Chart from "react-apexcharts";
import { getCSSVariableValue } from '../_metronic/assets/ts/_utils'
import { router } from '@inertiajs/react'



const MySwal = withReactContent(Swal)

const DashboardPage = ({ RequetNumber, totalRequet, PublishingCount, formattingCount, acceptance, correction, update, perMonthFor, perMonthPub }) => {


    const handleCallback = (start, end, label) => {
        console.log(start, end, label);
    }

    var options = {
        chart: {
            id: "basic-bar"
        },
        xaxis: {
            categories: ['Jun', 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
        }
    }
    const series = [
        {
            name: "series-1",
            data: [30, 40, 45, 50, 49, 60, 70, 91]
        }
    ]


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
                                    <span className="opacity-75"> to comlete</span>
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

                        <div className="card-body mt-n20">
                            <div className="mt-n20 position-relative">
                                <div className="row g-3 g-lg-6">
                                    {RequetNumber.map((requet, i) => (
                                        <div className="col-6" key={i}>
                                            <div className="bg-gray-100 bg-opacity-70 rounded-2 px-6 py-5">
                                                <div className="symbol symbol-30px me-5 mb-8">
                                                    <span className="symbol-label">
                                                        <i className="ki-duotone ki-flask fs-1 text-primary">
                                                            <span className="path1"></span>
                                                            <span className="path2"></span>
                                                        </i>
                                                    </span>
                                                </div>
                                                <div className="m-0">

                                                    <span className="text-gray-700 fw-bolder d-block fs-2qx lh-1 ls-n1 mb-1">{requet.total}</span>

                                                    <span className="text-gray-500 fw-semibold fs-6">{requet.status}</span>

                                                </div>
                                            </div>
                                        </div>
                                    )

                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-6 col-xl-6 col-xxl-3 mb-md-5 mb-xl-10">
                    <CardsWidget17 className='mb-5 mb-xl-10' PublishingCount={PublishingCount} formattingCount={formattingCount} />
                </div>
                <div className='col-md-5'>
                    <ListsWidget6 className='' acceptance={acceptance} correction={correction} update={update} />
                </div>
            </div>
            <div className='row'>
                <div className='col-xl-8 mb-5 mb-xl-10'>
                    <div className='card card-flush h-xxl-100'>
                        <div className="card-header pt-7">

                            <h3 className="card-title align-items-start flex-column">
                                <span className="card-label fw-bold text-gray-800">Requests per month</span>
                                <span className="text-gray-400 mt-1 fw-semibold fs-6">18</span>
                            </h3>

                            <div className="card-toolbar">


                                <DateRangePicker onCallback={handleCallback}>
                                    <button className="btn btn-sm btn-light d-flex align-items-center px-4" >
                                        <div className="text-gray-600 fw-bold">1 Sep 2023 - 30 Sep 2023</div>

                                        <i className="ki-duotone ki-calendar-8 fs-1 ms-2 me-0">
                                            <span className="path1"></span>
                                            <span className="path2"></span>
                                            <span className="path3"></span>
                                            <span className="path4"></span>
                                            <span className="path5"></span>
                                            <span className="path6"></span>
                                        </i>
                                    </button>
                                </DateRangePicker>

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
                            </ul>
                            <div className='tab-content ps-4 pe-6'>
                                <div className='tab-pane fade active show' id="kt_charts_widget_10_tab_content_1">
                                    <Chart
                                        options={{
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
                                        }}

                                        series={[{ name: 'Formatting', data: perMonthFor }]}
                                        type="bar"
                                        height={270}
                                    />
                                </div>
                                <div className='tab-pane fade' id="kt_charts_widget_10_tab_content_2">
                                    <Chart
                                        options={{
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
                                        }}

                                        series={[{ name: 'Publishing', data: perMonthPub }]}
                                        type="bar"
                                        height={270}
                                    />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const Dashboard: FC = (props: any) => {
    const intl = useIntl()
    const RequetNumber = props.RequestNumber
    const formattingsCount = props.formattingCount
    const PublishingCount = props.publishingCount
    const acceptance = props.acceptance
    const correction = props.correction
    const update = props.update
    const perMonthFor = props.perMonthFor
    const perMonthPub = props.perMonthPub
    const totalRequet = Object.values(RequetNumber).reduce((a, b) => a + b['total'], 0)

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
        <Authenticated auth={props.auth}>
            <PageTitle breadcrumbs={[]}>
                {intl.formatMessage({ id: 'MENU.DASHBOARD' })}
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
            />

        </Authenticated>

    )
}

export default Dashboard;