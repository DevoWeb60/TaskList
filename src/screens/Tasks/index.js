import React, { useState } from 'react'
import { FlatList, StyleSheet, View} from 'react-native'

import TaskTile from './TaskTile'
import Header from "../../components/Header"
import TaskForm from './TaskForm'
import FloatingButton from '../../components/FloatingButton'
import Counter from '../../components/Counter'

export default function TasksScreen() {
    const [tasks, setTasks] = useState([])
    const [toggleForm, setToggleForm] = useState(false)

    const _onToggleForm = () => {
        setToggleForm(!toggleForm)
    }

    const renderItem = ({item}) => {
        return <TaskTile task={item} onUpdateTask={onUpdateTask} onDeleteTask={onDeleteTask}/>
    }

    const onAddTask = (title) => {
        setTasks([...tasks, {
            id: Date.now(),
            title,
            isCompleted : false
        }])
    }

    const onDeleteTask = (id) => {
        let newTasks = []
    
        tasks.forEach(t => {
            if(t.id !== id){
                newTasks.push(t)
                return
            }
        })
    
        setTasks(newTasks)
    }

    const onUpdateTask = (id) => {
        let newTasks = []

        tasks.forEach(t => {
            if(t.id !== id){
                newTasks.push(t)
                return
            }

            newTasks.push({
                id,
                title: t.title,
                isCompleted: !t.isCompleted
            })
        })

        setTasks(newTasks)
    }

    let titleCounterTask = tasks.length > 1 ? "Tâches ajoutées" : "Tâche ajoutée"
    let titleCounterTaskCompleted = tasks.filter(t => t.isCompleted === true).length > 1 ? "Tâches complétées" : "Tâche complétée"

    return (
        <>
            <FlatList 
                ListHeaderComponent={
                <>
                    <Header/>
                    <View style={styles.counterContainer}>
                        <Counter nb={tasks.length} title={titleCounterTask} align={true}/>
                        <Counter nb={tasks.filter(t => t.isCompleted === true).length} title={titleCounterTaskCompleted} align={false}/>
                    </View>
                    { toggleForm && <TaskForm onAddTask={onAddTask}/>}
                </>
                }
                contentContainerStyle={{flexGrow:1}}
                data={tasks}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderItem}
            />
            <FloatingButton toggle={_onToggleForm} isOpen={toggleForm} />
        </>
    )
}

const styles = StyleSheet.create({
    counterContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:20,
    }
})
