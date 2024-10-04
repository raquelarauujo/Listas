function Animal(props) {
  return <li>Eu sou um(a) {props.brand}</li>;
}

function Zoologico() {
  const animais = [
    {id: 1, brand: 'Girafa'},
    {id: 2, brand: 'Elefante'},
    {id: 3, brand: 'Tigre'}
  ];
  
  return (
    <>
      <h1>Animais do zoológico:</h1>
      <ul>
        {animais.map((animal) => <Animal key={animal.id} brand={animal.brand} />)}
      </ul>
    </>
  );
}

export default Zoologico;
