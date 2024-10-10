import data from "../../constants/data";
import "./Services.css";

const Services = () => {
    return (
        <div className="services section__padding bg__whitesmoke" id="services">
            <div className="mx-[10%]">
                <h1 className="text-4xl font-bold text-[#636363]">Services</h1>
                <div className="border-b-2 w-[100%] my-5" style={{ borderImage: 'linear-gradient(to right, #000000, #10C9C3) 1' }}></div>
                <p className='pb-10 text-[#7c7c7c]'>
                    At GetAppoint, we specialize in connecting talented professionals with leading organizations across various sectors. Our recruitment services cover IT, healthcare, finance, manufacturing, retail, construction, hospitality, education, energy, and pharmaceuticals. We leverage our extensive network and industry expertise to match candidates with roles that suit their skills and aspirations, ensuring mutual success for both employers and job seekers. Trust us to streamline your hiring process and help you build a strong, capable workforce.
                </p>
            </div>
            <div className="container">
                <div className="services__content grid">
                    {
                        data.services.map((service, index) => {
                            return (
                                <div className="services__content--item text__center" key={index}>
                                    <img src={service.img} alt="" className="icon" />
                                    <h4 className="text__upper text">{service.title}</h4>
                                    <p className="para__text text__grey">{service.text}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Services;