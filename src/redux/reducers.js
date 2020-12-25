export function feed(
    state = {
        data: null, 
        fetching: false,
        fetched: false,
        errored: false,
        error: null
    },
    action
){
    switch(action.type){
        case 'FETCH_FEED_START':
            return {
                ...state,
                fetching: true,
                fetched: false,
                errored: false,
                error: null
            }
        case 'FETCH_FEED_SUCCESS':
            return {
                ...state,
                fetching: false,
                fetched: true,
                errored: false,
                error: null,
                data: action.payload
            }
        case 'FETCH_FEED_ERROR':
            console.log("action.payload: ", action.payload)
            return {
                ...state,
                fetching: false,
                fetched: false,
                errored: true,
                error: action.payload,
            }
        default:
            return state;
    }
}