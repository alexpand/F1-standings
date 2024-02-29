import { endpoints } from '@/api/endpoints'

export async function getDriverWins(id) {
    const data = await fetch(endpoints.getDriverWins(id))
    .then( async (response) => {
        const data = await response.json()
        return data.MRData.RaceTable.Races.reverse()
    })
    return data
}