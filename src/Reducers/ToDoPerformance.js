/** @format */

const initialValue = {
  list: [],
};
const ToDoReducer = (state = initialValue, action) => {
  switch (action.type) {
    case "ADD_TEXT":
      const { id, data } = action.payload;
      return {
        ...state,
        list: [
          ...state.list,
          {
            id: id,
            data: data,
          },
        ],
      };
    case "DELETE_TEXT":
      const newList = state.list.filter((elem) => elem.id !== action.id);
      return {
        ...state,
        list: newList,
      };
    case "Remove_TEXT":
      return {
        ...state,
        list: [],
      };
    default:
      return state;
  }
};
export default ToDoReducer;
