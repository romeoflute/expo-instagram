import React, {useEffect} from 'react'
// import {fetchFeed} from '../redux/actions'
import PostList from '../components/PostList'
import {View, Text, Button} from 'react-native'
import Firebase from '../../config/FirebaseConfig'

import { useSelector, useDispatch } from 'react-redux'
import {fetchMyPosts} from '../redux/actions/index'

const Feed = ({navigation}) => {

    //get user from Redux
    const user = useSelector(state => state.user)
    const myPosts = useSelector(state => state.myPosts)

    const dispatch = useDispatch()
    const getMyPosts = () => dispatch(fetchMyPosts())

    console.log("myPosts ", myPosts)

    useEffect(() => {
        if (user){
            getMyPosts()
        }
    }, [user]);



    const viewComments = (post) => {
        // navigation.navigate("CommentList", {comments: post.comments})
    }

    return (
        <View>
            <Button
            title="Logout"
            onPress={() => {
                Firebase.auth().signOut()
            }}>
        </Button>
        
        </View>
        // <PostList data={feed.data} viewComments = {viewComments} />   
    )
}
export default Feed