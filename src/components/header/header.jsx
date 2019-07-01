import React, {Component} from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import MenuIcon from '@material-ui/icons/Menu'
import IconButton from '@material-ui/core/IconButton'

import {SideDrawer} from '../side-drawer'

export class Header extends Component {

    state = {
        drawerVisible: false,
        headerShow: false
    };

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll)
    }

    handleScroll = () => {
        this.setState(() => ({
            headerShow: window.scrollY > 0
        }))

    };

    toggleDrawer = () => {
        this.setState((currentState) => ({
                drawerVisible: !currentState.drawerVisible
            })
        );
    };

    render() {
        return (
            <AppBar
                position="fixed"
                style={{
                    backgroundColor: this.state.headerShow ? '#2f2f2f' : 'transparent',
                    boxShadow: 'none',
                    padding: '10px 0px'
                }}
            >
                <Toolbar>
                    <div className="header_logo">
                        <div className="font_righteous header_logo_venue">The Venue</div>
                        <div className="header_logo_title">Musical Events</div>
                    </div>
                    <IconButton
                        aria-label="Menu"
                        color="inherit"
                        onClick={this.toggleDrawer}
                    >

                        <MenuIcon />
                    </IconButton>

                    <SideDrawer
                        drawerVisible={this.state.drawerVisible}
                        onClose={this.toggleDrawer}
                    />
                </Toolbar>
            </AppBar>
        )
    }
}
