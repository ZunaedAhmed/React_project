import { useState } from "react";
import Form from "./components/Form/Form";
import Error from "./components/Error/Error";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Success from "./components/Success/Success";
import Navbar from "./components/Navbar";
import PendingRequest from "./models/PendingRequest";
import useRoot from "./hook/useRoot";

function App() {
  const [errorMsg, setError] = useState("");
  const [successMsg, setMessage] = useState("");
  const [pendingRequests, setPendingRequests] = useState<PendingRequest[]>([]);

  useRoot(pendingRequests);

  return (
    <Router>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <Form
              setError={(error) => setError(error)}
              setMessage={(success) => setMessage(success)}
              updatePendingRequest={(req) =>
                setPendingRequests([...pendingRequests, req])
              }
            />
          }
        />
        <Route path="/error" element={<Error message={errorMsg} />} />
        <Route path="/success" element={<Success message={successMsg} />} />
      </Routes>
    </Router>

    // </div>
  );
}

export default App;
