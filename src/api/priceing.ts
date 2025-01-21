import axios from '@/util/axios';

export const createPaymentSession = async (amount: number, currency: string) => {
    return await axios.post("/api/billing/payment", {
        amount,
        currency
    });
};

export const getPaymentDetails = async () => {
    return await axios.post("/api/billing/details");
};
