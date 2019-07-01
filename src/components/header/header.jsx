import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';

import SideDrawer from './SideDrawer';

export class Header extends Component {


    state = {
        right: false,
        headerShow: false
      }
    


    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        if(window.scrollY>0){
            this.setState({
                headerShow:true
            })
        }else{
            this.setState({
                headerShow:false
            })
        }
    }

    toggleDrawer = (side, open) => () => {
        this.setState({
          [side]: open,
        });
    }

    render() {
        return (
            <AppBar
                position = "fixed"
                style = {{
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
                        onClick={this.toggleDrawer('right', true)}
                    >
                        
                        <MenuIcon/>
                    </IconButton>

                    <SideDrawer
                        open={this.state.right}
                        onClose={(value)=> this.toggleDrawer("right", value)}
                    />
                </Toolbar>
            </AppBar>
        )
    }
}
