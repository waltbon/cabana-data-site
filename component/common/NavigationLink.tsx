import React, { useEffect, useState } from 'react'

export const NavigationLink = ({ to, children, locale,
    className= ''
}) => {
    const [url, setUrl] = useState('')
    useEffect(() => {
        setUrl(`/${locale}${to}`);
        return () => {
        }
    }, []);

    return (
        <React.Fragment>
            <a className={className} style={{ cursor: 'pointer' }} href={url}>{children}</a>
        </React.Fragment>
    )
}
