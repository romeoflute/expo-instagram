import React, {useEffect} from 'react'
// import {fetchFeed} from '../redux/actions'
import PostList from '../components/PostList'
import {View, Text, Image, FlatList, StyleSheet} from 'react-native'
import Firebase from '../../config/FirebaseConfig'

import { useSelector, useDispatch } from 'react-redux'
import {fetchMyPosts} from '../redux/actions/index'

import {width} from '../utilities/constants'

const Profile = ({navigation}) => {

    //get user from Redux
    const currentUser = useSelector(state => state.user)
    const myPosts = useSelector(state => state.myPosts)

    const dispatch = useDispatch()
    const getMyPosts = () => dispatch(fetchMyPosts())

    console.log("myPosts in Profile ", myPosts)
    console.log("currentUser in Profile: ", currentUser)
    console.log("currentUser email in Profile: ", currentUser.email)

    useEffect(() => {
        if (currentUser){
            getMyPosts()
        }
    }, [currentUser]);




    const viewComments = (post) => {
        // navigation.navigate("CommentList", {comments: post.comments})
    }
    // return (
    //     <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
    //         <Text>Profile</Text>
    //     </View>
    // )

    return (
        <View style={styles.container}>
            <View style={styles.containerInfo}>
                <Text>{currentUser.username}</Text>
                <Text>{currentUser.email}</Text>
            </View>
            <View>
                <FlatList 
                    numColumns={3}
                    horizontal={false}
                    data={myPosts}
                    renderItem={({item}) => {
                        return (
                            <View style={styles.containerImage}>
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
        // <PostList data={feed.data} viewComments = {viewComments} />   
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop: 40
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
        // flex:1,
        // aspectRatio: 1/1
        width: width/3,
        height:width/3
    }
    
})
export default Profile