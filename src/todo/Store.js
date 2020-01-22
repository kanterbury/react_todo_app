import { createStore } from 'redux';

const initData = {
  todoList:[{message:'sample', created:new Date()}],
  mode:'default',
  fTodoList:[]
};

// レデューサー
export function todoReducer(state = initData, action) {
  switch (action.type) {
    case 'ADD':
      return addReduce(state, action);

    case 'DELETE':
      return deleteReduce(state, action);

    case 'FIND':
      return findReduce(state, action);

    default:
      return state;
  }
}

// レデュースアクション

// メモ追加のレデュース処理
function addReduce(state, action){
  let newTodo = {
    message:action.message,
    created:new Date()
  };
  let newTodoList = state.todoList.slice();
  newTodoList.unshift(newTodo);
  return {
    todoList:newTodoList,
    mode:'default',
    fTodoList:[]
  };
}

// メモ検索のレデュース処理
function findReduce(state, action){
  let f = action.find;
  let fTodoList = [];
  
  state.todoList.forEach((value)=>{
    if (value.message.indexOf(f) >= 0){
      fTodoList.push(value);
    }
  });
  
  return {
    todoList:state.todoList,
    mode:'find',
    fTodoList:fTodoList
  };
}

// メモ削除のレデュース処理
function deleteReduce(state, action){
  let newTodoList = state.todoList.slice();
  newTodoList.splice(action.index, 1);
  return {
    todoList:newTodoList,
    mode:'delete',
    fTodoList:[]
  }
}

// アクションクリエーター

// メモ追加のアクション
export function addTodo(text) {
  return {
    type: 'ADD',
    message:text
  }
}

// メモ削除のアクション
export function deleteTodo(num) {
  return {
    type: 'DELETE',
    index:num
  }
}

// メモ検索のアクション
export function findTodo(text) {
  return {
    type: 'FIND',
    find:text
  }
}

// ストアを作成
export default createStore(todoReducer);