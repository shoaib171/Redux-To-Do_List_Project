/** @format */

import React from "react";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import { useDispatch, useSelector } from "react-redux";
import { AddText, DeleteText, RemoveText } from "../Actions/actions";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
const Input = (props) => {
  console.log(props, "");
  const inputStyle = {
    width: "400px",
    position: "relative",
    top: "10px",
  };
  const IconStyle = {
    position: "relative",
    top: "15px",
    fontSize: "40px",
  };
  const [InputData, setInputData] = useState();
  const dispatch = useDispatch();
  const list = useSelector((state) => state.ToDoReducer.list);
  return (
    <>
      <div className="Container">
        <TextField
          style={inputStyle}
          label={props.List}
          value={InputData}
          onChange={(e) => setInputData(e.target.value)}
        />
        <AddCircleRoundedIcon
          style={IconStyle}
          title="Add Item"
          onClick={() => dispatch(AddText(InputData), setInputData(""))}
        />
      </div>

      <div className="Box">
        {list?.map((element, id) => {
          return (
            <div className="eachItems" key={element.id}>
              <h3>{element.data}</h3>
              <div className="todo-btn">
                <DeleteOutlineRoundedIcon
                  onClick={() =>
                    dispatch(DeleteText(element.id), setInputData(""))
                  }
                />
              </div>
            </div>
          );
        })}
      </div>
      <div className="btn">
        <button className="Buttn" onClick={() => dispatch(RemoveText())}>
          RemoveAll..
        </button>
      </div>
    </>
  );
};

export default Input;
