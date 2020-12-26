import axios from 'axios'

const baseUrl = 'http://localhost:3000'

export function fetchFeed(){
    console.log("fetchFeed called")
    return (dispatch) => {
        console.log("will dispatch: FETCH_FEED_START")
        dispatch({
            type: 'FETCH_FEED_START'
        })
        axios({
            method:'get',
            url: `${baseUrl}/posts`
        }).then((response) => {
            console.log('response.data iz> ', response.data)
            console.log("will dispatch: FETCH_FEED_SUCCESS")
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