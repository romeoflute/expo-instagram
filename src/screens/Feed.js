import React, { useEffect } from 'react'
// import {fetchFeed} from '../redux/actions'
import { useSelector, useDispatch } from 'react-redux'
import PostList from '../components/PostList'
import {fetchUser} from '../redux/actions/index'
import {View, Text} from 'react-native'


const Feed = ({navigation}) => {
    // const feed = useSelector(state => state.feed)
    const dispatch = useDispatch()

    //dispatch actions
    // const getFeed = () => dispatch(fetchFeed())
    const getCurrentUser = () => dispatch(fetchUser())

    useEffect(() => {
        // getFeed()
        getCurrentUser()
    }, []);

    //get user
    const user = useSelector(state => state.user)
    console.log("user is: ", user)

    const viewComments = (post) => {
        // navigation.navigate("CommentList", {comments: post.comments})
    }

    return (
        <View>
            <Text>Feed View</Text>
        </View>
        // <PostList data={feed.data} viewComments = {viewComments} />   
    )
}
export default Feed