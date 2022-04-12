import { useState } from "react";
import { createStore } from "redux";
import Onetask from "./Onetask.js";
import { reducer } from "./store/reducer.js";
import { useSelector, Provider, useDispatch } from "react-redux";
import { createTask } from "./store/action";



function Wrapper() {

  //с помощью useSelector достаем из редьюсера нащ обьект(стор)
  let app = useSelector((state) => state.reducer.tasks);
  // let secStore = useSelector((state) => state.newreducer);
  //с помощью useDispatch достаем диспатчи из обекта стор
  let dispatch = useDispatch();
 
  //Интпут
  //Тут наверно ене правильно, надо использовать REDUX, спросить у Павла
  let [inp, setInp] = useState("");


  return (
    <div>
      <h1>Мои задачи</h1>
      {app.map((task) => (
        <Onetask name = {task.text} id = {task.id} key = {task.id} />
      ))}
      <input onChange={(e) => setInp(e.target.value)} value={inp}></input>
      <button onClick={() => {return dispatch(createTask(inp)), setInp("");
        }}
      >
        Add
      </button>
    </div>
  );
}

export default Wrapper;
