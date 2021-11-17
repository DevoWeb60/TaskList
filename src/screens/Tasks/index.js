import React, { useState } from 'react'
import { Text, View, FlatList } from 'react-native'

import TaskTile from './TaskTile'
import Header from "../../components/Header"

export default function TasksScreen() {
    const [tasks, setTasks] = useState([
        {title: "Hello World", isCompleted: false}
    ])

    const renderItem = ({item}) => {
        return <TaskTile task={item} />
    }

    return (
            <FlatList 
                ListHeaderComponent={<Header/>}
                contentContainerStyle={{flexGrow:1}}
                data={tasks}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderItem}
            />
    )
}
