import Load from './load.js';

const Elements = {
    projects: document.querySelector('#Projects'),
    Tools: document.querySelector('#Tools')
};

Load.projects(Elements.projects);
Load.Tools(Elements.Tools);