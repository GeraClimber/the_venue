import React from 'react';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import {scroller} from 'react-scroll'

import {DRAWER_ELEMENTS} from './contants';

export const SideDrawer = ({drawerVisible, onClose}) => {

    const scrollToElement = (element) => {
        scroller.scrollTo(element, {
            duration: 1000,
            delay: 100,
            smooth: true,
            offset: -150
        });
        onClose();
    };

    console.log('drawerVisible', drawerVisible);
    return (
        <Drawer
            anchor="right"
            open={drawerVisible}
            onClose={onClose}
        >
            <List component="nav">
                {
                    DRAWER_ELEMENTS.map(element => (
                        <ListItem
                            button
                            onClick={() => scrollToElement(element.id)}
                            key={element.id}
                        >
                            {element.title}
                        </ListItem>
                    ))
                }
            </List>
        </Drawer>
    );
};
