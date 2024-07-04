// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const sliderContent = [
  {
    title: "Expertise and Compassion Combined",
    description:
      "I can't thank enough for their exceptional care. The doctors and staff showed incredible expertise and compassion throughout my treatment journey. I felt truly cared for every step of the way.",
    image: "assets/Ellipse 10.svg",
    name: "Sarah D,",
    jobTitle: "IT Professional",
  },
  {
    title: "Life-Saving Care, Life-Changing Experience",
    description:
      "My experience at [Healthcare Provider Name] was life-changing. The prompt and accurate diagnosis, coupled with the advanced treatments they provided, saved my life.",
    image: "assets/Ellipse 10 (1).svg",
    name: "David S,",
    jobTitle: "Lawyer",
  },
  {
    title: "A Partner in Health and Wellness",
    description:
      "As a busy professional, I appreciate the convenience and quality of care I receive at [Healthcare Provider Name]. From telemedicine consultations to routine check-ups, they've become my trusted partner in health and",
    image: "assets/Ellipse 10 (2).svg",
    name: "Michael R,",
    jobTitle: "Business Executive",
  },
  {
    title: "Life-Saving Care, Life-Changing Experience",
    description:
      "My experience at [Healthcare Provider Name] was life-changing. The prompt and accurate diagnosis, coupled with the advanced treatments they provided, saved my life.",
    image: "assets/Ellipse 10.svg",
    name: "Michael R,",
    jobTitle: "Business Executive",
  },
  {
    title: "Expertise and Compassion Combined",
    description:
      "I can't thank enough for their exceptional care. The doctors and staff showed incredible expertise and compassion throughout my treatment journey. I felt truly cared for every step of the way.",
    image: "assets/Ellipse 10 (2).svg",
    name: "Sarah D,",
    jobTitle: "IT Professional",
  },
];

const Slide = () => {
  return (
    <>
      <Swiper
        slidesPerView={`auto`}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-4
        "
      >
        {sliderContent.map((c, i) => (
          <SwiperSlide
            className="bg-[#FFFFF5] rounded-2xl lg:max-w-[23.1875rem] w-full p-5 h-64"
            key={i}
          >
            <h2 className="text-[1.1875rem] leading-[1.78125rem] font-semibold max-w-[18rem]">
              {c.title}
            </h2>
            <p className="leading-[1.125rem] text-[0.75rem] font-normal my-3">
              {c.description}
            </p>
            <div className="flex gap-4 items-center">
              <div>
                <img src={c.image} alt="" />
              </div>
              <div>
                <h5 className="leading-[1.125rem] text-[0.75rem] font-normal text-[#020043]">
                  <span className="font-semibold">{c.name} </span>
                  {c.jobTitle}
                </h5>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((_, i) => (
                    <img src="assets/star.svg" key={i} alt="" />
                  ))}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Slide;
