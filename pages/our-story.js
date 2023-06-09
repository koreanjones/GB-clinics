import Navbar from '@/components/Navbar';
import Image from 'next/image';
import image1 from '../public/images/1.png';
import image2 from '../public/images/4.png';
import image3 from '../public/images/3.png';
import image4 from '../public/images/BG5.png';


export default function OurStory() {
  return (
    <div className="">
      <Navbar />
      <div className="h-42 md:h-1">
        <Image src={image4} width={1500} height={50} alt="image" />
      </div>
      <div className="flex justify-between flex-col md:flex-row md:p-10 pt-10">
        <div className="md:w-[50%] text-center px-5 md:pt-10 rounded-xl shadow-2xl bg-white">
          <h1 className="text-2xl mb-10">Our Story</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <Image
            src={image3}
            width={250}
            height={250}
            className=" mx-auto"
            alt="image"
          />
        </div>
        <div className="flex flex-col md:flex-row md:w-[50%] justify-around md:px-10">
          <div className="">
            <Image
              src={image1}
              width={350}
              height={50}
              className="mt-10 mx-auto"
              alt="image"
            />
          </div>
          <div className="">
            <Image
              src={image2}
              width={350}
              height={50}
              className="mt-5 mx-auto md:mt-64"
              alt="image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
