import sufan from '../../assets/Testimonials/Sufyan.jpeg'
import angad from '../../assets/Testimonials/anged.jpeg'
import Person from '../Person/Person'

export default function Testimonials() {
  return (
    <div id="Testimonials" className="px-7 2xl:px-40 py-15 md:py-25 dark:bg-[#030712] ">
      <h3 className="w-fit bg-[#E5E7EB] dark:bg-[#374151] text-sm text-[#4B5563] dark:text-[rgb(209,213,219)] px-5 py-1 rounded-xl mx-auto mb-4 font-medium">Testimonials</h3>
          <p className="text-[#4B5563] text-center dark:text-[#D1D5DB] text-xl mb-10">Nice things people have said about me:</p>
          <div className="flex gap-12 flex-wrap justify-center">
              <Person
                  img={sufan}
                  Testimonial='I highly recommend Noah for his exceptional skills as a visualizer and designer. He consistently demonstrates a strong ability to transform concepts into visually compelling designs. His creative solutions are not only innovative but also aligned with project goals and client expectations.'
                  link='https://www.linkedin.com/in/sufyan-s-5a6401235/'
                  name='Sufyan S.'
                  postion='Certified Marketeer & Seasoned Digital Product Advisor'
              />
              <Person
                  img={angad}
                  Testimonial='I had the pleasure of working with Noah, a talented graphic designer and visual artist whose attention to detail is matched only by his creativity. Noah has a unique ability to embrace challenges as opportunities, consistently delivering results that exceed expectations. His proficiency in photo editing is exceptional, and his relentless curiosity drives him to continuously expand his skill set.'
                  link='https://www.linkedin.com/in/angadsinghluthra/'
                  name='Angad Luthra'
                  postion='Lead Experiences at Properti AG'
              />
          </div>
    </div>
  )
}
