import React from 'react';
import Image from 'next/image';
import Marquee from '@/components/ui/marquee';
import Name from '@/assets/name.svg';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { LogoIcon } from '../../shared/logo-resume/logo';

const HomePage: React.FC = () => {
  const logos = [
    {
      name: 'BigCommerce',
      img: 'https://rfdslcnqutnamgrgitxv.supabase.co/storage/v1/object/sign/profile%20resume/jobs/bigcommerce.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9maWxlIHJlc3VtZS9qb2JzL2JpZ2NvbW1lcmNlLnN2ZyIsImlhdCI6MTczOTMwODMzMSwiZXhwIjoxNzcwODQ0MzMxfQ.zj-PanyQTDdretJ800tEAbJx16JgiAkcU1JTfFDJl9w',
    },
    {
      name: 'Orion180',
      img: 'https://rfdslcnqutnamgrgitxv.supabase.co/storage/v1/object/sign/profile%20resume/jobs/orion180.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9maWxlIHJlc3VtZS9qb2JzL29yaW9uMTgwLmpwZyIsImlhdCI6MTczOTMwODQwMSwiZXhwIjoxNzcwODQ0NDAxfQ.azQKqLyTI73BRlE583m0blwZacdirK9xWoGZCd1MMJs',
    },
    {
      name: 'ESO',
      img: 'https://rfdslcnqutnamgrgitxv.supabase.co/storage/v1/object/sign/profile%20resume/jobs/ESO.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9maWxlIHJlc3VtZS9qb2JzL0VTTy5wbmciLCJpYXQiOjE3MzkzMDgzNTQsImV4cCI6MTc3MDg0NDM1NH0.5keW4jzKw_JVlZ0S4Xd0Fh46gXdJ_CWcJqzGyDx3NBE',
    },
    {
      name: 'Expedia group',
      img: 'https://rfdslcnqutnamgrgitxv.supabase.co/storage/v1/object/sign/profile%20resume/jobs/expedia.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9maWxlIHJlc3VtZS9qb2JzL2V4cGVkaWEucG5nIiwiaWF0IjoxNzM5MzA4MzcxLCJleHAiOjE3NzA4NDQzNzF9.nXnXjdGx84UIjt0tsGLqlKYBh0gdOtRfjk6MdmUwho4',
    },
    {
      name: 'Area6',
      img: 'https://rfdslcnqutnamgrgitxv.supabase.co/storage/v1/object/sign/profile%20resume/jobs/area6.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9maWxlIHJlc3VtZS9qb2JzL2FyZWE2LmpwZyIsImlhdCI6MTczOTgwNTYxNywiZXhwIjoxNzcxMzQxNjE3fQ.7awAvYjIjCu4j3w-EVaPdcxxNMDOfe13TmbeMWcEIuI',
    },
    {
      name: 'Banamex',
      img: 'https://rfdslcnqutnamgrgitxv.supabase.co/storage/v1/object/sign/profile%20resume/jobs/banamex.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9maWxlIHJlc3VtZS9qb2JzL2JhbmFtZXgucG5nIiwiaWF0IjoxNzM5MzA4MzA4LCJleHAiOjE3NzA4NDQzMDh9.1IccrP7uJcVKoarZWlBouGu9XvxEt_4JiXJZiRA8yC4',
    },
    {
      name: 'Santander',
      img: 'https://rfdslcnqutnamgrgitxv.supabase.co/storage/v1/object/sign/profile%20resume/jobs/santander.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9maWxlIHJlc3VtZS9qb2JzL3NhbnRhbmRlci5qcGciLCJpYXQiOjE3MzkzMDg0MjIsImV4cCI6MTc3MDg0NDQyMn0.s3Rp9wlXt-jfano9iPmpLJrbBoy15wnvmJ7q4JEB79c',
    },
    {
      name: 'Sr Pago',
      img: 'https://rfdslcnqutnamgrgitxv.supabase.co/storage/v1/object/sign/profile%20resume/jobs/sr_pago.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9maWxlIHJlc3VtZS9qb2JzL3NyX3BhZ28ucG5nIiwiaWF0IjoxNzM5MzA4NDM5LCJleHAiOjE3NzA4NDQ0Mzl9.kwn-61sCq-auMctWonZ5_ZSD-NIjBVVbV0nYy0hk0qY',
    },
    {
      name: 'TCS',
      img: 'https://rfdslcnqutnamgrgitxv.supabase.co/storage/v1/object/sign/profile%20resume/jobs/tcs.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9maWxlIHJlc3VtZS9qb2JzL3Rjcy5wbmciLCJpYXQiOjE3MzkzMDg0NTksImV4cCI6MTc3MDg0NDQ1OX0.YuUzVwSolvlvubYMPJLQyuokQfgzVtRimEltexVCm70',
    },
  ];

  return (
    <>
      <LogoIcon />
      <div className="container h-[80vh] p-8 z-10 absolute items-center justify-center bg-opacity-60 gap-4 overflow-hidden rounded-lg border bg-background px-20 md:shadow-xl">
        <div className="p-[2rem] h-full">
          <div className="grid grid-cols-4 h-[80%]">
            <div
              className="flex flex-col items-center justify-center bg-center bg-cover h-[50vh]"
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
                  <Link to="/Portfolio">Portfolio</Link>
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
              {logos.map((data, idx) => (
                <Image
                  key={idx}
                  src={data.img}
                  alt={data.name}
                  width={100}
                  height={200}
                  className="mx-auto h-[100px] pl-2 w-3/4 cursor-pointer rounded-xl transition-all duration-300 hover:ring-1 hover:ring-neutral-300"
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
