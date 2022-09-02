import "./App.css";
import TodoTemplate from "./components/TodoTemplate";
import TodoHeader from "./components/TodoHeader";
import TodoList from "./components/TodoList";
import TodoCreate from "./components/TodoCreate";

function App() {
  return (
    <div className="App">
      <TodoTemplate>
        <TodoHeader />
        <TodoList />
        <TodoCreate open={false} />
      </TodoTemplate>
    </div>
  );
}

export default App;
