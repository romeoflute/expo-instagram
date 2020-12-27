import React, { useState } from 'react'
import { TouchableOpacity, Text, TextInput, View, StyleSheet } from 'react-native'
import Firebase from '../../../config/FirebaseConfig'
import Header from '../Header'
import Borderline from '../Borderline'
import {TEXT_NEED_AN_ACCOUNT, TEXT_SIGN_UP} from '../../utilities/constants'

const Login = ({navigation}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onSignIn = () => {
        Firebase.auth().signInWithEmailAndPassword(email, password).then((result) => {
            console.log("login result: ", result)
        })
        .catch((error) => {
            console.log("login error: ", error)
        })
    }

    return (
        <View style={styles.container} >
            <View style={{flex:1, justifyContent: 'flex-end', alignItems: 'center'}} >
                <View style={{paddingBottom: 12}} >
                    <Header />
                </View>
                <Borderline style/>
            </View>
            <View style={{flex:1, justifyContent: 'flex-start', alignSelf: 'stretch', paddingTop: 16}}>
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
                        onPress={() => onSignIn()}
                        underlayColor='black'
                    >
                        <Text style={styles.loginText}>Sign in</Text>
                </TouchableOpacity>
                <View style={{marginTop: 16}}>
                    <Borderline style/>
                </View>
                <View style={{flexDirection: 'row', marginTop: 16, marginLeft: 25, marginRight: 25}}>
                    <Text style={{fontSize: 12}} >{TEXT_NEED_AN_ACCOUNT}</Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Register')}
                    >
                        <Text style={{marginLeft: 16, fontSize: 20, fontWeight: 700}} >{TEXT_SIGN_UP}</Text>
                    </TouchableOpacity>
                </View>
                
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
    }, 
    logo:{
        width: 80,
        height: 80,
        resizeMode: 'contain'
    },
    input:{
        fontSize: 12,
        height: 40,
        borderColor: 'gray', 
        borderWidth: 1,
        marginTop: 16,
        paddingLeft: 8,
        marginLeft: 25, 
        marginRight: 25, 
        borderRadius: 4
    },
    loginScreenButton:{
        alignSelf: 'stretch',
        height: 50,
        backgroundColor: 'black',
        justifyContent: 'center',
        marginTop: 16,
        marginLeft: 25, 
        marginRight: 25, 
        borderRadius: 4
    },
    loginText:{
        fontSize: 22,
        fontWeight: 700,
        color: 'white',
        textAlign:'center'
    }
})

export default Login



/*
import React, { Component } from 'react'
import { Button, TextInput, View } from 'react-native'
import Firebase from '../../../config/FirebaseConfig'

export default class Login extends Component {

    constructor(props){
        super(props)

        this.state = {
            email: '',
            password: '',
        }
        this.onSignIn = this.onSignIn.bind(this)
    }

    onSignIn(){
        const {email, password} = this.state
        Firebase.auth().signInWithEmailAndPassword(email, password).then((result) => {
            console.log("login result: ", result)
        })
        .catch((error) => {
            console.log("login error: ", error)
        })
    }

    render() {
        return (
            <View  style={styles.container}>
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
                    title="Log In"
                    onPress={() => {
                    this.onSignIn()
                    }}
                />
            </View>
        )
    }
}
*/


