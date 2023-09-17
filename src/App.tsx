import Todos from "./components/Todos/Todos";
import style from "./App.module.css";

function App() {
  return (
    <div className={style.app}>
      <Todos />
    </div>
  );
}

export default App;
