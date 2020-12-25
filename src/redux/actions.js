import axios from 'axios'

const baseUrl = 'http://localhost:3000'

export function fetchFeed(){
    return (dispatch) => {
        dispatch({
            type: 'FETCH_FEED_START'
        })
        axios({
            method:'get',
            url: `${baseUrl}/posts`
        }).then((response) => {
            dispatch({
                type:'FETCH_FEED_SUCCESS',
                payload:response.data
            })
        }).catch((error) => {
            dispatch({
                type:'FETCH_FEED_ERROR',
                payload:error
            })
        })
    }
}