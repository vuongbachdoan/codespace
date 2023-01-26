import Home from './icon-home.svg';
import Forum from './icon-forum.svg';
import Upload from './icon-upload.svg';
import Component from './icon-component.svg';
import React from 'react';

export const Icons = {
    home: {
        label: 'Home',
        icon: React.createElement(Home),
    },
    forum: {
        label: 'Forum',
        icon: React.createElement(Forum),
    },
    upload: {
        label: 'Upload',
        icon: React.createElement(Upload),
    },
    component: {
        label: 'Components',
        icon: React.createElement(Component),
    },
}