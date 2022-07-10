import React from 'react';

import {
    ControlledForm,
    ControlledFormRow,
    Button,
} from 'components';

type PostsDetailFormBaseProps = {
    onDrawerClose?: () => void;
};
export type PostsDetailFormProps = PostsDetailFormBaseProps;

const PostsDetailForm = (props: PostsDetailFormProps) => {
    const { onDrawerClose } = props;

    return (
        <ControlledForm
            name="PostsDetailForm"
            renderActions={(form) => {

                return (
                    <>
                        <Button
                            secondary
                            onClick={onDrawerClose}
                        >
                            Cancel
                        </Button>
                        <Button
                            submit
                        >
                            Submit
                        </Button>
                    </>
                );
            }}
            render={(form) => {

                return (
                    <>
                        PostsDetailForm
                        <br />

                    </>
                );
            }}
        />
    );
};

export default PostsDetailForm;
