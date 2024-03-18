import { endpoints } from '@/api/schedules/endpoints'

export async function getRoundResults() {
    const data = await fetch(endpoints.getRoundResults)
    .then( async (response) => {
        const data = await response.json()
        return data.MRData.RaceTable.Races
    })
    .catch( error => {console.error(error)} )

    return data || []
}