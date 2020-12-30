import React, {useState} from 'react'
import {View, Text, TextInput, FlatList, TouchableOpacity} from 'react-native'
import Firebase from '../../config/FirebaseConfig'


const Explore = ({navigation}) => {

    const [users, setUsers] = useState([])

    const fetchUsers = (search) => {

        Firebase.firestore()
        .collection('users')
        .where('keywords', 'array-contains', search.toLowerCase())
        .get()
        .then((snapshot) => {
            if (snapshot.docs.length > 0){
                let users = snapshot.docs.map((doc) => doc.data())
                setUsers(users)
            }
            else{
                setUsers([])
            }
        })
    }
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems:'center'}}>
            <Text>Hello Discover</Text>
            <TextInput
                placeholder="Search users..."
                onChangeText={(search) => fetchUsers(search)} 
            />

            <FlatList 
                numColumns={1}
                horizontal={false}
                data={users}
                keyExtractor={(item) => item.uid}
                renderItem={({item}) => (
                    <TouchableOpacity onPress={() => navigation.navigate("Profile", {userUid: item.uid})}>
                        <Text>{item.username}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

export default Explore