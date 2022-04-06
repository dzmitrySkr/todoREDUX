import {
  CREATE_STORE,
  CHANGE_STORE,
  DELETE_STORE,
} from "./action";

let defaultStore = {
  tasks: [
    { text: "NEW i should throw garbige" },
    { text: "NEW Cut my hair" },
    { text: "NEW go for a walk" },
  ],
};




export let reducer = (store = defaultStore, action) => {
  switch (action.type) {
    case CREATE_STORE:
      return {...store,tasks: [...store.tasks,{ text: action.payloud },],};

    case DELETE_STORE:
      return {...store, tasks: store.tasks.filter((item) => item.text !== action.payloud)};

    case CHANGE_STORE:
      store.tasks.map((item, index) =>item.text === action.payloud  ? (store.tasks[index].text = action.income) : item.text);
      return store;
  }
  return store;
};
