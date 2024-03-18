import { endpoints } from '@/api/constructors/endpoints'

export async function getConstructorData(id) {
    const data = await fetch(endpoints.getConstructorData(id))
    .then( async (response) => {
        const data = await response.json()
        return data.MRData.ConstructorTable.Constructors[0]
    })
    .catch( error => {console.error(error)} )

    return data
}