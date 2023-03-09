import './Encabezado.css';

function Encabezamiento() {
  return (
    <div className="encabezado">
      <div className="contenedor">
        <a href="/" className='titulo'>Metas App</a>
      </div>
      <nav className="vinculo">
        <a href="/perfil">Perfil</a>
      </nav>
    </div>
  );
}

export default Encabezamiento;
