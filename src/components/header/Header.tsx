import React from 'react';
import './Header.scss';
import Button from '@material-ui/core/Button';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

export class Header extends React.Component {
    render() {
        return (
            <AppBar position="relative">
                <Toolbar>
                    <Typography variant="h6" color="inherit" noWrap>
                        What's Next
                    </Typography>
                </Toolbar>
            </AppBar>
        );
    }
}