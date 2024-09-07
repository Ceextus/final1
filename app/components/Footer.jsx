
import React from 'react';
import { LiaQuestionSolid } from "react-icons/lia";
import { FaSquareXTwitter } from 'react-icons/fa6'
import { FaRegCopyright } from "react-icons/fa";
import { BsDashLg } from "react-icons/bs";
import { FaInstagram, FaPinterest } from 'react-icons/fa'
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneVolume } from "react-icons/fa";
import { IoMailSharp } from "react-icons/io5";
import Link from 'next/link';
import { IoIosApps } from "react-icons/io";
import { FaArrowRightLong } from "react-icons/fa6";
import Image from 'next/image';


const Footer = () => {
    const footerList = [
        {
            id: 1,
            href: "/",
            name: "Home"
        },
        {
            id: 2,
            href: "#",
            name: "Cookies"
        },
        {
            id: 3,
            href: "#",
            name: "Help"
        },



    ]
    return (
        <footer className='  shadow-md'>
            <main className='w-[90%] mx-auto flex justify-between py-4 max-lg:flex-col max-lg:items-center max-lg:justify-center'>
                <section className='flex flex-col max-md-items-center max-lg:mx-auto'>
                    <h2 className='flex items-center text-md cursor-pointer  ml-3 font-bold max-lg:justify-center w-[18rem]'>Follow Us On Social Media
                        
                    </h2>

                    {/* import social media icons */}
                    <div className='flex gap-3 lg:ml-6 max-lg:justify-center pb-8'>
                        <Link href="https://www.instagram.com">
                            <FaInstagram className='text-4xl text-[#C13584] hover:shadow-lg' />
                        </Link>
                        <Link href="https://www.x.com">
                            <FaSquareXTwitter className='text-4xl hover:shadow-lg' />
                        </Link>
                        <Link href="https://www.pinterest.com">
                            <FaPinterest className='text-4xl text-[#E60023] hover:shadow-lg' />
                        </Link>

                    </div>

                    <div className='mt-5'>
                        <h2 className='font-bold w-full flex max-lg:justify-center gap-2 lg:ml-4'>
                            Download <p className='text-blue-600'>TO-DO </p> App Now
                        </h2>

                        {/* import image from next and link to image stored in public folder */}
                        <span className='flex items-center justify-center lg:w-[15rem] min-lg:ml-3'>
                            <Link href={'https://play.google.com/store/apps?hl=en'}>
                                <Image src="/google-play-badge.png"
                                    alt="PlayStore"
                                    width={150}
                                    height={50}
                                />
                            </Link>

                            <Link href={'https://www.apple.com/app-store/'}>
                                <Image src="/app-store2.png"
                                    alt="AppStore"
                                    width={120}
                                    height={30}
                                />
                            </Link>
                        </span>
                    </div>


                </section>

                <section>
                    <div className='mb-4'>
                        <h2 className='flex gap-3 items-center hover:text-lg text-md font-bold cursor-pointer max-lg:justify-center max-lg:mt-3'>
                            TO-DO<IoIosApps className='text-3xl text-blue-600' /></h2>
                    </div>
                    <p className='bg-blue-200 h-[10rem] w-[20rem] max-md:w-auto p-3 rounded-lg shadow-lg max-md:mx-5 
                        cursor-pointer hover:bg-black hover:text-white transition-all'>
                        "Unleash your productivity with our intuitive to-do app.
                        Conquer overwhelming task lists and find focus with personalized organization.
                        Simplify your life, one task at a time."
                    </p>
                </section>

                <section className='w-[19rem] max-lg:w-auto max-md:mt-4 flex flex-col max-lg:items-center max-lg:justify-center'>
                    <h3 className='flex items-center hover:text-lg  text-md font-bold w-full cursor-pointer mb-5 max-lg:justify-center'>
                        Frequently Asked Question
                        <LiaQuestionSolid className='text-3xl text-blue-600' />
                    </h3>

                    <Link href={'#'} className='border rounded-full py-5 px-7 bg-blue-200 font-bold flex gap-5 hover:bg-black hover:text-white
                        items-center w-[10rem] text-center shadow-lg'>
                        FAQS <FaArrowRightLong className='text-2xl' />
                    </Link>
                </section>
            </main>

            <section className='flex md:justify-between  items-center py-3 max-md:flex-col max-md;w-auto'>
                <ul className='flex gap-10 font-semibold mr-3 p-3 max-md:text-sm'>
                    {footerList.map((list) => (
                        <li key={list.id} className='hover:text-blue-500 hover:border-b hover:border-b-blue-600'>
                            <Link href={list.href}>
                                {list.name}
                            </Link>
                        </li>
                    ))}
                </ul>
                <p className='flex items-center font-bold lg:mr-36 border-b border-blue-600 max-md:text-sm'>
                    <FaRegCopyright />
                    Made By EarlyCode Alumni
                </p>

                <h3 className='font-semibold max-md:text-sm mr-3'>@2024</h3>

            </section>

        </footer>
    );
}

export default Footer;
