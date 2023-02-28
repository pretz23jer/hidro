import React, { Component } from "react";
import Banner from '../Resources/baner5.png';
import PreguntasImg from "../Resources/persona10.png";
import 'aos/dist/aos.css';
import AOS from 'aos';

class PreguntasHidro extends Component{
    render() {
        AOS.init()
        return(
            <>
                <img className="img-fluid" src={Banner} alt="Imagen Hidro"/>
                <div className="container">
                    <div className="ajustarPregunta">
                        <div className="d-flex text-center">
                            <p className="text-white p-1">PREGUNTAS</p> <p className="text-info p-1">FRECUENTES</p>
                        </div>
                    </div>
                    <div className="row mt-5 pt-2" data-aos="fade-down">
                        <div className="col-12 col-lg-4 text-center pt-5">
                            <div>
                                <img className="img-fluid" src={PreguntasImg} alt="Imagen Hidro" />
                            </div>
                        </div>
                        <div className="col-12 col-lg-8 pt-3" data-aos="fade-down">
                            <div className="accordion" id="accordionExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingOne">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                    ¿COMO FUNCIONA EL PLAN LEALTAD DE HIDROCOMPRAS?
                                    </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                    El <strong>AFILIADO </strong>realiza sus trabajos diarios con normalidad, todo sigue igual y al momento de reparar o instalar alguno de los productos hidraulicos de las marcas que representamos, invitan al cliente a que compre en llinea desde nuestra pagina o app de <strong>HIDROCOMPRAS</strong> o bien se puede comunicar con nosotros via whatsapp o llamada y comprar directamente con <strong>HIDROCOMPRAS</strong>,   el equipo sera facturado y enviado al lugar indicado por su cliente.<br /> Cuando el equipo llegue a su destino solo es cuestion de instalar, automaticamente ganas una comisión por la referencia y eso es adicional a su instalacion,  a fin de mes se pagara el acumulado de los productos que se vendieron o refirieron en <strong>HIDROCOMPRAS</strong> y aumentaras tus ingresos.<br />
                                    Ej.   El <strong>AFILIADO</strong> realiza un cambio de bomba centrifuga y cobra Q400 por su trabajo, si el AFILIADO compra el equipo en cualquier tienda, el <strong>AFILIADO</strong> no gana nada mas que su mano de obra, pero si el <strong>AFILIADO</strong> compra el equipo con <strong>HIDROCOMPRAS</strong>, el <strong>AFILIADO</strong> ganara un porcentaje de comisión equivalente al valor del producto.
                                    Gana Q400 (de mano de obra)  y Q125* (monto variable) de comisión adicional. 
                                    </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    ¿COMO ME AFILIO AL PLAN LEALTAD DE HIDROCOMPRAS?
                                    </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                    Descarga la app desde tu tienda App Stote o Play Store, registrate llenando los campos solicitados, ya que recibiste tu <strong>USUARIO</strong> y <strong>CONTRASEÑA</strong> tendras acceso a la app donde encontraras nuestros productos y tu billetera digital en donde podras ir controlando las ventas que refieres.
                                    </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    ¿CUANTO PUEDO GANAR AL MES?
                                    </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                    Dependerá de la cantidad de referencias y el monto de estas mismas que se acumulen durante el mes, puede variar entre Q200 y Q3,500.
                                    </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#cuartro" aria-expanded="false" aria-controls="cuartro">
                                    ¿TENGO ALGUN CONTRATO O PRESTACIONES?
                                    </button>
                                    </h2>
                                    <div id="cuartro" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                    No, Hidrocompras no ofrece contratos o prestaciones ya que somos una herramienta digital para productos hidráulicos, las comisiones son únicamente cuando refieres y el cliente adquiere el producto. 
                                    </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#cinco" aria-expanded="false" aria-controls="cinco">
                                    ¿QUE BENEFICIOS OFRECEN?
                                    </button>
                                    </h2>
                                    <div id="cinco" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                    Pago de comisión por refererir
                                    Puntos que se pueden canjear por productos,  tarjetas de regalos y premios
                                    Capacitaciones Programadas presenciales y/o virtuales
                                    Certificaciones por Marca y/o proveedor<br />
                                    *Las fechas de los cursos y capacitaciones seran variadas y nuestros afiliados serán notificados por medio de whatsapp, llamada o notificacion desde su perfil en la app de <strong>HIDROCOMPRAS</strong>.
                                    </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#seis" aria-expanded="false" aria-controls="seis">
                                    ¿Quiénes pueden suscribirse al plan de afiliados?
                                    </button>
                                    </h2>
                                    <div id="seis" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                    El plan está diseñado para técnicos en plomería que se dedican a este oficio diariamente, pero cualquier otra persona puede registrarse sin problemas.
                                    </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#siete" aria-expanded="false" aria-controls="siete">
                                    ¿Si no soy técnico también puedo ganar comisión?
                                    </button>
                                    </h2>
                                    <div id="siete" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                    La comisión está diseñada para que técnicos en plomería puedan aumentar sus ingresos en base a sus trabajos diarios, sino eres técnico y deseas adquirir algún producto podemos ofrecerte un descuento sobre el mismo.
                                    </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#ocho" aria-expanded="false" aria-controls="ocho">
                                    ¿Qué precio tienen sus productos?
                                    </button>
                                    </h2>
                                    <div id="ocho" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                    Nuestros productos tienen en mismo precio del mercado actual,  Hidrocompras no aumenta los precios ya que nos alineamos al precio de nuestros proveedores.
                                    <br />
                                    *Tienes alguna pregunta adicional, escríbela acá y nos pondremos en contacto contigo lo antes posible.
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pt-5 mt-5" data-aos="fade-down">
                        <div className="fondoLlamada">
                            <p className="text-center fs-4 pb-4">Si no lograste una respuesta a tu pregunta, contáctanos</p>
                            <div className="d-flex justify-content-center p-3">
                                <div className="p-1">
                                    <a className="btn btn-md btn-dark" href="#">Llámanos al +502 3065 6786</a>
                                </div>
                                <div className="p-1">
                                    <a className="btn btn-md btn-dark" href="#">Envíanos un email</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                </div>
            </>
        )
    }
}

export default PreguntasHidro;