import Link from "next/link";
/* eslint-disable @typescript-eslint/no-unused-vars */
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faYoutube, faLinkedin, faTiktok , faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons'; // Social icons
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
function Footer(){
    return(
        <div className="bg-gray-200 w-full  flex flex-col justify-center items-center mt-6">

        <div className=" w-[80%]  flex sm:flex-col md:flex-row lg:flex-row xl:flex justify-center items-start  ">
            <div className="sm:p-3 md:p-10 lg:p-15 xl:p-15">
                 <ul> 
                    <li><h1 className="font-bold text-xl pb-4">Core Courses</h1></li>
                    <li><Link href="#">Programming Fundamentals</Link></li>
                    <li><Link href="#">Web2 Using NextJS</Link></li>
                    <li><Link href="#">Earn as You Learn</Link></li>
                 </ul>
            </div>
            <div className="sm:p-3 md:p-10 lg:p-15 xl:p-15">
            <ul>
                    <li><h1 className="font-bold text-xl pb-4">Advanced Courses</h1></li>
                    <li><Link href="#">Web 3 and Metaverse</Link></li>
                    <li><Link href="#">Cloud-Native Computing</Link></li>
                    <li><Link href="#">Artificial Intelligence (AI) and Deep Learning</Link></li>
                    <li><Link href="#">Ambient Computing and IoT</Link></li>
                    <li><Link href="#">Genomics and Bioinformatics</Link></li>
                    <li><Link href="#">Network Programmability and Automation</Link></li>
                 </ul>
            </div>
    
            <div className="sm:p-3 md:p-10 lg:p-15 xl:p-15 ">
            <h1 className="font-bold text-xl pb-4">Social Links</h1>
       <ul className="list-none flex">
     
      <li>
        <Link href="https://youtube.com" target="_blank" rel="noopener noreferrer">
        <FaYoutube />
        </Link>
      </li>

      <li>
        <Link href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
        </Link>
      </li>

      <li>
        <Link href="https://www.tiktok.com "  target="_blank" rel="noopener noreferrer">
        <FaTiktok />
        </Link>
      </li>
      <li>
        <Link href="https://web.facebook.com"  target="_blank" rel="noopener noreferrer">
        <FaFacebook />
        </Link>
      </li>
      <li>
        <Link href="https://chat.whatsapp.com"  target="_blank" rel="noopener noreferrer">
        <FaWhatsapp />
        </Link>
       </li>
    </ul>
     </div>


        </div>
        </div>
    )
}

export default Footer