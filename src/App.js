import { Link } from "react-router-dom";


function App() {
  return (
    <div className="app">
      <Link to="class">Class Component</Link>
      <Link to="functional">Functional Component</Link>
    </div>
  );
}

export default App;