import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from "./Navbar.module.css";


const Navbar = () => {
	
	return (
		<nav>
			<NavLink to="/">
				Mini <span>Blog</span>
			</NavLink>
			<ul>
			<li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Home
          </NavLink>
        </li>
          <>
            <li>
              <NavLink
                to="/login"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                Entrar
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/register"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                Cadastrar
              </NavLink>
            </li>
          </>
			</ul>
		</nav>
	)
}

export default Navbar
