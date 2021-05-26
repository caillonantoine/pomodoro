import { Provider } from "react-redux";
import Counter from "./component/Counter";
import Header from "./component/Header";
import Settings from "./component/Settings";
import store from "./store/store";
import "./App.css";

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Counter />
        <Settings />
      </div>
    </Provider>
  );
};

export default App;
