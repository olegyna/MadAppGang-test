const initialState = {
    spacexData : []
}

 function dragonsInfo(state = initialState, action) {
    const {type, payload} = action;
    switch (type) {
        case 'GET_DATA_SPACEX' :
            return {...state, spacexData: payload}
        default : return state;
    }
}

export default dragonsInfo;