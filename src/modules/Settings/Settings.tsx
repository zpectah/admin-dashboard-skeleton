import React from 'react';
import { Route, Routes } from 'react-router-dom';

import SettingsNav from './SettingsNav';
import SettingsGeneralForm from './panel/SettingsGeneralForm';
import SettingsContentForm from './panel/SettingsContentForm';
import SettingsLanguagesForm from './panel/SettingsLanguagesForm';

const Settings = () => {

    return (
        <>
            <SettingsNav />
            <Routes>
                <Route path="/" element={<SettingsGeneralForm />} />
                <Route path="content" element={<SettingsContentForm />} />
                <Route path="language" element={<SettingsLanguagesForm />} />
            </Routes>
        </>
    );
};

export default Settings;
