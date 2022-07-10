import React from 'react';

import {
    ControlledForm,
    ControlledFormRow,
    Button,
} from 'components';

type UsersDetailFormBaseProps = {
    onDrawerClose?: () => void;
};
export type UsersDetailFormProps = UsersDetailFormBaseProps;

const UsersDetailForm = (props: UsersDetailFormProps) => {
    const { onDrawerClose } = props;

    return (
        <ControlledForm
            name="UsersDetailForm"
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
                        UsersDetailForm
                        <br />

                    </>
                );
            }}
        />
    );
};

export default UsersDetailForm;
