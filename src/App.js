import React from 'react';
import Axios from 'axios';
import "./App.css";

function App() {
  const ListaDeAlunos = () => {
    Axios.get("https://api-academia-alunos.herokuapp.com/alunos").then((response) => {
      console.log(response);
    }
    )
  }
  return( <div>Deu certo! <button onClick={ListaDeAlunos}>Buscar</button>
  </div>);
}

export default App;



















// import React from 'react';
// import './App.css';
// import Alunos from "./service/Alunos"
// import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'


// function App (){
//    return (
//       <div className="App">
//         <Router>
        
//           <Routes>
          
//             <Route path="/" element={<h1>TESTE DE API</h1>} />
//             <Route path="/buscaraluno" element={<Alunos/>} />
            
//           </Routes>
          
//         </Router>
//       </div>
//     )
//   }


// export default App;






// function App() {
//   const [alert, serAlert]= useState(false);
//   const [itemInput, setItemInput] = useState('');
//   const [list, FazLista] = useState([]);
//   let montado =true;
  
//   useEffect(() =>{
//     Alunos()
//     .then(aluno =>{
//       if(montado){
//         FazLista(aluno)
//       }
//     })
//     return () => montado = false;
//   },[])

//   return(
//     <div className= "wrapper">
//     <h1>Lista de alunos</h1>
//     <ul>
//       {list.map(aluno => <li key={aluno.aluno}>{aluno.aluno}</li>)}
//     </ul>
//     <form>
//        <label>
//          <p>Novo Item</p>
//          <input type="text" />
//        </label>
//        <button type="submit">Submit</button>
//      </form>
//     </div>
//   )
// }
// export default App;
