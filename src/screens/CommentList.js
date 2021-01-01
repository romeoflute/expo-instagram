import React, {useEffect, useState} from 'react'
import {SafeAreaView, FlatList, StyleSheet, View} from 'react-native'
import  Comment from '../components/Comment'
import AddComment from '../components/AddComment'
import Firebase from '../../config/FirebaseConfig'

const CommentList = ({route}) => {
    
    const {postId} = route.params
    const [comments, setComments] = useState([])

    useEffect(() => {
        fetchComments()
    }, [postId])

    const fetchComments = () => {
        Firebase.firestore()
        .collection("comments")
        .doc(postId)
        .collection("postComments")
        .orderBy("date", "asc")
        .get()
        .then((snapshot) => {
            if (snapshot.docs.length > 0){
                let comments = snapshot.docs.map((doc) => doc.data())
                setComments(comments)
            }
            else{
                setComments([])
            }
        })
    }
    
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={comments}
                renderItem= {({item}) => {
                    return (
                        Comment({"oneComment": item})
                    )
                }}
                keyExtractor={ item => item.id }
            />
            <View>
                <AddComment postId={postId} fetchComments={fetchComments} />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent:'space-between'
    }
})

export default CommentList