/* eslint-disable no-unused-vars */
import { useState } from 'react';

interface UseSubmitFormResult {
    isSubmitting: boolean;
    error: string | null;
    handleSubmit: (submitFunction: () => Promise<void>) => void;
    setError?: (error: string | null) => void;
}

const useSubmitForm = (): UseSubmitFormResult => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setErrorState] = useState<string | null>(null);

    const handleSubmit = async (submitFunction: () => Promise<void>) => {
        setIsSubmitting(true);
        setErrorState(null);
        try {
            await submitFunction();
            setIsSubmitting(false);
        } catch (err: any) {
            setErrorState(err.message || 'An error occurred');
            setIsSubmitting(false);
        }
    };

    const setError = (error: string | null) => {
        setErrorState(error);
    };

    return {
        isSubmitting,
        error,
        handleSubmit,
        setError,
    };
};

export default useSubmitForm;
