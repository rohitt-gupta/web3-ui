import localFont from "next/font/local";


export const sfPro = localFont({
  src: "../../public/fonts/sf-pro-medium.otf",
  variable: "--font-sf-pro",
  weight: "650",
});


export const manrope = localFont({
  src: [
    {
      path: '../../public/fonts/manrope-thin.otf',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../../public/fonts/manrope-light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/manrope-regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/manrope-medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/manrope-semibold.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/manrope-bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/manrope-extrabold.otf',
      weight: '800',
      style: 'normal',
    },
  ],
  variable: '--font-manrope',
})