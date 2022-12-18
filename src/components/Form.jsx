import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Form = ({
  name,
  numbers,
  month,
  year,
  cvc,
  error,
  onInputChange,
  setCardName,
  checkMonth,
  checkYear,
  onCvcCheck,
  showForm,
  setShowForm,
}) => {
  const onError = () => {
    if (error === 3 || error === 6 || error === 9) return "Can't be blank";
    else if (error === 4 || error === 7 || error === 10)
      return "Wrong format, only numbers";
    else if (error === 5) return "Only numbers below 12";
    else if (error === 8) return "Only number over 22";
    else if (error === 11) return "It must be 3 numbers";
    else return;
  };

  if (window.location.pathname.includes("/approved") && showForm !== null) {
    setShowForm(null);
  }

  return (
    <div
      className={
        showForm
          ? "px-5 mx-auto w-full ssm:mt-[2vh] sm:w-[450px] sm:mx-auto lg:w-[500px] xl:mt-0"
          : "hidden"
      }
    >
      <form>
        <label className="label">Cardholder name</label>
        <input
          type="text"
          placeholder="e.g Jane Appleseed"
          className={`input ${error === 1 || error === 2 ? "input-error" : ""}`}
          onChange={setCardName}
        />
        <p
          className={`red text-xs pt-2 ${
            error === 1 || error === 2 ? "block" : "hidden"
          }`}
        >
          {`${error === 2 ? "Can't be blank" : ""} ${
            error === 1 ? "Wrong format, numbers only" : ""
          }`}
        </p>
        <label className="label">Card number</label>
        <br />
        <input
          type="text"
          placeholder="e.g. 1234 5678 9123 0000"
          maxLength={19}
          onChange={onInputChange}
          className={`input ${error === 12 ? "input-error" : ""}`}
        />
        <p
          className={`red text-xs pt-2 ${
            error === 12 ? "inline-block" : "hidden"
          }`}
        >
          {`${error === 12 ? "It must be 16 numbers" : ""}`}
        </p>
        <br />

        <div className="flex justify-between gap-2 mb-[5vh]">
          <div className="w-[50%] items-center">
            <label className="label">Exp.date (MM/YY)</label>
            <br />
            <input
              type="text"
              onChange={checkMonth}
              className={`relative input w-[45%] ${
                error === 3 || error === 4 || error === 5 ? "input-error" : ""
              }`}
              placeholder="MM"
              maxLength={2}
            />
            <p
              className={`absolute red text-xs pt-2 ${
                error === 3 || error === 4 || error === 5 ? "block" : "hidden"
              }`}
            >
              {onError()}
            </p>
            <input
              type="text"
              onChange={checkYear}
              className={`relative input w-[45%] ml-2 ${
                error === 6 || error === 7 || error === 8 ? "input-error" : ""
              }`}
              placeholder="YY"
              maxLength={2}
            />
            <p
              className={`absolute red  text-xs pt-2 ${
                error === 6 || error === 7 || error === 8 ? "block" : "hidden"
              }`}
            >
              {onError()}
            </p>
          </div>
          <div className="w-[50%]">
            <label className="label">CVC</label>
            <br />
            <input
              type="text"
              className={`relative input ${
                error === 9 || error === 10 || error === 11 ? "input-error" : ""
              }`}
              onChange={onCvcCheck}
              placeholder="e.g.123"
              maxLength={3}
            />
            <p
              className={`absolute red right-15 text-xs pt-2 ${
                error === 9 || error === 10 || error === 11 ? "block" : "hidden"
              }`}
            >
              {onError()}
            </p>
          </div>
        </div>
        <Link
          to={
            !cvc ||
            cvc.length < 3 ||
            !numbers ||
            numbers.length <= 18 ||
            !name ||
            name.length <= 6 ||
            !month ||
            !year ||
            error
              ? "/"
              : "/approved"
          }
          className={
            !cvc ||
            cvc.length < 3 ||
            numbers.length <= 18 ||
            !name ||
            name.length <= 6 ||
            !month ||
            !year ||
            error
              ? "pointer-events-none"
              : "pointer-events-auto"
          }
        >
          <button
            className="btn-bg hover:scale-105 transition-all text-white rounded-lg p-3 ss:p-4 w-full text-sm ss:text-base mb-[5vh] xl:text-lg xl:mb-0"
            onClick={() => {
              if (
                !cvc ||
                cvc.length < 3 ||
                numbers.length <= 18 ||
                !name ||
                name.length <= 6 ||
                !month ||
                !year ||
                error
              )
                setShowForm(1);
              else setShowForm(null);

              console.log(
                numbers,
                name,
                Number(month),
                Number(year),
                Number(cvc),
                "error",
                error
              );
            }}
          >
            Confirm
          </button>
        </Link>
      </form>
    </div>
  );
};

export default Form;
