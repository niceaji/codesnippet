import React, { useState } from "react";
import Workbench from "./Workbench";
// import Track from "./Track";
import "./WorkbenchList.css";

const defaultCode = `const title = 'PlayTip';
console.log(title)`;
const EXAMPLE_SNIPPET =
  decodeURIComponent(window.location.search.replace("?q=", "")) || defaultCode;

function WorkbenchList() {
  const [count] = useState(1);
  const [workbench] = useState([
    {
      id: count,
      name: `workbench-${count}`,
    },
  ]);

  function handleWorkbenchOnMount(element) {
    window.scrollTo({
      left: 0,
      top: element.offsetTop - element.offsetHeight / 1.25,
      behavior: "smooth",
    });
  }

  // useEffect(() => {
  //   function handleWindowBeforeUnload(e) {
  //     e.preventDefault();
  //     e.returnValue = "";
  //   }

  //   window.addEventListener("beforeunload", handleWindowBeforeUnload);

  //   return () => {
  //     window.removeEventListener("beforeunload", handleWindowBeforeUnload);
  //   };
  // }, []);

  return (
    <React.Fragment>
      <ul className="workbench-list">
        {workbench.map((bench) => {
          return (
            <li key={bench.id} className="workbench-list-item">
              <Workbench
                id={bench.id}
                onMount={count > 1 ? handleWorkbenchOnMount : null}
                initialCode={bench.id === 1 ? EXAMPLE_SNIPPET : undefined}
                animate={bench.id !== 1}
              />
            </li>
          );
        })}
      </ul>
    </React.Fragment>
  );
}

export default WorkbenchList;
