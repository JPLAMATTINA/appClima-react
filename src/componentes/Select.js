import React, { useState, useEffect, useRef } from 'react';
import { Switch,Route,Link,useParams } from 'react-router-dom'
import 'fontsource-roboto';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobeAmericas } from '@fortawesome/free-solid-svg-icons'
import { faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { faSun } from '@fortawesome/free-solid-svg-icons'
import { faSnowman } from '@fortawesome/free-solid-svg-icons'
import { faCloudRain } from '@fortawesome/free-solid-svg-icons'


const Paises = () => {
    const [paises, setPaises] = useState([]);
    const [busqueda, setBusqueda] = useState("");
    const [ciudad, setCiudad] = useState();
    const ciudades = useRef();
    const meses = useRef();
    const [mes, setMes] = useState();
    const N = [];
    

    const getPais = () => {
        fetch("https://raw.githubusercontent.com/michaelx/climate/master/climate.json")
        .then((response) => response.json())
        .then((paises) => {setPaises(paises);})
        .catch((err) => console.log(err.message));
    };

    const buscar = (event) => {
        setBusqueda(event.target.value);
    };

    const getCiudad = ()=>{
      setCiudad(ciudades.current.value);
      
    }
    const getMes = ()=>{setMes(meses.current.value)}

    useEffect(() => {
        getPais();
        
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Cantidad de caracteres de lo que está escribiendo el usuario
    const largoBusqueda = busqueda.length;
    
    return (
      
    <>
    <label id="labelInput" htmlFor="busqueda">Seleccione País</label>
    <input list="paises" id="inputBusqueda"   placeholder="Escriba el pais..." onChange={buscar}/>

    <datalist id="paises">
      {paises.filter((paises) => paises.country.slice(0, largoBusqueda).toLowerCase().includes(busqueda.toLowerCase())).map((paises,i) => <div key={i} style={{display:'none'}}>{N.push(paises.country)}</div>)}
      {N? N.sort().filter((value, index)=>value !== N.sort()[index + 1]).map((n,i)=> <option key={i} value={n}/>):null})
    </datalist>
      
      {/* <select id="selectCiudad" ref={ciudades} onChange={getCiudad}> */}
      {busqueda ?
      
        <select id="selectCiudad" ref={ciudades} onChange={getCiudad}>
        <option value="0">Elegir </option>
        {paises.filter((paises) => paises.country.slice(0, largoBusqueda).toLowerCase() === busqueda.toLowerCase())
        .map((paises, i) => (<option key={paises.id} value={paises.id}>{paises.city}</option>
            ))} </select>
          : null }

      {busqueda && ciudad ?    
        <select ref={meses} onChange={getMes} id="selectMes">
        <option value="0" defaultValue >Elegir</option>
        <option value="1">Enero</option>
        <option value="2">Febrero</option>
        <option value="3">Marzo</option>
        <option value="4">Abril</option>
        <option value="5">Mayo</option>
        <option value="6">Junio</option>
        <option value="7">Julio</option>
        <option value="8">Agosto</option>
        <option value="9">Septiembre</option>
        <option value="10">Octubre</option>
        <option value="11">Noviembre</option>
        <option value="12">Diciembre</option>     
        </select>
      : null}

      {ciudad && mes  ?
        paises.filter((paises) =>paises.id === parseFloat(ciudad)).map((paises, i) => (<Link to={"/ciudad/" + paises.id +'/'+ mes} key={i}><Button variant="outlined" color="primary" > Ir </Button></Link>))
      :null}

          

    </>
  );
};

const Ciudad = () => {
  const [ciudad, setCiudad] = useState([]);
  const {id} = useParams();
  let {mes} = useParams();
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
      
      {ciudad.filter((ciudad) =>ciudad.id === parseFloat(id)).map((ciudad, i) => (
        
      <Card key={i}>
      <CardContent>
          <h2><span className="spanIcons"><FontAwesomeIcon icon={faGlobeAmericas} /></span> Country: {ciudad.country}</h2>
          <h3><span className="spanIcons"><FontAwesomeIcon icon={faMapMarkedAlt} /></span> City: {ciudad.city}</h3>
          <p>Month: {meses[mes-1]} <span className="spanIcons"> <FontAwesomeIcon icon={faCalendarAlt} /></span></p>
          <p>High: {ciudad.monthlyAvg[mes-1].high} <span className="spanIcons"> <FontAwesomeIcon icon={faArrowUp} /></span></p>
          <p>Low: {ciudad.monthlyAvg[mes-1].low}<span className="spanIcons"> <FontAwesomeIcon icon={faArrowDown} /></span></p>
          <p>DryDays: {ciudad.monthlyAvg[mes-1].dryDays}<span className="spanIcons"> <FontAwesomeIcon icon={faSun} /></span></p>
          <p>SnowDays: {ciudad.monthlyAvg[mes-1].snowDays}<span className="spanIcons"> <FontAwesomeIcon icon={faSnowman} /></span></p>
          <p>Rainfall: {ciudad.monthlyAvg[mes-1].rainfall}<span className="spanIcons"> <FontAwesomeIcon icon={faCloudRain} /></span></p>
        </CardContent>
        <CardActions>
        <Link to="/" id="bottonHome">
          <Button size="small">Home</Button>
        </Link>
        </CardActions>
        </Card>
      ))
      }  

    </div>
  );
};

const InputSelect = () => {
  return (
    <Route>
      
      <Switch>
        <Route exact path="/">
          <Paises />
        </Route>
        <Route path="/ciudad/:id/:mes">
          <Ciudad />
        </Route>
      </Switch>
    </Route>
  );
};
export default InputSelect;