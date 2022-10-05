import {apiRequest} from "../apiService";

function getData(dispatch) {
         apiRequest().then((data) => {
            return dispatch({
                type: 'GET_DATA_SPACEX',
                payload : data,
            })
        })
}

export default getData;