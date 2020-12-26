import React, {useEffect} from 'react'
import {View, FlatList, SafeAreaView, Text, Image, TouchableOpacity, StyleSheet} from 'react-native'
import {width} from '../utilities/constants'

const Grid = ({data}) => {

    let splitArray = [[]]
    useEffect(() => {
        splitArray = makeData(data)
    })


    const makeData = (data) => {
        console.log("inside makeData")
        let array = []

        for(let i=0; i < data.length; i += 3){
            array.push(data.slice(i, i+3))
        }

        console.log("arranged array: ", array)
        return array
    }

    return (
        <SafeAreaView style={{flex: 1}}>
            <FlatList 
                data={splitArray}
                renderItem={({item}) => {
                    console.log("item is: ", item)
                    return (
                        <View style={styles.row}>
                            {item.map((thumb) => {
                                console.log("thumb ", thumb)
                                return (
                                    <Image source={{url: thumb.picture}} style={styles.picture}/>
                                )
                            })}

                        </View>
                    );
                }}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    )
}

let styles = StyleSheet.create({
    row: {
        flexDirection: "row"
    },
    picture: {
        width: width / 3,
        height: width / 3
    }
})

export default Grid