'use client';

import Payment from './payment';
import SectionTitle from '../Common/SectionTitle';
import Details from './details';

const Pricing = () => {

  return (
    <div className="flex flex-col items-center p-8 w-full">
      <SectionTitle
        title="Flexible Payment, Tailored to You"
        paragraph="Pay the amount that suits you best and start enjoying our service right away."
        center
        width="100%"
        mb="30px"
      />
      <Payment />
      <Details />
    </div>
  );
};

export default Pricing;
