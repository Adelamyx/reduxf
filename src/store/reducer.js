import {CHANGE_VALUE, ADD_ITEM, DELETE_ITEM, CHANGE_STATUS} from './actionTypes'

const defaultState = {
    inputValue: '',
    list: [
        {title: '学习JavaScript', status: false},
        {title: '学习python', status: false},
        {title: '学习css', status: false}
    ]
}

export default (state = defaultState, action) => {
    if (action.type === CHANGE_VALUE) {
        const newState = {...state}
        newState.inputValue = action.value
        return newState
    }

    if (action.type === ADD_ITEM) {
        const newState = {...state}
        if ( newState.inputValue === '') {
            console.log('空')
        } else {
            newState.list.push({title:state.inputValue, status: false})
            newState.inputValue = ''
        }
        return newState

    }

    if (action.type === DELETE_ITEM) {
        const newState = {...state}
        newState.list.splice(action.value, 1)
        return newState
    }
    if (action.type === CHANGE_STATUS) {
        const newState = {...state}
        newState.list[action.value].status = !newState.list[action.value].status
        return newState
    }

    
    return state
}