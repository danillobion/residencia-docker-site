  
export default function Edit() {
    return(
      <div className='bg-white text-black min-h-screen pt-10'>
        <div className="container mx-auto grid grid-cols-6 gap-4">
        <div className="col-start-2 col-span-4 ...">
        <div className=" container mx-auto">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <div className="px-6 py-4 bg-gray-200">
                <h1 className="text-3xl font-semibold">Cadastro</h1>
            </div>
            <div className="bg-white">
              <div className="relative overflow-x-auto">
                    <form className="px-8 pt-6 pb-8 mb-1">
                        <div className="mb-3">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nome">
                                Nome
                            </label>
                            <input className="appearance-none border rounded w-full py-2 px-3 mb-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="nome" type="text" placeholder="Digite o nome do produto"></input>
                            <p className="text-red-500 text-xs italic"></p>
                        </div>
                        <div className="mb-3">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="categoria">
                                Categoria
                            </label>
                            <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="categoria" type="text" placeholder="Digite a categoria do produto"></input>
                            <p className="text-red-500 text-xs italic"></p>
                        </div>
                        <div className="mb-3">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="preco">
                                Preço (R$)
                            </label>
                            <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none " id="preco" type="text" placeholder="Digite o valor do produto"></input>
                            <p className="text-red-500 text-xs italic"></p>
                        </div>
                        <div className="flex items-center justify-end">
                        <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            Cadastrar
                        </button>
                        </div>
                    </form>
              </div>
            </div>
          </div>
        </div>
        </div>
        </div>
      </div>
    );
  }
  