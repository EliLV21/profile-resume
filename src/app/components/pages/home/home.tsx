import React from 'react';
import Image from 'next/image';
import Marquee from '@/components/ui/marquee';
import Name from '@/assets/name.svg';
import { Button } from '@/components/ui/button';
import { Images } from '@/assets/index';
import { StaticImageData } from 'next/image';
import { LogoIcon } from '../../shared/logo-resume/logo';

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-center min-h-screen relative py-4 md:py-0">

      {/* Home Container */}
      <div id='home-container' className="container z-10 items-center justify-center bg-opacity-60 gap-4 overflow-hidden rounded-lg border bg-background px-4 md:px-20 md:shadow-xl w-full md:w-auto mb-4 md:mb-0">
          <div className="grid grid-cols-1 md:grid-cols-4 h-auto md:h-[70%]">
            <div className="order-first col-span-1 flex flex-col items-center justify-center p-4 md:items-center md:justify-center md:p-0">
              <LogoIcon inline />
            </div>
            <div className="col-span-1 md:col-span-3 items-center p-4 md:p-6">
              <div className="w-full">
                <Name />
                <p className="flex justify-end items-center text-sm md:text-base">
                  Front end developer with almost 8 years of experience, working mainly with Javascript. Using
                  Angularjs, Vuejs and React. With a strong experience in agile methodology, as well as the ability to
                  translate business requirements into technical tasks.
                </p>
              </div>
              <div className="w-full flex flex-col md:flex-row justify-center items-center gap-4 my-4">
                <a
                  href="https://elilv21.github.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-bold hover:underline text-sm md:text-base"
                >
                  My first Portfolio &#9829;
                </a>
                <Button className="w-full md:w-[100px]">
                  <a
                    href="https://rfdslcnqutnamgrgitxv.supabase.co/storage/v1/object/sign/profile%20resume/resume/Elizabeth_Resume.pdf?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9maWxlIHJlc3VtZS9yZXN1bWUvRWxpemFiZXRoX1Jlc3VtZS5wZGYiLCJpYXQiOjE3Mzk4MDY0NDEsImV4cCI6MTc3MTM0MjQ0MX0.qauBkFUrp8tQk0s1zI7oIxDYAsxuqfsspoxKwG0GKsA"
                    target="_blank"
                  >
                    Resume
                  </a>
                </Button>
                <Button className="w-full md:w-[100px]">
                  <a
                    href="/portfolio"
                  >
                    Resume
                  </a>
                </Button>
              </div>
            </div>
          </div>
      
        <Marquee className="justify-center overflow-hidden [--duration:30s] [--gap:1rem]" pauseOnHover>
          {Images.map((data: StaticImageData, idx: number) => (
            <Image
              key={idx}
              src={data}
              alt={`${data}`}
              width={100}
              height={200}
              className="mx-auto h-[100px] pl-2 w-3/4 cursor-none rounded-xl transition-all duration-300"
            />
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default HomePage;
