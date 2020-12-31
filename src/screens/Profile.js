import React, {useEffect, useState} from 'react'
// import {fetchFeed} from '../redux/actions'
import PostList from '../components/PostList'
import {View, Text, Image, FlatList, StyleSheet, Button} from 'react-native'
import Firebase from '../../config/FirebaseConfig'

import { useSelector, useDispatch } from 'react-redux'
import {fetchMyPosts, fetchUserFollowing} from '../redux/actions/index'

import {width} from '../utilities/constants'

const Profile = ({route}) => {
    let {userUid} = route.params
    const currentUserUid = Firebase.auth().currentUser.uid

    const [userPosts, setUserPosts] = useState([])
    const [user, setUser] = useState(null)
    const [following, setFollowing] = useState(false)

    const currentUser = useSelector(state => state.user.currentUser)
    const myPosts = useSelector(state => state.user.posts)
    const userFollowing = useSelector(state => state.user.following)

    const dispatch = useDispatch()
    const getMyPosts = () => dispatch(fetchMyPosts())
    const getFollowing = () => dispatch(fetchUserFollowing())

    console.log("am i following this guy? ", following)

    useEffect(() => {
        if (userUid === currentUserUid){
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

            getFollowing()
        }
    }, [userUid])

    useEffect(() => {
        if (userUid === currentUserUid){
            getMyPosts()
        }else{
            Firebase.firestore()
            .collection("myPosts")
            .doc(userUid)
            .collection("userPosts")
            .orderBy("date", "asc")
            .get()
            .then((snapshot) => {
                if (snapshot.docs.length > 0){
                    let allPosts = snapshot.docs.map((doc) => doc.data())
                    setUserPosts(allPosts)
                }
                else{
                    setUserPosts([])
                }
            })
        }
    }, [user])

    useEffect(() => {
        if (currentUserUid === userUid) {
            console.log("same as logged in user")
            return
        }
       
        if (userFollowing.includes(userUid)) {
            console.log("includes")
            setFollowing(true)
        }else{
            console.log("not include")
            setFollowing(false)
        }
    }, [userFollowing])

    useEffect(() => {
        
        if (userUid === currentUserUid && myPosts.length > 0){
            console.log("now setting userPosts to myPosts")
            setUserPosts(myPosts) 
        }
    }, [myPosts])

    const onFollow = () => {
        Firebase.firestore()
        .collection("following")
        .doc(currentUserUid)
        .collection("userFollowing")
        .doc(userUid)
        .set({})
    }

    const onUnfollow = () => {
        Firebase.firestore()
        .collection("following")
        .doc(currentUserUid)
        .collection("userFollowing")
        .doc(userUid)
        .delete()
    }

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

                {
                    userUid !== currentUserUid ?
                    (
                        <View>
                            { following ? 
                                (
                                    <Button 
                                        title="Unfollow"
                                        onPress={() => onUnfollow()}
                                    />
                                )
                                :
                                (
                                    <Button 
                                        title="Follow"
                                        onPress={() => onFollow()}
                                    />
                                )
                            }
                        </View>
                    )
                    : null
                }
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