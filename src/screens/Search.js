import React, {useState} from 'react'
import {View, Text, TextInput, FlatList} from 'react-native'
import Firebase from '../../config'
import firebase from 'firebase'

const Search = () => {

    const [users, setUsers] = useState([])

    const fetchUsers = (search) => {
        Firebase.firestore()
        .collection('users')
        .where('name', '>=', 'search')
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
        <View>
            <TextInput
                onChangeText={(search) => fetchUsers(search)} 
            />

            <FlatList 
                numColumns={1}
                horizontal={false}
                data={users}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => (
                    <Text>{item.name}</Text>
                )}
            />
        </View>
    )
}

export default Search