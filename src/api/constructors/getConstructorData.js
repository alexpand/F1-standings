import { endpoints } from '@/api/constructors/endpoints'

export async function getConstructorData(id) {
    const data = await fetch(endpoints.getConstructorData(id))
    .then( async (response) => {
        const data = await response.json()
        // return data.MRData.DriverTable.Drivers[0]
        console.log(data, ' constructor data')
    })
    return data
}