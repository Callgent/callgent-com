import { Metadata } from 'next';
import { useTranslation } from '@/app/lib/i18n/index';

export const metadata: Metadata = {
  title: 'Blog Details Page | Break the silos between Users & Systems',
  description: 'This is Blog Details Page for Botlet.IO',
  // other metadata
};
export default async function NotFoundPage({ params: { lng } }: { params: { lng: string } }) {
    const { t } = await useTranslation(lng, 'common');
    return (
        <div className="flex items-center justify-center h-screen">
            <div>
                <h3 className="text-4xl font-bold mb-4">{t('notFound')}</h3>
            </div>
        </div>
    );
}
