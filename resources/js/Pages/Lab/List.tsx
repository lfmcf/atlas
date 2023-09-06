import { FC } from 'react'
import Authenticated from '../../Layouts/AuthenticatedLayout'
import { TablesWidget9 } from '../../_metronic/partials/widgets'


const List: FC = (props: any) => {

    const { allDemands } = props

    return (
        <Authenticated auth={props.auth}>
            <TablesWidget9 data={allDemands} user={props.auth.user} />
        </Authenticated>
    )
}

export default List;