import Firebase from '../../../config/FirebaseConfig'
import {USER_STATE_CHANGE, USER_POSTS_STATE_CHANGE} from '../constants'

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

