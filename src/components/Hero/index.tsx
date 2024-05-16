'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import './index.css';

const Hero = () => {
  const paragraphs = [
    {
      description: "Encapsulate your service into a callgent,",
      img: "/images/hero/bg1.png",
    },
    {
      description:
        "Now it can talk to a person in email or slack channels, or be invoked through code libs or restAPIs, ..",
      img: "/images/hero/bg2.png",
    },
    {
      description:
        "The callgent translates all these requests into executable invocations, and sends them to your API service, or even slack users to respond.",
      img: "/images/hero/bg3.png",
    },
    {
      description:
        "Callgent's vision, is to break the silos among all systems and users!",
      img: "/images/hero/bg4.png",
    },
  ];
  const TitleRef = useRef(null);
  const lastScrollPosition = useRef(0);
  const [isTitleSticky, setIsTitleSticky] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const cardContainers = document.querySelectorAll(".Container");
    const firstCardHeight = cardContainers[0].clientHeight;
    const currentItem = scrollPosition / firstCardHeight;
    const currentCardIndex = Math.floor(currentItem);
    const deltaY = scrollPosition - (lastScrollPosition.current || 0);
    lastScrollPosition.current = scrollPosition;
    if (scrollPosition >= paragraphs.length * firstCardHeight - 150 && deltaY > 0) {
      TitleRef.current.classList.remove('sticky', 'top-[90px]');
      TitleRef.current.classList.add('absolute');
    } else if (scrollPosition <= paragraphs.length * firstCardHeight && deltaY < 0) {
      TitleRef.current.classList.remove('absolute');
      TitleRef.current.classList.add('sticky', 'top-[90px]');
    }

    if (currentCardIndex >= paragraphs.length || currentCardIndex < 0) {
      return;
    }
    const lastCart: any = cardContainers[currentCardIndex - 1];
    const currentCard: any = cardContainers[currentCardIndex];
    const nextCard: any = cardContainers[currentCardIndex + 1];
    const scale = 1 - (currentItem - currentCardIndex);
    const images = document.querySelectorAll(".cartImg");
    const currentImage = images[currentCardIndex];
    if (scale > 0.92 && deltaY > 0) {
      lastCart && lastCart.classList.add('fade-out');
      lastCart && currentCard.classList.remove('fadeInImg');
      currentCard.style.transform = `scale(${scale.toFixed(3)})`;
    } else if (deltaY < 0) {
      nextCard && currentCard.classList.add('fadeInImg');
      nextCard && currentCard.addEventListener('animationend', () => {
        currentImage.classList.add('animate-wiggle');
      });
      nextCard && currentCard.classList.add('fadeIn');
      currentCard.style.transform = `scale(1)`;
    } else if (scale < 0.92 && deltaY > 0) {
      currentCard.classList.remove('fadeIn', 'fade-out');
      currentCard.style.transform = `scale(0.92)`;
    }
  };

  return (
    <section
      id="home"
      className="z-10 bg-white pb-6 pt-[150px] dark:bg-gray-dark md:pb-[120px]  xl:pb-[120px]  2xl:pb-[200px] "
    >
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="relative mx-auto max-w-[70vw] text-center">
              <h1
                ref={TitleRef}
                className={` sticky top-[90px] text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight ${isTitleSticky ? 'sticky' : ''}`}
              >
                Service as a <span className='text'>Call</span>able A<span className='text'>gent</span>
              </h1>
              <section id="content">
                {paragraphs.map((item, index) => (
                  <div className="Container top-[180px] mt-12 py-4 xl:py-6 2xl:py-8 fadeIn px-4 border dark:border-slate-600 rounded-xl flex-col xl:flex-row flex justify-center bg-white dark:bg-gray-dark" key={index}>
                    <div className='flex mb-4 items-center  text-base md:text-lg xl:text-xl 2xl:text-4xl'>{item.description}</div>
                    <img className='cartImg w-[90vw] animate-wiggle md:w-[45vw] xl:w-[40vw]' src={item.img} alt="about-image" />
                  </div>
                ))}
              </section>
              <div className="flex mt-7 flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                <Link
                  href={process.env.NEXT_PUBLIC_GETTING_STARTED_PATH}
                  className="rounded-sm bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                >
                  🔥 Try it Now
                </Link>
                <Link
                  href="https://github.com/Callgent/callgent-api"
                  className="inline-block rounded-sm bg-black px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-black/90 dark:bg-white/10 dark:text-white dark:hover:bg-white/5"
                >
                  Star on GitHub
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute right-0 top-0 z-[-1] opacity-30 lg:opacity-100">
        <Image
          sizes="(max-width: 640px) 100vw, 50vw"
          src="/images/hero/left.svg"
          alt="about-image"
          fill
        />
      </div>
      <div className="absolute bottom-0 left-0 z-[-1] opacity-30 lg:opacity-100">
        <Image
          sizes="(max-width: 640px) 100vw, 50vw"
          src="/images/hero/right.svg"
          alt="about-image"
          fill
          className="mx-auto max-w-full drop-shadow-three dark:hidden dark:drop-shadow-none lg:mr-0"
        />
      </div>
    </section>
  );
};

export default Hero;
