import img from '../../assets/WhatsApp Image 2023-09-22 at 12.36.50.jpg'
export default function Home() {
  return (
    <div id='home' className="px-7 2xl:px-40 py-30 md:py-50 grid grid-cols-1 md:grid-cols-3 gap-15 md:gap-0 dark:bg-[#030712]">
      <div className="col-span-1 md:col-span-2 md:pe-15 lg:pe-22 order-2 md:order-1 ">
              <h1 className="text-3xl md:text-5xl lg:text-6xl text-[#111827] font-bold mb-4 dark:text-white">Hi, I'm Ahmed 👋</h1>
              <p className="text-[#4B5563] dark:text-[#D1D5DB] leading-6 text-base mb-12">I'm a Creative and detail-oriented Graphic Designer with 3+ years of experience in
          illustration, video editing, and photography. Proficient in Adobe Photoshop,
          Illustrator, Figma, and Premiere Pro. Proven ability to lead remote projects and
          collaborate with international teams effectively.</p> 
              <p className="text-[#4B5563] dark:text-[#D1D5DB] text-base"><i className="fa-solid fa-circle me-2.5 text-sm text-[#10B981] mb-12"></i>Available for new projects</p>
              <p></p>
              <div>
          <a
            href='https://www.behance.net/ahmed_noah/'
            target='_blank'
          >
                    <i className="fa-brands dark:text-[#D1D5DB] cursor-pointer fa-behance me-3 text-lg text-[#4B5563] "></i>
                  </a >
          <a
            href='https://www.linkedin.com/in/ahmed-noah99/'
            target='_blank'
          >
                    <i className="fa-brands dark:text-[#D1D5DB] cursor-pointer fa-linkedin-in me-3 text-[#4B5563] text-lg"></i>
                  </a>
          <a
            href='https://www.instagram.com/ahmedalaanoah/?igshid=NTc4MTIwNjQ2YQ%3D%3D'
            target='_blank'
          >
                    <i className="fa-brands dark:text-[#D1D5DB] cursor-pointer fa-instagram text-[#4B5563] text-lg"></i>
                  </a>
              </div>
          </div>
          <div className="col-span-1 flex justify-center md:justify-end order-1 md:order-2 ">
  <div className="bg-[#E5E7EB] dark:bg-[#374151] w-[300px] md:p-0 px-5 pb-5 md:w-full lg:w-[300px]  relative h-[400px]">
    <img
            src={img}
      className="w-[90%]  md:w-full h-full absolute bottom-6 right-3  md:right-10 border-8 border-white dark:border-[#030712] object-cover"
      alt=""
    />
  </div>
</div>

    </div>
  )
}
