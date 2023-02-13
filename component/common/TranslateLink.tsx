import React from 'react'
import { useRouter } from 'next/router';
import { i18n } from 'next-i18next';

export const TranslateLink = ({ hideFlag = false, text, nextLocale }) => {
    const router = useRouter();
    return (
        <a href='' onClick={(e) => {
            e.preventDefault();
            const nextLocale = router.locale === 'es' ? 'en' : 'es'
            const nextHREF = `/${nextLocale}${router.asPath}`;
            i18n.changeLanguage(nextLocale);
            router.locale = nextLocale;
            document.location.href = nextHREF;
        }}>
            <span className='link-icon' />
            <span className='link-txt'>
                <span className='link-ext' />
                <span className='txt text-white font-weight-bold'>
                    {text}
                    {
                        !hideFlag &&
                        <img src={`/assets/img/locales/${nextLocale}.svg`} style={{ marginLeft: '10px' }} width="20px" />
                    }
                </span>
            </span>
        </a>
    )
}


// <li>
//     <a href="/contact-us">
//         <span className="link-icon"></span>
//         <span className="link-txt">
//             <span className="link-ext"></span>
//             <span className="txt">
//                 {this.props.t('menu_contact')}
//             </span>
//         </span>
//     </a>
// </li>