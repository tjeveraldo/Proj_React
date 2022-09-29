// Arquivo de estilo

import MyComponent from "./MyComponent";

const FirstComponent = () => {
    return(
        <div>
            {/*Algum comentario */}
            <h1>Meu Primeiro Componente</h1>
            <p className="Teste">Meu Texto</p>
            <MyComponent/>
        </div>
    );
};

export default FirstComponent;