import { MagnifyingGlassPlus } from "phosphor-react";
import * as Dialog from '@radix-ui/react-dialog'



export function CreateAdBanner() {
    return (
        <div className='pt-1 bg-nlw-gradient self-stretch my-8 mx-16 overflow-hidden rounded-lg '>
        <div className='bg-[#2A2634] px-8 py-6 flex justify-between items-center'>
          <div>
            <strong className='text-white text-2xl font-black block'>Não encontrou seu duo?</strong>
            <span className='text-zinc-400 block '>Publique um anúncio para encontrar novos Players!</span>
          </div>

          <Dialog.Trigger className='w-52 h-12 flex text-center items-center bg-violet-500 hover:bg-violet-700 rounded-md text-white py-3 px-4 gap-3'>
            <MagnifyingGlassPlus size={22}/>
            Publicar Anúncio
          </Dialog.Trigger>
        </div>
      </div>
    )
}