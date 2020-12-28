import React, { useEffect } from 'react'
// import {fetchFeed} from '../redux/actions'
import PostList from '../components/PostList'
import {View, Text} from 'react-native'


const Feed = ({navigation}) => {

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