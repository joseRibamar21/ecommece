import React, { useState } from "react";

interface RadioGroupProps {
  parcelas: number[],
  selectedOption: string
  setSelectedOption: Function
}

export default function RadioGroup({ parcelas, selectedOption, setSelectedOption }: RadioGroupProps) {
 

  const handleOptionChange = (changeEvent: any) => {
    setSelectedOption(changeEvent.target.value);
  };

  const handleFormSubmit = (formSubmitEvent: any) => {
    formSubmitEvent.preventDefault();
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="flex flex-col gap-2">
        {parcelas.map(e => {
          return <div key={e} className="flex gap-1">
            <input
              type="radio"
              id={`${e}-parcelas`}
              name="parcelamento"
              value={`${e}-parcelas`}
              checked={selectedOption === `${e}-parcelas`}
              onChange={handleOptionChange}
            />
            <label htmlFor={`${e}-parcelas`}>{`${e} parcelas`}</label>
          </div>
        })}
      </div>
    </form>
  );
};
