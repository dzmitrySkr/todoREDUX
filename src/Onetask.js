import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask, changeTask} from "./store/action";
import { createInp } from "./inpstore/action";

function Onetask({ name }) {

  let [inputstate, setInputstate] = useState(true);

  let toggle = () => {
    setInputstate(!inputstate);
  };

  let firstStore = useSelector((state) => state.reducer.tasks);
  let secStore = useSelector((state) => state.newreducer);
  let dispatch = useDispatch();
  console.log(secStore);

  return (
    <div className="flexcontainer">
      {inputstate ? (
        <p onClick={() => toggle()}>{name}</p>
      ) : (
        <input
          value={secStore.input}
          autoFocus
          className="input"
          onClick={() => toggle()}
          onKeyPress={(e) => e.key === "Enter" && toggle()}
          onChange={(e) => dispatch(createInp(name, e.target.value))}
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
