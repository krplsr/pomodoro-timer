import React, { useContext, useState } from "react";
import { SettingsContext } from "../context/SettingsContext";
import Button from "./Button";

const SetPomodoro = () => {
  const [newTimer, setNewTimer] = useState({
    work: 0.2,
    short: 0.1,
    long: 0.5,
    active: "work",
  });

  const { updateExecute } = useContext(SettingsContext);

  const handleChange = (input) => {
    const { name, value } = input.target;
    switch (name) {
      case "work":
        setNewTimer({
          ...newTimer,
          work: parseInt(value),
        });
        break;

      case "shortBreak":
        setNewTimer({
          ...newTimer,
          short: parseInt(value),
        });
        break;

      case "longBreak":
        setNewTimer({
          ...newTimer,
          long: parseInt(value),
        });
        break;
    }
  };

  const handleSumbit = (e) => {
    e.preventDefault();
    updateExecute(newTimer);
  };

  return (
    <div className="form-container">
      <form noValidate onSubmit={handleSumbit}>
        <div className="input-wrapper">
          <input
            className="input"
            type="number"
            name="work"
            onChange={handleChange}
            value={newTimer.work}
          />
          <input
            className="input"
            type="number"
            name="shortBreak"
            onChange={handleChange}
            value={newTimer.short}
          />
          <input
            className="input"
            type="number"
            name="longBreak"
            onChange={handleChange}
            value={newTimer.long}
          />
        </div>
        <Button type="submit">Set Timer</Button>
      </form>
    </div>
  );
};

export default SetPomodoro;