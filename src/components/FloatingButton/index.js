import React from 'react'
import { StyleSheet, Pressable, Text } from 'react-native'

const FloatingButton = ({toggle, isOpen}) => {
    return (
        <Pressable style={styles.floatButton} onPress={toggle}>
            <Text style={styles.plus}>{isOpen ? "x" : "+" } </Text>
        </Pressable>
    )
}

export default FloatingButton

const styles = StyleSheet.create({
    floatButton:{
        width:50,
        height:50,
        borderRadius:50,
        backgroundColor:'red',
        position:'absolute',
        bottom:30,
        right:30,
        flexDirection:'row',
        justifyContent:'center',
    },
    plus:{
        fontSize:50,
        color:'white',
        textAlign:'center',
        marginTop:-9,
    },
})