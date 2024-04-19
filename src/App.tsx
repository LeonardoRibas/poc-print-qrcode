import { useRef } from "react";
import "./App.css";
import ComponentToPrint from "./ComponentToPrint";
import { useReactToPrint } from "react-to-print";

function App() {
  const ref = useRef();
  const handlePrint = useReactToPrint({
    documentTitle: "Print This Document",
    onBeforePrint: () => console.log("before printing..."),
    onAfterPrint: () => console.log("after printing..."),
    removeAfterPrint: true,
    pageStyle: "@page { size: 2.5in 4in }",
    content: () => ref.current,
  });

  return (
    <div>
      <ComponentToPrint ref={ref} />
      <button onClick={handlePrint}>Print this out!</button>
    </div>
  );
}

export default App;
