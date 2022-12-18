import React, { useState } from "react";
import { CardBack, CardFront, cardLogo } from "../assets";
import { Navigate } from "react-router-dom";
import Form from "./Form";
import Wrapper from "./Wrapper";
import "../globals.css";

const Header = ({
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
  const onInputChange = (e) => {
    if (!e.target.value) setNumbers(null);
    e.target.value = e.target.value
      .replace(/[^\dA-Z]/g, "")
      .replace(/(.{4})/g, "$1 ")
      .trim();

    if (e.target.value.length <= 19) {
      setNumbers(e.target.value);
    }

    if (e.target.value.length <= 18) {
      setError(12);
    } else {
      setError(null);
    }
  };

  const setCardName = (e) => {
    if (!e.target.value) {
      setName(null);
      setError(2);
    } else if (!e.target.value.match(/^[A-Za-z\s]*$/)) {
      setError(1);
    } else {
      setError(null);
      setName(e.target.value);
    }
  };

  const checkMonth = (e) => {
    if (!e.target.value) {
      setMonth(null);
      setError(3);
    } else if (!e.target.value.match(/^\d+$/)) {
      setError(4);
    } else if (e.target.value > 12) {
      setError(5);
    } else {
      setError(null);
      setMonth(e.target.value);
    }
  };

  const returnMonth = () => {
    if (!month) return "00";
    else if (month < 10 && !month.includes("0")) return `0${month}`;
    else return month;
  };

  const checkYear = (e) => {
    if (!e.target.value) {
      setYear(null);
      setError(6);
    } else if (!e.target.value.match(/^\d+$/)) {
      setError(7);
    } else if (e.target.value < 23) {
      setError(8);
    } else {
      setError(null);
      setYear(e.target.value);
    }
  };

  const onCvcCheck = (e) => {
    if (!e.target.value) {
      setCvc(null);
      setError(9);
    } else if (!e.target.value.match(/^\d+$/)) {
      setError(10);
    } else if (e.target.value <= 3) {
      setError(11);
    } else {
      setError(null);
      setCvc(e.target.value);
    }
  };

  if (window.location.pathname.includes("/approved") && showForm !== null) {
    setShowForm(null);
    Navigate("/");
  }

  return (
    <Wrapper>
      <div className="card-container w-screen sm:w-[550px] sm:mx-auto md:mt-[5vh] lg:mt-[10vh] xl:mt-0 ">
        <div className="relative py-5 ss:pt-[4vh] h-[77vw] ss:h-[81vw] sm:max-h-[45vh] md:h-[445px] xl:min-h-[520px] 2xl:min-h-[550px]">
          <div className="w-[75%] max-w-[420px] xl:w-[80%] xl:max-w-[500px] absolute right-5 xl:bottom-0">
            <img src={CardBack} alt="card back" />
            <p className="absolute right-[15%] top-[43%] ss:top-[44%] ssm:top-[45%] text-[10px] ss:text-xs text-white tracking-[1px]">
              {cvc ? cvc : "000"}
            </p>
          </div>
          <div className="w-[75%] max-w-[420px] h-min xl:w-[80%] xl:max-w-[500px] absolute left-5 bottom-[5%] ssm:bottom-[8%] xl:top-0">
            <img src={CardFront} alt="card front" />

            <div className="absolute top-0 p-4 ss:p-5 md:p-7 w-full h-full xl:h-full flex flex-col justify-between items-start">
              <img
                className="h-[24px] xs:h-[28px] ssm:h-[32px] md:h-[40px]"
                src={cardLogo}
                alt="logo"
              />

              <div className="w-full">
                <p className="text-white pb-1 ss:pb-2 ssm:pb-3 sm:pb-4 md:pb-5 tracking-normal xs:tracking-widest md:tracking-[3px] ss:text-lg ssm:text-[20px] sm:text-[24px] md:text-[26px] xl:text-[28px]">
                  {numbers ? numbers : "0000 0000 0000 0000"}
                </p>

                <div className="flex justify-between text-[10px] ssm:text-xs sm:text-sm text-white uppercase tracking-wide sm:tracking-[1px]">
                  <p>{name ? name : "Jane Appleseed"}</p>
                  <p>
                    <span>{returnMonth()}</span>/
                    <span>{year ? year : "00"}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Form
        name={name}
        numbers={numbers}
        month={month}
        year={year}
        cvc={cvc}
        setCardName={setCardName}
        error={error}
        onInputChange={onInputChange}
        checkMonth={checkMonth}
        checkYear={checkYear}
        onCvcCheck={onCvcCheck}
        setShowForm={setShowForm}
        showForm={showForm}
      />
    </Wrapper>
  );
};

export default Header;
