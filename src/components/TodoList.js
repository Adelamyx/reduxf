import React from 'react'
import {Input, Button, List} from 'antd'
import 'antd/dist/antd.css'
import './TodoList.css'
import store from '../store/index'
import {CHANGE_VALUE, ADD_ITEM, DELETE_ITEM, CHANGE_STATUS} from '../store/actionTypes'

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            store: store.getState(),
            mouseEnter: false,

        }
        this.storeChange = this.storeChange.bind(this)
        store.subscribe(this.storeChange)
    }

    storeChange() {
        this.setState({
            store: store.getState()
        })
    }

    changeValue(e) {
        const action = {
            type: CHANGE_VALUE,
            value: e.target.value
        }
        store.dispatch(action)
    }

    addItem() {
        const action = {
            type: ADD_ITEM
        }
        store.dispatch(action)
    }

    deleteItem(index) {
        const action = {
            type: DELETE_ITEM, 
            value: index
        }
        store.dispatch(action)
    }

    changeStatus(index) {
        const action = {
            type: CHANGE_STATUS,
            value: index
        }
        store.dispatch(action)
    }

    render() { 
        return ( 
            <div className="todolist">
                <div className="top">
                    <Input 
                        placeholder="请输入..." 
                        style={{width: '300px', marginRight: '10px'}} 
                        value={this.state.store.inputValue}
                        onChange={e => this.changeValue(e)}
                    />
                    <Button 
                        type="primary" 
                        style={{padding: '0 30px'}} 
                        onClick={this.addItem}
                    > 确定</Button>
                </div>
                <div>
                    <List 
                        bordered
                        dataSource={this.state.store.list}
                        renderItem={(item, index) => (<List.Item 
                            onClick={() => this.deleteItem(index)}
                            onMouseEnter={() => this.changeStatus(index)}
                            onMouseOut={() => this.changeStatus(index)}
                            >{item.title}</List.Item>)}
                        >
                    </List>
                </div>  
            </div>
        );
    }
}
 
export default TodoList;