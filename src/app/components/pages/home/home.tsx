import React from 'react';
import Image from 'next/image';
import Marquee from '@/components/ui/marquee';
import Name from '@/assets/name.svg';

const HomePage: React.FC = () => {
  const logos = [
    {
      name: 'BigCommerce',
      img: 'https://rfdslcnqutnamgrgitxv.supabase.co/storage/v1/object/sign/profile%20resume/projects/bigcommerce.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9maWxlIHJlc3VtZS9wcm9qZWN0cy9iaWdjb21tZXJjZS5zdmciLCJpYXQiOjE3MzY4OTEwNTgsImV4cCI6MTc2ODQyNzA1OH0.IEd_GmcxssSDTBbPAZt_Xg-h6i6LGbHbMucdJwAEbKI&t=2025-01-14T21%3A44%3A18.710Z',
    },
    {
      name: 'Orion180',
      img: 'https://rfdslcnqutnamgrgitxv.supabase.co/storage/v1/object/sign/profile%20resume/projects/orion180.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9maWxlIHJlc3VtZS9wcm9qZWN0cy9vcmlvbjE4MC5qcGciLCJpYXQiOjE3MzY4OTExNjIsImV4cCI6MTc2ODQyNzE2Mn0.PqJ_E9rlY0yCdhWHYclDtC79nAyRoNMNG8QlNP0BqvQ&t=2025-01-14T21%3A46%3A02.911Z',
    },
    {
      name: 'ESO',
      img: 'https://rfdslcnqutnamgrgitxv.supabase.co/storage/v1/object/sign/profile%20resume/projects/ESO.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9maWxlIHJlc3VtZS9wcm9qZWN0cy9FU08ucG5nIiwiaWF0IjoxNzM2ODkxMTk1LCJleHAiOjE3Njg0MjcxOTV9.08jhLvrvvxpoHpfD4JHKp6ZWXhDc6n-Yi3HefSd3Arc&t=2025-01-14T21%3A46%3A36.089Z',
    },
    {
      name: 'Expedia group',
      img: 'https://rfdslcnqutnamgrgitxv.supabase.co/storage/v1/object/sign/profile%20resume/projects/expedia.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9maWxlIHJlc3VtZS9wcm9qZWN0cy9leHBlZGlhLnBuZyIsImlhdCI6MTczNjg5MTI0MywiZXhwIjoxNzY4NDI3MjQzfQ.VV-jzbSbQ30Sg2qi0Fad-3DzmkoNUwKsdgwmHOU3_j4&t=2025-01-14T21%3A47%3A23.224Z',
    },
    {
      name: 'Area6',
      img: 'https://rfdslcnqutnamgrgitxv.supabase.co/storage/v1/object/sign/profile%20resume/projects/area6.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9maWxlIHJlc3VtZS9wcm9qZWN0cy9hcmVhNi5qcGciLCJpYXQiOjE3Mzg4MDE2NjIsImV4cCI6MTc3MDMzNzY2Mn0.cpS4u9VoFjxuYvCX2_yZk57HXKbWVUM3pr5OiPbgEe4',
    },
    {
      name: 'Banamex',
      img: 'https://rfdslcnqutnamgrgitxv.supabase.co/storage/v1/object/sign/profile%20resume/projects/banamex.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9maWxlIHJlc3VtZS9wcm9qZWN0cy9iYW5hbWV4LnBuZyIsImlhdCI6MTczODgwMTcxOCwiZXhwIjoxNzcwMzM3NzE4fQ.jCy-crTfiRQwRwj1xUXx_ARMPiFad787sknQGUXgKY0',
    },
    {
      name: 'Santander',
      img: 'https://rfdslcnqutnamgrgitxv.supabase.co/storage/v1/object/sign/profile%20resume/projects/santander.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9maWxlIHJlc3VtZS9wcm9qZWN0cy9zYW50YW5kZXIuanBnIiwiaWF0IjoxNzM4ODAxNzMwLCJleHAiOjE3NzAzMzc3MzB9.x7n-F3CPUYCigWBUqaPN4YdQqTOuUdKgx4W5ZPPGJiM',
    },
    {
      name: 'Sr Pago',
      img: 'https://rfdslcnqutnamgrgitxv.supabase.co/storage/v1/object/sign/profile%20resume/projects/sr_pago.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9maWxlIHJlc3VtZS9wcm9qZWN0cy9zcl9wYWdvLnBuZyIsImlhdCI6MTczODgwMTc4NywiZXhwIjoxNzcwMzM3Nzg3fQ.prr1RiKys6myqxm25A9YV_2foxp_1Yd2zIRUyJA_iP0',
    },
    {
      name: 'TCS',
      img: 'https://rfdslcnqutnamgrgitxv.supabase.co/storage/v1/object/sign/profile%20resume/projects/tcs.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9maWxlIHJlc3VtZS9wcm9qZWN0cy90Y3MucG5nIiwiaWF0IjoxNzM4ODAxODE5LCJleHAiOjE3NzAzMzc4MTl9.a0k1PPPDdLOJmYOzLWuBHdzlGHvxi3K8c7wJtDE-GHI',
    },
  ];

  return (
    <>
      <div className="container h-[80vh] p-8 z-10 absolute items-center justify-center bg-opacity-60 gap-4 overflow-hidden rounded-lg border bg-background px-20 md:shadow-xl">
        <div className="grid p-[2rem] h-full">
          <div className="grid grid-cols-4 h-[80%]">
            <div
              className="flex flex-col items-center justify-center bg-center bg-cover h-[50vh]"
              style={{
                backgroundImage:
                  'url(https://rfdslcnqutnamgrgitxv.supabase.co/storage/v1/object/sign/profile%20resume/personal/465554911_10231695773648964_8304312155384821212_n.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9maWxlIHJlc3VtZS9wZXJzb25hbC80NjU1NTQ5MTFfMTAyMzE2OTU3NzM2NDg5NjRfODMwNDMxMjE1NTM4NDgyMTIxMl9uLmpwZyIsImlhdCI6MTczODg3MTYwNywiZXhwIjoxNzcwNDA3NjA3fQ.37df21PKn1Q96GinjrjZcj2pPbfk7v6Rn1pgd0BqwRc)',
              }}
            ></div>
            <div className="col-span-3 flex justify-end items-center p-6">
              <div className="grid">
                <Name />
                <p>
                  Front end developer with almost 7 years of experience, working mainly with Javascript. Using
                  Angularjs, Vuejs and React. With a strong experience in agile methodology, as well as the ability to
                  translate business requirements into technical tasks.
                </p>
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
