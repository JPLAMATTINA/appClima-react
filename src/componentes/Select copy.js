import React, { useState,useEffect } from 'react';
import { Switch,Route,Link,useParams } from 'react-router-dom'
import 'fontsource-roboto';



const Paises = () => {
    const [paises, setPaises] = useState([]);
    const [busqueda, setBusqueda] = useState("");
    const getPais = () => {
        fetch("https://raw.githubusercontent.com/michaelx/climate/master/climate.json")
        .then((response) => response.json())
        .then((paises) => {setPaises(paises);})
        .catch((err) => console.log(err.message));
    };

    const buscar = (event) => {
        setBusqueda(event.target.value);
    };

    useEffect(() => {
        getPais();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Cantidad de caracteres de lo que está escribiendo el usuario
    const largoBusqueda = busqueda.length;

    return (
    <>
    <label htmlFor="busqueda">Seleccione País</label><br/>
    <input type="search" id="busquedaInput" placeholder="Escriba pais..." onChange={buscar}/>
      {/* Si busqueda es true, es decir que tiene al menos 1 valor del usuario, filtra usando un slice
      hasta largoBusqueda, que tiene el length de lo que ya fue ingresado por el usuario
      para matchearlo y con lo que viene en paises del fetch del json, para despues mostrarlo
      en un ul, con lis y cada li es un link al id del pais, que muestra las ciudades del pais buscado */}
      {busqueda.length > 0 ? (
        <ul>
          {paises.filter((paises) => paises.country.slice(0, largoBusqueda).toLowerCase() === busqueda.toLowerCase())
            .map((paises, i) => (<Link to={"/ciudad/" + paises.id} key={i}><li>{paises.city}</li></Link>
            ))}
          </ul>) : null
      }
    </>
  );
};

const Ciudad = () => {
  const [ciudad, setCiudad] = useState([]);
  const params = useParams();
  const getCiudad = () => {
    
    fetch("https://raw.githubusercontent.com/michaelx/climate/master/climate.json")
      .then((response) => response.json())
      .then((ciudad ) => {setCiudad(ciudad);})
      .catch((err) => console.log(err.message));
  }
  useEffect(() => {
    getCiudad();
    // eslint-disable-next-line react-hooks/exhaustive-deps
}, []);
  
  const meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"]
  return (
    <div>
      
      {ciudad.map((ciudad) => <div key={ciudad.id}>{ciudad.id === parseFloat(params.id) ?
        <div> <h2> {ciudad.country} - {ciudad.city}</h2>
          {ciudad.monthlyAvg.map((temperatura, i) => <ul key={i}><li>mes: {meses[i]}</li> 
              <li>High: {temperatura.high}</li>
              <li>Low: {temperatura.low}</li>
          </ul>)}
        </div>
      : null }</div> )}

      <Link to="/" id="bottonHome">
        <input type="button" value="Home" />
      </Link>
    </div>
  );
};

const Select = () => {
  return (
    <Route>
      <h1>
        <em>Searching ciudad</em>
      </h1>
      <Switch>
        <Route exact path="/">
          <Paises />
        </Route>
        <Route path="/ciudad/:id">
          <Ciudad />
        </Route>
      </Switch>
    </Route>
  );
};
export default Select;