import Image from 'next/image'


export default function Home() {
  return (
    <main className={`font-bold text-green-500`}>
      <header className='bg-dark-2 py-2'>
        {/* header */}
       <div className='max-w-5xl mx-auto'>
      {/* logo */}
      <div className='flex justify-between items-center'>
      <div className='logo'>
       <a href="#">
       <svg width="144" height="64" viewBox="0 0 144 64" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.01" width="144" height="64" fill="#FF963C"/>
<g clip-path="url(#clip0_17812_357)">
<path d="M31.8646 27.5165H41.3419V35.313H44.9509V16.028H41.3419V24.1552H31.8646V16.028H28.228V35.313H31.8646V27.5165Z" fill="#FF963C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M53.6932 35.6436C55.7593 35.6436 58.1011 34.9273 59.5338 33.4395L57.3847 31.3182C56.6133 32.1173 54.988 32.5855 53.7482 32.5855C51.3789 32.5855 49.9188 31.3735 49.6983 29.6928H60.3051C60.8286 24.1002 57.9909 21.29 53.4451 21.29C49.0372 21.29 46.227 24.2655 46.227 28.3979C46.227 32.7508 49.0096 35.6436 53.6932 35.6436ZM53.5552 24.2655C55.4838 24.2655 56.8614 25.1471 57.0816 26.9102H49.7535C50.2493 25.1471 51.7371 24.2655 53.5552 24.2655H53.5552Z" fill="#FF963C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M68.8958 35.6983C70.4111 35.6708 72.5324 34.8992 73.3039 33.3014L73.4692 35.2851H76.6374V21.7028H73.414L73.3039 23.5762C72.5324 22.2262 70.7968 21.3722 68.9786 21.3722C65.0113 21.3446 61.898 23.7967 61.898 28.4801C61.898 33.2461 64.8736 35.7259 68.8958 35.6983L68.8958 35.6983ZM69.2815 24.3752C74.5711 24.3752 74.5711 32.6125 69.2815 32.6125C67.0499 32.6125 65.2592 31.0699 65.2592 28.4802C65.2592 25.8904 67.0499 24.3752 69.2815 24.3752Z" fill="#FF963C"/>
<rect x="79.0323" y="16.0276" width="3.33355" height="19.2575" fill="#FF963C"/>
<path d="M98.6182 28.3424C98.6182 26.3037 99.9955 24.6232 101.979 24.6232C103.77 24.6232 105.065 25.6702 105.065 28.1495V35.285H108.426V28.1221C108.426 24.1273 106.718 21.5101 102.861 21.5101C101.318 21.5101 99.8304 21.9784 98.6182 23.5487V16H95.257V35.285H98.6182V28.3424Z" fill="#FF963C"/>
<path d="M86.8417 30.491C86.8417 33.8798 88.7702 35.5602 91.7179 35.4501C92.7374 35.4225 93.5363 35.2572 94.5006 34.8715L93.5638 32.0062C93.068 32.2543 92.4618 32.4196 91.9384 32.4196C90.8915 32.4196 90.1752 31.7859 90.1752 30.491V24.6228H93.9496V21.7301H90.2028V18.418H86.8417V21.7301H84.307V24.6228H86.8417L86.8417 30.491Z" fill="#FF963C"/>
<path d="M121.449 21.372L117.771 29.6346L114.108 21.372H110.56L115.993 33.6288L108.36 50.7745L95.0009 39.434L16 39.4407V42.5777L93.775 42.5792L109.533 55.9999L125 21.372H121.449Z" fill="#FF963C"/>
</g>
<defs>
<clipPath id="clip0_17812_357">
<rect width="109" height="39.9999" fill="white" transform="translate(16 16)"/>
</clipPath>
</defs>
            </svg>
       </a>

        </div>
      {/* nav */}
        <div className='flex items-center gap-8'>
          <a href="#" className='text-light flex gap-2'>
          <svg width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M26.549 7.66507L25.5569 6.67398C24.9561 6.07205 23.9812 6.07327 23.3792 6.67398L22.452 7.60245L25.6208 10.7712L26.549 9.84378C27.1499 9.24197 27.1499 8.267 26.549 7.66507H26.549Z" fill="#FF963C"/>
<path d="M13.76 16.2868V19.4561H16.9294L24.7571 11.6284L21.5879 8.45898L13.76 16.2868Z" fill="#FF963C"/>
<rect x="6.34717" y="6.93436" width="8.9516" height="1.49193" fill="#FF963C"/>
<rect x="6.34717" y="12.3984" width="8.9516" height="1.49193" fill="#FF963C"/>
<rect x="6.36633" y="17.8626" width="5.47042" height="1.49193" fill="#FF963C"/>
<path d="M19.5858 23.5985C19.5858 23.826 19.4027 24.0117 19.1775 24.0129H2.36658C2.14148 24.0117 1.9596 23.826 1.95838 23.5985V2.40259C1.9596 2.17407 2.14149 1.98828 2.36658 1.98718H19.1775C19.4027 1.98828 19.5858 2.17407 19.5858 2.40259V8.38971L21.5441 6.40253V2.40259C21.543 1.07593 20.4861 0.0011 19.1775 0H2.36658C1.05933 0.0011 0.00147 1.07593 0 2.40259V23.5985C0.00146 24.9252 1.05933 25.9989 2.36658 26H19.1775C20.4861 25.9989 21.543 25.7748 21.5441 24.4482V16.9488L19.5858 18.9359V23.5985Z" fill="#FF963C"/>
</svg>
自分の記録

          </a>
          <a href="#" className='text-light flex gap-2'>
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
 
<g clip-path="url(#clip0_17812_390)">
<path d="M11.2523 14.468L10.44 15.0223C10.9593 15.7839 11.6219 16.4266 12.3809 16.9232L12.919 16.0993C12.2667 15.6732 11.6983 15.1201 11.2523 14.468Z" fill="#FF963C"/>
<path d="M14.7857 5.71515C15.1977 5.62921 15.6062 5.58795 16.01 5.58795C16.3806 5.58795 16.7466 5.62213 17.1032 5.68915L17.2845 4.7229C16.8679 4.64532 16.4419 4.604 16.01 4.604C15.5402 4.604 15.0623 4.65228 14.5858 4.75116L14.567 4.75592L14.7695 5.71747L14.7857 5.71515Z" fill="#FF963C"/>
<path d="M12.8181 6.46692L12.2625 5.65601C11.5022 6.17615 10.8596 6.83887 10.364 7.59803L11.188 8.13587C11.6128 7.48377 12.166 6.91297 12.8181 6.46692Z" fill="#FF963C"/>
<path d="M10.2739 11.2433C10.2739 10.8714 10.3091 10.5042 10.3762 10.1452L9.41013 9.96399C9.33103 10.3818 9.29001 10.8091 9.29001 11.2433C9.29001 11.7141 9.33811 12.1908 9.4382 12.6686L9.44064 12.6804L10.4033 12.4791L10.4008 12.4686C10.3149 12.0566 10.2739 11.647 10.2739 11.2433V11.2433Z" fill="#FF963C"/>
<path d="M17.2145 16.8912C16.8024 16.9772 16.3939 17.0183 15.9904 17.0183C15.6161 17.0183 15.2465 16.9831 14.8864 16.9147L14.704 17.881C15.123 17.9599 15.5539 18.0011 15.9904 18.0011C16.4599 18.0011 16.9367 17.9528 17.4145 17.854L17.4203 17.8527L17.2201 16.89L17.2145 16.8912Z" fill="#FF963C"/>
<path d="M22.5614 9.83667L22.5568 9.81299L21.594 10.0166L21.5986 10.0378C21.6846 10.4486 21.7258 10.8581 21.7258 11.2618C21.7258 11.6385 21.6893 12.0093 21.621 12.3706L22.5874 12.5542C22.6674 12.1328 22.7085 11.7008 22.7085 11.2618C22.7085 10.7922 22.6616 10.3144 22.5614 9.83666V9.83667Z" fill="#FF963C"/>
<path d="M19.173 16.0415L19.7273 16.8536C20.4888 16.3346 21.1326 15.672 21.6292 14.9139L20.8066 14.375C20.3793 15.027 19.8262 15.5956 19.173 16.0415L19.173 16.0415Z" fill="#FF963C"/>
<path d="M20.742 8.02493L21.5531 7.46933C21.0317 6.70902 20.3678 6.06638 19.6086 5.57199L19.072 6.3959C19.7252 6.82083 20.2949 7.37277 20.742 8.02493Z" fill="#FF963C"/>
<path d="M19.3721 10.14L17.0416 9.80145L15.9996 7.69L14.9576 9.80145L12.627 10.14L14.3133 11.7838L13.9153 14.1044L15.9996 13.0087L18.0838 14.1044L17.6859 11.7838L19.3721 10.14Z" fill="#FF963C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M26.1129 11.5726C26.1129 8.65613 24.9791 6.00561 23.1522 4.09534C22.1625 3.06079 20.9658 2.23926 19.634 1.70374C18.5047 1.2483 17.2798 1 16.001 1C14.712 1 13.4747 1.25293 12.3388 1.71558C11.0172 2.2522 9.83173 3.06787 8.84894 4.09534C7.02179 6.00562 5.888 8.65613 5.888 11.5726C5.888 14.4879 7.02179 17.1361 8.84894 19.0463C10.6761 20.9589 13.2112 22.144 16.001 22.144C18.7896 22.144 21.3249 20.9589 23.1522 19.0463C24.9791 17.1361 26.1129 14.4879 26.1129 11.5726ZM16.001 20.1774C13.7247 20.1774 11.6735 19.217 10.1796 17.6575C8.68902 16.0957 7.76934 13.9524 7.76934 11.5726C7.76934 9.19287 8.68902 7.04602 10.1796 5.48767C11.1534 4.47192 12.3624 3.70935 13.7191 3.3009C14.4417 3.08557 15.2084 2.96789 16.001 2.96789C16.7812 2.96789 17.5366 3.07958 18.2514 3.29382C19.6193 3.69751 20.8406 4.46496 21.8214 5.48767C23.312 7.04602 24.2316 9.19287 24.2316 11.5726C24.2316 13.9524 23.312 16.0957 21.8214 17.6575C20.3273 19.217 18.2774 20.1774 16.001 20.1774H16.001Z" fill="#FF963C"/>
<path d="M8.73693 20.2418C8.5841 20.1181 8.42992 19.9957 8.28161 19.8639L8.28051 19.8675L8.26867 19.858L4.60461 27.7048L4.5 27.9861L4.63892 28.2061C4.73902 28.3592 4.90125 28.4499 5.08265 28.4499H5.16847L8.67006 27.3612L10.0552 30.6755C10.1413 30.8708 10.327 31.0003 10.5426 31.0003C10.7473 31.0003 10.9334 30.8803 11.0192 30.6943L13.8534 24.6259L14.6901 22.8429L14.6867 22.8416L14.6925 22.8275C12.4611 22.5097 10.4225 21.587 8.73695 20.2418L8.73693 20.2418Z" fill="#FF963C"/>
<path d="M24.5542 21.6375L23.7315 19.8686L23.7281 19.8709L23.7222 19.858C22.0745 21.3092 20.0335 22.3249 17.7903 22.7357C17.6324 22.764 17.4761 22.7958 17.3159 22.8169L17.3172 22.8204L17.303 22.824L20.9763 30.6943C21.062 30.8814 21.2481 31.0003 21.4529 31.0003C21.6685 31.0003 21.8543 30.8708 21.9402 30.6755L23.3255 27.3612L26.7598 28.4262L26.8408 28.4499H26.9129C27.094 28.4499 27.2564 28.3592 27.3565 28.2062L27.5003 27.9391L24.5542 21.6375Z" fill="#FF963C"/>
</g>
 
</svg>
自分の記録

          </a>
          <a href="#" className='text-light flex gap-2'>
          <svg width="26" height="28" viewBox="0 0 26 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M25.5 22.2975H13.0722L5.07178 28V22.2975H0.5V0H25.5V22.2975H25.5ZM23.2142 2.27186H2.78577V20.0256H7.35755V23.5755L12.3374 20.0256H23.2142V2.27186ZM14.3634 10.391V16.9249H11.7335V10.391H14.3634ZM13.048 8.4314C13.9555 8.4314 14.6913 7.69983 14.6913 6.79798C14.6913 5.896 13.9555 5.16444 13.048 5.16444C12.1405 5.16444 11.4044 5.89601 11.4044 6.79798C11.4044 7.69984 12.1405 8.4314 13.048 8.4314Z" fill="#FF963C"/>
</svg>

自分の記録

          </a>
          <a href="#" className='text-light flex gap-2'>
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.01" width="32" height="32" fill="#FF963C"/>
<path d="M3 8H29" stroke="#FF963C" stroke-width="3"/>
<path d="M3 16H29" stroke="#FF963C" stroke-width="3"/>
<path d="M3 24H29" stroke="#FF963C" stroke-width="3"/>
</svg>



 

          </a>
        </div>
      </div>
       </div>
      </header>
      <div className='bg-dark p-4'>
        <div className='max-w-5xl mx-auto'>

     <div className='flex justify-between items-center'>
 
     <div>
       <img src="../main-images.png" alt="" />
       </div>
       <div>
        <img src="../graph.png" alt="" />
       </div>
     </div>
  </div>
      </div>
      <div className='max-w-5xl mx-auto py-6 px-24'>
       <div className='flex justify-between items-center'>
       <div className='relative'>
          <img src="../morning.svg" alt="" />
        
        <div className='absolute top-6 left-7 text-light'>
         <img src="../knife.svg" alt="" />
         Morning
        </div>
        </div>
        <div className='relative'>
          <img src="../morning.svg" alt="" />
        
        <div className='absolute top-6 left-7 text-light'>
         <img src="../knife.svg" alt="" />
         Lunch
        </div>
        </div>
        <div className='relative'>
          <img src="../morning.svg" alt="" />
        
        <div className='absolute top-6 left-7 text-light'>
         <img src="../knife.svg" alt="" />
         Dinner
        </div>
        </div>
        <div className='relative'>
          <img src="../morning.svg" alt="" />
        
        <div className='absolute top-9 left-9 text-light'>
         <img src="../snack.svg" alt="" />
         Snack
        </div>
        </div>
       </div>
      </div>

      <div className='max-w-5xl mx-auto'>
        <div className='grid grid-cols-4 gap-4'>
          <div className='relative'>
<img src="../m01.png" alt="" />
<p className='py-1 px-2 text-light bg-primary w-26 absolute bottom-2'>05.21.Morning</p>
          </div>
          <div className='relative'>
<img src="../m02.png" alt="" />
<p className='py-1 px-2 text-light bg-primary w-26 absolute bottom-2'>05.21.Morning</p>
          </div>
          <div className='relative'>
<img src="../m03.png" alt="" />
<p className='py-1 px-2 text-light bg-primary w-26 absolute bottom-2'>05.21.Morning</p>
          </div>
          <div className='relative'>
<img src="../m04.png" alt="" />
<p className='py-1 px-2 text-light bg-primary w-26 absolute bottom-2'>05.21.Morning</p>
          </div>
          <div className='relative'>
<img src="../m05.png" alt="" />
<p className='py-1 px-2 text-light bg-primary w-26 absolute bottom-0'>05.21.Morning</p>
          </div>
          <div className='relative'>
<img src="../m06.png" alt="" />
<p className='py-1 px-2 text-light bg-primary w-26 absolute bottom-0'>05.21.Morning</p>
          </div>
          <div className='relative'>
<img src="../m07.png" alt="" />
<p className='py-1 px-2 text-light bg-primary w-26 absolute bottom-0'>05.21.Morning</p>
          </div>
          <div className='relative'>
<img src="../m08.png" alt="" />
<p className='py-1 px-2 text-light bg-primary w-26 absolute bottom-0'>05.21.Morning</p>
          </div>
        </div>
        <div className='pt-8 pb-12 flex justify-center'>
          <a href="#" className='text-light text-center bg-gradiant-1  w-72  p-4 rounded-md hover:bg-primary-2'>記録をもっと見る </a>
        </div>

      </div>

      <footer className='bg-dark-2 py-16'>
      <div className='max-w-5xl mx-auto flex gap-64'>
      <div className='flex gap-12'>
          <a href="#" className='text-light'>会員登録</a>
          <a href="#" className='text-light'>運営会社</a>
          <a href="#" className='text-light'>利用規約</a>
        </div>
        <div className='flex gap-12'>
          <a href="#" className='text-light'>特定商取引法に基づく表記</a>   
          <a href="#" className='text-light'>お問い合わせ</a>
        </div>
      </div>

      </footer>
  

    </main>
    
  )
}
