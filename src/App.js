import { Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <h1>Panya's Portfolio</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/sorting">Sorting Algorithms</Link>
        <Link to="/pathfinding">PathFinding Algorithms</Link>
      </nav>
    </div>
  );
}
