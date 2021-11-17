import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Counter({title, nb, align}) {
    return (
        <View style={{paddingVertical:20}}>
            <Text style={[styles.nb, align ? styles.left : styles.right]}>{nb}</Text>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    title:{
        fontSize:14,
        fontWeight:"bold",
        color:"grey"
    },
    nb: {
        fontSize:18,
        fontWeight:"bold",
    },
    left:{
        textAlign:'left'
    },
    right:{
        textAlign:'right'
    }

})
