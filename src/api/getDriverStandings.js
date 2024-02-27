import { endpoints } from '@/api/endpoints'

export async function getDriverStandings() {
    const data = await fetch(endpoints.getDriverStandings)
    .then( async (response) => {
        const data = await response.json()
        return data.MRData.StandingsTable.StandingsLists[0].DriverStandings
    })
    return data
}