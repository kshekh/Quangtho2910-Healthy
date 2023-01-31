import Link from "next/link";

const navLinks = [
  {
    name: "会員登録",
    path: "javascript:void(0)",
   
  },
  {
    name: "運営会社",
    path: "javascript:void(0)",
   
  },
  {
    name: "利用規約",
    path: "javascript:void(0)",
    
  }, 
];
const catLinks = [
  {
    name: "特定商取引法に基づく表記",
    path: "javascript:void(0)",
   
  },
  {
    name: "お問い合わせ",
    path: "javascript:void(0)",
   
  }, 
];



export default function Footer() {
  return (
<footer className='bg-dark-500 py-5 sm:py-10'>
<div className="max-w-screen-lg px-6 mx-auto flex justify-between gap-5 flex-wrap ">
    <div className='flex gap-3 sm:gap-5 lg:gap-12'>
    {navLinks.map((link, index) => {
              return (
        <Link href={link.path} key={index} className='text-sm sm:text-base text-white hover:text-primary-500 ease-in-out duration-300'>{link.name}</Link> 
        );
      })}
      </div>
      <div className='flex gap-5 lg:gap-12'>
      {catLinks.map((link, index) => {
              return (
        <Link href={link.path} key={index} className='text-sm sm:text-base text-white hover:text-primary-500 ease-in-out duration-300'>{link.name}</Link> 
        );
      })}
      
      </div>
    </div>

    </footer>
        )
      }
      