import Main from "@/components/Main";

export const metadata = {
  title: 'Swapr - Swap Tokens Easily',
  description: 'Swap tokens with the best rates and returns using Swapr, your trusted decentralized exchange.',
  keywords: ['Swapr', 'token swap', 'cryptocurrency', 'DeFi', 'decentralized exchange'],
  openGraph: {
    title: 'Swapr - Swap Tokens Easily',
    description: 'Get the best rates and returns for your token swaps with Swapr.',
    // images: [
    //   {
    //     url: '/og-image.png',
    //     width: 1200,
    //     height: 630,
    //     alt: 'Swapr Open Graph Image',
    //   },
    // ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Swapr - Swap Tokens Easily',
    description: 'Get the best rates and returns for your token swaps with Swapr.',
    // images: ['/twitter-image.png'],
  },
};


export default function Home() {
  return (
    <main className="relative bg-[url('/background.png')] bg-white bg-cover bg-center h-screen">
      <div className="flex justify-center items-center h-full">
        <Main />
      </div>
    </main>
  );
}
