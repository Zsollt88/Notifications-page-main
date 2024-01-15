import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { NOTIFICATIONDATA } from "./data.js";
import Notification from "./components/Notification/Notification.jsx";
import "./App.css";

function App() {
  const [classlessArray, setclasslessArray] = useState([]);
  const [markAllStyle, setMarkAllStyle] = useState(false);

  function styleToHighlight(selectedname) {
    if (classlessArray.includes(selectedname) === false) {
      setclasslessArray([...classlessArray, selectedname]);
    } else {
      /* else if (
      higlightedName != name &&
      classlesArray.includes(name) === true
    ) {
      sethiglightedName(name);
    } else if (
      higlightedName === name &&
      classlesArray.includes(name) === false
    ) {
      sethiglightedName("");
    } */
      console.log("Unhandled exception");
    }
    console.log(classlessArray);
  }

  /*function classtoggle(name) {
    if (higlightedName === name) {
      sethiglightedName("");
    } else {
      sethiglightedName(name);
    }
    console.log(higlightedName);
    const list = document.getElementById(name).classList;
    list.toggle("chosen");
  }*/

  return (
    <div>
      <main>
        <span className="leftCorner">
          <span className="title">Notifications</span>
          <span className="counter">3</span>
        </span>
        <span
          className={
            markAllStyle === false
              ? "clearnotifications"
              : "clearnotifications_selected"
          }
          onClick={() => {
            setclasslessArray([
              ...classlessArray,
              "Mark Webber",
              "Angela Gray",
              "Jacob Thompson",
              "Nathan Peterson",
              "Anna Kim",
            ]);
            setMarkAllStyle(true);
          }}
        >
          Mark all as read
        </span>

        {/* <Notification
          item={NOTIFICATIONDATA[0]}
          activated={isHighlighted}
          styleActivated={() => styleToHighlight(id)}
        />
        <Notification
          item={NOTIFICATIONDATA[2]}
          activated={isHighlighted}
          styleActivated={() => styleToHighlight(id)}
        />*/}
        {NOTIFICATIONDATA.map((item) => (
          <Notification
            classlessFlag={classlessArray}
            styleFunction={() => styleToHighlight(item.name)}
            key={item.name}
            {...item}
          />
        ))}
      </main>
    </div>
  );
}

export default App;
