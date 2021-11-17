import React from 'react'
import { Image, StyleSheet, Text, View, Pressable } from 'react-native'

export default function TaskTile({task, onUpdateTask, onDeleteTask }) {

    const onChangeStatus = () => {
        onUpdateTask(task.id)
    }

    const _onDeleteTask = () => {
        onDeleteTask(task.id)
    }

    return (
        <View style={styles.inlineTask}>
            <Pressable style={styles.groupTitle} onPress={onChangeStatus}>
                <Image
                    style={styles.icons}
                    source={task.isCompleted ? require('../../../assets/icons/check.png') : require('../../../assets/icons/circle.png')}
                />
                <Text style={styles.titleTask}>{task.title}</Text>
            </Pressable>
            <Pressable onPress={_onDeleteTask}>
            <Image
                style={styles.icons}
                source={require('../../../assets/icons/delete.png')}
            />
            </Pressable>
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
