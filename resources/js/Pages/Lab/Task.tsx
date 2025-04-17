import { FC, useEffect, useState } from 'react'
import Authenticated from '../../Layouts/AuthenticatedLayout'
import { FormattingTable, PublishingTable, TablesWidget9 } from '../../_metronic/partials/widgets'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { Head } from '@inertiajs/react'
import { Tabs, Tab } from 'react-bootstrap'
import { KTIcon } from '../../_metronic/helpers'
import { DateConsultation } from '../../_metronic/partials'


const MySwal = withReactContent(Swal)

const Task = (props: any) => {

    const { formatting, publishing } = props
    const [showDate, setShowDate] = useState({ 'status': false, requestDate: '', deliveryDeadline: '', adjustedDeadline: '', adjustedDeadlineCar: '', car_deadline: '' });

    useEffect(() => {
        if (props.flash.message) {
            MySwal.fire({
                title: <p>Done !</p>,
                icon: 'success',
                text: props.flash.message,
            })
        }
    })

    const handleconsultdate = (row) => {
        setShowDate({
            'status': !showDate.status,
            requestDate: row.request_date,
            deliveryDeadline: row.delivery_deadline,
            adjustedDeadline: row.adjusted_deadline,
            adjustedDeadlineCar: row.adjusted_deadline_car,
            car_deadline: row.car_deadline
        })

    }

    return (
        <>
            <Head title="Tasks" />
            <Tabs
                fill
                defaultActiveKey="formatting"
                id="task-tabs"
                className="nav-line-tabs nav-stretch fs-5 fw-bold mb-5"
            >
                <Tab
                    eventKey="formatting"
                    title={
                        <span className="d-flex align-items-center">
                            <KTIcon iconName="file-text" className="me-2" />
                            Formatting
                        </span>
                    }
                >
                    {/* Formatting table takes full width */}
                    <FormattingTable data={formatting} handleconsultdate={handleconsultdate} />
                </Tab>

                <Tab
                    eventKey="publishing"
                    title={
                        <span className="d-flex align-items-center">
                            <KTIcon iconName="upload" className="me-2" />
                            Publishing
                        </span>
                    }
                >
                    {/* Publishing table + filters take full width */}
                    <PublishingTable data={publishing} currentUser={props.auth.user.id} handleconsultdate={handleconsultdate} />
                </Tab>
            </Tabs>


            <DateConsultation
                show={showDate.status}
                request_date={showDate.requestDate}
                delivery_deadline={showDate.deliveryDeadline}
                adjusted_deadline={showDate.adjustedDeadline}
                adjusted_deadline_car={showDate.car_deadline ? showDate.adjustedDeadlineCar : ''}
            />
        </>
    )
}

Task.layout = page => <Authenticated children={page} auth={page.props.auth} />

export default Task;