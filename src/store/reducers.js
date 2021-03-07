import * as actionTypes from "./actionsTypes";
import { combineReducers } from "redux";

const todosInitialState = {
  isSelectAll: false,
  lastId: 0,
  todosList: [],
};

const todosReducer = (state = todosInitialState, action) => {
  let newState = {};
  switch (action.type) {
    case actionTypes.ADD_TODO:
      newState = {
        isSelectAll: false, // because new element will be unselected by default
        lastId: state.lastId + 1,
        todosList: state.todosList.map((e) => {
          return {
            ...e,
          };
        }),
      };
      newState.todosList.push({
        id: state.lastId + 1,
        value: action.data,
        isSelected: false,
        isDone: false,
      });
      return newState;
    case actionTypes.DELETE_TODO:
      newState = {
        isSelectAll: state.isSelectAll,
        lastId: state.lastId,
        todosList: state.todosList
          .filter((e) => e.id !== action.data)
          .map((e) => {
            return {
              ...e,
            };
          }),
      };
      if (!newState.todosList.length) {
        newState.isSelectAll = false; // because there are no elements in the list
      }
      return newState;
    case actionTypes.DONE_TODO:
      newState = {
        isSelectAll: state.isSelectAll,
        lastId: state.lastId,
        todosList: state.todosList.map((e) => {
          let todo = {
            ...e,
          };
          if (todo.id === action.data) {
            todo.isDone = !todo.isDone;
          }
          return todo;
        }),
      };
      return newState;
    case actionTypes.SELECT_TODO:
      let countSelected = 0;
      newState = {
        isSelectAll: state.isSelectAll,
        lastId: state.lastId,
        todosList: state.todosList.map((e) => {
          let todo = {
            ...e,
          };
          if (todo.id === action.data) {
            todo.isSelected = !todo.isSelected;
          }
          if (todo.isSelected) {
            countSelected++;
          }
          return todo;
        }),
      };
      if (countSelected === newState.todosList.length) {
        newState.isSelectAll = true; // because all elements are selected
      } else {
        newState.isSelectAll = false; // because at least one element is not selected
      }
      return newState;
    case actionTypes.SELECT_ALL:
      if (!state.todosList.length) {
        return state;
      }
      newState = {
        isSelectAll: !state.isSelectAll,
        lastId: state.lastId,
        todosList: state.todosList.map((e) => {
          let todo = {
            ...e,
            isSelected: !state.isSelectAll,
          };
          return todo;
        }),
      };
      return newState;
    case actionTypes.BULK_DELETE:
      newState = {
        isSelectAll: false, // because all the selected elements will be deleted
        lastId: state.lastId,
        todosList: state.todosList
          .map((e) => {
            return {
              ...e,
            };
          })
          .filter((e) => !e.isSelected),
      };
      return newState;
    case actionTypes.BULK_DONE:
      newState = {
        isSelectAll: state.isSelectAll,
        lastId: state.lastId,
        todosList: state.todosList.map((e) => {
          return {
            ...e,
            isDone: e.isSelected, // is not a toggle
          };
        }),
      };
      return newState;
    default:
      return state;
  }
};

export default combineReducers({ todos: todosReducer });
