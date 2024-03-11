import { endpoints } from '@/api/schedules/endpoints'

export async function getSchedule() {
    const data = await fetch(endpoints.getSchedule)
    .then( async (response) => {
        const data = await response.json()
        return data.MRData.RaceTable.Races
    })
    return data
}