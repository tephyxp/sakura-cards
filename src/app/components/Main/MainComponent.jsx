import Link from "next/link";
import ButtonComponent from "../ButtonComponent/ButtonComponent";

export default function MainComponent() {
  return (
    <div className="container mx-auto">
      {/* Versión Desktop */}
      <div className="hidden sm:block">
        <nav className="flex items-center gap-40">
          <Link href="/choose-card" className="mb-11">
            <ButtonComponent text={"Empezar"} />
          </Link>
          <div className="items-center mt-10">
            <h1 className="text-[5.25rem] text-font-color leading-9">
              Sakura Tarot{" "}
            </h1>
            <h2 className={`text-[3rem] text-center text-font-color mt-5`}>
              Instrucciones
            </h2>
          </div>
        </nav>
        <section className="grid grid-flow-col auto-cols-max gap-20">
          <img src="/img/pngwing.png" className="w-13.188 h-140 mb-20 mt-10" />
          <section className="gap-5">
            <div className=" max-w-xl ml-25  p-5">
              <p className="text-[1.5em] text-font-color">
                ¡Bienvenido a nuestra plataforma de tarot! Descubre las
                revelaciones del pasado, presente y futuro con las cartas clown.
                Sigue estos sencillos pasos para obtener tu lectura
                personalizada. Explora las cartas y elige las 3 que más te llame
                la atención, con esas 3 cartas veremos tu pasado, presente y
                futuro.
              </p>
            </div>
            <div className="max-w-xl ml-25">
              <p className="text-[1.5rem] text-font-color p-6 mb-20">
                Te aconsejamos que te siéntes en un lugar tranquilo, respira
                profundamente y permite que la energía de las cartas te
                envuelva. ¡La experiencia de Tarot de Sakura está diseñada para
                iluminar tu camino interior y ofrecerte perspectivas
                fascinantes! ¡Que las cartas guíen tu viaje!
              </p>
            </div>
          </section>
        </section>
      </div>

      {/* Versión Móvil */}
      <div className="block sm:hidden text-center">
        <h1 className="text-3xl text-font-color leading-9 mt-5">
          Sakura Tarot{" "}
        </h1>
        <h2 className={`text-2xl text-font-color mt-2`}>Instrucciones</h2>
        <img
          src="/img/pngwing.png"
          alt="Tarot"
          className="w-3/4 md:w-full h-auto mx-auto mb-4 mt-4"
        />
        <p className="text-lg text-font-color mb-4">
          ¡Bienvenido a nuestra plataforma de tarot! Descubre las revelaciones
          del pasado, presente y futuro con las cartas clown. Sigue estos
          sencillos pasos para obtener tu lectura personalizada. Explora las
          cartas y elige las 3 que más te llame la atención, con esas 3 cartas
          veremos tu pasado, presente y futuro.
        </p>
        <p className="text-lg text-font-color p-6 mb-4">
          Te aconsejamos que te sientes en un lugar tranquilo, respira
          profundamente y permite que la energía de las cartas te envuelva. ¡La
          experiencia de Tarot de Sakura está diseñada para iluminar tu camino
          interior y ofrecerte perspectivas fascinantes! ¡Que las cartas guíen
          tu viaje!
        </p>
        <div className="mx-auto">
          <Link href="/choose-card">
            <ButtonComponent text={"Empezar"} />
          </Link>
        </div>
      </div>
    </div>
  );
}

// export default function MainComponent() {
//   return (
//     <div >
//       <nav className="flex items-center gap-40 ">
//         <Link href="/choose-card" className="mb-11" >
//           <ButtonComponent text={"Empezar"} />
//         </Link>
//         <div className="items-center mt-10">
//           <h1 className="text-[5.25rem] text-font-color leading-9">Sakura Tarot </h1>
//           <h2 className={`text-[3rem] text-center text-font-color mt-5`}>Instrucciones</h2>
//         </div>
//       </nav>
//       <section className="grid grid-flow-col auto-cols-max gap-20 ">
//         <img src="/img/pngwing.png" className="w-13.188 h-140 mb-20 mt-10" />
//         <section className="gap-5 ">
//           <div className=" max-w-xl ml-25  p-5 ">
//             <p className="text-[1.5em] text-font-color">
//               ¡Bienvenido a nuestra plataforma de tarot! Descubre las
//               revelaciones del pasado, presente y futuro con las cartas clown.
//               Sigue estos sencillos pasos para obtener tu lectura personalizada.
//               Explora las cartas y elige las 3 que más te llame la atención, con esas 3 cartas veremos tu pasado, presente y futuro.
//             </p>
//           </div>
//           <div className="max-w-xl ml-25  ">
//             <p className="text-[1.5rem] text-font-color p-6 mb-20">
//               Te aconsejamos que te siéntes en un lugar tranquilo, respira
//               profundamente y permite que la energía de las cartas te envuelva.
//               ¡La experiencia de Tarot de Sakura está diseñada para iluminar tu
//               camino interior y ofrecerte perspectivas fascinantes! ¡Que las
//               cartas guíen tu viaje!
//             </p>
//           </div>
//         </section>
//       </section>
//     </div>
//   );
// }
