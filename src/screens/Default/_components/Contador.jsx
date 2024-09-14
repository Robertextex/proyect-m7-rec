import { useEffect, useState } from "react";

const Contador =()=>{
    const [contador, setContador] = useState(0);


    const handleContador1=() =>{
        setContador(contador+1);
    }
    const handleContador2=() =>{
        setContador(contador-1);
    }

    useEffect(() =>{
        setContador(12);
    }, []);
    useEffect(() =>{
        if(contador===15){
            alert('contador es 15');
        }
    }, [contador]);

    useEffect(() => {
        return () =>{
            console.log('El componente se desmonto');
        }
    });



    return (
            <>
                <h1>Componente contador</h1>
                <h3>{contador}</h3>
                <div>
                    <button onClick={handleContador1}>Aumentar</button>
                    <button onClick={handleContador2}>Disminuir</button>
                </div>
            </>
    );
};

export default Contador;