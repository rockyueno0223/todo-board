import './App.css';
import TodoWrapper from "./components/TodoWrapper";
import bgImg from "./images/bg-cork.png";

function App() {
  return (
    <div className="App">
      <div className='background' style={{ background: `url(${bgImg})` }}></div>
      <h1>ToDo Board</h1>
      <TodoWrapper />
    </div>
  );
}

export default App;
