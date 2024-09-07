import Link from 'next/link'
import React from 'react'
import { FaInstagram, FaPinterest } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'

const SigninIcons = () => {
    return (
        <main>
            <div className='mt-[5rem]'>
                <h3 className='text-sm font-light text-center my-5'>Follow us on</h3>
                <div className='flex gap-10 justify-center items-center'>
                    <Link href="https://www.instagram.com">
                        <FaInstagram className='text-4xl text-[#C13584]' />
                    </Link>
                    <Link href="https://www.x.com">
                        <FaSquareXTwitter className='text-4xl' />
                    </Link>
                    <Link href="https://www.pinterest.com">
                        <FaPinterest className='text-4xl text-[#E60023]' />
                    </Link>
                </div>
            </div>
        </main>
    )
}

export default SigninIcons