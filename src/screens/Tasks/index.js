import React, { useState } from 'react'
import { FlatList, StyleSheet, View} from 'react-native'
import { useSelector, useDispatch } from 'react-redux'

import TaskTile from './TaskTile'
import Header from "../../components/Header"
import TaskForm from './TaskForm'
import FloatingButton from '../../components/FloatingButton'
import Counter from '../../components/Counter'
import { deleteTask, toggleTask } from '../../redux/actions'
import { getTasks } from '../../redux/selectors'

export default function TasksScreen() {
    const [toggleForm, setToggleForm] = useState(false)
    const dispatch = useDispatch()
    const tasks = useSelector(getTasks)

    const _onToggleForm = () => {
        setToggleForm(!toggleForm)
    }

    const renderItem = ({item}) => {
        return <TaskTile task={item} onUpdateTask={onUpdateTask} onDeleteTask={onDeleteTask}/>
    }

    const onDeleteTask = (id) => {
        dispatch(deleteTask(id))
    }

    const onUpdateTask = (id) => {
        dispatch(toggleTask(id))
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
                    { toggleForm && <TaskForm/>}
                </>
                }
                contentContainerStyle={{flexGrow:1}}
                data={tasks}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderItem}
                style={styles.container}
            />
            <View style={styles.btnContainer}>
                <FloatingButton toggle={_onToggleForm} isOpen={toggleForm} />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    counterContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:20,
    },
    btnContainer:{
        alignItems: 'flex-end',
        padding:30
    }
})
