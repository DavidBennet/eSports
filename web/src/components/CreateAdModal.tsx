import { GameController } from 'phosphor-react'
import { Input } from './form/Input'
import * as Dialog from '@radix-ui/react-dialog'



export function CreateAdModal() {
    return (
        <Dialog.Portal>
          <Dialog.Overlay className='bg-black/60 inset-0 fixed'/>

          <Dialog.Content className='fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black/33'>
            <Dialog.Title className='text-3xl font-black'>Publique um anúncio</Dialog.Title>

            <form className='mt-8 flex flex-col gap-4'>
              <div className='flex flex-col gap-2'>
                <label 
                  htmlFor="game" 
                  className='font-semibold'
                >Qual o game?</label>
                <Input id='game' placeholder='Selecione o  game que deseja jogar' />
              </div>

              <div className='flex flex-col gap-2'>
                <label htmlFor="name">Seu nome (ou nickname)</label>
                <Input id='name' placeholder='Como te chamam no game?' />
              </div>

              <div className='grid grid-cols-2 gap-4'>
                <div className='flex flex-col gap-2'>
                  <label htmlFor="yearsPlaying">Joga há quantos anos?</label>
                  <Input id='yearsPlaying' type="number" placeholder='tudo bem ser zero' />
                </div>
                  
                <div className='flex flex-col gap-2'>
                  <label htmlFor="discord">Qual o seu Discord?</label>
                  <Input id='discord' type="text" placeholder='Usuário#0000' />
                </div>
              </div>

              <div className='flex gap-6'>
                <div className='flex flex-col gap 2 flex-1'>
                  <label htmlFor="weekDays">Quando costuma jogar?</label>
                  <div className='grid grid-cols-4 gap-2'>
                    <button className='w-8 h-8 bg-zinc-900 rounded' title='Domingo'>D</button>
                    <button className='w-8 h-8 bg-zinc-900 rounded' title='Segunda'>S</button>
                    <button className='w-8 h-8 bg-zinc-900 rounded' title='Terça'>T</button>
                    <button className='w-8 h-8 bg-zinc-900 rounded' title='Quarta'>Q</button>
                    <button className='w-8 h-8 bg-zinc-900 rounded' title='Quinta'>Q</button>
                    <button className='w-8 h-8 bg-zinc-900 rounded' title='Sexta'>S</button>
                    <button className='w-8 h-8 bg-zinc-900 rounded' title='Sábado'>S</button>
                  </div>
                </div>
                <div className='flex flex-col gap 2 flex-1'>
                  <label htmlFor="hourStart">Qual horário do dia?</label>
                  <div className='grid grid-cols-2 gap-2'>
                    <Input id='hourStart' type="time" placeholder='De' />
                    <Input id='hourEnd' type="time" placeholder='Até' />
                  </div>                    
                </div>
              </div>

              <div className='mt-2 flex gap-2 text-sm'>
                <Input type="checkbox" />
                Costumo me conectar ao chat de voz
              </div>

              <footer className='mt-2 flex justify-end gap-4'>
                <Dialog.Close 
                  className='bg-zinc-500 px-5 h-12 rounded-md font-semibold hover:bg-zinc-600'
                >
                    Cancelar
                </Dialog.Close>
                <button 
                  type='submit'
                  className='bg-violet-500 px-5 h-12 rounded-md font-semibold flex items-center gap-3 hover:bg-violet-600'
                >
                  <GameController size={24}/>
                  Encontrar duo
                </button>
              </footer>
            </form>
            
          </Dialog.Content>
        </Dialog.Portal>
    )
}