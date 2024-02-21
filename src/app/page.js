export default function Home() {
  return (
    <main className="p-3 py-5">
      <section className="text-center flex flex-col justify-center items-center h-[calc(100vh-80px)]">
        <div className="text-center inline-block items-center mx-auto mb-5">
          <h1 className="text-3xl">Nombre de la Empresa</h1>
        </div>
        <p>Texto sobre las actividades de la Empresa.</p>
      </section>
      <section className="mt-10 mb-20 h-[80vh]">
        <div className="w-[100%] flex flex-wrap gap-5 justify-center">
          <div className="w-[90%] sm:w-[80%] md:w-[22%] h-[200px] bg-slate-900 rounded-[10px]"></div>
          <div className="w-[90%] sm:w-[80%] md:w-[22%] h-[200px] bg-slate-900 rounded-[10px]"></div>
          <div className="w-[90%] sm:w-[80%] md:w-[22%] h-[200px] bg-slate-900 rounded-[10px]"></div>
          <div className="w-[90%] sm:w-[80%] md:w-[22%] h-[200px] bg-slate-900 rounded-[10px]"></div>
          <div className="w-[90%] sm:w-[80%] md:w-[22%] h-[200px] bg-slate-900 rounded-[10px]"></div>
          <div className="w-[90%] sm:w-[80%] md:w-[22%] h-[200px] bg-slate-900 rounded-[10px]"></div>
          <div className="w-[90%] sm:w-[80%] md:w-[22%] h-[200px] bg-slate-900 rounded-[10px]"></div>
        </div>
      </section>
      <section className="grid grid-cols-1 gap-5 my-20 sm:grid-cols-2">
        <div className="flex gap-5 justify-center items-center">
          <img src="icono-img.png" alt="local" className="min-w-[50%] max-w-[60%]"></img>
        </div>
        <div className="flex flex-col justify-around items-start">
          <div>
            <h3 className="text-xl text-gray-400">Dirección:</h3>
            <p>Dirección del lugar donde trabajan</p>
          </div>
          <div>
            <h3 className="text-xl text-gray-400">Horario:</h3>
            <p>Horario de apertura y de cierre</p>
          </div>
          <div>
            <h3 className="text-xl text-gray-400">Contacto:</h3>
            <p>redes sociales y formas de contacto</p>
          </div>
        </div>
      </section>
    </main>
  );
}
