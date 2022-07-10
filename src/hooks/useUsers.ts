import { useDispatch, useSelector } from 'react-redux';

import { storeProps, UsersItemProps } from 'types';
import { loadUsers } from '../store/actions';

const useUsers = () => {
    const { Users } = useSelector((store: storeProps) => store);
    const dispatch = useDispatch();

    const loadHandler = () => {
        const users: UsersItemProps[] = [
            {
                id: 1,
                name_first: 'John',
                name_last: 'Doe',
                email: 'john.doe@domain.com',
                avatar: null,
            },
            {
                id: 2,
                name_first: 'Rick',
                name_last: 'Sanchez',
                email: 'smartestmanintheuniverse@wabadabalubdub.com',
                avatar: null,
            },
            {
                id: 3,
                name_first: 'Homer J.',
                name_last: 'Simpson',
                email: 'homer.simpson@sprinfield-pp.com',
                avatar: null,
            }
        ]; // TODO

        console.log('loadUsers', users);

        return dispatch(loadUsers(users));
    };

    return {
        Users,
        loadUsers: loadHandler,
        createUsers: (data: UsersItemProps) => {},
        updateUsers: (data: UsersItemProps) => {},
        deleteUsers: (data: UsersItemProps['id'][]) => {},
    };
};

export default useUsers;
