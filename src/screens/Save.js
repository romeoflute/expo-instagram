import React, {useState} from 'react'
import { Text, View, TextInput, Image, Button} from 'react-native'
import Firebase from '../../config/FirebaseConfig'
import { useNavigation } from '@react-navigation/native';
import { blobFromURL } from '../utilities/constants'
import firebase from 'firebase'

const Save = ({route}) => {
    const navigation = useNavigation();
    const {uri} = route.params
    const [caption, setCaption] = useState('')

    let userId = Firebase.auth().currentUser.uid

    const uploadImage = async () => {
        let postId = Firebase.firestore()
        .collection("myPosts")
        .doc(userId)
        .collection("userPosts")
        .doc()
        .id

        const childPathStorage = `posts/${postId}`

        const response = await fetch(uri)
        const blob = await response.blob()

        var storageRef = Firebase.storage().ref();

        const task = storageRef
        .child(childPathStorage)
        .put(blob)

        const taskProgress = snapshot => {
            console.log(`transferred: ${snapshot.bytesTransferred}`)
        }

        const taskCompleted = () => {
            task.snapshot.ref.getDownloadURL().then((snapshot) => {
                savePostData(snapshot, postId)
            })
        }

        const taskError = snapshot => {
            console.log("there was an error")
            console.log("snapshot ", snapshot)
        }

        task.on("state_changed", taskProgress, taskError, taskCompleted)
    }


    const savePostData = (downloadURL, postId) => {

        const dateTime = firebase.firestore.FieldValue.serverTimestamp()

        Firebase.firestore()
        .collection("myPosts")
        .doc(Firebase.auth().currentUser.uid)
        .collection("userPosts")
        .doc(postId)
        .set({
            mediaUrl: downloadURL,
            caption,
            date: dateTime
        })
        .then(() => {
            navigation.goBack("Add")
        })
    }

    return (
        <View style={{flex:1}}>
            <Image source={{uri: uri}} />
            <TextInput 
                value={caption}
                placeholder="Write a caption . . ."
                onChangeText={(caption) => setCaption(caption)}
            />
            <Button 
                title="Save"
                onPress={() => uploadImage()}
            />
        </View>
    )
}

export default Save