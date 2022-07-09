import React from 'react';
import { Route, Routes } from 'react-router-dom';

import SettingsNav from './SettingsNav';
import General from './panel/General';
import Content from './panel/Content';
import Languages from './panel/Languages';

const Settings = () => {

    return (
        <>
            <SettingsNav />
            <Routes>
                <Route path="/" element={<General />} />
                <Route path="content" element={<Content />} />
                <Route path="language" element={<Languages />} />
            </Routes>
        </>
    );
};

export default Settings;
