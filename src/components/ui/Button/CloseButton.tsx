import React from 'react';
import { useTranslation } from 'react-i18next';
import { SvgIconProps } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import IconButton, { UiIconButtonProps } from './IconButton';

type UiCloseButtonBaseProps = {
    iconProps?: Partial<SvgIconProps>
};
export type UiCloseButtonProps = UiCloseButtonBaseProps & Partial<UiIconButtonProps>;

const UiCloseButton = (props: UiCloseButtonProps) => {
    const {
        iconProps,
        ...rest
    } = props;

    const { t } = useTranslation('common');

    return (
        <IconButton
            title={t('btn.close')}
            aria-label={t('btn.close')}
            {...rest}
        >
            <CloseIcon
                {...iconProps}
            />
        </IconButton>
    );
};

export default UiCloseButton;
