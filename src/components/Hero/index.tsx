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
    if (scrollPosition >= paragraphs.length * firstCardHeight && deltaY > 0) {
      TitleRef.current.classList.remove('sticky', 'top-[90px]');
    } else if (scrollPosition <= paragraphs.length * firstCardHeight && deltaY < 0) {
      TitleRef.current.classList.add('sticky', 'top-[90px]');
    }

    if (currentCardIndex >= paragraphs.length || currentCardIndex < 0) { return; }

    const lastCard: any = cardContainers[currentCardIndex - 1];
    const currentCard: any = cardContainers[currentCardIndex];
    const nextCard: any = cardContainers[currentCardIndex + 1];
    const scale = 1 - (currentItem - currentCardIndex);
    const images = document.querySelectorAll(".cartImg");
    const currentImage = images[currentCardIndex];
    const currentCardTop = cardContainers[3].getBoundingClientRect().top;
    if (currentCardTop <= 270 && currentCardTop >= 250 && deltaY > 0) {
      lastCard.classList.add('fade-out');
      currentCard.classList.remove('fadeInImg');
      return null;
    } else if (currentCardTop >= 250 && currentCardTop <= 270 && deltaY < 0) {
      lastCard.classList.add('fadeInImg');
      lastCard.addEventListener('animationend', () => {
        currentImage.classList.add('animate-wiggle');
      });
      lastCard.classList.add('fadeIn');
      lastCard.style.transform = `scale(1)`;
      return null;
    }
    if (scale > 0.8 && deltaY > 0 && lastCard && nextCard) {
      lastCard.classList.add('fade-out');
      currentCard.classList.remove('fadeInImg');
    } else if (scale < 0.8 && deltaY > 0) {
      currentCard.classList.remove('fadeIn', 'fade-out');
    } else if (deltaY < 0 && nextCard) {
      currentCard.classList.add('fadeInImg');
      currentCard.addEventListener('animationend', () => {
        currentImage.classList.add('animate-wiggle');
      });
      currentCard.classList.add('fadeIn');
      currentCard.style.transform = `scale(1)`;
    }
  };

  return (
    <section
      id="home"
      className="z-10 bg-white pb-6 pt-[150px] dark:bg-gray-dark md:pb-[120px]  xl:pb-[120px]  2xl:pb-[200px]">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="relative mx-auto md:max-w-[90vw] lg:max-w-[70vw] 2xl:max-w-[60vw] text-center">
              <h2 ref={TitleRef}
                className={`sticky top-[90px] text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold leading-tight text-black dark:text-white sm:leading-tight  md:leading-tight}`}>
                Service as a <span className='text'>Call</span>able AI A<span className='text'>gent</span>
              </h2>
              <section id="content" className="md:pt-14">
                {paragraphs.map((item, index) => (
                  <div className="Container top-[180px] mt-12 py-4 xl:py-6 2xl:py-8 fadeIn px-4 border dark:border-slate-600 rounded-xl flex-col md:flex-row flex justify-center bg-white dark:bg-gray-dark" key={index}>
                    <h2 className='flex mb-4 items-center  text-base md:text-lg xl:text-xl 2xl:text-2xl'>{item.description}</h2>
                    <img className='cartImg w-[90vw] animate-wiggle md:w-[50vw] lg:w-[45vw] xl:w-[40vw]' src={item.img} alt="about-image" />
                  </div>
                ))}
              </section>
              <div className="flex pt-7 md:pt-14 xl:28 flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                <Link
                  href={process.env.NEXT_PUBLIC_DOCUMENTATION_URL + '/docs/quick-start/register-an-account'}
                  className="rounded-sm bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                >
                  🔥 Try it Now
                </Link>
                <Link
                  href="https://github.com/Callgent/callgent-api"
                  target="_blank"
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
