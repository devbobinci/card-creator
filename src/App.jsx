import React, { useState } from "react";
import Header from "./components/Header";
import Background from "./components/Background";
import Sent from "./components/Sent";
import "./globals.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  const [showForm, setShowForm] = useState(1);
  const [numbers, setNumbers] = useState(null);
  const [name, setName] = useState(null);
  const [year, setYear] = useState(null);
  const [month, setMonth] = useState(null);
  const [error, setError] = useState(null);
  const [cvc, setCvc] = useState(null);

  return (
    <Router>
      <>
        <Background>
          <Routes>
            <Route
              path="/"
              element={
                <Header
                  name={name}
                  setName={setName}
                  numbers={numbers}
                  setNumbers={setNumbers}
                  month={month}
                  setMonth={setMonth}
                  year={year}
                  setYear={setYear}
                  cvc={cvc}
                  setCvc={setCvc}
                  error={error}
                  setError={setError}
                  showForm={showForm}
                  setShowForm={setShowForm}
                />
              }
            />
            <Route
              path="/approved"
              element={
                <Sent
                  name={name}
                  setName={setName}
                  numbers={numbers}
                  setNumbers={setNumbers}
                  month={month}
                  setMonth={setMonth}
                  year={year}
                  setYear={setYear}
                  cvc={cvc}
                  setCvc={setCvc}
                  error={error}
                  setError={setError}
                  showForm={showForm}
                  setShowForm={setShowForm}
                />
              }
            />
          </Routes>
        </Background>
      </>
    </Router>
  );
};

export default App;
