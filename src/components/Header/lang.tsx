'use client';
import { usePathname, useRouter } from 'next/navigation';
import { languageOptions } from '@/app/lib/i18n';
import { getCookie, setCookie } from '@/util/cookie';
import { useEffect, useState } from 'react';
function SubmenuExample() {

    const [base, setBase] = useState('');
    useEffect(() => {
        const lang = getCookie('lang');
        setBase('/' + lang);
    }, []);
    const router = useRouter();
    const pathname = usePathname();

    const changeLang = (newBase: string) => {
        setCookie('lang', newBase);
        const path = '/' + newBase + pathname?.split(base)[1] || '';
        router.push(path);
    };

    return (
        <div className="group relative items-center px-5">
            <svg className="w-6 h-20 cursor-pointer" fill="currentColor" viewBox="0 0 16 16">
                <path d="M4.545 6.714 4.11 8H3l1.862-5h1.284L8 8H6.833l-.435-1.286H4.545zm1.634-.736L5.5 3.956h-.049l-.679 2.022H6.18z" />
                <path d="M0 2a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v3h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3H2a2 2 0 0 1-2-2V2zm2-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2zm7.138 9.995c.193.301.402.583.63.846-.748.575-1.673 1.001-2.768 1.292.178.217.451.635.555.867 1.125-.359 2.08-.844 2.886-1.494.777.665 1.739 1.165 2.93 1.472.133-.254.414-.673.629-.89-1.125-.253-2.057-.694-2.82-1.284.681-.747 1.222-1.651 1.621-2.757H14V8h-3v1.047h.765c-.318.844-.74 1.546-1.272 2.13a6.066 6.066 0 0 1-.415-.492 1.988 1.988 0 0 1-.94.31z" />
            </svg>
            <div className='submenu absolute -translate-x-1/3 top-full rounded-sm bg-white transition-[top] duration-300 group-hover:opacity-100 dark:bg-dark lg:invisible lg:absolute lg:top-[110%] lg:block lg:w-[130px] lg:p-4 lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full'>
                {languageOptions.map((submenuItem, submenuIndex) => (
                    <div
                        onClick={() => changeLang(submenuItem.lng)}
                        key={submenuIndex}
                        className="block cursor-pointer rounded py-2.5 pl-2.5 pr-5 text-sm text-dark hover:text-primary dark:text-white/50 dark:hover:text-white"
                    >
                        {submenuItem.label}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SubmenuExample;
