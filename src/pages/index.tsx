import { useState, useEffect } from 'react'
import { ToastContainer, toast, TypeOptions } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        listaDeProdutos();
    }, []);
    
    async function listaDeProdutos(){
        let url = "http://172.17.0.2:3030/produto/findAll/";
        const response = await fetch(url,{
            method: 'GET',
            headers: {
                Accept: 'application/json',
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"  
            },
        });
        const jsonData = await response.json();
        setProdutos(jsonData);
    }

    async function deletarProduto(id, nome) {
        let url = "http://172.17.0.2:3030/produto/delete/";
        const response = await fetch(url,{
            method: 'DELETE',
            headers: {
                Accept: 'application/json',
                "Content-type": 'application/json' 
            },
            body: JSON.stringify({ id: id })
        }).then(e=>{
            if(e.status == 200){
                listaDeProdutos();
                toast("Produto "+nome+" deletado com sucesso!", {
                    type: "success" as TypeOptions
                  });
            }
        });
    }

    return(
      <div className='bg-white text-black min-h-screen'>
        <div className=" container mx-auto pt-10">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <div className="px-6 py-4 bg-gray-200">
              <div className="flex justify-between">
                <h1 className="text-3xl font-semibold">Produtos</h1>
                <a type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" href="/edit">Novo</a>
                </div>
            </div>
            <div className="bg-white">
              <div className="relative overflow-x-auto">
                  <table className="w-full text-sm text-left text-gray-500">
                      <thead className="text-md text-gray-700 uppercase bg-gray-100">
                          <tr>
                              <th scope="col" className="px-6 py-3">
                                  Nome
                              </th>
                              <th scope="col" className="px-6 py-3">
                                  Categoria
                              </th>
                              <th scope="col" className="px-6 py-3">
                                  Preço
                              </th>
                              <th scope="col" className="px-6 py-3">
                                  Ação
                              </th>
                          </tr>
                      </thead>
                      <tbody>
                        {produtos.map((p)=>
                            <tr className="border-b " key={p.id}>
                                <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap w-full">
                                    {p.nome}
                                </th>
                                <td className="px-6 py-4">
                                    {p.categoria}
                                </td>
                                <td className="px-6 py-4">
                                    {p.preco}
                                </td>
                                <td className="px-6 py-4">
                                    <a className="mr-5" href="">Editar</a>
                                    <a onClick={(e) => deletarProduto(p.id, p.nome)}>Deletar</a>
                                </td>
                            </tr>
                        )}
                      </tbody>
                  </table>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer position="bottom-left" newestOnTop />
    </div>
  );
}
