import { FC, useEffect } from 'react'
import Authenticated from '../../Layouts/AuthenticatedLayout'
import { FormattingTable, PublishingTable, TablesWidget9 } from '../../_metronic/partials/widgets'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

const Task: FC = (props: any) => {

    const { formatting, publishing } = props

    useEffect(() => {
        if (props.flash.message) {
            MySwal.fire({
                title: <p>Your work has been submitted</p>,
                icon: 'success',
                text: props.flash.message,
            })
        }
    }, [])

    return (
        <Authenticated auth={props.auth}>
            <FormattingTable data={formatting} />
            <PublishingTable data={publishing} />
        </Authenticated>
    )
}

export default Task;