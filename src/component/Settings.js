import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { pomodoroSelector, setTime } from "./pomodoroSlice";

const Settings = () => {
  const [work, setWork] = useState(0);
  const [pause, setPause] = useState(0);
  const pomodoro = useSelector(pomodoroSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    setWork(pomodoro.workTime);
    setPause(pomodoro.pauseTime);
  }, []);

  const handleSubmit = (e) => {
    dispatch(setTime({ workTime: parseInt(work), pauseTime: parseInt(pause) }));
    e.preventDefault();
  };

  return (
    <div>
      <h3>settings</h3>
      <form onSubmit={handleSubmit}>
        <label>
          work time:{" "}
          <input
            name="work"
            type="text"
            value={work}
            onChange={(e) => {
              setWork(e.target.value);
            }}
          />
        </label>
        <label>
          pause time:{" "}
          <input
            name="pause"
            type="text"
            value={pause}
            onChange={(e) => {
              setPause(e.target.value);
            }}
          />
        </label>
        <input type="submit" value="save" />
      </form>
    </div>
  );
};
export default Settings;
