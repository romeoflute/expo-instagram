import React, {useEffect} from 'react'
import {View, Text} from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import {fetchFeed} from '../redux/actions'
import Grid from '../components/Grid'

const Explore = () => {

    // const dispatch = useDispatch()
    // const getFeed = () => dispatch(fetchFeed())
    // useEffect(() => {
    //     getFeed()
    // })

    const feed = useSelector(state => state.feed)
    console.log("feed in Explore: ", feed)
    if (feed.fetched && feed.data){
        console.log("2. feed in Explore: ", feed)
        return <Grid data = {feed.data} />
    }
    return null
}

export default Explore