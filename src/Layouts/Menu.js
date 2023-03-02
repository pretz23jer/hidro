import React from "react";
import hidro2 from '../Resources/hidroa.png';

function Menu(){
  function activar(){
    document.getElementById('listaMenu').className = 'nav-link show';
    document.getElementById('listaMenu').setAttribute("aria-expanded", "true");
    document.getElementById('ulEstilizar').className = 'dropdown-menu format show';
    document.getElementById('ulEstilizar').setAttribute("data-bs-popper", "static");
  }
  
  return(
        <div>
          <nav className="navbar navbar-expand navbar-light bg-light" >
            <div className="container">
                <div className="collapse navbar-collapse">
                  <ul className="navbar-nav me-auto">
                    <li className="nav-item dropdown">
                      <a className="nav-link" href="#" onMouseOver={activar} id="listaMenu" role="button" data-bs-toggle="dropdown" aria-expanded="false" rel="noreferrer">
                        <i className="fa fa-bars fa-2x"></i>
                      </a>
                      <ul className="dropdown-menu format" id="ulEstilizar" aria-labelledby="listaMenu">
                        <div>
                          <li>
                            <a className="espaciarMenu" href="/coins" > Hidro Coins</a>
                          </li>
                          <li>
                            <a className="espaciarMenu" href="/puntos" >Puntos</a>
                          </li>
                          <li>
                            <a className="espaciarMenu" href="https://play.google.com/store/apps/" target="_blank"  rel="noopener noreferrer">Descarga la APP</a>
                          </li>
                          <li>
                            <a className="espaciarMenu" href="/actualizar" >Actualizar Datos</a>
                          </li>
                          <li>
                            <a className="espaciarMenu" href="/empresa" >Hidro para Empresas</a>
                          </li>
                        </div>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <div className="d-flex separarLogo">
                        <a className='navbar-brand' href="/" ><img src={hidro2} width='50' alt="Imagen Hidro" /></a>
                      </div>
                    </li>
    
                  </ul>
                  <div className="d-flex">
                      <div className="d-flex justify-content-end">
                        <div className="p-1">
                          <a href="#" className="btn btn-md btn-outline-dark textTamanio" rel="noreferrer">Inciar sesión</a>
                        </div>
                        <div className="p-1 botoneRegistro">
                          <a href="#" className="btn btn-md btn-info" rel="noreferrer">Registrarme</a>
                        </div>
                      </div>
                    </div>
          
                </div>
            </div>
          </nav>
        </div>
    )
}

export default Menu;