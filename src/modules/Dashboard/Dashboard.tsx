import React, { useState } from 'react';
import { Stack } from '@mui/material';

import { useToasts } from 'hooks'; // DEMO
import { Dialog, Button } from 'components'

const Dashboard = () => {
    const [ dialogOpen, setDialogOpen ] = useState(false);

    const { createSuccessToast, createErrorToast } = useToasts();

    return (
        <>
            Dashboard
            <br />

            <Stack
                spacing={2}
                direction="row"
            >

                <Button
                    primary
                    onClick={(e) => {
                        e.preventDefault();
                        createSuccessToast({
                            title: 'Toast title',
                            content: 'Toast message content ...',
                        });
                    }}
                >
                    Add success toast
                </Button>

                <Button
                    warning
                    onClick={(e) => {
                        e.preventDefault();
                        createErrorToast({
                            title: 'Toast title',
                            content: 'Toast message content ...',
                        });
                    }}
                >
                    Add error toast
                </Button>

                <Button
                    secondary
                    onClick={() => setDialogOpen(true)}
                >
                    Open dialog
                </Button>

            </Stack>

            <Dialog
                open={dialogOpen}
                onClose={() => setDialogOpen(false)}
            >
                <p>
                    Lorem fringilla fusce, curabitur laoreet et integer a lacinia nulla sollicitudin, consequat suscipit porta tellus. Congue nulla tristique, neque neque quam porta integer mauris venenatis, nec commodo nunc venenatis lorem ipsum. Imperdiet dignissim, mauris maximus tempus a molestie lacinia vestibulum convallis, donec fusce ante rhoncus nisi nunc. Sem lobortis sem, sed mattis elit aliquam libero pharetra mollis, sit amet mollis ut nisl mauris nulla. Vitae massa vehicula, cursus id ut id ante nulla interdum dolor quis commodo, enim commodo pulvinar luctus. Euismod justo, nunc ut enim et eget ullamcorper sem lobortis aliquet in donec libero vitae, sapien fusce gravida sed vitae suscipit.
                </p>
            </Dialog>
        </>
    );
};

export default Dashboard;
