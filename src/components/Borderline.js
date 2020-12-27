import React from 'react'
import {View, StyleSheet} from 'react-native'
import width from '../utilities/constants'

const Borderline = () => {
    return (
        <View
            style={styles.lineStyle}
        />
    )
}

const styles=StyleSheet.create({
    lineStyle:{
        alignSelf: 'stretch', 
        height: 0.5, 
        backgroundColor: 'grey'
   }
})

export default Borderline