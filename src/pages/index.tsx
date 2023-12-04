import Image from 'next/image'
import { Inter } from 'next/font/google'
// import { Web5 } from "@web5/api";
import Homepage from './Homepage';

const inter = Inter({ subsets: ['latin'] })

// const { web5, did: aliceDid } = await Web5.connect();

export default function Home() {
  return (
    <>
      <Homepage />
    </>
  )
}
