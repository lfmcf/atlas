/* eslint-disable jsx-a11y/anchor-is-valid */
import { CSSProperties, FC, useEffect, useMemo, useRef, useState } from 'react'
import { useIntl } from 'react-intl'
import { toAbsoluteUrl } from '../../js/_metronic/helpers'
import { PageTitle, useLayout } from '../../js/_metronic/layout/core'
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
import axios from 'axios';
import Timeline from 'react-vis-timeline-3';
import PropagateLoader from "react-spinners/PropagateLoader";
import ContentLoader from 'react-content-loader'
import { Head } from '@inertiajs/react';

countries.registerLocale(enLocale)

ChartJS.register(ArcElement, Tooltip, Legend);
const MySwal = withReactContent(Swal)

const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
};

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
                return parseInt(val)
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
    colors: [getCSSVariableValue('--bs-success'), getCSSVariableValue('--bs-success-light')],
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

const options_pub = {
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
                return parseInt(val)
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
        colors: [getCSSVariableValue('--bs-success'), getCSSVariableValue('--bs-primary')]
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
                if (val) {
                    return parseInt(val) + " dossiers"
                } else {
                    return 0 + " dossiers"
                }

            }
        }
    },
    colors: [getCSSVariableValue('--bs-success'), getCSSVariableValue('--bs-primary')],
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
        strokeColor: [getCSSVariableValue('--bs-success'), getCSSVariableValue('--bs-primary')],
        strokeWidth: 3
    }
}

