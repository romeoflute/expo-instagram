import React, {useEffect, useState} from 'react'
// import {fetchFeed} from '../redux/actions'
import PostList from '../components/PostList'
import {View, Text, Image, FlatList, StyleSheet} from 'react-native'
import Firebase from '../../config/FirebaseConfig'

import { useSelector, useDispatch } from 'react-redux'
import {fetchMyPosts} from '../redux/actions/index'

import {width} from '../utilities/constants'

const Profile = ({route}) => {
   
    const {userUid} = route.params
    console.log("userUid is now: ", userUid)

    const [userPosts, setUserPosts] = useState([])
    const [user, setUser] = useState(null)

    const currentUser = useSelector(state => state.user)
    const myPosts = useSelector(state => state.myPosts)

    const dispatch = useDispatch()
    const getMyPosts = () => dispatch(fetchMyPosts())

    useEffect(() => {
        if (userUid === Firebase.auth().currentUser.uid){
            console.log("currentUser is: ", currentUser)
            setUser(currentUser)
        }else{
            Firebase.firestore()
            .collection('users')
            .doc(userUid)
            .get()
            .then((snapshot) => {
                if (snapshot.exists){
                    setUser(snapshot.data())
                }
                else{
                    setUser(null)
                }
            })
        }
    }, [userUid])

    useEffect(() => {
        if (userUid === Firebase.auth().currentUser.uid){
            getMyPosts()
        }else{
            console.log("get another user's posts")
            Firebase.firestore()
            .collection("myPosts")
            .doc(userUid)
            .collection("userPosts")
            .orderBy("date", "asc")
            .get()
            .then((snapshot) => {
                if (snapshot.docs.length > 0){
                    let allPosts = snapshot.docs.map((doc) => doc.data())
                    console.log("all this other user's posts: ", allPosts)
                    setUserPosts(allPosts)
                }
                else{
                    setUserPosts([])
                }
            })
        }
    }, [user])

    useEffect(() => {
        if (userUid === Firebase.auth().currentUser.uid && myPosts.count > 0){
            console.log("myPosts is now: ", myPosts)
            setUserPosts(myPosts) 
            console.log("userPosts is now: ", userPosts)
        }
    }, [myPosts])

    const viewComments = (post) => {
        // navigation.navigate("CommentList", {comments: post.comments})
    }
    // return (
    //     <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
    //         <Text>Profile</Text>
    //     </View>
    // )

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
                    numColumns={3}
                    horizontal={false}
                    data={userPosts}
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
        width: width/3,
        height:width/3
    }
    
})
export default Profile