import { createInstance } from 'i18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import { initReactI18next } from 'react-i18next/initReactI18next';
import { LanguageOption } from '@/types/menu';
import { getOptions } from './settings';

const initI18next = async (lng: string, ns: string) => {
  const i18nInstance = createInstance();
  await i18nInstance
    .use(initReactI18next)
    .use(resourcesToBackend((language: string, namespace: string) => import(`/public/locales/${language}/${namespace}.json`)))
    .init(getOptions(lng, ns));
  return i18nInstance;
};

export async function Translation(lng: string, ns: string,) {
  const i18nextInstance = await initI18next(lng, ns);
  return {
    t: i18nextInstance.getFixedT(lng, Array.isArray(ns) ? ns[0] : ns,),
    i18n: i18nextInstance
  };
}

// {T('en', 'notFound')}
export const T = async (lang: string, test: string) => {
  const { t } = await Translation(lang, 'common');
  return t(test);
};


export const languageOptions: LanguageOption[] = [
  { lng: 'en', label: 'English' },
  { lng: 'cn', label: '中文' },
  { lng: 'it', label: 'Italiano' },
];
