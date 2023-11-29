'use client'
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import FlowerIcon2 from '@/assets/icons/FlowerIcon2';

export default function Encomenda() {
  // Get the current pathname
  const pathname = usePathname();

  // Check if the pathname is one of the specified routes
  const isEncomendaVisible =
    pathname?.startsWith('/all-products') || pathname?.startsWith('/my-orders') || pathname?.startsWith('/advertisement');

  // Render nothing if not on the specified pages
  if (!isEncomendaVisible) {
    return null;
  }

  // Render the Encomenda component if on the specified pages
  return (
    <div className="bg-green flex flex-col md:flex-row justify-around place-items-center gap-5 px-4 md:px-20 py-5">
      <FlowerIcon2 style={{ color: 'white' }} />
      <FlowerIcon2 style={{ color: 'white' }} />
      <FlowerIcon2 style={{ color: 'white' }} />
      <div>
        <h2 className="text-2xl text-white font-semibold font-open">
          Quer um produto Cor da Chita personalizado?
        </h2>
        <h2 className="text-2xl text-white">Faça sua encomenda!</h2>
      </div>
      <Link
        className="text-white border rounded-full p-5 hover:scale-105 hover:opacity-80"
        href="https://api.whatsapp.com/send?phone=5583987261972"
      >
        Entrar em contato
      </Link>
      <FlowerIcon2 style={{ color: 'white' }} />
      <FlowerIcon2 style={{ color: 'white' }} />
      <FlowerIcon2 style={{ color: 'white' }} />
    </div>
  );
}
