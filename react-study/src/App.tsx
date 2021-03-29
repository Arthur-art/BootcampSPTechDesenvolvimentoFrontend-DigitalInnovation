const buttonA = <button>Button true</button>;
const buttonB = <button>Button false</button>;

const visible = true;

const App = () => {
  const buttonAshow = ()=>(
    <div>
      {buttonA}
    </div>
  )
  const buttonBshow = ()=>(
    <div>
      {buttonB}
    </div>
  )

  return (
    <div>
      <p>Hello World</p>
      {visible ? buttonAshow() : buttonBshow()}
    </div>
  );
};

export default App;
