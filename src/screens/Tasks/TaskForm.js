import React, {useState} from 'react'
import { Button, StyleSheet, TextInput, View } from 'react-native'

const TaskForm = ({onAddTask}) => {
    const [newTitle, setNewTitle] = useState("")

    const onChangeText = (val) => {
        setNewTitle(val)
    }

    const onAddNewTask = () => {
        if (newTitle === '') return

        onAddTask(newTitle)
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
                color="red"
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
        borderColor:'red',
        borderBottomWidth:1,
        height:30,
        fontSize:18,
        paddingHorizontal:10
    },
    button: {
        backgroundColor:'red',
        borderRadius:5
    }
})

export default TaskForm