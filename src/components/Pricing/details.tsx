'use client';

import { useEffect, useCallback, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getPaymentDetails } from '@/api/priceing';

// 格式化金额（例如：1000000 -> 1,000,000）
const formatAmount = (amount: number) => {
    if (!amount) { return '0.00'; }

    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format(amount / 1e9 / 100);
};

const Details = () => {
    const router = useRouter();
    const [detailList, setDetail] = useState([]);
    const [amount, setAmount] = useState(0);

    const paymentDetails = useCallback(async () => {
        try {
            const { data } = await getPaymentDetails();
            setDetail(data?.data);  // 假设支付明细存储在 `data.data` 中
            setAmount(data?.meta?.balance);  // 假设余额存储在 `data.meta.balance`
            console.log('Payment Details:', data);
        } catch (error) {
            if (error.data && error.data.statusCode === 401) {
                router.push('/signin');
            } else {
                console.error('An error occurred:', error.data);
            }
        }
    }, [router]);

    useEffect(() => {
        paymentDetails();
    }, [paymentDetails]);

    return (
        <div className='w-full'>
            <div className="w-full max-w-lg mb-6 text-center mx-auto">
                <h2 className="text-2xl font-semibold mb-2">Account Balance</h2>
                <p className="text-xl text-blue-500">{formatAmount(amount)}</p>
            </div>
            <div className="w-full">
                {detailList.length > 0 ? (
                    <table className="table-auto w-full border-collapse border-[1px] border-gray-500 rounded-lg">
                        <thead>
                            <tr>
                                <th className="py-2 px-4 text-left border-[1px] border-gray-500 rounded-tl-md">Type</th>
                                <th className="py-2 px-4 text-left border-[1px] border-gray-500">Amount</th>
                                <th className="py-2 px-4 text-left border-[1px] border-gray-500 rounded-tr-md">Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {detailList.map((item, index) => (
                                <tr key={index}>
                                    <td className="py-2 px-4 border-[1px] border-gray-500">{item.type}</td>
                                    <td className="py-2 px-4 border-[1px] border-gray-500">{formatAmount(item.amount)}</td>
                                    <td className="py-2 px-4 border-[1px] border-gray-500">
                                        {new Date(item.createdAt).toLocaleString('en-US', {
                                            year: 'numeric',
                                            month: '2-digit',
                                            day: '2-digit',
                                            hour: '2-digit',
                                            minute: '2-digit',
                                            second: '2-digit',
                                            hour12: true,
                                        })}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <div className='text-center'>No payment history available.</div>
                )}
            </div>
        </div>
    );
};

export default Details;
