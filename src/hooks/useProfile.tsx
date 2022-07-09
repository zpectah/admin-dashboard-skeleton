import { profileEntityProps } from 'types';

const useProfile = () => {

    const exampleEntity: profileEntityProps = {
        id: 657,
        name_first: 'John',
        name_last: 'Doe',
        email: 'john.doe@domain.com',
        avatar: null,
    };

    return {
        entity: exampleEntity,
        logOut: () => {
            window.location.href = '/login#logoutSuccess';
        },
        updateEntity: (data: profileEntityProps) => {
            console.log('Update entity handler ...', data);
        }
    };
};

export default useProfile;
