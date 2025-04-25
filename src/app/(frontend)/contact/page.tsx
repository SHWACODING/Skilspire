import { ContactForm } from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import { BsLinkedin, BsYoutube } from "react-icons/bs";
import {
  RiFacebookCircleFill,
  RiInstagramLine,
  RiWhatsappLine,
} from "react-icons/ri";
import shwacode from "@/assets/shwacode.jpg";
import { MdEmail } from "react-icons/md";
import { BiLogoWhatsapp } from "react-icons/bi";

export default function Contact() {
  return (
    <>
      <Header />

      <div className="pt-12 pb-2 px-6 bg-curlyBackground bg-no-repeat bg-cover bg-bottom w-full h-full">
        <ContactForm />

        <div className="pt-16">
          <h1 className="font-thin text-2xl md:text-3xl text-center">
            FOLLOW US
          </h1>
          <div className="flex items-center justify-between lg:justify-evenly py-7">
            <Link
              href={
                "https://www.facebook.com/profile.php?id=61560291479950&mibextid=ZbWKwL"
              }
            >
              <RiFacebookCircleFill className="size-20 md:size-24 lg:size-28 hover:translate-y-2" />
            </Link>
            <Link
              href={"https://youtube.com/@skilspireteam?si=0I7gHx3JJeBuywyO"}
            >
              <BsYoutube className="size-20 md:size-24 lg:size-28 hover:translate-y-2" />
            </Link>
            <Link
              href={
                "https://www.instagram.com/skill_spire/profilecard/?igsh=cWhndTg3ODZtZGdu"
              }
            >
              <RiInstagramLine className="size-20 md:size-24 lg:size-28 hover:translate-y-2" />
            </Link>
            <Link
              href={"https://whatsapp.com/channel/0029VaiIEGHEwEk4fJUEgX0l"}
            >
              <RiWhatsappLine className="size-20 md:size-24 lg:size-28 hover:translate-y-2" />
            </Link>
          </div>
        </div>

        <div className="mx-auto pt-7 pb-8">
          <h1 className="font-thin text-2xl md:text-3xl text-center">
            WEBSITE FOUNDER
          </h1>
          <Image
            src={shwacode}
            alt="ShwaTech"
            className="w-60 h-60 rounded-full mx-auto mt-7 mb-6"
          />
          <h2 className="font-normal text-3xl sm:text-2xl text-center pt-2 pb-1">
            Mohamed Fathi
          </h2>
          <h3 className="font-normal text-2xl sm:text-xl text-gray-300 text-center py-1">
            Web Developer
          </h3>
          <p className="font-thin text-xl sm:text-lg text-gray-400 text-center py-1">
            ShwaTech
          </p>
          <div className="mx-auto pt-1 text-gray-400 flex justify-center space-x-2 items-center">
            <Link href={"mailto:shwakesh13579@gmail.com"}>
              <MdEmail size={22} className="hover:text-gray-100" />
            </Link>
            <Link
              href={
                "https://www.linkedin.com/in/mohamed-makhlouf-52391b28b?utm_source=share&utm_campaign=share_via&utm_content=profile"
              }
            >
              <BsLinkedin size={17} className="hover:text-gray-100" />
            </Link>
            <Link href={"https://wa.me/+201225119832"}>
              <BiLogoWhatsapp size={22} className="hover:text-gray-100" />
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
