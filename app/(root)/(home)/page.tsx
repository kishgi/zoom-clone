'use client';

import MeetingTypeList from '@/components/MeetingTypeList';
import React, { useEffect, useState } from 'react';

const Home = () => {
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
      setDate(new Intl.DateTimeFormat('en-US', { dateStyle: 'full' }).format(now));
    };

    updateTime(); // Initialize on mount
    const interval = setInterval(updateTime, 1000); // Update time every second

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);

  return (
    <section className="flex size-full flex-col gap-10 text-white">
        <div className="h-[303px] w-full rounded-[20px] bg-custom">
          <div className="flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11">
            <h2 className="glassmorphism max-w-[270px] rounded py-2 text-center text-base font-normal">
              Upcoming meeting at: 12:00
            </h2>
            <div className="flex flex-col gap-2">
              <h1 className="text-4xl font-extrabold lg:text-6xl">{time}</h1>
              <p className="text-base font-medium text-sky-1 lg:text-2xl">{date}</p>
            </div>
          </div>
        </div>
      
      <MeetingTypeList/>
    </section>
  );
};

export default Home;
