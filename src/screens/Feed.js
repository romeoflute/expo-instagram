import React, {useEffect} from 'react'
// import {fetchFeed} from '../redux/actions'
import PostList from '../components/PostList'
import {View, FlatList, Button, Text, Image, StyleSheet} from 'react-native'
import Firebase from '../../config/FirebaseConfig'

import { useSelector, useDispatch } from 'react-redux'
import {fetchMyTimeline} from '../redux/actions/index'
import {width} from '../utilities/constants'

const Feed = ({navigation}) => {

    //get user from Redux
    const user = useSelector(state => state.user.currentUser)
    console.log("user in Feed: ", user)
    const timeline = useSelector(state => state.user.timeline)
    console.log("timeline now: ", timeline)

    const dispatch = useDispatch()
    const getMyTimeline = () => dispatch(fetchMyTimeline())

    useEffect(() => {
        if (user){
            getMyTimeline()
        }
    }, [user]);



    const viewComments = (post) => {
        // navigation.navigate("CommentList", {comments: post.comments})
    }

    if (user == null){
        return (
            <View></View>
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.containerInfo}>
                <Text>{user.username}</Text>
                <Text>{user.email}</Text>
            </View>
            <View>
                <FlatList 
                    numColumns={1}
                    horizontal={false}
                    data={timeline}
                    renderItem={({item}) => {
                        return (
                            <View style={styles.containerImage}>
                                <Text style={styles.username}>{item.username}</Text>
                                <Image 
                                    style={styles.image}
                                    source={{uri: item.mediaUrl}}
                                />
                            </View>
                        )
                    }}
                    keyExtractor={item => item.postId} 
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    containerInfo:{
        margin:20,
    },
    containerGallery:{
        flex:1,
    },
    containerImage:{
        flex: 1/3,
    },
    image:{
        width: width,
        height:width
    },
    username:{

    }
    
})

export default Feed