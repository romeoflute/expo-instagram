import Firebase from '../../../config/FirebaseConfig'
import {USER_STATE_CHANGE} from '../constants'

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