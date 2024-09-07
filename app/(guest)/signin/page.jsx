import GithubSignin from '@/app/components/GithubSignin';
import GoogleSignin from '@/app/components/GoogleSignin';
import SigninIcons from '@/app/components/SigninIcons';
import React from 'react';

async function SignIn() {

  return (
    <div className='min-h-dvh  flex items-center justify-center'>
      <div className='bg-slate-50 py-2 px-5 md:w-[25rem] max-sm:w-full  md:h-[35rem] max-sm:m-5 rounded-md shadow-md'>
        <h2 className='text-center text-3xl max-sm:text-2xl py-6'>
          Sign In to <span className='text-blue-600 italic font-bold'>to-do</span>
        </h2>

        <div className='flex flex-col gap-7 mt-[3rem]'>

          <GithubSignin />

          <GoogleSignin />

        </div>

        <SigninIcons />
      </div>
    </div>
  );
}

export default SignIn;