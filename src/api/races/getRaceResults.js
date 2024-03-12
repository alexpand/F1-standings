import { endpoints } from '@/api/races/endpoints'

export async function getRaceResults(round) {
    const data = await fetch(endpoints.getRaceResults(round))
    .then( async (response) => {
        const data = await response.json()
        return data.MRData.RaceTable.Races[0]
    })
    .catch( error => {console.error(error)} )
    
    return data || []
}