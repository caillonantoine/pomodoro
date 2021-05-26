import { createSlice } from "@reduxjs/toolkit";

const pomodoroSlice = createSlice({
  name: "pomodoro",
  initialState: {
    workTime: 2,
    pauseTime: 1,
    phase: "work",
  },
  reducers: {
    switchPhase: (state, action) => {
      return { ...state, phase: state.phase == "work" ? "pause" : "work" };
    },
    setTime: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { switchPhase, setTime } = pomodoroSlice.actions;
export default pomodoroSlice.reducer;
export const pomodoroSelector = (state) => state.pomodoro;
