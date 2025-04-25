"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import image1 from "@/assets/teamwork/1.jpg";
import image2 from "@/assets/teamwork/2.jpg";
import image3 from "@/assets/teamwork/3.jpg";
import image4 from "@/assets/teamwork/4.jpg";
import image5 from "@/assets/teamwork/5.jpg";
import image6 from "@/assets/teamwork/6.jpg";
import image7 from "@/assets/teamwork/7.jpg";
import image8 from "@/assets/teamwork/8.jpg";
import image9 from "@/assets/teamwork/9.jpg";
import image10 from "@/assets/teamwork/10.jpg";
import image11 from "@/assets/teamwork/11.jpg";
import image12 from "@/assets/teamwork/12.jpg";
import image13 from "@/assets/teamwork/13.jpg";
import image14 from "@/assets/teamwork/14.jpg";
import image15 from "@/assets/teamwork/15.jpg";
import image16 from "@/assets/teamwork/16.jpg";
import image17 from "@/assets/teamwork/17.jpg";
import image18 from "@/assets/teamwork/18.jpg";
import image19 from "@/assets/teamwork/19.jpg";
import image20 from "@/assets/teamwork/20.jpg";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@headlessui/react";

// Interface for image data
interface ImageData {
  src: StaticImageData;
}

// Image data array
const images: ImageData[] = [
  { src: image1 },
  { src: image2 },
  { src: image3 },
  { src: image4 },
  { src: image5 },
  { src: image6 },
  { src: image7 },
  { src: image8 },
  { src: image9 },
  { src: image10 },
  { src: image11 },
  { src: image12 },
  { src: image13 },
  { src: image14 },
  { src: image15 },
  { src: image16 },
  { src: image17 },
  { src: image18 },
  { src: image19 },
  { src: image20 },
];

export default function ImageSlider(): JSX.Element {
  // State to keep track of the current image index
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // State to determine if the image is being hovered over
  const [isHovered, setIsHovered] = useState<boolean>(false);

  // Function to show the previous slide
  const prevSlide = (): void => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length,
    );
  };

  // Function to show the next slide
  const nextSlide = (): void => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // useEffect hook to handle automatic slide transition
  useEffect(() => {
    // Start interval for automatic slide change if not hovered
    if (!isHovered) {
      const interval = setInterval(() => {
        nextSlide();
      }, 3000);

      // Cleanup the interval on component unmount
      return () => {
        clearInterval(interval);
      };
    }
  }, [isHovered]);

  // Handle mouse over event
  const handleMouseOver = (): void => {
    setIsHovered(true);
  };

  // Handle mouse leave event
  const handleMouseLeave = (): void => {
    setIsHovered(false);
  };

  return (
    <>
      <Header />

      <section className="bg-curlyBackground bg-no-repeat bg-cover bg-bottom w-full h-full mb-20">
        <h1 className="text-3xl md:text-5xl text-center font-extrabold text-white pt-10 mb-9">
          SKILSPIRE Teamwork
        </h1>

        <div className="relative w-[390px] sm:w-[440px] md:w-[750px] lg:w-[950px] mx-auto mt-6">
          <div
            className="relative h-[520px] mx-12 group hover:-translate-y-1"
            onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseLeave}
          >
            <Image
              src={images[currentIndex].src}
              alt={`Slider Image ${currentIndex + 1}`}
              layout="fill"
              objectFit="objectFit"
              className="rounded-xl transition-all duration-400 ease-in-out cursor-pointer"
            />
          </div>

          <Button
            className="absolute left-0 top-1/2 transform h-[459px] rounded-xl mx-1 -mt-[10px] -translate-y-1/2 p-2 group bg-[#589dd1] hover:bg-[#589dd1df]"
            onClick={prevSlide}
          >
            <ChevronLeft className="text-gray-200 group-hover:text-white" />
          </Button>
          <Button
            className="absolute right-0 top-1/2 transform h-[459px] rounded-xl mx-1 -mt-[10px] -translate-y-1/2 p-2 group bg-[#589dd1] hover:bg-[#589dd1df]"
            onClick={nextSlide}
          >
            <ChevronRight className="text-gray-200 group-hover:text-white" />
          </Button>
          <div className="flex justify-center mt-4">
            {images.map((_, index) => (
              <span
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-1 w-10 mx-1 ${index === currentIndex ? "bg-[#589dd1] rounded-xl" : "bg-gray-300 rounded-xl"} transition-all duration-700 ease-in-out cursor-pointer`}
              ></span>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
