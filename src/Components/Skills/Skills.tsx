import Adobe_Photoshop from '../../assets/Adobe_Photoshop_CC_icon.svg.png'
import Adobe_Illustrator from '../../assets/Adobe_Illustrator_CC_icon.svg.png'
import Adobe_Premiere_Pro from '../../assets/Adobe_Premiere_Pro_CC_icon.svg.png'
import Video_Editing from '../../assets/montage.png'
import Photo_Retouching from '../../assets/photo (1).png'
import Logo_Design from '../../assets/pen-tool.png'
import Image_Editing from '../../assets/image-editing.png'
import figma from '../../assets/icon-figma.d571d8e2.svg'
import photography from '../../assets/photography.png'
import Skill from '../Skill/Skill'

export default function Skills() {
  return (
    <div className="px-7 2xl:px-40 py-15 md:py-25 dark:bg-[#030712]">
          <h3 className="w-fit bg-[#E5E7EB] dark:bg-[#374151] text-sm text-[#4B5563] dark:text-[#D1D5DB] px-5 py-1 rounded-xl mx-auto mb-4 font-medium">Skills</h3>
          <p className="text-[#4B5563] dark:text-[#D1D5DB] text-center text-xl mb-10">The skills, tools and technologies I am really good at:</p>
      <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-7 gap-7">
        <Skill img={Adobe_Photoshop} name='Adobe Photoshop' link='https://www.adobe.com/eg_en/products/photoshop.html' />
        <Skill img={Adobe_Illustrator} name='Adobe Illustrator' link='https://www.adobe.com/eg_en/products/illustrator.html' />
        <Skill img={Adobe_Premiere_Pro} name='Adobe Premiere Pro' link='https://www.adobe.com/eg_en/products/premiere.html' />
        <Skill img={figma} name='Figma' link='https://www.figma.com/' />
        <Skill img={Photo_Retouching} name='Photo Retouching' link={undefined} />
        <Skill img={Logo_Design} name='Logo Design' link={undefined} />
        <Skill img={Video_Editing} name='Video Editing' link={undefined} />
        <Skill img={Image_Editing} name='Image Editing' link={undefined} />
        <Skill img={photography} name='Photography' link={undefined} />
        
      </div>
    </div>
  )
}
