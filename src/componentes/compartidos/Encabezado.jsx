import Vinculo from './Vinculo';
import estilos from './Encabezado.module.css';

function Encabezamiento() {
  return (
    <header className={estilos.encabezado}>
      <div className={estilos.contenedor}>
        <a href="/" className={estilos.titulo}>Metas App</a>
      </div>
      <nav className={estilos.vinculo}>
        <Vinculo to="/perfil" texto='Perfil'/>
      </nav>
    </header>
  );
}

export default Encabezamiento;
