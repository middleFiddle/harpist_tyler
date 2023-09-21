import Image from 'next/image'
import Link from 'next/link'
import { Navbar } from './Navbar'
import { homepageCopy } from './homepageCopy'
import FeaturePhoto from '../public/bluedresssmile_orig.jpg'
import WeddingWireBadge from '../public/wedding-wire-badge-label-text-sticker-logo-transparent-png-822232.png'
import TheKnotBadge from '../public/VendorBadge_CouplesLoveUs.png'

export default function Home() {

  return (
    <main className="w-100 px-16 py-4 ">
      <div className="flex flex-col items-center">
        <h3 className="text-center text-xl italic text-violet-200">{homepageCopy.header}</h3>
        <div className="">
          <Image src={FeaturePhoto} width={1100} height={734} alt='A photo of Tyler in a beautiful blue dress and golden blonde hair alongside her stunning Black Lyon and Healy Model 30 harp.' />
        </div>
        <p className="w-2/3">{homepageCopy.body}</p>
        <div className="w-1/2 flex justify-around p-8">
          <Image src={WeddingWireBadge} width={177} height={177} alt='This is a badge from weddingwire.com recognizing Tyler as a top rated wedding vendor.' />
          <Image src={TheKnotBadge} width={177} height={177} alt='This is a badge from theknot.com recognizing Tyler as a top rated wedding vendor.' />
        </div>
      </div>
    </main>
  )
}

