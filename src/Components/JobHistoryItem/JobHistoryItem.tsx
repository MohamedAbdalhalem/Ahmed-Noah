

export default function JobHistoryItem(
    { img, jobTitle, date,roles,companyName }:
        {
            img?: string,
            companyName? : string
            jobTitle: string,
            date: string,
            roles : string[]
        }) {
  return (
    <div className="max-w-4xl mx-auto mb-10 shadow-lg rounded-lg grid md:grid-cols-4 p-7 gap-5 dark:bg-[#1F2937]">
        <div className='col-span-1 order-1'>
              {img && <img src={img} className='w-1/4 md:w-1/2' alt="" />}
              {companyName && <h3 className='text-[#111827] dark:text-[#F9FAFB]  text-lg mb-4 font-bold'>{ companyName }</h3>}
        </div>
        <div className='col-span-1 md:col-span-2 order-3 md:order-2'>
              <h3 className='text-[#111827] dark:text-[#F9FAFB]  text-xl mb-4'>{ jobTitle }</h3>
          <ul className='list-disc'>
                  {roles.map(role => <li className='text-[#4B5563] dark:text-[#D1D5DB] text-base'>
                {role}
            </li>)}
            
          </ul>
        </div>
        <div className='text-[#374151] dark:text-[#E5E7EB] text-base md:text-end order-2 md:order-3'>
          {date}
        </div>
      </div>
  )
}
