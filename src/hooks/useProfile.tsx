import { useNavigate } from 'react-router-dom';

import { ROUTES } from 'config';
import { UsersItemProps } from 'types';

const useProfile = () => {
    const navigate = useNavigate();
    const entity: UsersItemProps = {
        id: 657,
        name_first: 'John',
        name_last: 'Doe',
        email: 'john.doe@domain.com',
        avatar: null,
    };

    return {
        entity,
        logIn: () => {
            /* TODO: login handler ... otherwise redirect must be as callback of this action */
            navigate(`${ROUTES.Dashboard.match}#loginSuccess`);
        },
        logOut: () => navigate(`${ROUTES.Login.match}#logoutSuccess`),
        updateEntity: (data: UsersItemProps) => {
            console.log('Update entity handler ...', data);
        }
    };
};

export default useProfile;
