'use client';
import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import './index.css';

const Hero = () => {
  const paragraphs = [
    {
      description: "Encapsulate your service into a callgent",
      img: "/images/hero/bg1.png",
    },
    {
      description:
        "Now you can chat to it by email or slack channels, or invoke it through code libs or restAPIs, ..",
      img: "/images/hero/bg2.png",
    },
    {
      description:
        "The callgent translates the requests, then sends them to your service, or slack users to respond.",
      img: "/images/hero/bg3.png",
    },
    {
      description:
        "Callgent aims to break the silos among all systems and users through AI Agent!",
      img: "/images/hero/bg4.png",
    },
  ];
  const TitleRef = useRef(null);
  const lastScrollPosition = useRef(0);

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
    if (scrollPosition >= paragraphs.length * firstCardHeight - 200 && deltaY > 0) {
      TitleRef.current.classList.remove('sticky', 'top-[90px]');
    } else if (scrollPosition <= paragraphs.length * firstCardHeight && deltaY < 0) {
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
    if (scale > 0.8 && deltaY > 0) {
      lastCart && lastCart.classList.add('fade-out');
      lastCart && currentCard.classList.remove('fadeInImg');
    } else if (deltaY < 0) {
      nextCard && currentCard.classList.add('fadeInImg');
      nextCard && currentCard.addEventListener('animationend', () => {
        currentImage.classList.add('animate-wiggle');
      });
      nextCard && currentCard.classList.add('fadeIn');
      currentCard.style.transform = `scale(1)`;
    } else if (scale < 0.8 && deltaY > 0) {
      currentCard.classList.remove('fadeIn', 'fade-out');
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
              <h2
                ref={TitleRef}
                className={` sticky top-[90px] text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight}`}
              >
                Service as a <span className='text'>Call</span>able A<span className='text'>gent</span>
              </h2>

              <section id="content" className="pt-14">
                {paragraphs.map((item, index) => (
                  <div className="Container top-[180px] mt-12 py-4 xl:py-6 2xl:py-8 fadeIn px-4 border dark:border-slate-600 rounded-xl flex-col xl:flex-row flex justify-center bg-white dark:bg-gray-dark" key={index}>
                    <h2 className='flex mb-4 items-center  text-base md:text-lg xl:text-xl 2xl:text-4xl'>{item.description}</h2>
                    <img className='cartImg w-[90vw] animate-wiggle md:w-[45vw] xl:w-[40vw]' src={item.img} alt="about-image" />
                  </div>
                ))}
              </section>
              <div className="flex pt-28 flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
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
