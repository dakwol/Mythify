import { useState } from "react";
import { Button } from "primereact/button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Button label={`${count}`} onClick={() => setCount(count + 1)} />
    </>
  );
}

export default App;
