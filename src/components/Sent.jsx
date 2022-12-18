import React from "react";
import Header from "./Header";
import { completeIcon } from "../assets";
import { Link } from "react-router-dom";
import Wrapper from "./Wrapper";

const Sent = ({
  name,
  setName,
  numbers,
  setNumbers,
  month,
  setMonth,
  year,
  setYear,
  cvc,
  setCvc,
  error,
  setError,
  showForm,
  setShowForm,
}) => {
  return (
    <Wrapper>
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
      <div className="flex flex-col items-center justify-center w-full mt-5 md:mt-[8vh] xl:mt-0 xl:w-[500px] mx-auto">
        <img src={completeIcon} alt="complete" />
        <h1 className="uppercase mt-5 text-xl font-semibold tracking-widest very-dark-violet ">
          thank you!
        </h1>
        <p className="dark-violet">We've added your card details</p>
        <Link to="/">
          <button
            className="btn-bg hover:scale-105 transition-all text-white rounded-lg p-3 ss:p-4 w-[285px] ss:w-[330px md:w-[410px] mt-5 text-sm ss:text-base mb-[5vh] xl:text-lg xl:mb-0"
            onClick={() => {
              setShowForm(1);
              setName(null);
              setNumbers(null);
              setName(null);
              setYear(null);
              setMonth(null);
              setError(null);
              setCvc(null);
            }}
          >
            Continue
          </button>
        </Link>
      </div>
    </Wrapper>
  );
};

export default Sent;
