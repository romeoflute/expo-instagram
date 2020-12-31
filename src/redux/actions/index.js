import Firebase from '../../../config/FirebaseConfig'
import {USER_STATE_CHANGE, USER_POSTS_STATE_CHANGE, USER_FOLLOWING_STATE_CHANGE} from '../constants'

export function fetchUser(){
    return ((dispatch) => {
        Firebase.firestore()
        .collection('users')
        .doc(Firebase.auth().currentUser.uid)
        .get()
        .then((snapshot) => {
            if (snapshot.exists){
                dispatch({type: USER_STATE_CHANGE, currentUser: snapshot.data()})
            }
            else{
                console.log('error: user does not exist')
            }
        })
    })
}

export function fetchMyPosts(){
    return ((dispatch) => {
        Firebase.firestore()
        .collection("myPosts")
        .doc(Firebase.auth().currentUser.uid)
        .collection("userPosts")
        .orderBy("date", "asc")
        .get()
        .then((snapshot) => {
            if (snapshot.docs.length > 0){
                let allMyPosts = snapshot.docs.map((doc) => doc.data())
            
                dispatch({type: USER_POSTS_STATE_CHANGE, myPosts: allMyPosts})
            }
            else{
                dispatch({type: USER_POSTS_STATE_CHANGE, myPosts: []})

            }
        })
    })
}

export function fetchUserFollowing(){
    console.log("fetchUserFollowing called")
    return ((dispatch) => {
        Firebase.firestore()
        .collection("following")
        .doc(Firebase.auth().currentUser.uid)
        .collection("userFollowing")
        .onSnapshot((snapshot) => {
            console.log("onSnapshot: ", snapshot.docs.length)
            if (snapshot.docs.length > 0){
                let usersIFollow = snapshot.docs.map((doc) => {
                    return doc.id
                })
                console.log("usersIFollow: ", usersIFollow)
                dispatch({type: USER_FOLLOWING_STATE_CHANGE, following: usersIFollow})
            }
            else{
                dispatch({type: USER_FOLLOWING_STATE_CHANGE, following: []})

            }
        })
    })
}

