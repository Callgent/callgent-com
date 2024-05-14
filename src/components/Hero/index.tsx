"use client";
import Image from "next/image";
import { useEffect, useState } from 'react';
import './index.css';

const Hero = () => {
  const [visibleParagraphs, setVisibleParagraphs] = useState(1);

  useEffect(() => {
    const handleScroll = (event) => {
      event.preventDefault();

      const delta = event.deltaY;
      if (delta > 0) {
        setVisibleParagraphs((prevVisibleParagraphs) => Math.min(prevVisibleParagraphs + 1, paragraphs.length));
      }
    };
    const element = document.getElementById('container');
    element.addEventListener('wheel', handleScroll);
    return () => {
      element.removeEventListener('wheel', handleScroll);
    };
  }, []);

  const paragraphs = [
    "Encapsulate your service into a callgent,",
    "Now it can talk to a person in email or slack channels, or be invoked through code libs or restAPIs, ..",
    "The callgent translates all these requests into executable invocations, and sends them to your API service, or even slack users to respond.",
    "Callgent's vision, is to break the silos among all systems and users!",
  ];


  const [visibleImage, setVisibleImage] = useState(0);

  useEffect(() => {
    const handleScroll = (event) => {
      event.preventDefault();

      const delta = event.deltaY;
      if (delta > 0) {
        setVisibleImage((prevVisibleImage) => (prevVisibleImage + 1) % 4);
      }
    };
    const element = document.getElementById('container');
    element.addEventListener('wheel', handleScroll);
    return () => {
      element.removeEventListener('wheel', handleScroll);
    };
  }, []);

  const images = [
    "/images/hero/part1.png",
    "/images/hero/part2.png",
    "/images/hero/part1.png",
    "/images/hero/part2.png",
  ];
  return (
    <section
      id="home"
      className="relative z-10 overflow-hidden bg-white pb-10 pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
    >
      <div id='container' className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto max-w-[800px] text-center">
              <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                Service as a <span className='text'>Callable Agent</span>
              </h1>
              <div className='flex items-center'>
                <div className='w-2/3'>
                  {paragraphs.slice(0, visibleParagraphs).map((paragraph, index) => (
                    <p key={paragraph} className='fadeIn text-base !leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg md:text-xl' style={{ textAlign: 'left' }}>
                      {paragraph}
                    </p>
                  ))}
                </div>
                <div className=" w-1/2">
                  <div className='ml-auto flex items-center justify-center backgroundimg' >
                    {paragraphs.slice(0, visibleParagraphs).map((paragraph, index) => (
                      <Image
                        key={index}
                        className='animate-wiggle fadeOut'
                        src={images[visibleImage]}
                        alt="author"
                        width={100}
                        height={100}
                        style={{ display: index === visibleImage ? 'block' : 'none' }}
                      />
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
