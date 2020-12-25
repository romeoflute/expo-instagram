import React, { useEffect } from 'react'
import {fetchFeed} from '../redux/actions'
import { useSelector, useDispatch } from 'react-redux'
import PostList from '../components/PostList'

const Feed = ({navigation}) => {
    const feed = useSelector(state => state.feed)
    const dispatch = useDispatch()

    //dispatch actions
    const getFeed = () => dispatch(fetchFeed())

    useEffect(() => {
        getFeed()
    }, []);

    const viewComments = (post) => {
        navigation.navigate("CommentList", {comments: post.comments})
    }

    return (
        <PostList data={feed.data} viewComments = {viewComments} />   
    )
}
export default Feed