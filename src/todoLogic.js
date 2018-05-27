import { uniqueId } from './uniqueId';

export const createStore = (todo='', todos=[]) => ({
  todo,
  todos: todos.map(({text}) => ({text, id: uniqueId()}))
});

export const addTodo = store =>
  !!store.todo ? ({
    todos: [ ...store.todos, { text: store.todo, id: uniqueId() } ],
    todo: ''
  }) : store;

export const removeTodo = id => store => ({
  ...store, todos: store.todos.filter(todo => todo.id !== id)
});

export const changeTodo = todo => store => ({
  ...store, todo
});