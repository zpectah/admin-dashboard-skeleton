import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { storeProps } from 'types';
import { addAnnouncement, removeAnnouncement } from '../store/actions';

const useAnnouncementBanner = () => {
    const { announcementBanner } = useSelector((store: storeProps) => store);
    const dispatch = useDispatch();

    return {
        banner: announcementBanner,
        addBanner: (node: React.ReactNode) => dispatch(addAnnouncement(node)),
        removeBanner: () => dispatch(removeAnnouncement()),
    };
};

export default useAnnouncementBanner;
