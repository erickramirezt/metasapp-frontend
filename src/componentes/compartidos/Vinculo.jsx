import { Link } from 'react-router-dom';
import estilos from './Vinculo.module.css'

function Vinculo({texto, to}) {
    return ( 
        <Link to={to} className={estilos.vinculo}>
            {texto}
        </Link>
        // <a href={href} className={estilos.vinculo}></a>
     );
}

export default Vinculo;