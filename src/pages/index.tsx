import { useState, useEffect } from 'react'

export default function Home() {
    const [endereco, setEndereco] = useState([]);

    // useEffect(() => {
    //     // cep();
    //     // console.log("ENDERECO:", endereco);
    // }, []);

  const cep =async () => {
    const response = await fetch("http://viacep.com.br/ws/01001000/json/")
    const data = await response.json()
    console.log(data);
    setEndereco(data);
  }
  return(
      <div className='bg-white text-black min-h-screen'>
        <button onClick={cep}>CEP {endereco.cep}</button>
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
                          <tr className="border-b ">
                              <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap w-full">
                                  Apple MacBook Pro 17
                              </th>
                              <td className="px-6 py-4">
                                  Notebook
                              </td>
                              <td className="px-6 py-4">
                                  R$16.999,00
                              </td>
                              <td className="px-6 py-4">
                                  <a className="mr-5" href="">Editar</a>
                                  <a href="">Deletar</a>
                              </td>
                          </tr>
                          <tr className="border-b ">
                              <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                                  Iphone 14
                              </th>
                              <td className="px-6 py-4">
                                  Smartphone
                              </td>
                              <td className="px-6 py-4">
                                  R$10.999,00
                              </td>
                              <td className="px-6 py-4">
                                  Deletar
                              </td>
                          </tr>
                      </tbody>
                  </table>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}
