import UseStateDemo from "./UseStateDemo";
import UseEffectDemo from "./UseEffectDemo";
import { useState } from "react";
const DashBroad = () => {
  const [ismount, setIsMount] = useState(false);
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
      {
        // <UseStateDemo />
        ismount && <UseEffectDemo />
      }
    </>
  );
};

export default DashBroad;
