import IndustryCard from "../IndustryCard";
import { Industry } from '../../constants/data';


const index = () => {
  return (
    <div className=" bg-[#F5F5F5] " id="industries">
      <div className="px-[10%] py-[5%]">
        <h1 className=" text-4xl font-bold text-[#636363]">Operating Sectors</h1>
        <div className="border-b-2 w-[100%] my-5" style={{ borderImage: 'linear-gradient(to right, #000000, #10C9C3) 1' }}></div>
        <p className='pb-10 text-[#7c7c7c]'>Cooperate with competent and knowledgeable IT experts in web and mobile software engineering. As a trusted tech and business partner, we apply the most advanced technologies, frameworks, and components to build software notable for both its solid and effective back-end with intuitive UI/UX.</p>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2">
          {Industry.map((items, key) => { return (<IndustryCard title={items.title} text={items.text} key={key} />) })}
        </div>
      </div>
    </div>
  )
}

export default index
