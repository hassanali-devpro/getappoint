import { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

const Counter = () => {
    const [counterOn, setCounterOn] = useState(false);

    return (
        <div className="bg-[#10C9C3] px-[10%] sm:py-[5%] py-[10%]">
            <h1 className=" text-4xl font-bold text-white">Our Achievements</h1>
            <div className="border-b-2 w-[100%] my-5" style={{ borderImage: 'linear-gradient(to right, #ffffff, #141414) 1' }}></div>
            <p className='pb-10 text-white'>
                At Get Appoint, we specialize in streamlining the recruitment process and connecting businesses with top-tier talent across various industries. Our services include comprehensive recruitment solutions, HR consulting, and talent management, designed to meet the unique needs of each client. We leverage advanced technology and industry expertise to provide tailored staffing solutions, ensuring that you find the right candidates quickly and efficiently. Whether youre looking for permanent placements, temporary contracts, or executive searches, our dedicated team is here to support your hiring goals and foster organizational growth.
            </p>

            <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                <div className=' grid lg:grid-cols-4  grid-cols-2 gap-5 '>
                    <div className="">
                        <h1 className="text-white text-6xl font-bold">
                            {counterOn && <CountUp start={0} end={20} duration={2} delay={0} />}+
                        </h1>
                        <p className="text-white font-semibold">Projects Completed</p>
                    </div>
                    <div className="">
                        <h1 className="text-white text-6xl font-bold">
                            {counterOn && <CountUp start={0} end={99} duration={2} delay={0} />}%
                        </h1>
                        <p className="text-white font-semibold">Satisfied clients</p>
                    </div>
                    <div className="">
                        <h1 className="text-white text-6xl font-bold">
                            {counterOn && <CountUp start={0} end={25} duration={2} delay={0} />}+
                        </h1>
                        <p className="text-white font-semibold">Team Members</p>
                    </div>
                    <div className="">
                        <h1 className="text-white text-6xl font-bold">
                            {counterOn && <CountUp start={0} end={250} duration={2} delay={0} />}+
                        </h1>
                        <p className="text-white font-semibold">Cups of Tea</p>
                    </div>
                </div>

            </ScrollTrigger>
        </div>
    );
};

export default Counter;
