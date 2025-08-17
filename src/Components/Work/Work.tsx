import Project from '../Project/Project'
import Vivid_Scrubs from '../../assets/Projects/156-medical-scrubs-mockup-04.png'
import Microgreens_Flyer from '../../assets/Projects/991204197554773.Y3JvcCwxMzA1LDEwMjAsMTAyNywyNDU.webp'
import Happy_Diwali from '../../assets/Projects/Folded A4 Paper Card.png'
import ChickenWale from '../../assets/Projects/Frame 4.png'
import Microgreens_Posts from '../../assets/Projects/Frame 5.png'
import Doos_Banzeen from '../../assets/Projects/Frame 6.png'
import { useState } from 'react'
export default function Work() {
  const [loadMore,setLoadMore] = useState(false)
  return (
    <div id='work' className="px-7 py-15 md:py-25 bg-[#F9FAFB] dark:bg-[#111827]">
          <h3 className="w-fit bg-[#E5E7EB] dark:bg-[#374151] text-sm text-[#4B5563] dark:text-[rgb(209,213,219)] px-5 py-1 rounded-xl mx-auto mb-4 font-medium">Work</h3>
      <p className="text-[#4B5563] text-center dark:text-[#D1D5DB] text-xl mb-10">Some of the noteworthy projects I have built:</p>
      
      <Project
        link='https://www.behance.net/gallery/221045973/Vivid-Scrubs-Logo-for-scrubs-brand'
        img={Vivid_Scrubs}
        name='Vivid Scrubs'
        description='Logo for scrubs brand'
        tools={['Adobe Illustrator']}
        order='odd'
      />
      <Project
        link='https://www.behance.net/gallery/197554773/Flyer-for-Microgreens-Brand-Little-Leafy'
        img={Microgreens_Flyer}
        name='Microgreens_Flyer'
        description='Flyer for Microgreens Brand'
        tools={['Adobe Illustrator']}
        order='even'
      />
      <Project
        link='https://www.behance.net/gallery/211799489/A-Postcard-design-for-the-Indian-Diwali-day'
        img={Happy_Diwali}
        name='Happy Diwali'
        description='A Postcard design for the Indian Diwali day'
        tools={['Adobe Illustrator']}
        order='odd'
      />
      {loadMore && <>
        <Project
        link='https://www.behance.net/gallery/196917095/Social-media-ChickenWale'
        img={ChickenWale}
        name='ChickenWale'
        description='Social media samples from a chicken business'
          tools={['Adobe Illustrator', 'Adobe Photoshop']}
          order='even'
      />
      <Project
        link='https://www.behance.net/gallery/196918869/Social-Media-Little-Leafy'
        img={Microgreens_Posts}
        name='Microgreens Posts'
        description='Social media Posts from a microgreens business'
          tools={['Adobe Illustrator', 'Adobe Photoshop']}
          order='odd'
      />
      <Project
        link='https://www.behance.net/gallery/196923479/Social-Media-Doos-Banzeen'
        img={Doos_Banzeen}
        name='Doos Banzeen'
        description='Social media for Doos Banzeen'
          tools={['Adobe Photoshop']}
          order='even'
      />
      </>}
      <div className="w-full flex justify-center mt-10">
        {!loadMore && <button
          onClick={() => setLoadMore(true)}
      type="button"
      className="px-6 py-3 rounded-2xl border cursor-pointer border-gray-300 dark:border-gray-600 
                 text-sm font-medium text-[#4B5563] dark:text-[#D1D5DB] 
                 shadow-sm hover:shadow-md transition"
    >
      Load more
    </button>}
  </div>
    </div>
  )
}
