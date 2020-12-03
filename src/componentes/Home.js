import React from 'react';
import Titular from './Titular';
import InputSelect from './Select';
import { BrowserRouter } from 'react-router-dom'
import './style.css';




function Home(){
    return(
        <>
        <div id="cont">
            <Titular titular="Project App Weather."/>
        </div>
        <div id="principal">
            <div id="imagen"></div>
            <div id="selectComponent">
                <BrowserRouter>
                    <InputSelect />
                </BrowserRouter>
            </div>
        </div>
        
        
        </>
    )

}
export default Home;