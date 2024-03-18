import { endpoints } from '@/api/constructors/endpoints'

export async function getConstructorDrivers(id) {
    const data = await fetch(endpoints.getConstructorDrivers(id))
    .then( async (response) => {
        const data = await response.json()
        return data.MRData.DriverTable.Drivers
    })
    .catch( error => {console.error(error)} )

    return data || []
}