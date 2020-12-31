import Firebase from '../../../config/FirebaseConfig'
import {
    USER_STATE_CHANGE, 
    USER_POSTS_STATE_CHANGE, 
    USER_FOLLOWING_STATE_CHANGE, 
    USER_TIMELINE_STATE_CHANGE,
    USERS_DATA_STATE_CHANGE,
} from '../constants'

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

export function fetchMyTimeline(){
    console.log("fetchMyTimeline called!")
    let loggedInUid = Firebase.auth().currentUser.uid

    return ((dispatch) => {
        Firebase.firestore()
        .collection("timeline")
        .doc(loggedInUid)
        .collection("timelinePosts")
        .orderBy("date", "asc")
        .get()
        .then((snapshot) => {
            console.log("with timeline snapshot")
            if (snapshot.docs.length > 0){
                console.log("with timeline snapshot.docs.length > 0")
                let timelinePosts = snapshot.docs.map((doc) => doc.data())
                console.log("timeline posts are: ", timelinePosts)
                dispatch({type: USER_TIMELINE_STATE_CHANGE, timeline: timelinePosts})
            }
            else{
                console.log("with timeline snapshot.docs.length == 0")
                dispatch({type: USER_TIMELINE_CHANGE, timelinePosts: []})
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

export function fetchUsersData(uid){
    return((dispatch, getState) => {
        const found = getState().usersState.users.some((el) => el.uid === uid )
        if (!found) {
            Firebase.firestore()
            .collection('users')
            .doc(uid)
            .get()
            .then((snapshot) => {
                if (snapshot.exists){
                    dispatch({type: USERS_DATA_STATE_CHANGE, user: snapshot.data()})
                }
                else{
                    console.log('error: user does not exist')
                }
            })
        }
    })
}

// export function fetchUsersFollowingPosts(uid){
//     return ((dispatch) => {
//         Firebase.firestore()
//         .collection("myPosts")
//         .doc(uid)
//         .collection("userPosts")
//         .orderBy("date", "asc")
//         .get()
//         .then((snapshot) => {
//             if (snapshot.docs.length > 0){
//                 let allMyPosts = snapshot.docs.map((doc) => doc.data())
//                 dispatch({type: USERS_POSTS_STATE_CHANGE, posts: allMyPosts})
//             }
//             else{
//                 dispatch({type: USERS_POSTS_STATE_CHANGE, posts: []})
//             }
//         })
//     })
// }

