import React, { useContext } from "react";
import "./App.css";
import { useTrees } from "./";

// import { TreesContext } from "./index"; //for createContext

//for createContext
// function App() {
//   const { trees } = useContext(TreesContext);
//   return (
//     <div>
//       <h1>Trees I have heard of:</h1>
//       <ul>
//         {trees.map((tree) => (
//           <li key={tree.id}>{tree.type}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

//for useContext
function App() {
  const { trees } = useTrees();
  return (
    <div>
      <h1>Trees I have heard of:</h1>
      <ul>
        {trees.map((tree) => (
          <li key={tree.id}>{tree.type}</li>
        ))}
      </ul>
    </div>
  );
}
export default App;