const DashboardPage = ({ RequetNumber, totalRequet, PublishingCount, formattingCount, acceptance, correction, update, totalclosed, productCountry, inprogress, currentUser }) => {

    const [startDate, setStartDate] = useState(new Date());
    const [monthReq, setMnthReq] = useState(new Date());
    const [cumulativeDate, setCumulativeDate] = useState(new Date());
    const [currentPage, setCurrentPage] = useState(1);
    const [pageNumbers, setpageNumbers] = useState([]);
    const [nombrePages, setnombrePages] = useState(0);
    const [requestPerType, setRequetPerType] = useState({ formattingRT: [], publishingRT: [], labelsf: '', labelsp: '' });
    const [requestPetMont, setRequestPerMonth] = useState({ formattingR: [], publishingR: [] })
    const [cumulativeReq, setCumulativeReq] = useState({ formattingCR: [], publishingCR: [] })
    const [loading, setLoading] = useState(false);
    const [timelineItems, setTimelineItems] = useState([])
    const [tb, setTb] = useState();

    const productTableRef = useRef()
    const firstRender = useRef(true);

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
        if (firstRender.current) {
            // firstRender.current = false;
        } else {
            setLoading(true)
        }

        callGetRequestPerType()
    }, [startDate])

    useEffect(() => {
        if (firstRender.current) {
            // firstRender.current = false;
        } else {
            setLoading(true)
        }
        // setLoading(true)
        callGetRequestsPerMonth()
    }, [monthReq])

    useEffect(() => {
        if (firstRender.current) {
            firstRender.current = false;
        } else {
            setLoading(true)
        }
        // setLoading(true)
        callGetRequestsPerMonth2()
    }, [cumulativeDate])

    const callGetRequestPerType = () => {
        const yearSelected = moment(startDate).year()
        axios.post('getRequestPerType', { selecedYear: yearSelected }).then(res => {
            setRequetPerType(prevState => ({
                formattingRT: res.data.formattingRT.data ? res.data.formattingRT.data : [],
                publishingRT: res.data.publishingRT.data ? res.data.publishingRT.data : [],
                labelsf: res.data.formattingRT.cat ? res.data.formattingRT.cat : '',
                labelsp: res.data.publishingRT.cat ? res.data.publishingRT.cat : ''
            }))
            setTimeout(() => {
                setLoading(false)
            }, 1000)

        });
    }

    const callGetRequestsPerMonth = () => {

        const yearSelected = moment(monthReq).year()
        axios.post('getRequestsPerMonth', { selecedYear: yearSelected }).then(res => {

            setRequestPerMonth(prevState => ({
                formattingR: res.data.formattingReq ? res.data.formattingReq : [],
                publishingR: res.data.publishingReq ? res.data.publishingReq : [],
            }))
            setTimeout(() => {
                setLoading(false)
            }, 1000)

        });
    }

    const callGetRequestsPerMonth2 = () => {
        const yearSelected = moment(cumulativeDate).year()
        axios.post('getRequestsPerMonth', { selecedYear: yearSelected }).then(res => {
            setCumulativeReq(prevState => ({
                formattingCR: res.data.formattingReq ? res.data.formattingReq : [],
                publishingCR: res.data.publishingReq ? res.data.publishingReq : [],
            }))
            setTimeout(() => {
                setLoading(false)
            }, 1000)

        });
    }


    useEffect(() => {

        const table = $(productTableRef.current).DataTable({
            "info": false,
            'order': [],
            'pageLength': 5,
        })
        setnombrePages(table.page.info().pages);
        setTb(table)
        const sitems = inprogress.map((item) => {

            return (
                {
                    id: item._id,
                    group: item.form == 'Formatting' ? 'Formatting' : 'Publishing',
                    start: new Date(item.created_at),
                    end: new Date(item.deadline),
                    content: item.dossier_type.value,
                    title: "Start : " + moment(item.created_at).format('DD-MM-yyyy') + " , End : " + moment(item.deadline).format('DD-MM-yyyy'),
                    color: item.form == 'Formatting' ? 'primary' : 'success',
                    type: 'point'
                }
            )

        });

        setTimelineItems(sitems)

        return function () {
            table.destroy()
        }

    }, [])

    useEffect(() => {
        var numbers = [];
        var buttons = 5;
        var half = Math.floor(buttons / 2);
        var _range = function (len, start) {
            var end;

            if (typeof start === "undefined") {
                start = 0;
                end = len;

            } else {
                end = start;
                start = len;
            }

            var out = [];
            for (var i = start; i < end; i++) { out.push(i); }

            return out;
        };
        if (nombrePages <= buttons) {
            numbers = _range(0, nombrePages);

        } else if (currentPage <= half) {
            numbers = _range(0, buttons);

        } else if (currentPage >= nombrePages - 1 - half) {
            numbers = _range(nombrePages - buttons, nombrePages);

        } else {
            numbers = _range(currentPage - half, currentPage + half + 1);
        }
        numbers = Array.from(numbers, (i) => i + 1)
        setpageNumbers(numbers)
    }, [nombrePages, currentPage])

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

    const dossier_type_options = {
        chart: {
            fontFamily: 'inherit',
            type: 'pie',
            width: '100%',
        },
        labels: requestPerType.labelsf,
        legend: {
            show: false
        },
        // colors: ['#3E97FF', '#F1416C', '#50CD89', '#FFC700', '#7239EA'],
    };

    const dossier_type_options_pub = {
        chart: {
            fontFamily: 'inherit',
            type: 'pie',
            width: '100%',
        },
        labels: requestPerType.labelsp,
        legend: {
            show: false
        },
        // colors: ['#3E97FF', '#F1416C', '#50CD89', '#FFC700', '#7239EA'],
    };


    const groups = [
        {
            id: "Formatting",
            content: "Formatting",
            order: 1,
            style: "color:#3e97ff"
        },
        {
            id: "Publishing",
            content: "Publishing",
            order: 2,
            style: "color:#50cd89"
        },
        // {
        //     id: "ui",
        //     content: "UI Design",
        //     order: 3
        // },
        // {
        //     id: "dev",
        //     content: "Development",
        //     order: 4
        // }
    ];




    const items = [
        {
            id: 1,
            group: 'research',
            start: new Date,
            end: moment(new Date).add(1.5, 'hours'),
            content: 'Meeting',
            progress: "60%",
            color: 'primary',
            users: [
                'avatars/300-6.jpg',
                'avatars/300-1.jpg'
            ]
        },
        {
            id: 2,
            group: 'qa',
            start: moment(new Date).add(1, 'hours'),
            end: moment(new Date).add(2, 'hours'),
            content: 'Testing',
            progress: "47%",
            color: 'success',
            users: [
                'avatars/300-2.jpg'
            ]
        },
        {
            id: 3,
            group: 'ui',
            start: moment(new Date).add(30, 'minutes'),
            end: moment(new Date).add(2.5, 'hours'),
            content: 'Landing page',
            progress: "55%",
            color: 'danger',
            users: [
                'avatars/300-5.jpg',
                'avatars/300-20.jpg'
            ]
        },
        {
            id: 4,
            group: 'dev',
            start: moment(new Date).add(1.5, 'hours'),
            end: moment(new Date).add(3, 'hours'),
            content: 'Products module',
            progress: "75%",
            color: 'info',
            users: [
                'avatars/300-23.jpg',
                'avatars/300-12.jpg',
                'avatars/300-9.jpg'
            ]
        },
    ]

    const timelineoptions = {
        // height: '500px',
        zoomable: false,
        moveable: true,
        selectable: false,
        // timeAxis: {
        //     scale: 'month',
        //     step: 1,
        // },
        margin: {
            item: {
                horizontal: 10,
                vertical: 35
            }
        },
        showCurrentTime: true,
        xss: {
            disabled: false,
            filterOptions: {
                whiteList: {
                    div: ['class', 'style'],
                    img: ['data-kt-timeline-avatar-src', 'alt'],
                    a: ['href', 'class']
                },
            },
        },
        template: function (item) {
            // const users = item.users;
            let userTemplate = '';
            // users.forEach(user => {
            //     userTemplate += `<div class="symbol symbol-circle symbol-25px"></div>`;
            // });
            return `<div class="rounded-pill bg-${item.color} d-flex align-items-center position-relative h-40px w-100 p-2 overflow-hidden">
                
    
                <div class="d-flex align-items-center position-relative z-index-2">
                   
    
                    <a class="fw-bold text-white">${item.content}</a>
                </div>
    
               
            </div>        
            `;
        },

        // Remove block ui on initial draw
        // onInitialDrawComplete: function () {
        //     handleAvatarPath();

        //     const target = element.closest('[data-kt-timeline-widget-4-blockui="true"]');
        //     const blockUI = KTBlockUI.getInstance(target);

        //     if (blockUI.isBlocked()) {
        //         setTimeout(() => {
        //             blockUI.release();
        //         }, 1000);      
        //     }
        // }
    };

    return (
        <>
            <Head title="Dashboard" />
            <div className="row g-5 g-xl-10 mb-5 mb-xl-1">
                <div className="col-4">
                    <div className="card card-flush h-xl-100 h-100">

                        <div className="card-header rounded bgi-no-repeat bgi-size-cover bgi-position-y-top bgi-position-x-center align-items-start h-250px" style={{ backgroundImage: "url('storage/media/svg/shapes/top-green.png')" }} data-bs-theme="light">

                            <h3 className="card-title align-items-start flex-column text-white pt-15">
                                <span className="fw-bold fs-2x mb-3">My Tasks</span>
                                <div className="fs-4 text-white">
                                    <span className="opacity-75">You have </span>
                                    <span className="position-relative d-inline-block">
                                        <a href="#" className="link-white opacity-75-hover text-warning fw-bold d-block mb-1" onClick={() => { router.get('tasks') }}>{totalRequet}</a>

                                        <span className="position-absolute opacity-50 bottom-0 start-0 border-2 border-body border-bottom w-100"></span>

                                    </span>
                                    <span className="opacity-75"> task to complete</span>
                                </div>
                            </h3>

                        </div>

                        <div className="card-body mt-n5">
                            <div className="mt-n20 position-relative">
                                <div className="row g-3 g-lg-6">
                                    <div className="col-12" >
                                        <div className="bg-gray-100 d-flex justify-content-between bg-opacity-70 rounded-2 px-6 py-5">
                                            <div className='d-flex align-items-center'>
                                                <span className="text-gray-700 fw-bolder d-block fs-2qx lh-1 ls-n1 me-3 ">{RequetNumber[0].total}</span>
                                                <span className="text-gray-500 fw-semibold fs-6">{RequetNumber[0].status}</span>
                                            </div>

                                            {RequetNumber[2] ?
                                                <>
                                                    <div className="vr text-gray-500"></div>
                                                    <div className='d-flex align-items-center'>
                                                        <span className="text-gray-700 fw-bolder d-block fs-2qx lh-1 ls-n1 me-3 ">{RequetNumber[2].total}</span>
                                                        <span className="text-gray-500 fw-semibold fs-6">{RequetNumber[2].status}</span>
                                                    </div>
                                                </>
                                                : ''}
                                        </div>
                                    </div>

                                    <div className="col-12" >

                                        <div className="bg-gray-100 d-flex justify-content-between bg-opacity-70 rounded-2 px-6 py-5">
                                            <div className='d-flex align-items-center'>
                                                <span className="text-gray-700 fw-bolder d-block fs-2qx lh-1 ls-n1 me-3 ">{RequetNumber[1].total}</span>
                                                <span className="text-gray-500 fw-semibold fs-6">{RequetNumber[1].status}</span>

                                            </div>

                                            {RequetNumber[3] ?
                                                <>
                                                    <div className="vr text-gray-500"></div>
                                                    <div className='d-flex align-items-center'>
                                                        <span className="text-gray-700 fw-bolder d-block fs-2qx lh-1 ls-n1 me-3 ">{RequetNumber[3].total}</span>
                                                        <span className="text-gray-500 fw-semibold fs-6">{RequetNumber[3].status}</span>
                                                    </div>
                                                </>
                                                : ''}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="card card-flush h-100">
                        <div className="card-header mt-6">
                            <div className="card-title flex-column">
                                <h3 className="fw-bold mb-1">Total requests</h3>
                            </div>
                        </div>
                        <div className="card-body p-9 pt-5">
                            <div className="d-flex flex-wrap justify-content-center">
                                <div className="position-relative d-flex flex-center h-175px w-175px mb-7">
                                    <div className="position-absolute translate-middle start-50 top-50 d-flex flex-column flex-center">
                                        <span className="fs-2qx fw-bold">{formattingCount + PublishingCount}</span>
                                        <span className="fs-6 fw-semibold text-gray-400">Total Req</span>
                                    </div>
                                    <Doughnut data={data} options={choptions} />
                                </div>
                                <div className="d-flex flex-column justify-content-center flex-row-fluid pe-11 mb-5 ms-4">
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
                <div className='col-5'>
                    <div className='card card-flush h-lg-100'>
                        <div className='card-header py-7 mb-3'>
                            <h3 className='card-title align-items-start flex-column'>
                                <span className='card-label fw-bold text-gray-800'>
                                    Request per type
                                </span>
                            </h3>
                            <div className="card-toolbar m-0">
                                <ul className='nav nav-pills nav-pills-custom' role='tablist'>
                                    <li className='nav-item mb-3 me-3 me-lg-6'>
                                        <a className='nav-link btn btn-outline btn-flex btn-active-color-primary flex-column overflow-hidden w-60px h-60px pt-5 pb-2 active'
                                            data-bs-toggle="tab"
                                            href='#kt_charts_widget_11_tab_content_1'>
                                            <div className='nav-icon mb-2'>
                                                <i className='ki-duotone ki-ship fs-4 p-0'>
                                                    <span className='path1'></span>
                                                    <span className='path2'></span>
                                                    <span className='path3'></span>
                                                </i>
                                                <span className='nav-text text-gray-800 fw-bold fs-9 lh-1'>Formatting</span>
                                                <span className='bullet-custom position-absolute bottom-0 w-100 h-2px bg-primary'></span>
                                            </div>
                                        </a>
                                    </li>
                                    <li className='nav-item mb-3 me-3 me-lg-6'>
                                        <a className='nav-link btn btn-outline btn-flex btn-active-color-primary flex-column overflow-hidden w-60px h-60px pt-5 pb-2'
                                            data-bs-toggle="tab"
                                            href='#kt_charts_widget_12_tab_content_2'>
                                            <div className="nav-icon mb-2">
                                                <i className='ki-duotone ki-ship fs-4 p-0'>
                                                    <span className='path1'></span>
                                                    <span className='path2'></span>
                                                    <span className='path3'></span>
                                                </i>
                                                <span className='nav-text text-gray-800 fw-bold fs-9 lh-1'>Publishing</span>
                                                <span className='bullet-custom position-absolute bottom-0 w-100 h-2px bg-primary'></span>
                                            </div>
                                        </a>
                                    </li>

                                </ul>
                                <DatePicker
                                    dateFormat="yyyy"
                                    showYearPicker selected={startDate}
                                    onChange={(date) => setStartDate(date)}
                                    className="form-select form-select-solid form-select-sm fw-bold w-100px"
                                    yearItemNumber={6}
                                />
                            </div>
                        </div>
                        <div className='card-body py-0 ps-6 mt-2'>
                            <div className='tab-content ps-4 pe-6'>
                                <div className='tab-pane fade active show' id="kt_charts_widget_11_tab_content_1">
                                    <Chart options={dossier_type_options}
                                        series={requestPerType.formattingRT}
                                        type='donut'
                                        height={300}
                                    />
                                </div>
                                <div className='tab-pane fade' id="kt_charts_widget_12_tab_content_2">
                                    <Chart options={dossier_type_options_pub}
                                        series={requestPerType.publishingRT}
                                        type='donut'
                                        height={300}
                                    />
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
                                {/* <span className="text-gray-400 mt-1 fw-semibold fs-6">18</span> */}
                            </h3>

                            <div className="card-toolbar">
                                <DatePicker
                                    dateFormat="yyyy"
                                    showYearPicker
                                    selected={monthReq}
                                    onChange={(date) => setMnthReq(date)}
                                    className="form-select form-select-solid form-select-sm fw-bold w-100px"
                                    yearItemNumber={6}
                                />
                            </div>
                        </div>
                        <div className='card-body d-flex flex-column justify-content-between pb-5 px-0'>
                            <ul className='nav nav-pills nav-pills-custom mb-3 mx-9' role='tablist'>
                                <li className='nav-item mb-3 me-3 me-lg-6'>
                                    <a className='nav-link btn btn-outline btn-flex btn-active-color-success flex-column overflow-hidden w-80px h-85px pt-5 pb-2 active'
                                        data-bs-toggle="tab"
                                        href='#kt_charts_widget_10_tab_content_1'>
                                        <div className='nav-icon mb-3'>
                                            <i className='ki-duotone ki-ship fs-1 p-0'>
                                                <span className='path1'></span>
                                                <span className='path2'></span>
                                                <span className='path3'></span>
                                            </i>
                                            <span className='nav-text text-gray-800 fw-bold fs-6 lh-1'>Formatting</span>
                                            <span className='bullet-custom position-absolute bottom-0 w-100 h-4px bg-success'></span>
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
                                        options={options}
                                        series={[{ name: 'Formatting', data: requestPetMont.formattingR }]}
                                        type="bar"
                                        height={270}
                                    />
                                </div>
                                <div className='tab-pane fade' id="kt_charts_widget_10_tab_content_2">
                                    <Chart
                                        options={options_pub}
                                        series={[{ name: 'Publishing', data: requestPetMont.publishingR }]}
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
                                <h3 className="fw-bold mb-1">Cumulative requests</h3>
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
                                    showYearPicker
                                    selected={cumulativeDate}
                                    onChange={setCumulativeDate}
                                    className="form-select form-select-solid form-select-sm fw-bold w-100px"
                                    yearItemNumber={6}
                                />

                            </div>
                        </div>
                        <div className="card-body pt-10 pb-0 px-5">
                            <Chart
                                options={coptions}
                                series={[
                                    { name: 'Formatting', data: cumulativeReq.formattingCR },
                                    { name: 'Publishing', data: cumulativeReq.publishingCR }
                                ]}
                                type='line'
                            />
                        </div>
                    </div>
                </div>

                <div className="col-lg-6">
                    <div className='card card-flush h-lg-100'>
                        <div className='card-header pt-7 mb-5'>
                            <h3 className='card-title align-items-start flex-column'>
                                <span className='card-label fw-bold text-gray-800'>Requests per Product-Country</span>
                                {/* <span className='text-gray-400 mt-1 fw-semibold fs-6'>...</span> */}
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
                                                            {/* <ReactCountryFlag
                                                                countryCode={countries.getAlpha2Code(val.cnt, "en")}
                                                                svg
                                                                style={{
                                                                    width: '2em',
                                                                    height: '2em',
                                                                }}
                                                            /> */}
                                                            {val.cnt == "KSA" ?
                                                                <ReactCountryFlag
                                                                    countryCode={countries.getAlpha2Code("Saudi arabia", "en")}
                                                                    svg
                                                                    style={{
                                                                        width: '2em',
                                                                        height: '2em',
                                                                    }}
                                                                /> :
                                                                val.cnt == "EU" ? <ReactCountryFlag countryCode="EU"
                                                                    aria-label="Europe"
                                                                    title="Europe"
                                                                    svg
                                                                    style={{
                                                                        width: '2em',
                                                                        height: '2em',
                                                                    }} />
                                                                    : <ReactCountryFlag
                                                                        countryCode={countries.getAlpha2Code(val.cnt, "en")}
                                                                        svg
                                                                        style={{
                                                                            width: '2em',
                                                                            height: '2em',
                                                                        }}
                                                                    />}
                                                        </div>
                                                        <div className='d-flex justify-content-start flex-column'>
                                                            <span className='text-dark fw-bold text-hover-primary fs-6'>{val.cnt == "EU" ? "Europe" : val.cnt}</span>
                                                            <span className='text-muted fw-semibold text-muted d-block fs-7'>
                                                                {val.cnt == "EU" ? "EU" : countries.getAlpha2Code(val.cnt, "en")}
                                                            </span>
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
                                    <div className="col-12 col-md-12 d-flex align-items-center justify-content-end justify-content-md-end">
                                        <div className="dataTables_paginate paging_simple_numbers" id="kt_profile_overview_table_paginate">
                                            <ul className="pagination">
                                                <li className={clsx("paginate_button page-item previous", currentPage === 1 ? 'disabled' : '')} id="kt_profile_overview_table_previous">
                                                    <button aria-controls="kt_profile_overview_table" className="page-link" onClick={handleprevious}>
                                                        <i className="previous"></i></button>
                                                </li>

                                                {
                                                    pageNumbers.map(number => (

                                                        <li key={number} className={currentPage === number ? 'page-item active' : 'paginate_button page-item'}>
                                                            <button onClick={() => pagination(number)} className="page-link"> {number} </button>
                                                        </li>
                                                    ))
                                                }
                                                <li className={clsx('paginate_button page-item next', currentPage === nombrePages ? 'disabled' : '')} id="kt_profile_overview_table_next">
                                                    <button aria-controls="kt_profile_overview_table" className="page-link" onClick={handlenext}>
                                                        <i className="next"></i>
                                                    </button>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="card card-flush h-lg-100">
                        <div className='card-header pt-7 mb-5'>
                            <h3 className='card-title align-items-center flex-column'>
                                <span className='card-label fw-bold text-gray-800'>Request review</span>
                            </h3>
                        </div>

                        <div className="card-body pt-0">
                            <div className="d-flex flex-wrap flex-md-nowrap">
                                <div className="me-md-5 w-100">
                                    <div className="d-flex border border-gray-300 border-dashed rounded p-6 mb-6">
                                        <div className="d-flex align-items-center flex-grow-1 me-2 me-sm-5">
                                            <div className="symbol symbol-50px me-4">
                                                <span className="symbol-label">
                                                    <i className="ki-duotone ki-shield-tick fs-2qx text-primary">
                                                        <span className="path1"></span>
                                                        <span className="path2"></span>
                                                    </i>
                                                </span>
                                            </div>
                                            <div className="me-2">
                                                <span className="text-gray-800 fs-6 fw-bold">Approved</span>
                                                {/* <span className="text-gray-400 fw-bold d-block fs-7">Great, you always attending class. keep it up</span> */}
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <span className="text-dark fw-bolder fs-2x">{acceptance}</span>
                                            <span className="fw-semibold fs-2 text-gray-600 mx-1 pt-1">/</span>
                                            <span className="text-gray-600 fw-semibold fs-2 me-3 pt-2">{totalclosed}</span>
                                            {/* <span className="badge badge-lg badge-light-success align-self-center px-2">95%</span> */}
                                        </div>
                                    </div>
                                    <div className="d-flex border border-gray-300 border-dashed rounded p-6 mb-6">
                                        <div className="d-flex align-items-center flex-grow-1 me-2 me-sm-5">
                                            <div className="symbol symbol-50px me-4">
                                                <span className="symbol-label">
                                                    <i className="ki-duotone ki-shield fs-2qx text-primary">
                                                        <span className="path1"></span>
                                                        <span className="path2"></span>

                                                    </i>
                                                </span>
                                            </div>
                                            <div className="me-2">
                                                <span className="text-gray-800 fs-6 fw-bold">Change</span>
                                                {/* <span className="text-gray-400 fw-bold d-block fs-7">Don’t forget to turn in your task</span> */}
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <span className="text-dark fw-bolder fs-2x">{update}</span>
                                            <span className="fw-semibold fs-2 text-gray-600 mx-1 pt-1">/</span>
                                            <span className="text-gray-600 fw-semibold fs-2 me-3 pt-2">{totalclosed}</span>
                                            {/* <span className="badge badge-lg badge-light-success align-self-center px-2">92%</span> */}
                                        </div>
                                    </div>
                                    <div className="d-flex border border-gray-300 border-dashed rounded p-6 mb-6">
                                        <div className="d-flex align-items-center flex-grow-1 me-2 me-sm-5">
                                            <div className="symbol symbol-50px me-4">
                                                <span className="symbol-label">
                                                    <i className="ki-duotone ki-shield-cross fs-2qx text-primary">
                                                        <span className="path1"></span>
                                                        <span className="path2"></span>
                                                        <span className="path3"></span>
                                                    </i>
                                                </span>
                                            </div>
                                            <div className="me-2">
                                                <span className="text-gray-800 fs-6 fw-bold">Correction</span>
                                                {/* <span className="text-gray-400 fw-bold d-block fs-7">You take 12 subjects at this semester</span> */}
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <span className="text-dark fw-bolder fs-2x">{correction}</span>
                                            <span className="fw-semibold fs-2 text-gray-600 mx-1 pt-1">/</span>
                                            <span className="text-gray-600 fw-semibold fs-2 me-3 pt-2">{totalclosed}</span>
                                            {/* <span className="badge badge-lg badge-light-warning align-self-center px-2">80%</span> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between flex-column w-225px w-md-600px mx-auto mx-md-0 pt-3 pb-10">
                                    {/* <div className="fs-4 fw-bold text-gray-900 text-center mb-5">
                                        Session Attendance
                                        <br />for Current Academic Year
                                    </div> */}
                                    <Chart options={doptions as ApexCharts.ApexOptions} series={[acceptance, update, correction]} type='donut' />
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
                {currentUser == 3 ?
                    <div className='col-12'>
                        <div className='card h-md-100'>
                            <div className='card-header position-relative py-0 border-bottom-1'>
                                <h3 className='card-title text-gray-800 fw-bold'>Active Tasks</h3>
                            </div>
                            <div className='card-body pb-0'>
                                {timelineItems.length > 0 ?
                                    <Timeline
                                        options={timelineoptions}
                                        initialGroups={groups}
                                        initialItems={timelineItems}
                                    /> : ''}
                            </div>
                        </div>
                    </div>
                    : ""
                }
                {/* <div className='col-md-5'>
                    <ListsWidget6 className='' acceptance={acceptance} correction={correction} update={update} />
                </div> */}
            </div>
            {/* <div className='row'> */}

            {/* </div> */}
            {loading && (
                <div className="overlay">
                    <PropagateLoader
                        color="#009ef7"
                        loading={loading}
                        // cssOverride={override}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                    />
                </div>
            )}
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
    const totalRequet = Object.values(RequetNumber).reduce((a, b) => (a as number) + (b as { total: number })['total'], 0)
    const totalclosed = props.totalclosed
    const productCountry = props.productCountry
    const inprogress = props.inprogress

    useEffect(() => {
        if (props.flash.message) {
            MySwal.fire({
                title: <p>Done !</p>,
                icon: 'success',
                text: props.flash.message,
            })
        }
    }, [])

    const { config, classes } = useLayout()
    if (!config.app?.toolbar?.display) {
        return null
    }

    // const isPageTitleVisible = showPageTitle(
    //     config.app?.toolbar?.layout,
    //     config.app?.pageTitle?.display
    // )


    return (
        <>
            <PageTitle breadcrumbs={[]}>
                Dashboard
            </PageTitle>
            {/* <div
                id='kt_app_toolbar'
                className={clsx('app-toolbar', classes.toolbar.join(' '), config?.app?.toolbar?.class)}
            >
                <div
                    id='kt_app_toolbar_container'
                    className={clsx(

                        classes.toolbarContainer.join(' '),
                        config.app?.toolbar?.containerClass,
                        config.app?.toolbar?.minimize?.enabled ? 'app-toolbar-minimize' : '',
                        {
                            'container-fluid': config.app?.toolbar?.container === 'fluid',
                            'container-xxl': config.app?.toolbar?.container === 'fixed',
                        }
                    )}
                >
                    {isPageTitleVisible && <PageTitleWrapper />}
                    <div className='page-title d-flex flex-column justify-content-center flex-wrap me-3'>
                        <h1 className='page-heading d-flex text-dark fw-bold fs-3 flex-column justify-content-center my-0'>
                            Dashboard
                        </h1>
                    </div>
                    <div className='d-flex align-items-center gap-2 gap-lg-3'>
                        <a className='btn btn-sm fw-bold btn-secondary'>List</a>
                        <a className='btn btn-sm fw-bold btn-primary'>
                            New Request
                        </a>
                    </div>
                    <Toolbar />
                </div>
            </div> */}
            <DashboardPage
                RequetNumber={RequetNumber}
                totalRequet={totalRequet}
                formattingCount={formattingsCount}
                PublishingCount={PublishingCount}
                acceptance={acceptance}
                correction={correction}
                update={update}
                totalclosed={totalclosed}
                productCountry={productCountry}
                inprogress={inprogress}
                currentUser={props.auth.user.current_team_id}
            />

        </>

    )
}

Dashboard.layout = page => <Authenticated children={page} auth={page.props.auth} />

export default Dashboard;