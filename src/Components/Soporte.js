import React, { Component } from "react";

import Menu from '../Layouts/Menu';
import Footer from "../Layouts/Footer";
import Imggeneral from '../Resources/acerca.jpg';

class Soporte extends Component{
    render() {
        return(
            <div className="estiloPagina">
                <Menu />
                <img src={Imggeneral} className="img-fluid" alt="Imagen Hidro" />
                <div className="container-fluid text-center">
                    <p className="marcasEstilo">Sección Soporte</p>
                    <div className="text-center padreLineaAzul">
                        <div className="lineaAzul"></div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Soporte;