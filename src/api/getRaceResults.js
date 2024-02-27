import { endpoints } from '@/api/endpoints'

export async function getRaceResults() {
    const data = await fetch(endpoints.getRaceResults)
    .then( async (response) => {
        const data = await response.json()
        return data.MRData.RaceTable.Races[0].Results
    })
    return data
}