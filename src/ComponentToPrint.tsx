import { forwardRef } from "react";
import "./App.css";

const ComponentToPrint = forwardRef((props, ref) => {
  return (
    <div className="test" ref={ref}>
      Testtttt !
    </div>
  );
});

export default ComponentToPrint;
