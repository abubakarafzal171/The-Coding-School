import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='mt-20'>
      <h1 className='text-2xl text-center md:text-3xl lg:text-4xl font-bold text-blue-600'>Welcome to The Coding School Official Website</h1>

      <div className="learn flex items-center justify-center flex-col gap-4 mt-6">
        <h1 className='text-2xl lg:text-3xl font-semibold'>Recall HTML</h1>
        <p className='text-center w-[80%] text-gray-700'>First Watch Video and Understand HTML then do Practice , Practice and Practice and When u Got fully Understand then Revise From this Site</p>
         <Link to={'/html'}><button className='bg-blue-600 text-white px-4 py-2 rounded-lg cursor-pointer'>Revise HTML</button></Link>
      </div>

<div className="note mt-10 flex items-center justify-center shadow-md p-6 border m-4 bg-red-400">
<p className='text-center font-semibold text-white'>This Website is Official Website of The Coding School and in Development Phase Actually this website is connected to the Youtube Channel The Coding School Videos When any video or course will be uploaded on Youtube Channel then Automatically this website content and Course will be updated and overtime this website will be Changed. <br /> <br />

 This Website is build for your help to revise and recall Course Notes.

<br /><br />

<span className='text-blue-900 font-bold'> 
  LOOKS PAR MAT JANA BHAYIOO SIRF LEARN KRO WAQT KY SATH YAI WEBSITE BHT ZYADA ADVANCE HONY WALY HAI MAI JASE JASE PARHATA RAHO GA WEBSITE PR CONTENT UPDATE KRTA RAHO GA TAQY AP KO NOTES OR PRACTICE KRNY MAI ASANI HO OR KISI OR WEBSITE PR NA JANA PRY OR DHAKKY NA KHANY PRY JASE MAINE KHAYE
</span>
</p>
</div>

<div className="link flex  flex-col items-center justify-center mt-10 gap-2">
<h1 className='font-bold text-2xl text-red-700'>Youtube Channel Link</h1>

  <a href='https://www.youtube.com/@codingschool777' className='text-blue-600 font-semibold border p-2 mb-10' target='_blank'>Go to Channel</a>
</div>
    </div>
  )
}

export default Home