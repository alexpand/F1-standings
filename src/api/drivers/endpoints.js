export const endpoints = {
    'getDriverStandings': 'https://ergast.com/api/f1/current/driverStandings.json',
    'getDriverWins': (id) => `https://ergast.com/api/f1/drivers/${id}/results/1.json?limit=200`,
    'getDriverData': (id) => `https://ergast.com/api/f1/drivers/${id}.json`,
}