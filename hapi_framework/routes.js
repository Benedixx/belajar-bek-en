const routes = [
    {
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return 'Homepage';
        },
    },
    {
        method: `*`,
        path: `/`,
        handler: (request, h) => `BAD REQUEST: ${request.method} ${request.url}`
    },
    {
        method: 'GET',
        path: '/about',
        handler: (request, h) => {
            return 'About page';
        },
    },
    {
        method: `*`,
        path: `/about`,
        handler: (request, h) => `BAD REQUEST: ${request.method} ${request.url}`
    },
    {
        method: `*`,
        path: `/{any*}`,
        handler: (request, h) => `BAD REQUEST: ${request.method} ${request.url}`
    },
    {
        method: 'GET',
        path: '/hello/{name?}',
        handler: (request, h) => {
            const {name = 'stranger'} = request.params;
            const {lang} = request.query;
            if(lang === 'es') {
                return `Hola, ${name}!`;
            } else if(lang === 'fr') {
                return `Bonjour, ${name}!`;
            } else {
                return `Hello, ${name}!`;
            }
        },
    }, 
];

module.exports = routes;
