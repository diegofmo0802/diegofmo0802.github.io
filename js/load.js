import WebApp from 'https://diegofmo0802.github.io/WebApp/main.js';

export default {
    projects: function(Elemento) {
        WebApp.Ajax.Consultar('/source/data/projects.json', 'GET').then((data) => {
            let pr = JSON.parse(data);
            let items = [];
            pr.forEach((P) => {
                items.push(WebApp.Elemento.Crear('tr', null, null, null, [
                    WebApp.Elemento.Crear('td', P.current_version, {class: 'PVersion'}),
                    WebApp.Elemento.Crear('td', null, null, null, [
                        WebApp.Elemento.Crear('a', P.name, {href: P.url})
                    ]),
                    WebApp.Elemento.Crear('td', P.description)
                ]));
            });
            window.X=Elemento
            Elemento.appendChild(WebApp.Elemento.Crear('table', null, null, null, [
                WebApp.Elemento.Crear('tr', null, null, null, [
                    WebApp.Elemento.Crear('th', 'Version', {class: 'PVersion'}),
                    WebApp.Elemento.Crear('th', 'Nombre'),
                    WebApp.Elemento.Crear('th', 'Descripción')
                ]), ...items
            ]));
        })
    }
}