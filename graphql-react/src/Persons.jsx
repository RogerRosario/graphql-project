import { useMutation } from "@apollo/client";
import { DELETE_PERSON } from "./graphql/mutations";
import { ALL_PERSONS } from "./graphql/queries";
import { EditForm } from "./EditForm";
import { Link, Route, Routes, useParams } from "react-router-dom";
import './index.css'



export const Persons = ({persons}) => {

    
    const [ deletePerson ] = useMutation(DELETE_PERSON, {
        refetchQueries: [{query: ALL_PERSONS}]
    });
    
    const removePerson = (id) => {
        deletePerson({ variables: {id: id}})
    }

    const EditPerson = () => {
        return(
            <EditForm/>
        )
    }

    if(persons === null) return null
    
    return (
        <div>
            <h2>Personas</h2>
         
            {/* <> */}

            <table className="table table-warning mt-4">
            <thead>
                <tr className="table-success">
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Edad</th>
                    <th>ID</th>
                    <th>Acciones</th>
                </tr>
            </thead>
                {persons.map( (p) => {
                    return (
                        <tbody key={p.id}>
                            <tr>
                                <td>{p.name}</td>
                                <td>{p.lastName}</td>
                                <td>{p.age}</td>
                                <td>{p.id}</td>
                                <td> 
                                    <button className="btn btn-danger" onClick={() => removePerson(p.id)}> Borrar </button>
                                    <button className="btn btn-warning"> <Link to={`/edit/${p.id}`}> Editar</Link> </button>                                      
                                </td>
                                
                            </tr>
                        </tbody>
                    )
                })}    
            </table>  
            <Routes>
                <Route to='/edit/:id' element={<EditPerson/>}/>
            </Routes>
            {/* </> */}
          
        </div>
    );
    
}

// const [id, setId] = useState('');

// const [ deletePerson ] = useMutation(DELETE_PERSON);

// const handleSubmit = e => {

//     // e.preventDefault()

//     deletePerson({variables: {id}})

//     setId('')

// }





// return (
    //     <div>
    //         <h2>Personas</h2>
     
//         {/* <> */}
          
//         {persons.map(p => <div key={p.id}>

//             <ul>
//                 <li> 
//                     <h6>{p.name} - {p.lastName} - {p.age} - {p.id}
//                         <button onClick={() => removePerson(p.id)}> borrar </button> 
//                         <button> Editar </button> 
//                     </h6> 
//                 </li>                    
//             </ul> 

//         </div>
//         )}            
//         {/* </> */}
//     </div>
// );