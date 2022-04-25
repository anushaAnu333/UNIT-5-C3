import "./App.css";
import  Home from "./components/Home";

import { EmployeeList } from "./components/EmployeeList";
export default function App() {
  return (
    <div className="App">
      <Home/>
      <EmployeeList/>
    </div>
  );
}
