import { useEffect, useState, createContext, useContext } from "react";
import Emp from "./Emp";
import MyCon from "./index";
import { MyData } from "./context/DataProvider";

let myContext = createContext("");

const App = () => {
  // let [name, setName] = useState("d");
  let { setName, name } = useContext(MyData);
  let [count, setCount] = useState(0);
  let [calculated, setCalculated] = useState(count);

  useEffect(() => {
    console.log("Running USEEFFECT");
    setCalculated(count + 10);
    console.log(count);
    console.log(calculated);
  }, [count]);

  console.log("JS load");
  // function myState(val) {
  //   return [
  //     val,
  //     (testVal) => {
  //       testVal(val);
  //       // return testVal + val;
  //     },
  //   ];
  // }

  // let [val, setVal] = myState(10);

  // console.log(val);
  // console.log(
  //   setVal((preVal) => {
  //     console.log(preVal + 10);
  //   })
  // );

  function manageTextChange(eve) {
    console.log(eve.target.value);
    setName(eve.target.value);
    // setName((a) =>  eve.target.value);
  }

  function handleClick() {
    // setCount(  );
    setCount((preVal) => {
      if (preVal > 2) {
        return preVal - 1;
      } else {
        return preVal + 1;
      }
    });

    console.log(count);
    console.log(calculated);
  }

  return (
    <div>
      <input type="text" value={name} onChange={manageTextChange} />

      <myContext.Provider value={{ name }}>
        <CompA />
      </myContext.Provider>

      {/*<p>{count}</p>
      <p>After calc: {calculated}</p>
      <button onClick={handleClick}>Incre</button> */}
      {/* <Emp name={"ganesh"} age={2} hobbies={["red", "blue"]} />
      <Emp name={"Kanna"} age={2} hobbies={["red", "blue"]} /> */}
    </div>
  );
};

function CompA() {
  return (
    <div>
      CompA
      <CompB />
    </div>
  );
}

function CompB() {
  return (
    <div>
      CompB
      <CompC />
    </div>
  );
}

function CompC() {
  return (
    <div>
      CompC
      <CompD />
    </div>
  );
}

function CompD() {
  return (
    <div>
      CompD
      <CompE />
    </div>
  );
}

function CompE() {
  // let mydata = useContext(myContext);
  // let newData = useContext(MyCon);
  let { name } = useContext(MyData);
  return <div>CompE the name is = {name}</div>;
}

export default App;
