import React, { FunctionComponent } from "react";
import HeroBackground from "../components/HeroBackground";
import Services from "../components/Services";
import WorkSection from "../components/WorkSection";
import Process from "../components/Process";
import WhyChooseUs  from "../components/WhyChooseUs";
import Testimonial from "../components/Testimonials/Testimonials";
import Form from "../components/Form";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import AboutUs from "../components/AboutUs";

const testimonialData = {
  title: "Testimonials",
  heading: "Our clients say about us",
};


const Homepage: FunctionComponent = () => {
  return (
    <>
     <Header />
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border leading-normal tracking-normal font-sans">
      <section className="self-stretch ss:h-[812px] h-[620px] flex flex-col items-start justify-start pt-[191px] pb-[254px] box-border gap-[112px] bg-[url('/public/hero@3x.png')] bg-cover bg-no-repeat bg-top mix-blend-linear-burn max-w-full lg:pt-[124px] lg:pb-[165px] lg:gap-[56px] mq825:pt-[81px] mq825:pb-[107px] mq825:gap-[28px]">
       
        <HeroBackground />
      </section>
      <AboutUs/>
      <Services />
      <WorkSection />
      <Process />
      <WhyChooseUs/>
      <section className="self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[54px] box-border max-w-full text-center text-lg text-gray-600 font-franie">
        <div className="w-[580px] flex flex-col items-start justify-start gap-2 max-w-full">
          <div className="self-stretch relative text-18px leading-1 ">
            {testimonialData.title}
          </div>
          <h1 className="m-0 self-stretch relative text-56px leading-[64px] font-normal font-inherit text-gray-900 mq825:text-4xl mq825:leading-[60px] mq450:text-4xl mq450:leading-15">
  {testimonialData.heading}
</h1>

        </div>
      </section>
      <Testimonial />
      <Form />
      <Footer />
    </div>
    </>
  );
};

export default Homepage;
