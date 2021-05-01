import React from 'react'
import { useRouter } from 'next/router';
import { i18n } from 'next-i18next';

export const TranslateLink = ({ text, nextLocale }) => {
    const router = useRouter();
    return (
        <div>
            <a className="text-white" style={{backgroundColor: "#2D3252", cursor: 'pointer' }} onClick={(e) => {
                e.preventDefault();
                const nextLocale = router.locale === 'es' ? 'en' : 'es'
                const nextHREF = `/${nextLocale}${router.asPath}`;
                i18n.changeLanguage(nextLocale);
                router.locale = nextLocale;
                document.location.href = nextHREF;
            }}>
                <img src={`/assets/img/locales/${nextLocale}.svg`} style={{marginRight: '10px'}} width="20px" />
                {text}
            </a>
        </div>
    )
}
