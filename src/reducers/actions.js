import {apiRequest} from "../apiService";

function getData(dispatch) {
         apiRequest().then((data) => {
             console.log('res', data)
            return dispatch({
                type: 'GET_DATA_SPACEX',
                payload : data,
            })
        })
}

export default getData;