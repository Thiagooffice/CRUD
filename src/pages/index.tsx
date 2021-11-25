import Botao from "../components/Botao";
import Cliente from "../components/Cliente";
import Formulario from "../components/Formulario";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";



export default function Home() {

  const clientes=[
    new Cliente("Ana", 34, "1"),
    new Cliente("Bia", 45, "1"),
    new Cliente("Carlos", 23, "3"),
    new Cliente("Pedro", 54, "4"),
  ]
  function clienteSelecionado(cliente: Cliente){
    console.log(cliente.nome)
  }
  function clienteExcluido(cliente: Cliente){
    console.log(`Excluido... ${cliente.nome}`)
  }

  return (
    <div className={`
    flex justify-center items-center
    h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white 
    `}>
     <Layout titulo="Cadastro Simples">
       <div className={`justify-end flex`}>
       <Botao className="mb-4" cor="green"  >Novo Cliente</Botao>
       </div>

       <Tabela clientes={clientes} 
       clienteSelecionado={clienteSelecionado}
       clienteExcluido={clienteExcluido}
  />
      <Formulario cliente={clientes[3]}></Formulario>
     </Layout>
    </div>
  )
}