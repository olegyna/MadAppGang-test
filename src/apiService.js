const URL = 'https://api.spacexdata.com/v4/dragons';

export function apiRequest() {
    return fetch(`${URL}?format=json`).then((res) => {
        return res.json()
    })
}

