import React, {useState} from 'react'
import {View, TextInput, Image, Button} from 'react-native'
import Firebase from '../../config/FirebaseConfig'
import { useNavigation } from '@react-navigation/native';

const Save = ({route}) => {
    const navigation = useNavigation();
    const {uri} = route.params
    const [caption, setCaption] = useState('')

    const childPath = `post/${Firebase.auth().currentUser.uid}/${Math.random().toString(36)}`

    const uploadImage = async () => {
        const response = await fetch(uri)
        const blob = await response.blob
        const task = Firebase
        .storage()
        .ref()
        .child(childPath)
        .putBlob(blob)

        const taskProgress = snapshot => {
            console.log(`transferred: ${snapshot.bytesTransferred}`)
        }

        const taskCompleted = () => {
            task.snapshot.ref.getDownloadURL().then((snapshot) => {
                console.log(snapshot)
            })
        }

        const taskError = snapshot => {
            savePostData(snapshot)
            console.log(snapshot)
        }

        task.on("state_changed", taskProgress, taskError, taskCompleted)
    }

    const savePostData = (downloadURL) => {
        Firebase.firestore()
        .collection("myPosts")
        .doc(Firebase.auth().currentUser.uid)
        .collection("userPosts")
        .add({
            mediaURL: downloadURL,
            caption,
            date: Firebase.firestore().FieldValue.serverTimestamp()
        })
        .then(() => {
            navigation.goBack("Add")
        })
    }

    return (
        <View style={{flex:1}}>
            <Image source={{uri: image}} />
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