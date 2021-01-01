import React, {useEffect} from 'react'
import {View, FlatList, Button, Text, Image, StyleSheet} from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import {fetchMyTimeline} from '../redux/actions/index'
import {width} from '../utilities/constants'

const Feed = ({navigation}) => {

    //get user from Redux
    const user = useSelector(state => state.user.currentUser)
    const timeline = useSelector(state => state.user.timeline)
    console.log("timeline now: ", timeline)
    console.log('user now : ', user)

    const dispatch = useDispatch()
    const getMyTimeline = () => dispatch(fetchMyTimeline())

    useEffect(() => {
        if (user){
            console.log("will call getMyTimeline()")
            getMyTimeline()
        }
    }, [user]);



    const viewComments = (post) => {
        // navigation.navigate("CommentList", {comments: post.comments})
    }

    if (user == null){
        return (
            <View></View>
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.containerInfo}>
                <Text>{user.username}</Text>
                <Text>{user.email}</Text>
            </View>
            <View style={{flex:1}}>
                <FlatList 
                    data={timeline}
                    renderItem={({item}) => {
                        return (
                            <View style={styles.containerImage}>
                                <Text style={styles.username}>{item.username}</Text>
                                <Text style={styles.caption}>{item.caption}</Text>
                                <Image 
                                    style={styles.image}
                                    source={{uri: item.mediaUrl}}
                                />
                                
                                <Text
                                    onPress={() => {
                                        navigation.navigate("CommentList", {postId: item.postId})
                                    }}
                                >
                                    View Comments...
                                </Text>
                            </View>
                        )
                    }}
                    keyExtractor={item => item.postId} 
                    contentContainerStyle={{
                        flexGrow: 1,
                        alignItems:"center"
                    }}
                />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    containerInfo:{
        margin:20,
    },
    containerGallery:{
        flex:1,
    },
    containerImage:{
    },
    image:{
        width: width,
        height:width
    },
    username:{

    },
    caption:{

    }
    
})

export default Feed