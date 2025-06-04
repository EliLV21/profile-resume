import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Marquee from '@/components/ui/marquee';
import Name from '@/assets/name.svg';
import { Button } from '@/components/ui/button';
import { LogoIcon } from '../../shared/logo-resume/logo';
import { Images } from '@/assets/index';
import { StaticImageData } from 'next/image';

const HomePage: React.FC = () => {
  return (
    <>
      <LogoIcon />
      <div className="container h-[80vh] p-8 z-10 absolute items-center justify-center bg-opacity-60 gap-4 overflow-hidden rounded-lg border bg-background px-20 md:shadow-xl">
        <div className="p-[2rem] h-full">
          <div className="grid grid-cols-4 h-[80%]">
            <div
              className="flex flex-col items-center cursor-pointer justify-center bg-center bg-cover h-[50vh]"
              style={{
                backgroundImage:
                  'url(https://rfdslcnqutnamgrgitxv.supabase.co/storage/v1/object/sign/profile%20resume/personal/465554911_10231695773648964_8304312155384821212_n.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9maWxlIHJlc3VtZS9wZXJzb25hbC80NjU1NTQ5MTFfMTAyMzE2OTU3NzM2NDg5NjRfODMwNDMxMjE1NTM4NDgyMTIxMl9uLmpwZyIsImlhdCI6MTczODg3MTYwNywiZXhwIjoxNzcwNDA3NjA3fQ.37df21PKn1Q96GinjrjZcj2pPbfk7v6Rn1pgd0BqwRc)',
              }}
            ></div>
            <div className="col-span-3 items-center p-6">
              <div className=" w-full">
                <Name />
                <p className="flex justify-end items-center">
                  Front end developer with almost 9 years of experience, working mainly with Javascript. Using
                  Angularjs, Vuejs and React. With a strong experience in agile methodology, as well as the ability to
                  translate business requirements into technical tasks.
                </p>
              </div>
              <div className="w-full flex justify-center items-center inline-flex gap-4 my-4">
                <a
                  href="https://elilv21.github.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-bold hover:underline"
                >
                  My first Portfolio &#9829;
                </a>
                <Button className="w-[100px]">
                  <Link href="/portfolio">Portfolio</Link>
                </Button>
                <Button className="w-[100px]">
                  <a
                    href="https://rfdslcnqutnamgrgitxv.supabase.co/storage/v1/object/sign/profile%20resume/resume/Elizabeth_Resume.pdf?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9maWxlIHJlc3VtZS9yZXN1bWUvRWxpemFiZXRoX1Jlc3VtZS5wZGYiLCJpYXQiOjE3Mzk4MDY0NDEsImV4cCI6MTc3MTM0MjQ0MX0.qauBkFUrp8tQk0s1zI7oIxDYAsxuqfsspoxKwG0GKsA"
                    target="_blank"
                  >
                    Resume
                  </a>
                </Button>
              </div>
            </div>
          </div>

          <div className="w-full flex-col relative bottom-0">
            <Marquee className=" justify-center overflow-hidden [--duration:30s] [--gap:1rem]" pauseOnHover>
              {Images.map((data: StaticImageData, idx: number) => (
                <Image
                  key={idx}
                  src={data}
                  alt={`${data}`}
                  width={100}
                  height={200}
                  className="mx-auto h-[100px] pl-2 w-3/4 cursor-none rounded-xl transition-all duration-300 "
                />
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
