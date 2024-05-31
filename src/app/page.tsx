import Logo from '@/../public/Delivery.svg'
import Image from 'next/image';

export default function Home() {
  return (
    <main className='flex items-center flex-col justify-center min-h-[calc(100vh-80px)]'>
      <h2 className='font-medium text-2xl mb-2 text-Azul-Marinho'>Gerencie sua empresa</h2>
      <h1 className='font-bold text-3xl mb-8 text-laranja md:text-4xl'>Seu delivery, está lhe esperando.</h1>
      <Image
        src={Logo}
        alt='Seu delivery, está lhe esperando.'
        width={400}
        className='max-w-sm md:max-w-xl'
      />
    </main>
  );
}