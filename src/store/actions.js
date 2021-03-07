import * as actionTypes from "./actionsTypes";

export const addTodo = (text) => {
  return {
    type: actionTypes.ADD_TODO,
    data: text,
  };
};

export const deleteTodo = (id) => {
  return {
    type: actionTypes.DELETE_TODO,
    data: id,
  };
};

export const doneTodo = (id) => {
  return {
    type: actionTypes.DONE_TODO,
    data: id,
  };
};

// is a toggle
export const selectTodo = (id) => {
  return {
    type: actionTypes.SELECT_TODO,
    data: id,
  };
};

// is a toggle
export const selectAll = () => {
  return {
    type: actionTypes.SELECT_ALL,
    data: null,
  };
};

export const bulkDelete = () => {
  return {
    type: actionTypes.BULK_DELETE,
    data: null,
  };
};

export const bulkDone = () => {
  return {
    type: actionTypes.BULK_DONE,
    data: null,
  };
};
