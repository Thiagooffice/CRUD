import { useState } from "react";
import Botao from "./Botao";
import Cliente from "./Cliente";
import Entrada from "./Entrada";

interface FormularioProps{
    cliente: Cliente
}

export default function Formulario(props: FormularioProps){

    const id = props.cliente?.id
    const [nome, setNome] = useState(props.cliente?.nome ?? "")
     const [idade, setIdade] = useState(props.cliente?.idade ?? 0)

    return(
        <div>
            {id ? (
                <Entrada 
                somenteLeitura
                texto="Código" 
                valor={id}
                className={`mb-4`}
                />
            ) : false}
            <Entrada 
            texto="Nome" 
            valor={nome}
            valorMudou={setNome}
            className={`mb-4`}
            />
             <Entrada 
             texto="Idade" 
             tipo="number"
            valor={idade}
            valorMudou={setIdade}
            />
            <div className={"flex mt-7 justify-end"}>
                <Botao cor="blue" className="mr-2">
                    {id ? "Alterar" : "Salvar"}
                </Botao>
                <Botao >
                    Cancelar
                </Botao>
            </div>
        </div>
    )
}