import { endpoints } from '@/api/constructors/endpoints'

export async function getConstructorStandings() {
    const data = await fetch(endpoints.getConstructorStandings)
    .then( async (response) => {
        const data = await response.json()
        return data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings
    })
    .catch( error => {console.error(error)} )

    return data || []
}