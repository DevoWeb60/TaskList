import {ADD_TASK, TOGGLE_TASK, DELETE_TASK} from './actionsType'

// TASKS 
export function addTask(title){
    return {
        type: ADD_TASK,
        payload: {
            title
        }
    }
}

export function toggleTask(id){
    return {
        type: TOGGLE_TASK,
        payload: {id}
    }
}

export function deleteTask(id){
    return {
        type: DELETE_TASK,
        payload: {id}
    }
}