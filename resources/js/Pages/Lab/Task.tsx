import { FC } from 'react'
import Authenticated from '../../Layouts/AuthenticatedLayout'
import { FormattingTable, PublishingTable, TablesWidget9 } from '../../_metronic/partials/widgets'

const Task: FC = (props: any) => {

    const { formatting, publishing } = props

    return (
        <Authenticated auth={props.auth}>
            <FormattingTable data={formatting} />
            <PublishingTable data={publishing} />
        </Authenticated>
    )
}

export default Task;