'use client';
import { useState } from 'react';
import SectionTitle from '../Common/SectionTitle';
import OfferList from './OfferList';
import PricingBox from './PricingBox';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(false);
  const { userData } = useSelector(
    (state: RootState) => state.user
  );
  const email = userData?.email ? '?prefilled_email=' + userData?.email : '';
  return (
    <>
      <SectionTitle
        title="Simple and Affordable Pricing"
        paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
        center
        width="665px"
      />
      <div className="w-full">
        <div className="mb-8 flex justify-center items-end md:mb-12 lg:mb-16">
          <div className='flex'>
            <div
              onClick={() => setIsMonthly(false)}
              className={`${isMonthly
                ? 'text-dark dark:text-[#747d94] border dark:border-slate-700 pr-6 -mr-4 '
                : 'text-primary dark:text-white pointer-events-non border dark:border-slate-400 border-blue-700 bg-blue-50 z-10 dark:bg-gray-dark'
                } p-2 cursor-pointer text-sm font-semibold text-center rounded-md `}
            >
              Yearly
              <svg className='inline-block mx-2' width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M3 2v4.586l7 7L14.586 9l-7-7H3zM2 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 2 6.586V2z" />
                <path d="M5.5 5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm0 1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM1 7.086a1 1 0 0 0 .293.707L8.75 15.25l-.043.043a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 0 7.586V3a1 1 0 0 1 1-1v5.086z" />
              </svg>
              Get ~2 months free
            </div>
            <div
              onClick={() => setIsMonthly(true)}
              className={`${isMonthly
                ? 'pointer-events-none text-primary border dark:border-slate-400 border-blue-700 bg-blue-50 dark:text-white dark:bg-gray-dark'
                : 'text-dark pl-6 -ml-4 dark:border-slate-700 dark:text-[#747d94]'
                } p-2 cursor-pointer text-sm font-semibold rounded-md border`}
            >
              Monthly
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
        <PricingBox
          packageName="Lite"
          price=' free '
          duration='mo'
          subtitle="Basic package for small-scale projects."
          title="Start Lite Trial"
          priceUrl=''
        >
          <OfferList text="Create 2 bots" status="active" />
          <OfferList text="limited to 50 tasks/day" status="active" />
          <OfferList text="Limited to 50 tasks per bot per day" status="active" />
          <OfferList text="Basic email support" status="active" />
          <OfferList text="Free Lifetime Updates" status="active" />
        </PricingBox>
        <PricingBox
          packageName="Basic"
          price={isMonthly ? ' 18 ' : ' 15 '}
          duration={'mo'}
          subtitle="Standard package for growing businesses."
          title="Start Basic Trial"
          priceUrl={isMonthly ? "https://buy.stripe.com/5kA02r5766Wd1zi289" + email : 'https://buy.stripe.com/eVa16v8jieoFfq8fZ5' + email}
        >
          <OfferList text="Create 5 bots" status="active" />
          <OfferList text="each with 200 tasks/day" status="active" />
          <OfferList text="Commercial use allowed" status="active" />
          <OfferList text="Priority email support" status="active" />
          <OfferList text="during your subscription period" status="active" />
        </PricingBox>
        <PricingBox
          packageName="Plus"
          price={isMonthly ? ' 28 ' : ' 23 '}
          duration={'mo'}
          subtitle="Premium package for high-volume usage."
          title="Start Plus Trial"
          priceUrl={isMonthly ? "https://buy.stripe.com/9AQg1p2YY2FXa5O7su" + email : 'https://buy.stripe.com/dR69D16baa8pguccMU' + email}
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
          duration={'mo'}
          subtitle="Customize your plan: contact sales for details."
          title="Start Custom Trial"
          priceUrl={'https://github.com/Callgent/callgent-api'}
        >
          <OfferList text="Customize number of bots" status="active" />
          <OfferList text="Customize tasks per bot per day" status="active" />
          <OfferList text="Customize commercial use terms" status="active" />
          <OfferList text="Customize support options" status="active" />
          <OfferList text="during your subscription period" status="active" />
        </PricingBox>
      </div>
    </>
  );
};

export default Pricing;
