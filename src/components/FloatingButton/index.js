import React from 'react'
import { StyleSheet, Pressable, Text, Image } from 'react-native'

const FloatingButton = ({toggle, isOpen}) => {
    return (
        <Pressable onPress={toggle}>
            <Image
                    style={styles.icons}
                    source={isOpen ? require('../../../assets/icons/close.png') : require('../../../assets/icons/plus.png')}
                />
        </Pressable>
    )
}

export default FloatingButton

const styles = StyleSheet.create({
    icons:{
        width:70,
        height:70
    }
})