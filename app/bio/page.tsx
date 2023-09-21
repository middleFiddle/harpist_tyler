import { bioCopy } from './bioCopy'
import bioPhoto from '../../public/rooftopwedding3_orig.jpg'
import Image from 'next/image'
import Link from 'next/link'
import { ROUTES } from '../constants/routes'

export default function Bio() {
  const { highlight, paragraphOne, paragraphTwo, paragraphThree, paragraphFour, paragraphFive, cta } = bioCopy
  return (
    <main>
      <div className="flex-col p-16 space-y-4">
        <h3 className="inline-block text-amaranth text-5xl font-dancing-script last:text-maize">{highlight}</h3>
        <p>{paragraphOne}</p>
        <Image src={bioPhoto} width={1000} height={665} alt="Tyler shines in a live setting with her blond Lyon and Healy Ogden harp." />
        <p>{paragraphTwo}</p>
        <p>{paragraphThree}</p>
        <p>{paragraphFour}</p>
        <p>{paragraphFive}</p>
        <p>
          <Link href={ROUTES.contact} className="text-blue-200 underline hover:text-violet">{cta}</Link>
        </p>
      </div>
    </main>
  )
} 
