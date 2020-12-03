import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'

export default function Footer() {
return (
    <div id="footer">
        <p>Copyrigth <FontAwesomeIcon icon={faCopyright} /> 2020 IT Master - turno noche. </p>
    </div>
)
}