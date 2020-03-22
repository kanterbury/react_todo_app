import { createStore } from 'redux';

const initData = {
  todoList:[{message:'sample', created:new Date()}],
  doneList:[{message:'sample done', created:new Date()}],
  mode:'default',
  fTodoList:[],
  fDoneList:[]
};

// レデューサー
export function todoReducer(state = initData, action) {  
  switch (action.type) {
    case 'ADD':
      return addReduce(state, action);

    case 'DELETE_TODO':
      return deleteTodoReduce(state, action);

      case 'DELETE_DONE':
        return deleteDoneReduce(state, action);

    case 'FIND':
      return findReduce(state, action);

    case 'DONE_TODO':
      return doneTodoReduce(state, action);

    default:
      return state;
  }
}

// レデュースアクション

// タスク追加のレデュース処理
function addReduce(state, action){
  let newTodo = {
    message:action.message,
    created:new Date()
  };
  let newTodoList = state.todoList.slice();
  newTodoList.unshift(newTodo);
  return {
    todoList:newTodoList,
    doneList:state.doneList,
    mode:'default',
    fTodoList:[],
    fDoneList:[]
  };
}

// タスク検索のレデュース処理
function findReduce(state, action){
  let f = action.find;
  let fTodoList = [];
  let fDoneList = [];
  
  state.todoList.forEach((value)=>{
    if (value.message.indexOf(f) >= 0){
      fTodoList.push(value);
    }
  });

  state.doneList.forEach((value) => {
    if (value.message.indexOf(f) >= 0) {
      fDoneList.push(value);
    }
  });
  
  return {
    todoList:state.todoList,
    doneList:state.doneList,
    mode:'find',
    fTodoList:fTodoList,
    fDoneList:fDoneList
  };
}

// 未完了タスク削除のレデュース処理
function deleteTodoReduce(state, action){
  let newTodoList = state.todoList.slice();
  newTodoList.splice(action.index, 1);
  return {
    todoList:newTodoList,
    doneList:state.doneList,
    mode:'delete',
    fTodoList:[],
    fDoneList:[]
  }
}

// 完了タスク削除のレデュース処理
function deleteDoneReduce(state, action){
  let newDoneList = state.doneList.slice();
  newDoneList.splice(action.index, 1);
  return {
    todoList:state.todoList,
    doneList:newDoneList,
    mode:'delete',
    fTodoList:[],
    fDoneList:[]
  }
}

//Todo完了のレデュース処理
function doneTodoReduce(state, action){
  //doneListに完了したTodoを追加
  let newDone = {
    message:state.todoList[action.index].message,
    created:new Date()
  };
  let newDoneList = state.doneList.slice();
  newDoneList.unshift(newDone);
  //todoListから完了したタスクを削除
  let newTodoList = state.todoList.slice();
  newTodoList.splice(action.index, 1);
  return {
    todoList:newTodoList,
    doneList:newDoneList,
    mode:'default',
    fTodoList:[],
    fDoneList:[]
  };
}

// アクションクリエーター

// タスク追加のアクション
export function addTodo(text) {
  return {
    type: 'ADD',
    message:text
  }
}

// タスク削除のアクション
export function deleteTodo(num) {
  return {
    type: 'DELETE_TODO',
    index:num
  }
}

// タスク削除のアクション
export function deleteDone(num) {
  return {
    type: 'DELETE_DONE',
    index:num
  }
}

// タスク検索のアクション
export function findTodo(text) {
  return {
    type: 'FIND',
    find:text
  }
}

//Todo完了のアクション
export function doneTodo(num) {
  return {
    type: 'DONE_TODO',
    index:num
  }
}

// ストアを作成
export default createStore(todoReducer);