import './styles/main.css'
import logo from './assets/Logo.svg'
import { MagnifyingGlassPlus } from 'phosphor-react'

export function App() {
  return (
    <div className='max-w-[1344px] mx-auto  flex flex-col items-center'>
      <img src={logo} className='w-72 h-40 my-20'/>

      <h1 className='text-6xl text-white font-black'>
        Seu <span className='bg-nlw-gradient bg-clip-text text-transparent'>duo</span> está aqui
      </h1>

      <div className='grid grid-cols-6 gap-6 mt-16'>
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="./image 1.svg" alt="" />

          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className='font-bold text-white block'>League of Legends</strong>
            <span className='text-zinc-300 text-sm block'>1 anúcios</span>
          </div>

        </a>
        
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="./image 2.svg" alt="" />

          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className='font-bold text-white block'>DOTA 2</strong>
            <span className='text-zinc-300 text-sm block'>2 anúcios</span>
          </div>

        </a>
        
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="./image 3.svg" alt="" />

          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className='font-bold text-white block'>Counter Strike</strong>
            <span className='text-zinc-300 text-sm block'>3 anúcios</span>
          </div>

        </a>
        
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="./image 4.svg" alt="" />

          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className='font-bold text-white block'>Word of Warcraft</strong>
            <span className='text-zinc-300 text-sm block'>4 anúcios</span>
          </div>

        </a>
        
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="./image 5.svg" alt="" />

          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className='font-bold text-white block'>Apex Legends</strong>
            <span className='text-zinc-300 text-sm block'>5 anúcios</span>
          </div>

        </a>
        
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="./image 6.svg" alt="" />

          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className='font-bold text-white block'>Fortnite</strong>
            <span className='text-zinc-300 text-sm block'>6 anúcios</span>
          </div>

        </a>
      </div>

      <div className='pt-1 bg-nlw-gradient self-stretch my-8 mx-[4.5rem] overflow-hidden rounded-lg '>
        <div className='bg-[#2A2634] px-8 py-6 flex justify-between items-center'>
          <div>
            <strong className='text-white text-2xl font-black block'>Não encontrou seu duo?</strong>
            <span className='text-zinc-400 block '>Publique um anúncio para encontrar novos Players!</span>
          </div>

          <button className='w-52 h-12 flex text-center items-center bg-violet-500 hover:bg-violet-700 rounded-md text-white py-3 px-4 gap-3'>
            <MagnifyingGlassPlus size={22}/>
            Publicar Anúncio
          </button>
        </div>
      </div>
    </div>
  )
}


