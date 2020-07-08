// window.addEventListener("DOMContentLoaded", () => main());

    // function main() {
        // console.log('main launched', document.querySelector('header').innerHTML)

        /** @type {HTMLElement} */
        const header = document.querySelector('header')
        
        const intro = {
            firstName: 'Mohamed',
            lastName: 'Mourabit',
            profession: 'Developpeur web full stack',
            image: 'me.png',
            info: [
                { icon: 'mail', name: 'mohamed.mourabit@outlook.com' },
                { icon: 'web', name: 'https://mourabit-mohamed.firebaseapp.com' },
                { icon: 'linkedin', name: 'https://www.linkedin.com/in/mohamed-mourabit' },
                { icon: 'github', name: 'https://github.com/djm2x' },
                { icon: 'tel', name: '(+212) 6 71 26 54 78' },
                { icon: 'address', name: 'Hay maamoura-TEMARA' },
            ]
        };

        // header.innerHTML = `<p><span class="firstName">${intro.firstName}</span> <span class="lastName">${intro.lastName}</span></p>`;
        // header.innerHTML += `<p><span class="profession">${intro.profession}</span></p>`;
        // header.innerHTML += intro.info.map(e => e);
        // console.log(intro.info.map(e => e))
        const experience = [
            {
                date: '2017-10',
                title: 'Projet de conception et développement d’un site web de gestion des locations du voiture.',
                description: '-	Environnement : ASP.NET MVC 5, Jquery, Jquery Ajax, Bootstrap 4, Sql server.',
                website: '',
            },
            {
                date: '2018-05 ',
                title: `Projet de Fin d’Etudes : Conception et développement d'une application web au sein de Société Pixie Web.`,
                description: 'Environnement : Angular, Asp core, SignalR et Sql server.',
                website: '',
            },
            {
                date: `2018-08`,
                title: `Application web de recette de cuisine`,
                description: `Environnement :  Angular, Angular Universal, Node expresse js (API), Mongo db, JWT, Socket io.`,
                website: `https://recette-cuisine.herokuapp.com`,
            },
            {
                date: `2018-11 `,
                title: `Application web crée avec pour trouver l’ouvrier/Artisan voulut`,
                description: `Environnement : Angular, Asp core restful api, Mysql, JWT, SignalR Google Map Api.`,
                website: `https://ouvrier.herokuapp.com `,
            },
            {
                date: `2019-01 à 2019-07`,
                title: `Stage au sein de l’entreprise Harmony  Technology. Projet de développement de système RFID pour la traçabilité des bandes de sauvegarde.`,
                description: `Environnement : RFID API, Asp.net, Sql server, Angular, SignalR.`,
                website: ``,
            },
            {
                date: ``,
                title: ``,
                description: ``,
                website: ``,
            },
        ];

        const skills = [
            {
                domaine: 'front-end',
                items: [
                    'Html & Sass',
                    'Angular',
                    'Angular Material',
                    'Bootstrap',
                    'JQuery-Ajax',
                ],
            },
            {
                domaine: 'back-end',
                items: [
                    'ASP.NET  core',
                    'Node js (Express js)',
                    'Laravel',
                ],
            },
            {
                domaine: 'Mobile',
                items: [
                    'Ionic (Angular)',
                ],
            },
            {
                domaine: 'Database',
                items: [
                    'Sqlite',
                    'MySQL',
                    'SQL Server',
                    'MongoDB',
                ],
            },
            {
                domaine: 'Dev-ops',
                items: [
                    'Github',
                    'Npm',
                    'heroku deployment',
                ],
            },
            {
                domaine: 'Outils et Autres',
                items: [
                    'Visual Studio code',
                    'Adobe XD',
                    'Adobe Photoshop',
                    'FileZilla',
                    'FL Studio',
                ],
            },
        ];

        const education = [
            {
                date: '2008',
                dipolma: 'Baccalauréat Science Physique – Lycée Moulay Ali Charif TEMARA',
            },
            {
                date: `2010`,
                dipolma: `DUT Lieutenant de Maritime – ISPM AGADIR`,
            },
            {
                date: `2015`,
                dipolma: `Licence professionnel en Pêche – ISPM AGADIR`,
            },
            {
                date: `2017`,
                dipolma: `Certification Microsoft (en ASP.NET MVC 5, SQL SERVER 2014, C#, « HTML – CSS – JAVASCRIPT », WINDOWS 7)`,
            },
            {
                date: `2018`,
                dipolma: `DTS Développement Informatique – ISTA TEMARA`,
            },
            {
                date: `2020`,
                dipolma: `LP Conduite de projets parcours Tech Dev Web – FST LIMOGES FRANCE`,
            },
        ];

        const lang = [
            { name: `Arabe`, level: `Maternelle` },
            { name: `Français`, level: `Courant.` },
            { name: `Anglais`, level: `Intermédiaire` },
        ];
    // }

    var c = 10