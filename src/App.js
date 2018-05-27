import React, { Component } from 'react';

import { ListItem } from './modules/ListItem';
import { Counter } from './modules/Counter';
import { ListView } from './modules/ListView';
import { ListInput } from './modules/ListInput';

import * as todoLogic from './todoLogic';

export class App extends Component {

  state = todoLogic.createStore('', [{ text: 'Add your first todo' }]);

  handleChange = event => this.setState(
    todoLogic.changeTodo(event.target.value)
  );

  handleClickAdd = () => {
    this.setState(todoLogic.addTodo);
  };

  handleClickDelete = id => {
    this.setState(todoLogic.removeTodo(id))
  }

  render() {
    const { todo, todos } = this.state;
    return (
      <div className="todo-list">
        <h1>todos</h1>
        <Counter counter={todos.length} />
        <ListView
          items={todos}
          renderItem={todo =>
            <ListItem
              key={todo.id}
              onClickDelete={() => this.handleClickDelete(todo.id)}
              text={todo.text}
              cssClass={'todo-item'}
            />
          }
          renderEmpty={() => 'You\'re all done 🌴'}
        />
        <ListInput  handleChange={this.handleChange}
                    handleSubmit={this.handleClickAdd}
                    value={todo}
                    placeholder={'...'}
                    btnLabel={'Add'}
                    cssClass={'todo-input'}
        />
      </div>
    )
  }
}