import { AiOutlineMail } from 'react-icons/ai'
import { FaGithub, FaLinkedinIn, FaPhoneAlt } from 'react-icons/fa'
import Link from 'next/link'

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center bg-[#000024]'>
      <div className='container w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <h1 className='py-4 text-gray-500'>
            Olá, somos a <span className='text-[#40CBF6]'>RealTech</span>
          </h1>

          <h2 className='py-2 text-gray-700 capitalize'>
             Desafios são oportunidades para inovar
          </h2>

          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>


            <a href="https://github.com/Projeto-Dev-Aula" rel="noreferrer" target="_blank" aria-label='Github'>
              <div className='rounded-full shadow-lg shadow-[#000010] p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-[#F6971D] text-white'>
                <FaGithub />
              </div>
            </a>

            <Link href="/#contact">
              <div className='rounded-full shadow-lg shadow-[#000010] p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-[#F6971D] text-white'>
                <AiOutlineMail />
              </div>
            </Link>

            <a href='tel:+55110028922' target="_blank" rel="noreferrer">
              <div className='rounded-full shadow-lg shadow-[#000010] p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-[#F6971D] text-white'>
                <FaPhoneAlt />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
