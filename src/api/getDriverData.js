import { endpoints } from '@/api/endpoints'

export async function getDriverData(id) {
    const data = await fetch(endpoints.getDriverData(id))
    .then( async (response) => {
        const data = await response.json()
        return data.MRData.DriverTable.Drivers[0]
    })
    return data
}