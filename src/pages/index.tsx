import Image from 'next/image'
import { Inter } from 'next/font/google'
import Bio from '@/components/Bio'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main style={{
      backgroundImage: `url(/bg.svg)`,
      backgroundSize: 'cover',
    }}>
      <Navbar />
      <Bio />
    </main >
  )
}
