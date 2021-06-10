//Learn more in usehooks.com

import React, {
  useRef,
  useState,
  useEffect,
  useReducer,
  createContext,
  useContext,
} from "react";
import ReactDOM from "react-dom";
import "./index.css";
//import App from "./App"; //is used to implement useContext, createContext
import reportWebVitals from "./reportWebVitals";
import { useInput } from "./useInput";
import { useFetch } from "./useFetch";

//useReducer takes 1st argument at function and second argument at state
// function App() {
//   const [number, setNumber] = useReducer(
//     (number, newNumber) => number + newNumber,
//     0
//   );
//   return (
//     <>
//       <h1 onClick={() => setNumber(1)}> {number}</h1>
//     </>
//   );
// }

//useRef
// function App() {
//   const sound = useRef();
//   const color = useRef();

//   const submit = (e) => {
//     e.preventDefault();
//     const soundVal = sound.current.value;
//     const colorVal = color.current.value;
//     alert(`${soundVal} sounds like ${colorVal}`);
//     sound.current.value = "";
//     color.current.value = "";
//   };

//   return (
//     <>
//       <form onSubmit={submit}>
//         <input ref={sound} type="text" placeholder="Sound..." />
//         <input ref={color} type="color" />
//         <button>Add</button>
//       </form>
//     </>
//   );
// }

//use state
// function App() {
//   const [sound, setSound] = useState("");
//   const [color, setColor] = useState("#000000");

//   const submit = (e) => {
//     e.preventDefault();

//     alert(`${sound} sounds like ${color}`);
//     setSound("");
//     setColor("#000000");
//   };

//   return (
//     <>
//       <form onSubmit={submit}>
//         <input
//           value={sound}
//           type="text"
//           placeholder="Sound..."
//           onChange={(e) => setSound(e.target.value)}
//         />
//         <input
//           value={color}
//           type="color"
//           onChange={(e) => setColor(e.target.value)}
//         />
//         <button>Add</button>
//       </form>
//     </>
//   );
// }

//Create you own hooks and implement it
// function App() {
//   const [titleProps, resetTitle] = useInput("");
//   const [colorProps, resetColor] = useInput("#000000");

//   const submit = (e) => {
//     e.preventDefault();

//     alert(`${titleProps.value} sounds like ${colorProps.value}`);
//     resetTitle();
//     resetColor();
//   };

//   return (
//     <>
//       <form onSubmit={submit}>
//         <input {...titleProps} type="text" placeholder="Sound..." />
//         <input {...colorProps} type="color" />
//         <button>Add</button>
//       </form>
//     </>
//   );
// }

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

//createContext
// export const TreesContext = createContext();
// const trees = [
//   { id: "1", type: "Maple" },
//   { id: "2", type: "Apple" },
//   { id: "3", type: "Orange" },
//   { id: "4", type: "Banana" },
// ];

// ReactDOM.render(
//   <TreesContext.Provider value={{ trees }}>
//     <App />
//   </TreesContext.Provider>,
//   document.getElementById("root")
// );

//useContext
// const TreesContext = createContext();
// export const useTrees = () => useContext(TreesContext);
// const trees = [
//   { id: "1", type: "Maple" },
//   { id: "2", type: "Apple" },
//   { id: "3", type: "Orange" },
//   { id: "4", type: "Banana" },
// ];

// ReactDOM.render(
//   <TreesContext.Provider value={{ trees }}>
//     <App />
//   </TreesContext.Provider>,
//   document.getElementById("root")
// );

function App({ login }) {
  const { loading, data, error } = useFetch(
    `https://api.github.com/users/${login}`
  );
  if (loading) return <h1>Loading...</h1>;
  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;

  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <img src={data.avatar_url} />
      <h1>User Name: {data.login}</h1>
      <h3>User Location: {data.location}</h3>
    </div>
  );
}

ReactDOM.render(
  <App login="anamolacharya" />,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
