import { Metadata } from 'next';
import Pricing from '@/components/Pricing/index';

export const metadata: Metadata = {
    title: 'Pricing Page',
    description: 'Explore our pricing plans and choose the one that suits you best.',
    // other metadata
};

const PricingPage = () => {
    return (
        <>
            <Pricing />
        </>
    );
};

export default PricingPage;
