import JobHistoryItem from '../JobHistoryItem/JobHistoryItem'
import wubbl_co_logo from '../../assets/Experience/wubbl_co_logo.jpeg'
import properti_ag_logo from '../../assets/Experience/properti_ag_logo.jpeg'
export default function Experience() {
  return (
    <div id='Experience' className="px-7 py-15 md:py-25  dark:bg-[#030712]">
          <h3 className="w-fit bg-[#E5E7EB] dark:bg-[#374151] text-sm text-[#4B5563] dark:text-[rgb(209,213,219)] px-5 py-1 rounded-xl mx-auto mb-4 font-medium">Experience</h3>
      <p className="text-[#4B5563] text-center dark:text-[#D1D5DB] text-xl mb-10">Here is a quick summary of my most recent experiences:</p>
      <JobHistoryItem
        link='https://www.linkedin.com/company/wubbl-co/'
        img={wubbl_co_logo}
        date={'Sep 2023 - PRESENT'}
        jobTitle='Remote Lead Communication Designer'
        roles={
          [`Leading the communication design team for a digital services provider
            specializing in branding, packaging, and marketing.
            `,
            `Implemented design strategies that increased engagement by 20%.`
            , `Coordinated with international teams to deliver high-quality design
            projects on time.`]}
      />
      <JobHistoryItem
        link='https://www.linkedin.com/company/properti-ag/'
        img={properti_ag_logo}
        date={'Feb 2022 – Aug 2022'}
        jobTitle='Remote Graphic Designer'
        roles={
          [`Designed motion graphics, edited photos and videos, and managed
            social media content for a real estate and equipment rental service.
            `,
            `Successfully completed projects under tight deadlines, maintaining high
            client satisfaction.`]}
      />
      <JobHistoryItem
        companyName='Doos Banzeen'
        date={'Febr 2021 – Aug 2023'}
        jobTitle='Part-Time Social Media Designer'
        roles={
          [`Developed social media content for a SHELL franchise and car services
            center, resulting in a 30% increase in online engagement.
            `,
            `Created visually appealing graphics and managed social media
            campaigns.`]}
      />
    </div>
  )
}
