'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { v4 as uuidv4 } from "uuid"
import { createUser } from '@/utils/apiAxios';

import ButtonComponent from '../ButtonComponent/ButtonComponent';

// const InputComponent = ({ label, placeholder, onChange }) => {
//   return (
//     <div className="form-group">
//       <label className="font-text block ">{label}</label>
//       <input
//         type="text"
//         placeholder={placeholder}
//         className="mt-1 w-full border rounded-md bg-transparent text-white border-ffe4ce p-5"
//         style={{ width: '27.75rem' }}
//         onChange={onChange}
//       />
//     </div>
//   );
// };

//   InputComponent.propTypes = {
//   label: PropTypes.string.isRequired,
//   placeholder: PropTypes.string,
//   onChange: PropTypes.func,
// };


const InputComponent = () =>{
  const router = useRouter();
  const [newUser, setNewUser] = useState("")

  const userId = uuidv4()
  const handleNewUser = async(e) =>{
    e.preventDefault()
    await createUser({
      id: userId,
      date: new Date(),
      username: newUser,
      results: ''
    })

    setNewUser('')
    router.push('/choose-card?userId=${userId}')
  }

  return (
    <div className="form-group">
      <p className='text-[29px]'>Tu Nombre</p>
      <form onSubmit={handleNewUser}>
        <input
          type="text"
          placeholder='Escribe tu nombre'
          value={newUser}
          required          
          className="mt-1 w-full md:w-[27.75rem] border rounded-3xl bg-transparent text-white border-ffe4ce p-3 text-[26px]"
          
          onChange={(e) => {
            setNewUser(e.target.value)
          }}
        />
        <div className='my-10 mb-24 flex flex-col items-center '>

          <ButtonComponent text="Empezar Tirada" className='w-[300px] h-[60px] items-center bg-zinc-300 bg-opacity-0 rounded-[20px] border border-orange-100 p-12'/>
        </div>
      </form>

    </div>
  )

}
export default InputComponent;
