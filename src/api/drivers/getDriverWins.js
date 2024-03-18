import { endpoints } from '@/api/drivers/endpoints'

export async function getDriverWins(id) {
    const data = await fetch(endpoints.getDriverWins(id))
    .then( async (response) => {
        const data = await response.json()
        return data.MRData.RaceTable.Races.reverse()
    })
    .catch( error => {console.error(error)} )

    return data || []
}