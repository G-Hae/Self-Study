import { useState } from "react";

function App() {

  const [value, setValue] = useState("")


  return (
    <div>
      <form>
        <input type="text" placeholder="username"/>
        <button>LOG IN</button>
      </form>
    </div>

  )
}

export default App;



