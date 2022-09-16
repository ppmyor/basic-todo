import "./App.css";
import TodoTemplate from "./components/TodoTemplate";
import TodoHeader from "./components/TodoHeader";
import TodoList from "./components/TodoList";
import TodoCreate from "./components/TodoCreate";
import { TodoProvider } from "./TodoContext";

function App() {
  return (
    <div className="App">
      <TodoProvider>
        <TodoTemplate>
          <TodoHeader />
          <TodoList />
          <TodoCreate open={false} />
        </TodoTemplate>
      </TodoProvider>
    </div>
  );
}

export default App;
