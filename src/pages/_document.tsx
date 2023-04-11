import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <div className='bg-white drop-shadow-sm'>
        <div className='container mx-auto'>
          <ul className='flex justify-between p-3 text-black'>
            <li><a href="\">Logo</a></li>
            <li><a href="#">Olá, Fulano</a></li>
          </ul>
        </div>
      </div>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
