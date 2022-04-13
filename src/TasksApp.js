import { useState } from "react";
import { createStore } from "redux";
import Onetask from "./Onetask.js";
import { reducer } from "./store/reducer.js";
import { useSelector, Provider, useDispatch } from "react-redux";
import { combineReducers } from "redux";
import Wrapper from "./Wrapper.js";
import { newreducer } from "./inpstore/reduser.js";

function TaskApp() {
  //Тут создаем стор, при помощи combineReducers добавляем в него два редьюсера
  let store = createStore(combineReducers({ reducer, newreducer }));

  //Интпут

  return (
    <Provider store={store}>
      <Wrapper />
    </Provider>
  );
}

export default TaskApp;
