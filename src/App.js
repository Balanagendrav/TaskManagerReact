import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import TodoList from "./Components/TodoContent/TodoList";

function App() {
  return (
    <div className="App">
      <Header />
      <TodoList />
      <Footer />
    </div>
  );
}

export default App;
