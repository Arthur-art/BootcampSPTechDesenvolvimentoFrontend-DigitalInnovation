/*function App() {
  return (
    <h1>Hello World</h1>
  );
}*/
const buttonA = <button>Primeiro button</button>
const buttonB = <button>Segundo button</button>

const App = ()=>{
  return (
    <div>
      <p>Hello World</p>
      {buttonA}
      {buttonB}
    </div>
  )
}

export default App;
