"use client";
import Image from "next/image";
import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";
// import DaughnutChart from "./components/DaughnutChart";
import { CircularProgressbar, buildStyles  } from 'react-circular-progressbar';
// import AnimatedProgressProvider from "./components/AnimatedProgressProvider";
import 'react-circular-progressbar/dist/styles.css';
import LineChart from "./components/LineChart";
import Icon from "./components/Icon";
import HexagonalShape from "@/app/assets/icons/hexagonalShape.svg";
import hero from "@/app/assets/images/sushi-roll.jpg";
import m01 from "@/app/assets/images/m01.png";
import m02 from "@/app/assets/images/m02.png";
import m03 from "@/app/assets/images/m03.png";
import m04 from "@/app/assets/images/m04.png";
import m05 from "@/app/assets/images/m05.png";
import m06 from "@/app/assets/images/m06.png";
import m07 from "@/app/assets/images/m07.png";
import m08 from "@/app/assets/images/m08.png";
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination } from 'swiper';
// Import Swiper styles
//  import "swiper/swiper.min.css";
const percentage = 75;
const foodCategories = [
  {
    name: "Morning",
    icon: "restaurant",
  },
  {
    name: "Lunch",
    icon: "restaurant",
  },
  {
    name: "Dinner",
    icon: "restaurant",
  },
  {
    name: "Snack",
    icon: "trash",
  },
];

const foodItems = [
  {
    name: "05.21.Morning",
    thumb: m01,
  },
  {
    name: "05.21.Lunch",
    thumb: m02,
  },
  {
    name: "05.21.Dinner",
    thumb: m03,
  },
  {
    name: "05.21.Snack",
    thumb: m04,
  },
  {
    name: "05.20.Morning",
    thumb: m05,
  },
  {
    name: "05.20.Lunch",
    thumb: m06,
  },
  {
    name: "05.20.Dinner",
    thumb: m07,
  },
  {
    name: "05.21.Snack",
    thumb: m08,
  },
];

export default function Home() {
  return (
    <div className="">
      <Header />

      <main className="pb-5">
        {/* Home page top part */}
        <section className="bg-dark-600 relative">
          <h2 className="sr-only">Healty</h2>
          <div className="max-w-screen-lg px-3 lg:px-6 mx-auto ">
            <div className="flex flex-col-reverse md:flex-row justify-between gap-5">
              <div className="flex justify-center items-center order-1 md:order-none relative flex-1">
                    <div className="w-40 max-w-full relative z-10 py-5">
                    {/* <DaughnutChart /> */}
            
                    <CircularProgressbar value={percentage} text={`${percentage}%`}  strokeWidth={3} 
                    
                    styles={buildStyles({
                      // Rotation of path and trail, in number of turns (0-1)                  
                  
                      // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                      strokeLinecap: 'round',
                  
                      // Text size
                      textSize: '16px',
                  
                      // How long animation takes to go from one percentage to another, in seconds
                      pathTransitionDuration: 0.5,
                  
                      // Can specify path transition in more detail, or remove it entirely
                      // pathTransition: 'none',
                  
                      // Colors
                      pathColor: `rgba(255, 255 , 255, ${percentage / 100})`,
                      textColor: '#fff',
                      trailColor: 'transparent',
                      
                    })}
                    
                    />
                
                    </div>
                  <div className="absolute inset-0 overflow-hidden flex justift-center items-center bg-dark-600 -mx-3 md:mx-0">
                  <Image src={hero} alt="" className="w-full block opacity-90" />
                  </div>
              </div>
              <div className="flex justify-center items-center flex-1">
                <LineChart />
              </div>
            </div>
          </div>
        </section>
        <div className="max-w-screen-lg px-3 lg:px-6 mx-auto ">
          <section className="flex flex-wrap justify-center items-center py-5 sm:px-5 lg:p-10 gap-5 xs:gap-10 lg:gap-20">
            {foodCategories.map((Category, index) => {
              return (
                <div className="relative" key={index}>
                  <HexagonalShape className="h-36" />
                  <div className="absolute inset-0 px-1 py-8 flex flex-col justify-center items-center gap-2 text-light">
                    <div className="flex-1 flex justify-center items-center">
                      <Icon name={Category.icon} className="w-12 text-white" />
                    </div>
                    <h3 className="text-white font-medium text-center">
                      {Category.name}
                    </h3>
                  </div>
                </div>
              );
            })}
          </section>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-1">
            {foodItems.map((Item, index) => {
              return (
                <div className="relative" key={index}>
                  <Image src={Item.thumb} alt="" className="w-full block" />
                  <p className="py-1 px-2 text-white bg-primary-300 w-32 absolute bottom-0 ">
                    {Item.name}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="pt-8 pb-12 flex justify-center">
            <Link href="javascript:void(0)"
              className="text-white text-center font-semibold w-72 max-w-full bg-primary p-4 rounded-md hover:bg-primary-2"
            >
              記録をもっと見る 
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
