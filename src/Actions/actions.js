/** @format */

export const AddText = (data) => {
  return {
    type: "ADD_TEXT",
    payload: {
      id: new Date().getTime().toString(),
      data: data,
    },
  };
};
export const DeleteText = (id) => {
  return {
    type: "DELETE_TEXT",
    id,
  };
};
export const RemoveText = () => {
  return {
    type: "Remove_TEXT",
  };
};
