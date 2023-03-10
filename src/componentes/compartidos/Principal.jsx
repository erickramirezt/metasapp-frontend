import estilos from './Principal.module.css'
import Vinculo from './Vinculo';

function Principal({ children }) {
  return (
    <div className={estilos.principal}>
      <aside className={estilos.aside}>
        <Vinculo to="/lista" texto='Lista'/>
        <Vinculo to="/crear" texto='Crear'/>
      </aside>
      <main className={estilos.main}>{children}</main>
    </div>
  );
}

export default Principal;
