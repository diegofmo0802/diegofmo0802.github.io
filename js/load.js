import { Ajax, Elemento } from 'https://diegofmo0802.github.io/WebApp/Versiones/v2.0.0/WebApp.js';
export default {
    projects: function(Padre) {
        Ajax.Consultar('/source/data/projects.json', 'GET').then((data) => {
            let pr = JSON.parse(data);
            let items = [];
            pr.forEach((P) => {
                items.push(Elemento.Crear('tr', null, null, null, [
                    Elemento.Crear('td', P.current_version, {class: 'PVersion'}),
                    Elemento.Crear('td', null, null, null, [
                        Elemento.Crear('a', P.name, {href: P.url})
                    ]),
                    Elemento.Crear('td', P.description)
                ]));
            });
            Padre.appendChild(Elemento.Crear('table', null, null, null, [
                Elemento.Crear('tr', null, null, null, [
                    Elemento.Crear('th', 'Version', {class: 'PVersion'}),
                    Elemento.Crear('th', 'Nombre'),
                    Elemento.Crear('th', 'Descripción')
                ]), ...items
            ]));
        })
    }
}