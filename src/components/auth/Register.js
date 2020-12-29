import React, { useState } from 'react'
import { Image, Text, TouchableOpacity, TextInput, View, StyleSheet } from 'react-native'
import Firebase from '../../../config/FirebaseConfig'
import {TEXT_SIGN_UP, TEXT_SIGNUP_NOTE} from '../../utilities/constants'
import Borderline from '../Borderline'
import userplaceholder from '../../../assets/user-placeholder.jpg'; 

const Register = ({navigation}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')

    const splitStringToArray = (str) => {
        let trimmedText = str.replace((/  |\r\n|\n|\r|!|"|\t|\s/gm), "");

        let substringArray = []
        for (let i = 1; i < trimmedText.length + 1; i++) {
            let substringPrefix = trimmedText.substring(0, i)
            substringArray.push(substringPrefix)
        }

        return substringArray
    }

    const onSignUp = () => {
        Firebase.auth().createUserWithEmailAndPassword(email, password).then((result) => {
            Firebase.firestore().collection("users").doc(Firebase.auth().currentUser.uid)
            .set({
                uid: Firebase.auth().currentUser.uid,
                username,
                email,
                keywords: splitStringToArray(username.toLowerCase())
            })
        })
        .catch((error) => {
            console.log("signup error: ", error)
        })
    }

    return (
        <View style={styles.container}>
            <View style={{marginTop: 24, marginBottom: 120 }}>
                <TouchableOpacity
                    onPress={() => console.log("image tapped")}
                >
                    <Image 
                        source={userplaceholder} 
                        style={styles.userplaceholder}
                    />
                </TouchableOpacity>
            </View>
            <TextInput 
                placeholder="Username"
                value={username}
                onChangeText={(newUsername) => {
                    setUsername(newUsername)
                }}
                style={styles.input}
            />
            <TextInput 
                placeholder="email"
                value={email}
                onChangeText={(newEmail) => {
                    setEmail(newEmail)
                }}
                style={styles.input}
            /> 
            <TextInput 
                placeholder="password"
                secureTextEntry={true}
                value={password}
                onChangeText={(newPassword) => {
                    setPassword(newPassword)
                }}
                style={styles.input}
            /> 
            <TouchableOpacity
                style={styles.loginScreenButton}
                onPress={() => onSignUp()}
                underlayColor='black'
            >
                <Text style={styles.loginText}>{TEXT_SIGN_UP}</Text>
            </TouchableOpacity>

            <Borderline style/>

            <Text style={{marginTop: 22}}>{TEXT_SIGNUP_NOTE}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
        alignItems: 'center'
    }, 
    userplaceholder:{
        width: 140,
        height: 140,
        resizeMode: 'contain', 
        borderRadius: 150 / 2,
        overflow: "hidden",
        borderWidth: 0.5,
        borderColor: "lightgray"   
    },
    input:{
        fontSize: 12,
        paddingTop: 12,
        height: 40,
        borderColor: 'gray', 
        borderWidth: 1,
        marginTop: 16,
        alignSelf: 'stretch',
        marginLeft: 25,
        marginRight: 25,
        paddingLeft: 8,
        borderRadius: 4
    },
    loginScreenButton:{
        alignSelf: 'stretch',
        height: 50,
        backgroundColor: 'black',
        justifyContent: 'center',
        marginTop: 16,
        marginBottom: 16,
        marginLeft: 25,
        marginRight: 25,
        borderRadius: 4
    },
    loginText:{
        fontSize: 22,
        fontWeight: "700",
        color: 'white',
        textAlign:'center'
    }
})

export default Register


/*
import React, { Component } from 'react'
import { Button, TextInput, View } from 'react-native'
import Firebase from '../../../config/FirebaseConfig'



export default class Register extends Component {

    constructor(props){
        super(props)

        this.state = {
            email: '',
            password: '',
            name: ''
        }
        this.onSignUp = this.onSignUp.bind(this)
    }

    onSignUp(){
        const {email, password, name} = this.state
        Firebase.auth().createUserWithEmailAndPassword(email, password).then((result) => {
            console.log("signup result: ", result)
        })
        .catch((error) => {
            console.log("signup error: ", error)
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput 
                    placeholder="name"
                    value={this.state.name}
                    onChangeText={(name) => {
                        this.setState({name})
                    }}
                />
                <TextInput 
                    placeholder="email"
                    value={this.state.email}
                    onChangeText={(email) => {
                        this.setState({email})
                    }}
                /> 
                <TextInput 
                    placeholder="password"
                    secureTextEntry={true}
                    value={this.state.password}
                    onChangeText={(password) => {
                        this.setState({password})
                    }}
                /> 
                <Button
                title="Sign Up"
                onPress={() => {
                   this.onSignUp()
                }}
            />
            </View>
        )
    }
}
*/

