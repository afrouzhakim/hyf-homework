import React, { Component } from 'react';
import Item from './Item';

export default class TodoItem extends Component {
    
    state =  {
        todoListItems:[
            {
                id: 1,
                task: 'Get out of bed',
                date: 'Wed Sep 13 2017',
            },
            {
                id: 2,
                task: 'Brush Teeth',
                date: 'Thu Sep 14 2017',
            },
            {
                id: 3,
                task: 'Eat breakfast',
                date: 'Fri Sep 15 2017',
            }
    ]};        

    render() { 
        const TodoList = this.state.todoListItems.map((todo) => (
            <Item
                key={todo.id}
                task={todo.task}
                date={todo.date}
            />
        ));
        return <ul>{TodoList}</ul>;
    
    }
    }