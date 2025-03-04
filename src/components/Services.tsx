import { FunctionComponent } from "react";

export type ServicesType = {
  className?: string;
};

// Define service data
const serviceData = [
  {
    title: "UI UX Design",
    description: "Leverage our expertise in web development to create stunning and functional websites tailored to your business needs.",
    imageSrc: "/group-42.svg",
  },
  {
    title: "Web Development",
    description: "Leverage our expertise in web development to create stunning and functional websites tailored to your business needs.",
    imageSrc: "/group-421.svg",
  },
  {
    title: "App Development",
    description: "Leverage our expertise in web development to create stunning and functional websites tailored to your business needs.",
    imageSrc: "/group-42-1.svg",
  },
  {
    title: "Software Development",
    description: "Leverage our expertise in web development to create stunning and functional websites tailored to your business needs.",
    imageSrc: "/group-42-2.svg",
  },
];

const Services: FunctionComponent<ServicesType> = ({ className = "" }) => {
  return (
    <section id="services"
      className={`self-stretch bg-[#f9f9f9] overflow-hidden flex flex-col items-start justify-start p-[80px] text-center text-[40px] text-[#212121] font-[Franie] mq825:py-[52px] mq825:px-[40px] mq825:box-border ${className}`}
    >
      <div className="self-stretch flex flex-col items-center justify-start gap-[64px] ">
      <h1 className="m-[0px] self-stretch relative justify-center pl-2 !text-[45px] tracking-[-0.02em] leading-[56px] font-normal font-[inherit]">
  Our Services
</h1>

        <div className="self-stretch flex flex-row items-start justify-between gap-[20px] text-left text-[18px] mq1400:flex-wrap mq1400:justify-center">
          {serviceData.map((service) => (
            <div
              key={service.title}
              className="h-[296px] w-[296px] rounded-[12px] bg-[#fff] border-[rgba(33,33,33,0.2)] border-[1px] border-solid box-border overflow-hidden shrink-0 flex flex-row items-start justify-center py-[44px] px-[31px] min-w-[296px] mq1400:flex-1"
            >
              <div className="h-[192px] flex-1 flex flex-col items-center justify-start pt-[0px] px-[0px] pb-[16px] box-border gap-[16px]">
                <img
                  className="w-[64px] h-[64px] justify-center relative shrink-0"
                  loading="lazy"
                
                  src={service.imageSrc}
                />
                <div className="self-stretch flex flex-col items-center justify-start gap-[8px]">
                  <div className="w-[239px] flex flex-col items-center justify-start gap-[8px]">
                    <div className="self-stretch justify-center text-center font-bold relative leading-[24px]">
                      {service.title}
                    </div>
                    <div className="self-stretch relative text-[14px] tracking-[-0.02em] leading-[20px] font-[Inter] text-[#605f5f] text-center">
                      {service.description}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="cursor-pointer border-[#1b1b1b] border-[1px] border-solid py-[10px] px-[55px] bg-[#212121] shadow-[0px_0px_0px_4px_rgba(33,_33,_33,_0.12),_0px_-2px_0px_#151515_inset,_0px_2px_0px_#343434_inset] rounded-[12px] overflow-hidden flex flex-row items-end justify-center whitespace-nowrap hover:bg-[#545454] hover:border-[#4d4d4d] hover:border-[1px] hover:border-solid hover:box-border mq450:w-[350px] mq450:h-[56px]">
          <div className="relative text-[16px] leading-[24px] pb-1 font-medium font-[Inter] text-[#fff] text-left inline-block min-w-[88px]">
            Get started
          </div>
        </button>
      </div>
    </section>
  );
};

export default Services;
