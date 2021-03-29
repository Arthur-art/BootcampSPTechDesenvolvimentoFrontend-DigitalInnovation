const button = <button>Button true</button>;
const visible = true;
//function que retorna o button
const Button = () => {
  const buttonShow = ()=>(
    <div>
      {button}
    </div>
  )
  //Cancelando reenderizacao
  const showButton = ()=>{
    if(!visible) return null
  }
  return (
    <div>
      {visible ? buttonShow() : showButton()}
    </div>
  );
};

export default Button;