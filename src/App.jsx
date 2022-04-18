import './App.css'
import { AddStudent } from "./components/AddStudent";
import { ShowStudents } from "./components/ShowStudents";

function App() {
  const AddHandler = () =>{
    // <AddStudent />
  }

  return (
    <div className="App">
      <button className="togglebtn" onClick={AddHandler}>Add a new student</button>
      {/* Show either  AddStudent component or ShowStudents dependeing on the above button click  */}
      {/* make sure the table is shown initially, do not show form initially */}
      {/* make sure to show either of them do not both together */}
      <ShowStudents />
    </div>
  );
}

export default App;
