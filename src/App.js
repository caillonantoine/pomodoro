import { Provider } from "react-redux";
import Counter from "./component/Counter";
import Header from "./component/Header";
import Settings from "./component/Settings";
import store from "./store/store";

const App = () => {
  return (
    <Provider store={store}>
      <Header/>
      <Counter/>
      <Settings/>
    </Provider>
  );
};

export default App;
