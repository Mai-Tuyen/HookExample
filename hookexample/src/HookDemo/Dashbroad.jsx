import UseStateDemo from "./UseStateDemo";
import UseEffectDemo from "./UseEffectDemo";
import UseLayoutEffectDemo from "./UseLayoutEffectDemo";
import UseRefDemo from "./UseRefDemo";
import ComponentCha from "./UseCallbackMemo/ComponentCha";
import { useState } from "react";
const DashBroad = () => {
  const [isMount, setIsMount] = useState(false);
  return (
    <>
      <button
        style={{ backgroundColor: "green", marginRight: 40, marginLeft: 200 }}
        onClick={() => setIsMount(true)}
      >
        Mount
      </button>
      <button
        style={{ backgroundColor: "red" }}
        onClick={() => setIsMount(false)}
      >
        Ummount
      </button>
      <div style={{ marginLeft: 250 }}>
        {
          //isMount &&  <UseStateDemo />
          //isMount && <UseEffectDemo />
          // isMount && <UseLayoutEffectDemo/>
          //isMount && <UseRefDemo />
          isMount && <ComponentCha/> // demo React.memo() và useCallBack();
        }
      </div>
    </>
  );
};

export default DashBroad;
