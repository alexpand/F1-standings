import { endpoints } from '@/api/drivers/endpoints'

export async function getDriversStandings() {
    const data = await fetch(endpoints.getDriverStandings)
    .then( async (response) => {
        const data = await response.json()
        return data.MRData.StandingsTable.StandingsLists[0].DriverStandings
    })
    return data
}