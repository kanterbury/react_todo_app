import { createStore } from 'redux';

const initData = {
  data:[{message:'sample data', created:new Date()}],
  message:'please type message:',
  mode:'default',
  fdata:[]
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
  let data = {
    message:action.message,
    created:new Date()
  };
  let newdata = state.data.slice();
  newdata.unshift(data);
  return {
    data:newdata,
    message:'Added!',
    mode:'default',
    fdata:[]
  };
}

// メモ検索のレデュース処理
function findReduce(state, action){
  let f = action.find;
  let fdata = [];
  let message = "";
  if(f != "" && f != null){
    state.data.forEach((value)=>{
      if (value.message.indexOf(f) >= 0){
        fdata.push(value);
      }
    });
    message = 'find "' + f + '":';
  } else {
    fdata = state.data;
    message = 'please type message:';
  }
  
  return {
    data:state.data,
    message:message,
    mode:'find',
    fdata:fdata
  };
}

// メモ削除のレデュース処理
function deleteReduce(state, action){
  let newdata = state.data.slice();
  newdata.splice(action.index, 1);
  return {
    data:newdata,
    message:'delete "' + action.index + '":',
    mode:'delete',
    fdata:[]
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