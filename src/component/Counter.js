import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { pomodoroSelector, setTime, switchPhase } from "./pomodoroSlice";
import alertSound from "../assets/alert.mp3";

const Counter = () => {
  const pomodoro = useSelector(pomodoroSelector);
  const dispatch = useDispatch();
  const [timeLeft, setTimeLeft] = useState(pomodoro.workTime);

  useEffect(() => {
    Notification.requestPermission();
  }, []);

  useEffect(() => {
    setTimeLeft(
      pomodoro.phase == "work"
        ? pomodoro.workTime * 60
        : pomodoro.pauseTime * 60
    );

    const interval = setInterval(() => {
      setTimeLeft((item) => item - 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [pomodoro.phase]);

  useEffect(() => {
    if (timeLeft == 0) {
      play();
      dispatch(switchPhase());
      notify();
    }
  }, [timeLeft]);

  const notify = () => {
    if (Notification.permission === "granted") {
      let notif = new Notification("Switching phase!");
    }
  };

  const play = () => {
    var audio = new Audio(alertSound);
    audio.play();
  };

  return (
    <div>
      <h2>{pomodoro.phase}</h2>
      <h1>
        {Math.floor(timeLeft / 60)}:{timeLeft % 60}
      </h1>
      <button
        onClick={() => {
          setTimeLeft(
            pomodoro.phase == "work"
              ? pomodoro.workTime * 60
              : pomodoro.pauseTime * 60
          );
        }}
      >
        RESET
      </button>
      <button
        onClick={() => {
          play();
          dispatch(switchPhase());
          notify();
        }}
      >
        SWITCH
      </button>
    </div>
  );
};

export default Counter;
