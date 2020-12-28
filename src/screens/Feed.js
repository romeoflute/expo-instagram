import React, { useEffect } from 'react'
// import {fetchFeed} from '../redux/actions'
import PostList from '../components/PostList'
import {View, Text, Button} from 'react-native'
import Firebase from '../../config/FirebaseConfig'


const Feed = ({navigation}) => {

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