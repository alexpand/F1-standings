export const endpoints = {
    'getConstructorStandings': 'https://ergast.com/api/f1/current/constructorStandings.json',
    'getDriverStandings': 'https://ergast.com/api/f1/current/driverStandings.json',
    'getRaceResults': 'https://ergast.com/api/f1/current/last/results.json',
    'getCircuits': 'https://ergast.com/api/f1/circuits.json',
    'getSchedule': 'https://ergast.com/api/f1/current.json',
    'getDriverWins': (id) => `https://ergast.com/api/f1/drivers/${id}/results/1.json?limit=200`,
    'getDriverData': (id) => `https://ergast.com/api/f1/drivers/${id}.json`,
}