import React, {useState} from 'react'
import { Button, StyleSheet, TextInput, View } from 'react-native'
import { useDispatch } from 'react-redux'

import { addTask } from '../../redux/actions'

const TaskForm = () => {
    const [newTitle, setNewTitle] = useState("")
    const dispatch = useDispatch()

    const onChangeText = (val) => {
        setNewTitle(val)
    }

    const onAddNewTask = () => {
        if (newTitle === '') return

        dispatch(addTask(newTitle))
        setNewTitle('')
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput 
                style={styles.input}
                onChangeText={onChangeText}
                value={newTitle}
                placeholder="Nouvelle tâche"
            />
            <Button 
                onPress={onAddNewTask}
                title="Ajouter"
                color="#E04F5F"
                style={styles.button}

            />
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        paddingHorizontal:20,
        marginTop:10
    },
    input:{
        borderColor:'#E04F5F',
        borderBottomWidth:1,
        height:30,
        fontSize:18,
        paddingHorizontal:10
    },
    button: {
        backgroundColor:'#E04F5F',
        borderRadius:15
    }
})

export default TaskForm