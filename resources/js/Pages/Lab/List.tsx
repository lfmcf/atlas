import { FC, useEffect } from 'react'
import Authenticated from '../../Layouts/AuthenticatedLayout'
import { TablesWidget9 } from '../../_metronic/partials/widgets'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)


const List: FC = (props: any) => {

    const { allDemands } = props

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
            <TablesWidget9 data={allDemands} user={props.auth.user} />
        </Authenticated>
    )
}

export default List;