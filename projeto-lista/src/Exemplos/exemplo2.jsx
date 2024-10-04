function Fruta(props) {
    return <li>Eu sou um(a) {props.brand}</li>;
  }
  
  function Salada() {
    const frutas = [
      {id: 1, brand: 'Uva'},
      {id: 2, brand: 'Morango'},
      {id: 3, brand: 'Manga'},
      {id: 4, brand: 'Abacaxi'},
      {id: 5, brand: 'Laranja'}
    ];
    
    return (
      <>
        <h1>Salada de frutas</h1>
        <ul>
          {frutas.map((fruta) => <Fruta key={fruta.id} brand={fruta.brand} />)}
        </ul>
      </>
    );
  }
  
  export default Salada;
  