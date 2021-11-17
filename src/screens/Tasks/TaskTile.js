import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

export default function TaskTile({task}) {


    return (
        <View style={styles.inlineTask}>
            <View style={styles.groupTitle}>
                <Image
                    style={styles.icons}
                    source={require('../../../assets/icons/circle.png')}
                />
                <Text style={styles.titleTask}>{task.title}</Text>
            </View>
            <Image
                style={styles.icons}
                source={require('../../../assets/icons/delete.png')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    icons: {
        width:26,
        height:26
    },
    inlineTask: {
        flex:1,
        padding:20,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    titleTask: {
        fontSize:18,
        marginLeft:20
    },
    groupTitle:{
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center'
    }
})
