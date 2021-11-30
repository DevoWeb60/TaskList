import {ADD_TASK, TOGGLE_TASK, DELETE_TASK} from '../actions/actionsType'

const initialState = [{id: 1, title:"Tâches de base", isCompleted: false}]

export const tasksList = (state = initialState, action) => {
    switch(action.type){
        case ADD_TASK:
            return [...state, {
                id: Date.now(),
                title: action.payload.title,
                isCompleted: false
            }]
        case TOGGLE_TASK: 
            let newState = []
            state.forEach(task => {
                if(task.id === action.payload.id){
                    newState.push({
                        ...task, 
                        isCompleted: !task.isCompleted
                    })
                    return
                }
                newState.push(task)
            })
            return newState
        case DELETE_TASK:
            return state.filter(task => task.id !== action.payload.id)
        default: 
            return state
    }
}
