import estilos from './Vinculo.module.css'

function Vinculo({texto, href}) {
    return ( 
        <a href={href} className={estilos.vinculo}>{texto}</a>
     );
}

export default Vinculo;