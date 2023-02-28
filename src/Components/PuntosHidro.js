import React, { Component } from "react";
import Carousel from 'react-bootstrap/Carousel';

import Banner from "../Resources/baner4.jpg";
import Banner2 from "../Resources/baner5.jpg";

import Ilustracion1 from '../Resources/ilustracion.png';
import Ilustracion2 from '../Resources/ilustracion2.png';
import Ilustracion3 from '../Resources/ilustracion3.png';

import PlayStore from '../Resources/googleplay.png';
import AppStore from '../Resources/appstore.png';

import Iphone from '../Resources/iphone.png';
import Vector from '../Resources/vector.png';

class PuntosHidro extends Component{
    render() {
        let CambiarBanner = Banner;
        let Condicion = 'block';

        function cambiar(x) {
            if (x.matches) { // If media query matches
                CambiarBanner = Banner2;
                Condicion = 'none';
            } else {
                CambiarBanner = Banner;
                Condicion = 'block';
            }
          }
          
          var x = window.matchMedia("(max-width: 992px)")
          cambiar(x)
          x.addListener(cambiar)

        return(
            <>
                <Carousel>
                    <Carousel.Item>
                        <img src={CambiarBanner} className="img-fluid" alt="Imagen Hidro" />
                        <Carousel.Caption>
                            <div className="row">
                                <div className="col-12 col-lg-6">
                                    <h3 className="ajustarTextoBanerPuntos">Ahora puedes ganar puntos pidiendo </h3>
                                    <h3 className="ajustarTextoBanerPuntos2">En tus marcas favoritas. Guarda tu factura  e ingresa los dato en nuestra app.</h3>
                                    <a className="btn btn-lg btn-warning h3 fw-bold" href="#">&nbsp;&nbsp;Descarga la App&nbsp;&nbsp;</a>
                                </div>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={CambiarBanner} className="img-fluid" alt="Imagen Hidro" />
                        <Carousel.Caption>
                            <div className="row">
                                <div className="col-12 col-lg-6">
                                    <h3 className="ajustarTextoBanerPuntos">Ahora puedes ganar puntos pidiendo </h3>
                                    <h3 className="ajustarTextoBanerPuntos2">En tus marcas favoritas. Guarda tu factura  e ingresa los dato en nuestra app.</h3>
                                    <a className="btn btn-lg btn-warning h3 fw-bold" href="#">&nbsp;&nbsp;Descarga la App&nbsp;&nbsp;</a>
                                </div>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={CambiarBanner} className="img-fluid" alt="Imagen Hidro"/>
                        <Carousel.Caption>
                            <div className="row">
                                <div className="col-12 col-lg-6">
                                    <h3 className="ajustarTextoBanerPuntos">Ahora puedes ganar puntos pidiendo </h3>
                                    <h3 className="ajustarTextoBanerPuntos2">En tus marcas favoritas. Guarda tu factura  e ingresa los dato en nuestra app.</h3>
                                    <a className="btn btn-lg btn-warning h3 fw-bold" href="#">&nbsp;&nbsp;Descarga la App&nbsp;&nbsp;</a>
                                </div>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <div className="container text-center pt-4">
                <p className="fs-1 fw-bold">¿Cómo funciona Hidro?</p>
                    <div className="row">
                        <div className="col-12 col-lg-4">
                            <div className="p-4">
                                <img src={Ilustracion3} className="img-fluid" alt="Imagen Hidro" />
                                <p className="fs-3 fw-bold">Descarga la App</p>
                                <p className="fs-5">Regístrate una única vez en cualquiera de nuestras marcas aliadas o descarga la <strong>APP</strong> en <strong>Play Store</strong> o <strong>App Store</strong></p>
                            </div>
                        </div>
                        <div className="col-12 col-lg-4">
                            <div className="p-4">
                                <img src={Ilustracion1} className="img-fluid" alt="Imagen Hidro" />
                                <p className="fs-3 fw-bold">Acumula puntos</p>
                                <p className="fs-5">Comparte tu número de documento al finalizar tu pago</p>
                            </div>
                        </div>
                        <div className="col-12 col-lg-4">
                            <div className="p-4">
                                <img src={Ilustracion2} className="img-fluid" alt="Imagen Hidro" />
                                <p className="fs-3 fw-bold">Reclama tus premios</p>
                                <p className="fs-5">Consulta los premios disponibles en tus marcas favoritas. Los puntos no se mezclan, solo los puedes usar en la marca que los ganaste.</p>
                            </div>
                        </div>
                    </div>
                    <p className="fs-2 pt-2 mt-5">Descarga la App</p>
                    <div className="d-flex justify-content-center pb-5">
                        <div className="p-1 m-1">
                            <a href="#">
                                <img src={PlayStore} height="60" alt="Imagen Hidro" />
                            </a>
                        </div>
                        <div className="p-1 m-1" >
                            <a href="#">
                                <img src={AppStore} height="60" alt="Imagen Hidro" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="fondoBeigeDos pt-5">
                    <p className="fs-2 fst-normal text-center pt-5 pb-5 text-black">#HidroQueTePremia, <strong>de verdad</strong></p>
                    <div className="container pb-5">
                        <div className="row mb-5">
                            <div className="col-12 col-lg-3" style={{ display: Condicion }}>
                                <p className="fw-bold fs-3 mt-5 pt-5">Una App, infinitos puntos</p>
                                <p className="h5 fw-lighter">Olvídate de acumular decenas de tarjetas de puntos y perderlas. Tenlos todos en un solo lugar, puedes consultar cuántos tienes y en cuáles marcas.</p>
                                <br />
                                <br />
                                <p className="fw-bold fs-3">Puntos que premian</p>
                                <p className="h5 fw-lighter">No somos otra "App de puntos". Por primera vez ser un cliente Hidro trae beneficios reales, conoce los premios que te dan tus marcas favoritas..</p>
                            </div>
                            <div className="col-12 col-lg-1" style={{ display: Condicion }}>
                                <div className="pt-5 mt-5">
                                    <br /><br /><br />
                                    <img  src={Vector} className="img-fluid" alt="Imagen Hidro" />
                                </div>
                                <div className="pt-5 mt-5">
                                    <br /><br /><br /><br /><br /><br /><br /><br />
                                    <img  src={Vector} className="img-fluid" alt="Imagen Hidro" />
                                </div>
                            </div>
                            <div className="col-12 col-lg-4 text-center">
                                <img src={Iphone} className="img-fluid" alt="Imagen Hidro" />
                            </div>
                            <div className="col-12 col-lg-1" style={{ display: Condicion }}>
                                <div className="pt-5 mt-5">
                                    <br /><br /><br />
                                    <img  src={Vector} className="img-fluid" alt="Imagen Hidro" />
                                </div>
                                <div className="pt-5 mt-5">
                                    <br /><br /><br /><br /><br /><br /><br /><br />
                                    <img  src={Vector} className="img-fluid" alt="Imagen Hidro" />
                                </div>
                            </div>
                            <div className="col-12 col-lg-3 text-end" style={{ display: Condicion }}>
                                <p className="fw-bold fs-3 pt-5 mt-5">Cerca de ti</p>
                                <p className="h5 fw-lighter">Encuentra las marcas con los mejores premios cerca de ti y únete a sus programas en un instante..</p>
                                <br />
                                <br />
                                <p className="fw-bold fs-3 mt-5 pt-5">Ahorra por tus compras</p>
                                <p className="h5 fw-lighter">Conoce el ahorro en dinero que ganas por tu consumo en marcas aliadas..</p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default PuntosHidro;