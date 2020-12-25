import React from 'react'
import {SafeAreaView, FlatList, Text, StyleSheet} from 'react-native'
import  Comment from '../components/Comment'

const CommentList = ({route}) => {
    
    const {comments} = route.params
    
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={comments}
                renderItem= {({item}) => {
                    return (
                        Comment({"oneComment": item})
                    )
                }}
                keyExtractor={ item => item.id.toString() }
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

export default CommentList