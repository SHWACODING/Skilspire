import Image from "next/image";
import Link from "next/link";
import { BsFacebook, BsInstagram, BsWhatsapp, BsYoutube } from "react-icons/bs";
import { MdCall, MdEmail } from "react-icons/md";
import skillspire_logo from '@/assets/skillspire-logo.jpg'
import { FaWhatsapp } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-[#0b0b15] p-8">
      <div className="md:flex md:items-center md:justify-between sm:grid sm:grid-cols-1">
        <div className="mb-6">
          <h1 className="font-bold text-2xl pb-5">Site Map</h1>
            <ul className="list-none text-[#676767] space-y-2 text-[17px]">
              <Link href={'/'} className="block hover:text-white">Home</Link>
              <Link href={'/about'} className="block hover:text-white">About Us</Link>
              <Link href={'/courses'} className="block hover:text-white">Courses</Link>
              <Link href={'/programs'} className="block hover:text-white">Programs</Link>
              <Link href={'/scholarships'} className="block hover:text-white">Scholarships</Link>
              <Link href={'/teamwork'} className="block hover:text-white">Teamwork</Link>
              <Link href={'/contact'} className="block hover:text-white">Contact Us</Link>
            </ul>
        </div>

        <div className="mb-6">
          <h1 className="font-bold text-2xl pb-5">Keep In Touch</h1>
          <ul className="list-none text-[#676767] space-y-2 text-[17px]">
            <Link href={'https://chat.whatsapp.com/Ej0wOoxaths2jP2QPYAUzk'} className="flex items-center justify-start space-x-2 text-left hover:text-white">
              <BsWhatsapp />
              <span>Whatsapp Comunity</span>
            </Link>
            <Link href={'https://youtube.com/@skilspireteam?si=0I7gHx3JJeBuywyO'} className="flex items-center justify-start space-x-2 hover:text-white">
              <BsYoutube />
              <span>Youtube</span> 
            </Link>
            <Link href={'https://www.facebook.com/profile.php?id=61560291479950&mibextid=ZbWKwL'} className="flex items-center justify-start space-x-2 hover:text-white">
              <BsFacebook />
              <span>Facebook</span>
            </Link>
            <Link href={'https://www.instagram.com/skill_spire/profilecard/?igsh=cWhndTg3ODZtZGdu'} className="flex items-center justify-start space-x-2 hover:text-white">
              <BsInstagram />
              <span>Instagram</span>
            </Link>
            <Link href={'https://chat.whatsapp.com/fu7cjlsnunbbh1uz4g5f7d'} className="flex items-center justify-start space-x-2 hover:text-white">
              <FaWhatsapp />
              <span>Whatsapp Channel</span>
            </Link>
            <Link href={'mailto:blackk.eagles.team@gmail.com'} className="flex items-center justify-start space-x-2 hover:text-white">
              <MdEmail />
              <span>Contact Us</span>
            </Link>
            <p className="flex items-center justify-start space-x-2 hover:text-white">
              <MdCall />
              <span>+20 114 159 5540</span>
            </p>
          </ul>
        </div>

        <div className="pr-5 mb-3">
            <h1 className="font-bold text-2xl pb-5">Who We Are 👌</h1>
            <Link href="/about" className="flex items-center justify-start space-x-3 -m-1.5 p-1">
              <Image  src={skillspire_logo} className='rounded-full' alt="skilspire logo" width={62} height={62} />
              <h1 className='font-bold'><span className='text-3xl sm:text-2xl font-extrabold'>SKIL</span><span className='text-3xl sm:text-xl'>SPIRE</span></h1>
            </Link>
            <p className="text-[#676767] text-sm w-64 pt-4">
              Skilspire is a youth-led team focused on 
              empowering young people and developing 
              their skills. The team offers workshops and 
              training in various fields like digital 
              marketing, programming, and scientific 
              research to help youth succeed in their 
              personal and professional lives.
            </p>
              <Link href={"https://maps.app.goo.gl/pumGkrafZ2fWSDwM8?g_st=com.google.maps.preview.copy"} className="flex items-center justify-start gap-x-3 pt-3 text-gray-400 hover:text-white">
                <FaLocationDot />
                SKILLSPIRE Location
              </Link>
        </div>
      </div>

      <br />
      <hr />
      
      <div className="md:flex md:items-center md:justify-between pt-5 sm:block">
        <p className="text-[#676767] text-sm text-center">
          Copyright &copy; 2024 <Link href={"https://chat.whatsapp.com/Ej0wOoxaths2jP2QPYAUzk"} className="text-gray-400 hover:text-gray-200">SKILSPIRE</Link>. All rights reserved.
        </p>
        <p className="text-[#676767] text-sm text-center">
          Managed by <Link href={"https://wa.me/+201225119832"} className="text-gray-400 hover:text-gray-200">SHWACODE</Link>
        </p>
      </div>
    </div>
  )
}

export default Footer;