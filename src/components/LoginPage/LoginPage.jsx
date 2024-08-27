import React from 'react';
import LoginForm from './LoginForm';
import Image from 'next/image';
import loginPageIMage from '../../images/loginPageIMage.svg'

function LoginPage() {
  return (
    <main className="flex overflow-hidden flex-col justify-center items-center px-16 py-44 bg-amber-200 max-md:px-5 max-md:py-24">
      <div className="w-full max-w-[1488px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <section className="flex flex-col w-[37%] max-md:hidden">
            <Image
              loading="lazy"
              src={loginPageIMage}
              alt=""
              className="object-contain self-stretch my-auto w-full aspect-square"
            />
          </section>
          <section className="flex flex-col ml-5 w-[63%] max-md:ml-0 max-md:w-full">
            <LoginForm />
          </section>
        </div>
      </div>
    </main>
  );
}

export default LoginPage;