import Footer from "./Footer.jsx"
import { Outlet, NavLink } from 'react-router-dom';
 
export function Layout() {
  return (
    <div className="app">
      <header>
        <nav>
          <NavLink to="/">Inicio</NavLink>
          <NavLink to="/users/1">Perfil</NavLink>
        </nav>
      </header>
 
      <main>
        <Outlet />
      </main>
 

        <Footer/>

    </div>
  );
}

export default Layout