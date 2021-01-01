import React, {useState, useEffect} from 'react'
import {View, Image, TextInput, TouchableOpacity, StyleSheet} from 'react-native'
import { SimpleLineIcons } from '@expo/vector-icons';
import Firebase from '../../config/FirebaseConfig'
import firebase from 'firebase'
import { v4 as uuidv4 } from 'uuid';
import { useSelector } from 'react-redux'

export default function AddComment({postId, fetchComments}) {

    const user = useSelector(state => state.user.currentUser)

    const [comment, setComment] = useState('')

    const addComment = () => {
        const dateTime = firebase.firestore.FieldValue.serverTimestamp()
        console.log("username is: ", user.username)
        Firebase.firestore()
        .collection("comments")
        .doc(postId)
        .collection("postComments")
        .add({
            comment: comment,
            date: dateTime,
            id: uuidv4(),
            ownerId: user.uid,
            postId: postId,
            username: user.username,
            avatarUrl: "https://i.imgur.com/TkIrScD.png"
        })
        .then(() => {
            setComment('')
            fetchComments()
        })
    }


    return (
        <View style={styles.container} >
            <Image source={{ uri: "https://i.imgur.com/TkIrScD.png" }} style={styles.image} />
            <View style={{flex:1, paddingLeft:8}}>
                <TextInput 
                    style={styles.textInput} 
                    placeholder="Add a comment" 
                    value={comment}
                    onChangeText={(newValue) => setComment(newValue)}
                    multiline={true}
                    numberOfLines={6}
                />
            </View>
            
            <TouchableOpacity
                onPress={() => addComment()}
                style={{paddingRight: 12, paddingLeft:8}}
            >
                <SimpleLineIcons  name="paper-plane" size={32} color="black" />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container :{
        flex:1,
        flexDirection:'row',
        paddingLeft: 16,
        paddingBottom: 16
    },
    image:{
        width: 44, 
        height: 44
    },
    textInput:{
        marginLeft: 12,
        marginRight: 12,
        borderWidth: 1,
        borderColor: 'lightgray',
        borderRadius: 4,
        height: 44,
        textAlignVertical:'top',
        paddingTop: 0,
        paddingBottom: 0

    }
})
