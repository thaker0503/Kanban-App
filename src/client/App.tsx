import "./App.css";
import Kanban from "./components/Kanban";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {

  return (
    <div 
      className="flex"
    >
      {/* <Navbar /> */}
      <Sidebar />
    <Kanban />
    </div>
  );
}

export default App;
