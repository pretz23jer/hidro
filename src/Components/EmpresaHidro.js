import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Video from '../Resources/video.mp4';

import marca1 from '../Resources/marca1.png';
import marca2 from '../Resources/marca2.png';
import marca3 from '../Resources/marca3.png';
import marca4 from '../Resources/marca4.png';
import marca5 from '../Resources/marca5.png';
import marca6 from '../Resources/marca6.png';

import asesor from '../Resources/asesor.png';
import casco from '../Resources/casco.ico';
import envio from '../Resources/envio.ico';
import motor from '../Resources/motor.ico';
import seguri from '../Resources/seguridad.ico';
import descuento from '../Resources/descuento.ico';
import telefono from '../Resources/telefono.ico';
import reloj from '../Resources/reloj.ico';
import anuncio from '../Resources/anuncio.jpg';
import click from '../Resources/verde.ico';
import bombas from '../Resources/p6.png';
import depositos from '../Resources/purifica.png';
import calentadores from '../Resources/calentador.png';

class EmpresaHidro extends Component{
    render() {
        return(
            <>
                <div className="container text-center pt-3 pb-5">
                    <div className="row">
                        <div className="col-12 col-lg-6">
                            <p className="fs-2 fw-bold pt-5">Únete a Hidro para prolongar tus equipos</p>
                            <p className="fs-5">La herramienta para hacer <strong>crecer tu negocio</strong> al aumentar las visitas y el gasto promedio de tus clientes</p>
                            <div className="pt-5 mt-1">
                            <Form method="post">
                                <div className="row">
                                    <div className="col">
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Control type="email" placeholder="Tu email" name="emailBusnes" required />
                                            <Form.Text className="text-muted text-start">
                                            Conoce nuestra plataforma...
                                            </Form.Text>
                                        </Form.Group>
                                    </div>
                                    <div className="col margenBoton">
                                        <Button variant="primary" type="submit">
                                            Agendar Demo
                                        </Button>
                                    </div>
                                </div>
                            </Form>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6">
                            <div>
                            <video className="img-fluid" controls autoPlay={true} muted={true} loop alt="Imagen General">
                                <source src={Video} type="video/mp4" />
                            </video>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="fondoBeige pt-5 mb-5">
                    <div className="container text-center">
                        <p className="fs-4">MÁS DE <strong>30</strong> MARCAS EN LATINOAMÉRICA CONFÍAN EN HIDRO</p>
                        <div className="row">
                            <div className="col-6 col-lg-2">
                                <div className="p-4">
                                    <img src={marca1} className="img-fluid" alt="Marca Empresa"/>
                                </div>
                            </div>
                            <div className="col-6 col-lg-2">
                                <div className="p-4">
                                    <img src={marca2} className="img-fluid" alt="Marca Empresa"/>
                                </div>
                            </div>
                            <div className="col-6 col-lg-2">
                                <div className="p-4">
                                    <img src={marca3} className="img-fluid" alt="Marca Empresa"/>
                                </div>
                            </div>
                            <div className="col-6 col-lg-2">
                                <div className="p-4">
                                    <img src={marca4} className="img-fluid" alt="Marca Empresa"/>
                                </div>
                            </div>
                            <div className="col-6 col-lg-2">
                                <div className="p-4">
                                    <img src={marca5} className="img-fluid" alt="Marca Empresa"/>
                                </div>
                            </div>
                            <div className="col-6 col-lg-2">
                                <div className="p-4">
                                    <img src={marca6} className="img-fluid" alt="Marca Empresa"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white pt-5 mb-5">
                    <div className="container">
                        <p className="fs-3 text-center">TODO LO QUE NECESITAS PARA HACER CRECER TU EMPRESA</p>
                        <p className="fs-4 text-center">Está en la plataforma de <strong>Hidro</strong></p>
                    </div>
                    <div className="container pt-5 mt-5">
                        <div className="row textoCotizaEspa">
                            <div className="col-12 col-md-6 col-lg-6">
                                <p>Posicionamiento de marca</p>
                                <p className="cotizaTexto fs-3 fw-bold">Productos de alta calidad,<br /> eficiencia  y garantía</p>
                                <div className="d-flex">
                                    <img src={casco} height="35"  alt="Marca Empresa"/><p className="ajusteTexto">Contamos con <strong>asesoría técnica</strong>  en implementación de nuestro productos adquiridos</p>
                                </div>
                                <div className="d-flex">
                                    <img src={motor} height="35"  alt="Marca Empresa"/><p className="ajusteTexto"><strong>Marcas reconocidas</strong> en motores internaciones</p>
                                </div>
                                <div className="d-flex">
                                    <img src={seguri} height="35"  alt="Marca Empresa"/><p className="ajusteTexto">Compras <strong>seguras</strong> y fiables en todos nuestros productos, así tambien garantía por desperfecto de fábrica</p>
                                </div>
                                <div className="d-flex">
                                    <img src={descuento} height="35"  alt="Marca Empresa"/><p className="ajusteTexto"><strong>Descuentos</strong> especiales a nuestros clientes</p>
                                </div>
                                <div className="d-flex">
                                    <img src={envio} height="35"  alt="Marca Empresa"/><p className="ajusteTexto"><strong>Envíos</strong> a todo el país, trabajando con las empresas de paquetería y envíos: <strong>FORZA, CARGO EXPRESO</strong> y <strong>GUATEX</strong></p>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-6">
                                <img src={asesor} height="350" className="img-fluid"  alt="Marca Empresa"/>
                            </div>
                        </div>
                    </div>
                    <div className="container segmentoDos pt-5 mt-5" data-aos="down-up">
                        <div className="row">
                            <div className="col-12 col-md-6 col-lg-6">
                                <img src={anuncio} height="200" className="img-fluid pb-3"  alt="Marca Empresa"/>
                            </div>
                            <div className="col-12 col-md-6 col-lg-6">
                                <p className="cotizaTexto pt-4">Desde tu hogar puedes ver <br /> nuestros productos, realizar <br /> compras y mucho mas...</p>
                                <div className="d-flex">
                                    <img src={telefono} height="30" alt="Marca Empresa" /><p className="ajusteTexto">Puedes visitarnos por medio de tu <strong>Smarthphone</strong>  o computadora</p>
                                </div>
                                <div className="d-flex">
                                    <img src={reloj} height="30" alt="Marca Empresa" /><p className="ajusteTexto">Nuestro sitio disponible las <strong>24 /7 </strong> los 365 días</p>
                                </div>
                                <div className="d-flex">
                                    <i className="fa fa-facebook fa-lg"></i><p className="ajusteTexto">Contamos con nuestras <strong>Redes Sociales</strong> para que nos sigues y te puedas comunicar con nosotros</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-black pt-5 pb-5 text-center">
                        <p className="fs-3 fw-bold text-white lh-1 pt-3">¡Conoce ahora cómo puedes aumentar <br/>la rentabilidad de tu <br />empresa con Hidro!</p>
                        <p className="text-white">Plan de premios, base de datos, conocimiento y segmentación de clientes, campañas de marketing, indicadores de negocio y más. 😊</p>
                        <a href="#" className="btn btn-md btn-warning" rel="noreferrer">Agendar Demo</a><br /><br />
                    </div>
                    <div className="bombaAgua pt-5 pb-5" data-aos="down-up">
                        <p className="contactar text-center text-black fs-3" >Adquiere tus productos</p>
                        <p className="text-center text-black">¡Recuerde que con <strong>Hidrocompras</strong> encuentras todos los productos referentes a piscinas </p>
                        <p className="text-center text-black">Cotiza en un solo clic <img src={click} width="50" alt="imagen-hidro"/> </p>
                    </div>
                    <div className="container concatacnos" data-aos="down-up">
                        <p className="cotizaTexto text-center fs-3 fw-bold">Productos para el Hogar</p><br/><br/>
                        <div className="text-center">
                            <img src={bombas} height="200"  alt="Imgaen Hidro"/><img src={calentadores} height="200" alt="imagen-hidro" /><img src={depositos} height="200"  />
                            <br/><br/>
                            <p className="text-center fw-bold">BOMBAS | CALENTADORES | FILTROS</p>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default EmpresaHidro;