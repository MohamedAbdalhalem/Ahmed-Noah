

export default function Person(
    { img, name, Testimonial, postion,link }:
        {
            img: string,
            name: string,
            Testimonial: string,
            postion: string,
            link: string
    }
 ) {
  return (
    <div className="shadow-lg p-10  rounded-lg dark:bg-[#1F2937] w-full md:w-[46%] lg:w-[30%]">
                  <img src={img} className="w-15 h-15 rounded-full mx-auto mb-5" alt="" />
          <p className='text-[#4B5563] dark:text-[#D1D5DB] text-base mb-5'>
              {Testimonial}
                  </p>
          <a href={link}
              target="_blank"
              className='text-[#111827] dark:text-[#F9FAFB] block text-center font-semibold mb-2 text-xl'>{name}</a>
          <h4 className='text-center dark:text-[#D1D5DB] text-[#4B5563] text-sm'>
              {postion}
                  </h4>
              </div>
  )
}
