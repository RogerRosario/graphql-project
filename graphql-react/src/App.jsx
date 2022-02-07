import React from "react";
import { PersonForm } from "./PersonForm";
import { Fragment } from "react/cjs/react.development";
import "./App.css";
import { Persons } from "./Persons";
import { usePersons } from "./graphql/use-persons";
import { EditForm } from "./EditForm";
import { Routes, Route, Link } from "react-router-dom";

export function App() {
  const { data, loading, error } = usePersons();

  if (error) return <span>{error}</span>;

  const EditPerson = () => {
      return(<EditForm/>)
  }

  return (

      <div className="App App-header">
        <header>
          {loading ? <p>Loading... </p> : <Persons persons={data.allPersons} />}

        <PersonForm />
        {/* <EditForm/>   */}
        </header>

            <Routes>
                <Route to='/edit/:id' element={<EditPerson/>}/>
            </Routes>

      </div>
   
  );
}

export default App;

// {/* <Routes>
//   <Route path="/" element={<Home/>}/>
//   <Route path="/edit" element={<EditPerson/>}/>
// </Routes> */}
