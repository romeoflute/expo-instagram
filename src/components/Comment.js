import React from 'react'
import {View, Text, Image, StyleSheet} from 'react-native'

const Comment = ({oneComment}) => {
    const {avatarUrl, username, comment} = oneComment
    return (
        <View style={styles.container} >
            <Image style={styles.profilePic} source={{uri: avatarUrl}} />
            <View style={styles.text}>
                <Text style={styles.username}>{username}</Text>
                <Text style={styles.comment}>{comment}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        paddingRight: 10, 
        paddingLeft: 10,
        marginBottom: 10
    },
    profilePic:{
        width: 45, 
        height: 45,
    },
    text:{
        paddingLeft: 10,
        paddingRight: 10,
        textAlign: "left"
    },
    username:{
        fontSize: 17,
        fontWeight: "600"
    },
    comment:{
        fontSize: 17,
        fontWeight: "500"
    }
})

export default Comment