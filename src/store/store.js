import { configureStore } from "@reduxjs/toolkit";
import pomodoroReducer from "../component/pomodoroSlice";

export default configureStore({
  reducer: {
    pomodoro: pomodoroReducer,
  },
});
