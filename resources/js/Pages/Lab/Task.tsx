import { FC, useEffect } from 'react'
import Authenticated from '../../Layouts/AuthenticatedLayout'
import { FormattingTable, PublishingTable, TablesWidget9 } from '../../_metronic/partials/widgets'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { Head } from '@inertiajs/react'

const MySwal = withReactContent(Swal)

const Task = (props: any) => {

    const { formatting, publishing } = props

    useEffect(() => {
        if (props.flash.message) {
            MySwal.fire({
                title: <p>Done !</p>,
                icon: 'success',
                text: props.flash.message,
            })
        }
    })

    return (
        <>
            <Head title="Tasks" />
            <FormattingTable data={formatting} />
            <PublishingTable data={publishing} currentUser={props.auth.user.id} />
        </>
    )
}

Task.layout = page => <Authenticated children={page} auth={page.props.auth} />

export default Task;