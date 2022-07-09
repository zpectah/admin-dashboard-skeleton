import React from 'react';

import { LANGUAGE } from 'config';
import { useLanguageToggle } from 'hooks';

const LanguageToggle = () => {
    const { language, toggle } = useLanguageToggle();

    return (
        <>
            {LANGUAGE.list.map((lng) => (
                <button
                    key={lng}
                    onClick={() => toggle(lng)}
                >
                    {lng}{language === lng && ' (current)'}
                </button>
            ))}
        </>
    );
};

export default LanguageToggle;
