import React from 'react'
import './App.css';
import Game from './components/Game';
// import Grid from './Grid';
// function App(props) {
//   const [positions, setPositions] = React.useState(new Array(9).fill(null))
//   return (
//     <Grid positions={positions} 
//       setPositions ={index =>{
//         setPositions(prevPositions=>{
//           const positions = prevPositions.slice()
//           positions[index] = 'X'
//           return positions
//         })
//       }}
//     />
//   );
// }
function App(props){
  return(
    <Game></Game>
  )
}

export default App;
