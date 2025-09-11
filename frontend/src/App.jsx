
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [msg, setMsg] = useState("Loading...");

  useEffect(() => {
    axios.get(import.meta.env.VITE_BACKEND_URL + "/api/hello/")
      .then(res => setMsg(res.data.message))
      .catch(() => setMsg("Error connecting to backend"));
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>{msg}</h1>
    </div>
  );
}

export default App;
