import { endpoints } from '@/api/circuits/endpoints'

export async function getCircuits() {
    const data = await fetch(endpoints.getCircuits)
    .then( async (response) => {
        const data = await response.json()
        return data.MRData.CircuitTable.Circuits
    })
    return data
}