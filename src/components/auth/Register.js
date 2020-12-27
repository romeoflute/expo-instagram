import React, { useState } from 'react'
import { Button, TextInput, View, StyleSheet } from 'react-native'
import Firebase from '../../../config/FirebaseConfig'


const Register = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')

    const onSignUp = () => {
        Firebase.auth().createUserWithEmailAndPassword(email, password).then((result) => {
            console.log("signup result: ", result)
        })
        .catch((error) => {
            console.log("signup error: ", error)
        })
    }

    return (
        <View style={styles.container}>
            <TextInput 
                placeholder="name"
                value={name}
                onChangeText={(newName) => {
                    setName(newName)
                }}
            />
            <TextInput 
                placeholder="email"
                value={email}
                onChangeText={(newEmail) => {
                    setEmail(newEmail)
                }}
            /> 
            <TextInput 
                placeholder="password"
                secureTextEntry={true}
                value={password}
                onChangeText={(newPassword) => {
                    setPassword(newPassword)
                }}
            /> 
            <Button
            title="Sign Up"
            onPress={() => {
                onSignUp()
            }}
        />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
    }, 
    input:{
        fontSize: 12,
        paddingTop: 12,
        height: 40,
        borderColor: 'gray', 
        borderWidth: 1,
        marginTop: 16,
    },
    loginScreenButton:{
        alignSelf: 'stretch',
        height: 50,
        backgroundColor: 'black',
        justifyContent: 'center'
    },
    loginText:{
        font: 22,
        fontWeight: 700,
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

