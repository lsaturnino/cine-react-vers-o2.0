import React from "react";
import './Header.css'
import {VscTriangleUp} from 'react-icons/vsc'
import {RiFilmFill} from 'react-icons/ri'
import {HiPencil} from 'react-icons/hi'
import {TbEyeFilled} from 'react-icons/tb'
import {FaUserAlt} from 'react-icons/fa'
import { RxMagnifyingGlass } from 'react-icons/rx';
import {AiFillHome} from 'react-icons/ai'

function Header() {
    return (
        <div className="header">
            <ul className="header-list">
                <img src="./public/images/cine.png" alt="" className="cine-logo"/>
                <img src="./public/images/servletrecuperafoto.png" alt="" className="usuario-nao-cadastrado"/>              <li>
                <a href="#">
                  <i className="fa fa-home" aria-hidden="true" /><VscTriangleUp /><AiFillHome /> Home     
                </a>
                <ul className="dropdown">
                  <li>
                    <a href="#">
                      <i className="fa fa-film" aria-hidden="true" /><RiFilmFill /> Filmes </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-pencil" aria-hidden="true" /><HiPencil /> Reviews

                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-eye" aria-hidden="true" /><TbEyeFilled /> Para ver
                    </a>
                  </li>
                  <li>
                    <a href="login">
                      <i className="fa fa-user" aria-hidden="true" /><FaUserAlt /> Perfil
                    </a>
                  </li>
                </ul>
                <div className="box">
                  <input
                    class="barra-de-busca"
                    type="text"
                    name="fff"
                    placeholder=" Busque filmes, séries, reviews ou pessoas..."
                  />
                  
                </div>
                
              </li>
              
            </ul>
          </div>
          

    )
}

export default Header;