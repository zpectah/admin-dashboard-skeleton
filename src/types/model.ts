export type modelIdType = number | 'new';

export type UsersItemProps = {
    id: modelIdType,
    name_first: string,
    name_last: string,
    email: string,
    avatar: string | null,
};

export type PostsItemProps = {
    id: modelIdType,
    name: string,
};

