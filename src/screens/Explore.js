import React, {useState} from 'react'
import {View, Text, TextInput, FlatList} from 'react-native'
import Firebase from '../../config/FirebaseConfig'
import firebase from 'firebase'

const Explore = () => {

    const [users, setUsers] = useState([])

    const fetchUsers = (search) => {

        console.log("now searching: ", search)

        Firebase.firestore()
        .collection('users')
        .where('username', '>=', search)
        .get()
        .then((snapshot) => {
            if (snapshot.docs.length > 0){
                console.log("snapshots.doc for searched users ", snapshot)
                let users = snapshot.docs.map((doc) => doc.data())
                setUsers(users)
            }
            else{
                console.log("there was an error while searching users")
                console.log("snapshots.doc: ", snapshot)
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
                keyExtractor={(item) => item.id}
                renderItem={({item}) => (
                    <Text>{item.name}</Text>
                )}
            />
        </View>
    )
}

export default Explore