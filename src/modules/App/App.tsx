import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

import { storeProps } from 'types';
import { light, dark } from '../../styles/theme';

import { Toasts } from '../Toasts';
import ErrorPage from '../../views/ErrorPage';
import DashboardPage from '../../views/DashboardPage';
import LoginPage from '../../views/LoginPage';
import LostPasswordPage from '../../views/LostPasswordPage';
import RegistrationPage from '../../views/RegistrationPage';
import SettingsPage from '../../views/SettingsPage';
import ProfilePage from '../../views/ProfilePage';
import PostsPage from '../../views/PostsPage';
import UsersPage from '../../views/UsersPage';

const App = () => {
    const { theme } = useSelector((store: storeProps) => store);
    const currentTheme = theme === 'dark' ? dark : light;

    return (
        <ThemeProvider theme={currentTheme}>
            <CssBaseline />
            <BrowserRouter>
                <Routes>
                    <Route path="login" element={<LoginPage />} />
                    <Route path="lost-password" element={<LostPasswordPage />} />
                    <Route path="registration" element={<RegistrationPage />} />
                    <Route path="profile" element={<ProfilePage />} />
                    <Route path="/" element={<DashboardPage />} />
                    <Route path="posts/*" element={<PostsPage />} />
                    <Route path="users/*" element={<UsersPage />} />
                    <Route path="settings/*" element={<SettingsPage />} />
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
            </BrowserRouter>
            <Toasts />
        </ThemeProvider>
    );
};

export default App;
