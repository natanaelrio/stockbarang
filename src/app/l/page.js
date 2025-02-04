import Activity from '@/components/activity'
import { GetLogActivity } from '@/service/data'

export default async function Page() {
    const data = await GetLogActivity()
    return (
        <>
            <Activity data={data.data} />
        </>
    )
}
