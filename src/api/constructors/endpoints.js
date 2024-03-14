export const endpoints = {
    'getConstructorStandings': 'https://ergast.com/api/f1/current/constructorStandings.json',
    'getConstructorDrivers': (id) => `https://ergast.com/api/f1/current/constructors/${id}/drivers.json`,
    'getConstructorData': (id) => `https://ergast.com/api/f1/constructors/${id}.json`,
}