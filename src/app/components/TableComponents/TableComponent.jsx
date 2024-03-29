import DeleteHistory from "./DeleteHistory"
import Table from "./Table"
import Accordion from "./Accordion";
import ButtonsTable from "./ButtonsTable";
import Link from 'next/link';
import Image from "next/image";

export default function TableComponent({ users }) {
  
  return (
    
  <>
    {/* // Desktop version */}
    <div className="md:relative">
    <Image 
        width={496}
        height={456}
        className=" absolute top-0 left-0 opacity-30 z-0" 
        src="/img/Kinomoto.png" 
        alt="Big-mandala" />
      <Image 
        width={191}
        height={190}
        className="z-0 absolute bottom-1 right-20 opacity-30" 
        src="/img/Kinomoto.png" 
        alt="Small-mandala" />
      <div className="z-20 flex items-center justify-center my-10 mx-8 ms:mx-52 rounded-2xl border-4 border-orange-100 p-0">
        <table className="z-20 w-full hidden md:table">
          <thead className="">
            <tr>
              <th className="border-2xl border-zinc-400 p-4">NOMBRE</th>
              <th className="border border-zinc-400 p-4">FECHA</th>
              <th className="border border-zinc-400 py-4 px-5">RESULTADO LECTURA DE CARTAS</th>
              <th className="border-2xl border-zinc-400 p-4">ACCIONES</th>
            </tr>
          </thead>
          <tbody className="border-2xl p-5">
            {users.map((user) => (
              <Table key={user.id} user={user} />
            ))}
          </tbody>
        </table>

        {/* mobile version */}
        <div className="md:hidden">
          <Image 
          width={496}
          height={456}
          className="absolute top-0 left-0 opacity-30 z-0" 
          src="/img/Kinomoto.png" 
          alt="Big-mandala" />
        <Image 
          width={191}
          height={190}
          className="z-0 absolute bottom-1 right-20 opacity-30" 
          src="/img/Kinomoto.png" 
          alt="Small-mandala" />
          {users.map((user) => (
            <Accordion key={user.id} user={user} />
          ))}
        </div>

      </div>
      <div className="flex justify-center">
        <DeleteHistory />
        <Link href="/choose-card" >
          <ButtonsTable text="Nueva Tirada" />
        </Link>
          
      </div>
    </div>
  </>
  
  )
}
