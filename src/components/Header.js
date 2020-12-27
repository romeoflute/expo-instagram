import React from 'react'
import { Image, Text, Button, TextInput, View, StyleSheet } from 'react-native'
import logo from '../../assets/logo.png'; 
import {TEXT_SIGNIN_HEADLINE, TEXT_SIGNIN_SUBHEADLINE} from '../utilities/constants'

const Header = () => {

    return (
        <View style={styles.container}>
            <Image 
                source={logo} 
                style={styles.logo}
            />
            <Text style={styles.title}>{TEXT_SIGNIN_HEADLINE}</Text>
            <Text style={styles.subtitle}>{TEXT_SIGNIN_SUBHEADLINE}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center',
    }, 
    logo:{
        width: 80,
        height: 80,
        resizeMode: 'contain'   
    },
    title:{
        fontSize: 34,
        paddingBottom: 24,
    },
    subtitle:{
        fontSize: 20,
        color: 'gray',
        paddingBottom: 12
    }
})

export default Header