import { Link } from "react-router-dom";
import './css/App.css'
export default function App() {
  return (
    <div>
      <h1>Panya's Portfolio</h1>
      <nav>
        <Link className="link" to="/sorting">Sorting Algorithms</Link>
        <Link className="link" to="/pathfinding">PathFinding Algorithms</Link>
      </nav>
    </div>
  );
}
