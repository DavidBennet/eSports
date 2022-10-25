import './styles/main.css'
import logo from './assets/Logo.svg'
import { GameBanner } from './components/GameBanner'
import { CreateAdBanner } from './components/CreateAdBanner'
import { useEffect, useState } from 'react'

interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  }
}

export function App() {
  const [games, setGames] = useState<Game[]>([])

  useEffect(() => {
    fetch('http://localhost:3334/games')
    .then(response => response.json())
    .then(data => {
      setGames(data)
    })
  }, [])

  return (
    <div className='max-w-[1200px] mx-auto  flex flex-col items-center'>
      <img src={logo} className='w-68 h-36 my-16'/>

      <h1 className='text-5xl text-white font-black'>
        Seu <span className='bg-nlw-gradient bg-clip-text text-transparent'>duo</span> está aqui
      </h1>

      <div className='grid grid-cols-6 gap-6 mt-16'>
        {games.map(game => {
          return (
            <GameBanner 
              key={game.id}
              bannerUrl={game.bannerUrl} 
              title={game.title} 
              adsCount={game._count.ads}
            />
          )
        })}    
      </div>

      <CreateAdBanner />

    </div>
  )
}


