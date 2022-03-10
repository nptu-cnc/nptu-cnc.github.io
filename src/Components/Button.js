import React from 'react';
import { styled } from '@mui/system';
import Button from '@mui/material/Button';

const StyledButton = styled(Button)({
    /*color: 'linear-gradient(45deg, #007A9D 30%, #008cb3 90%)',*/
    border: 0,
    backgroundColor: 'red',
    borderRadius: 5,
    boxShadow: '0 3px 5px 2px rgba(107, 164, 255, .2)',
    height: 36,
    padding: '0 30px',
});

export default function Btn(props) {
    const {
        className,
        children,
        ...rest
    } = props;

    return <StyledButton variant="contained" color="primary" {...rest}>{children}</StyledButton>;
}