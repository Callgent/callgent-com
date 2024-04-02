'use client';
import { useState } from 'react';
import SectionTitle from '../Common/SectionTitle';
import OfferList from './OfferList';
import PricingBox from './PricingBox';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);
  const { userData } = useSelector(
    (state: RootState) => state.user
  );
  const email = userData?.email ? '?prefilled_email=' + userData?.email : '';
  return (
    <section id="pricing" className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Simple and Affordable Pricing"
          paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
          center
          width="665px"
        />

        <div className="w-full">
          <div className="mb-8 flex justify-center md:mb-12 lg:mb-16">
            <span
              onClick={() => setIsMonthly(true)}
              className={`${isMonthly
                ? 'pointer-events-none text-primary'
                : 'text-dark dark:text-white'
                } mr-4 cursor-pointer text-base font-semibold`}
            >
              Monthly
            </span>
            <div
              onClick={() => setIsMonthly(!isMonthly)}
              className="flex cursor-pointer items-center"
            >
              <div className="relative">
                <div className="h-5 w-14 rounded-full bg-[#1D2144] shadow-inner"></div>
                <div
                  className={`${isMonthly ? '' : 'translate-x-full'
                    } shadow-switch-1 absolute left-0 top-[-4px] flex h-7 w-7 items-center justify-center rounded-full bg-primary transition`}
                >
                  <span className="active h-4 w-4 rounded-full bg-white"></span>
                </div>
              </div>
            </div>
            <span
              onClick={() => setIsMonthly(false)}
              className={`${isMonthly
                ? 'text-dark dark:text-white'
                : 'pointer-events-none text-primary'
                } ml-4 cursor-pointer text-base font-semibold`}
            >
              Yearly
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          <PricingBox
            packageName="Lite"
            price={isMonthly ? ' 0 ' : '0'}
            duration={isMonthly ? 'mo' : 'yr'}
            subtitle="Basic package for small-scale projects."
            title="Start Lite Trial"
            priceUrl="/"
          >
            <OfferList text="Create 2 bots" status="active" />
            <OfferList text="limited to 50 tasks/day" status="active" />
            <OfferList text="Limited to 50 tasks per bot per day" status="active" />
            <OfferList text="Basic email support" status="active" />
            <OfferList text="Free Lifetime Updates" status="active" />
          </PricingBox>
          <PricingBox
            packageName="Basic"
            price={isMonthly ? ' 18 ' : '180'}
            duration={isMonthly ? 'mo' : 'yr'}
            subtitle="Standard package for growing businesses."
            title="Start Basic Trial"
            priceUrl={isMonthly ? "https://buy.stripe.com/5kA02r5766Wd1zi289" + email : 'https://buy.stripe.com/4gw3eD7fe2FX1zi28d' + email}
          >
            <OfferList text="Create 5 bots" status="active" />
            <OfferList text="each with 200 tasks/day" status="active" />
            <OfferList text="Commercial use allowed" status="active" />
            <OfferList text="Priority email support" status="active" />
            <OfferList text="during your subscription period" status="active" />
          </PricingBox>
          <PricingBox
            packageName="Plus"
            price={isMonthly ? ' 28 ' : '280'}
            duration={isMonthly ? 'mo' : 'yr'}
            subtitle="Premium package for high-volume usage."
            title="Start Plus Trial"
            priceUrl={isMonthly ? "https://buy.stripe.com/9AQg1p2YY2FXa5O7su" + email : 'https://buy.stripe.com/6oE02rbvucgx7XG6os' + email}
          >
            <OfferList text="Create 10 bots" status="active" />
            <OfferList text="each with 300 tasks/day" status="active" />
            <OfferList text="Commercial use allowed" status="active" />
            <OfferList text="24/7 priority email support" status="active" />
            <OfferList text="during your subscription period" status="active" />
          </PricingBox>
          <PricingBox
            packageName="custom plan"
            price={' ? '}
            duration={isMonthly ? 'mo' : 'yr'}
            subtitle="Customize your plan: contact sales for details."
            title="Start Custom Trial"
            priceUrl={'https://github.com/Botlet-IO/botlet-api'}
          >
            <OfferList text="Customize number of bots" status="active" />
            <OfferList text="Customize tasks per bot per day" status="active" />
            <OfferList text="Customize commercial use terms" status="active" />
            <OfferList text="Customize support options" status="active" />
            <OfferList text="during your subscription period" status="active" />
          </PricingBox>

        </div>
      </div>
      <div className="absolute bottom-0 left-0 z-[-1]">
        <svg
          width="239"
          height="601"
          viewBox="0 0 239 601"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="-184.451"
            y="600.973"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -184.451 600.973)"
            fill="url(#paint0_linear_93:235)"
          />
          <rect
            opacity="0.3"
            x="-188.201"
            y="385.272"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -188.201 385.272)"
            fill="url(#paint1_linear_93:235)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_93:235"
              x1="-90.1184"
              y1="420.414"
              x2="-90.1184"
              y2="1131.65"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_93:235"
              x1="-159.441"
              y1="204.714"
              x2="-159.441"
              y2="915.952"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Pricing;
