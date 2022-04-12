import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask, changeTask } from "./store/action";
import { createInp } from "./inpstore/action";

function Onetask({ name, id, func }) {
  let [inputstate, setInputstate] = useState(true);

 
  //Тут опять достаем наш стор(объект) и присваиваем переменной
  let firstStore = useSelector((state) => state.reducer.tasks);
  //Достаем наш второй стор(объект) и присваиваем переменной
  let secStore = useSelector((state) => state.newreducer);
  let dispatch = useDispatch();


 let toggle = () => {
    dispatch(createInp(name))
    !inputstate &&  dispatch(changeTask(id, secStore.input));
    !inputstate &&  dispatch(createInp(''));
  
    setInputstate(!inputstate);


  };

  return (
    <div className="flexcontainer">
     
      {inputstate ? (
        <p onClick={() => toggle()}>{name}</p>
      ) : (
        <input
          value={secStore.input}
          autoFocus
          className="input"
          //Тут надо записывать из второго стора(инпута) в первый стор. СПРОСИТЬ У ПАВЛА
          onClick={() => toggle()}
          onKeyPress={(e) => e.key === "Enter" && toggle()}
          //Тут надо как-то положить наш name во второй стор, и дописывать в него что-то. СПРОСИТЬ У ПАВЛА
          onChange={(e) => dispatch(createInp(e.target.value))}
          onBlur={() => toggle()}
        ></input>
      )}
      <div>
        <p className="inline" onClick={() => toggle()}>
          {" "}
          🙉{" "}
        </p>
        <p className="inline" onClick={() => dispatch(deleteTask(name))}>
          ❌
        </p>
      </div>
    </div>
  );
}

export default Onetask;
