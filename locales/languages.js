const languages = {
    pt: {
        htmlLang: "pt-br",

        title: "Ryan Web - Portfólio",

        header: {
            about: "Sobre",

            services: "Serviços",

            projects: "Projetos",

            knowledges: "Conhecimentos"
        },

        sectionInitial: {
            greeting: "<span class='section-initial__text'>Olá, eu sou o</span> <br> Ryan Oliveira",

            description: "Desenvolvedor Front-End!",
            
            btnContact: "Contato",
            altBtnContact: "Entrar em contato",

            btnResume: "Currículo",
            altBtnResume: "Abrir currículo em nova guia",

            altIllustration: "Foguete"
        },

        sectionAbout: {
            title: "Sobre",

            subtitle: "DEIXE EU ME APRESENTAR",

            paragraphOne: "Meu nome é Ryan Matheus de Oliveira e moro em Matão-SP.",

            paragraphTwo: "Indo para o 3° ano do EM, permanecia em dúvida sobre qual carreira profissional seguir, então decidi fazer um curso técnico na Etec, onde tive o meu primeiro contato com desenvolvimento de sistemas, logo, me fissurei pela área.",

            paragraphThree: "Atualmente estou me graduando em Sistemas para Internet na Fatec Taquaritinga e possuo conhecimentos nos setores de Desenvolvimento Web e Web Design."
        },

        sectionServices: {
            title: "Serviços",

            subtitle: "O QUE EU POSSO FAZER POR VOCÊ",

            frontEnd: {
                title: "Front-End",

                altProject: "Serviço de Front-End",

                text: "Desenvolvimento da interface gráfica do usuário de um site"
            },

            responsiveWebsites: {
                title: "Sites Responsivos",

                altProject: "Serviço de sites responsivos",

                text: "Sites que se adaptam em diferentes tipos de dispositivos"
            },

            semanticHtml: {
                title: "HTML Semântico",

                altProject: "Serviço de HTML semântico",

                text: "Melhor compreensão do HTML em motores de busca"
            },

            webAccessibility: {
                title: "Acessibilidade Web",

                altProject: "Serviço de acessibilidade Web",

                text: "Sites acessíveis para pessoas com algum tipo de deficiência"
            },

            webSeo: {
                title: "SEO Web",

                altProject: "Serviço de SEO Web",

                text: "Técnicas White Hat, para otimização de conteúdo"
            },
        },

        sectionProjects: {
            title: "Projetos",

            subtitle: "MEU CONHECIMENTO NA PRÁTICA",

            technologies: "Tecnologias",

            btnGitHub: "Código",
            altBtnGitHub: "Ver código",

            btnAccess: "Projeto",
            altBtnAccess: "Acessar projeto",

            farmino: {
                title: "Farmino",

                altProject: "Projeto Farmino",

                description: "Projeto pessoal, sobre uma loja virtual com foco na venda de produtos orgânicos. Nele Foram utilizados <a href='https://router.vuejs.org/' target='_blank' rel='noopener noreferrer' class='card-project__farmino-link'>Vue Router</a>, <a href='https://vuex.vuejs.org/' target='_blank' rel='noopener noreferrer' class='card-project__farmino-link'>Vuex</a>, <a href='https://vue-meta.nuxtjs.org/' target='_blank' rel='noopener noreferrer' class='card-project__farmino-link'>Vue Meta</a> e <a href='https://vuelidate.js.org/' target='_blank' rel='noopener noreferrer'class='card-project__farmino-link'>Vuelidate</a>."
            },

            voidX: {
                title: "Void X",

                altProject: "Projeto Void X",

                description: "Projeto desenvolvido para uma prova na faculdade. Com o requisito de ser um site para um produto revolucionário e validação de formulário com <a href='https://vuelidate.js.org/' target='_blank' rel='noopener noreferrer' class='card-project__void-link'>Vuelidate</a>."
            },

            fatecMatao: {
                title: "Fatec Matão",

                altProject: "Projeto Fatec Matão",

                description: "Projeto desenvolvido em grupo, durante as aulas de Projeto Integrador. Fui responsável pela página inicial e internacionalização <a href='https://pt.wikipedia.org/wiki/Internacionaliza%C3%A7%C3%A3o_(inform%C3%A1tica)' target='_blank' rel='noopener noreferrer' class='card-project__fatec-link'>(i18n)</a>."
            },

            soffitConsulting: {
                title: "Soffit Consultoria",

                altProject: "Projeto Soffit Consultoria",

                description: "Projeto pessoal, sobre uma consultoria fictícia, com serviços em planos de negócios, análises, estratégias, vendas, marketing e muito mais."
            },

            rickAndMorty: {
                title: "Rick and morty",

                altProject: "Projeto Rick and Morty",

                description: "Consumindo a API da série Rick e Morty, com <a href='https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API' target='_blank' rel='noopener noreferrer' class='card-project__rick-and-morty-link'>fetch API</a>. Essa API contém várias informações sobre os personagens, como o nome, gênero, origem, etc."
            },

            petitGlace: {
                title: "Petit Glace",

                altProject: "Projeto Petit Glace",

                description: "Projeto pessoal, sobre uma sorveteria fictícia. O usuário pode realizar uma filtragem de produtos, seja pela origem ou preço do produto."
            },

            vruum: {
                title: "Vruum",

                altProject: "Projeto Vruum",

                description: "Projeto pessoal, sobre uma autoescola fictícia. A mesma oferece cursos tradicionais de direção e de aperfeiçoamento no trânsito."
            },

            cloudMaster: {
                title: "Cloud Master",

                altProject: "Projeto Cloud Master",

                description: "Projeto pessoal, sobre uma empresa fictícia. Ela possui serviços de desenvolvimento web, hospedagem e planos Wi-Fi."
            }       
        },

        sectionKnowledges: {
            title: "Conhecimentos",

            subtitle: "TUDO QUE ADQUIRI ATÉ O MOMENTO",

            html: {
                title: "HTML",

                altTitle: "Linguagem HTML",

                text: "Linguagem de marcação, usada na construção de sites"
            },

            css: {
                title: "CSS",

                altTitle: "Linguagem CSS",

                text: "Folha de estilos <br> em cascata, para estilização de sites"
            },

            sass: {
                title: "Sass / SCSS",

                altTitle: "Pré-processador Sass",

                text: "Pré-processador, basicamente CSS com super poderes"
            },

            less: {
                title: "Less",

                altTitle: "Pré-processador Less",

                text: "Pré-processador, <br> que foi influenciado <br> pelo Sass"
            },

            bootstrap: {
                title: "Bootstrap",

                altTitle: "Framework Bootstrap",

                text: "Framework CSS, o grande dinossauro do Front-End"
            },

            bulma: {
                title: "Bulma",

                altTitle: "Framework Bulma",

                text: "Framework CSS, foi inspirado no Bootstrap e não requer JS"
            },

            tailwind: {
                title: "Tailwind CSS",

                altTitle: "Framework Tailwind CSS",

                text: "Framework CSS moderninho, baseado em utilitários"
            },

            javaScript: {
                title: "JavaScript (ES)",

                altTitle: "Linguagem JavaScript (ES)",

                text: "Linguagem queridinha dos Desenvolvedores Web"
            },

            jquery: {
                title: "jQuery",

                altTitle: "Biblioteca jQuery",

                text: "Outro dinossauro do Front-End, porém ele é uma biblioteca JS"
            },

            vue: {
                title: "Vue.js",

                altTitle: "Framework progressivo Vue.js",

                text: "Framework progressivo, basicamente o melhor do mercado de JS"
            },

            nuxt: {
                title: "Nuxt",

                altTitle: "Framework Nuxt.js",

                text: "Framework JS, Batman tem o Robin, o Vue tem o Nuxt"
            },

            git: {
                title: "Git",

                altTitle: "Versionador Git",

                text: "Versionador de código, para salvar snapshots de seus projetos"
            }
        },

        sectionContact: {
            title: "Algum projeto em mente?",

            text: "Com dúvida ou problema em algum projeto, não hesite em me chamar!",

            btnContact: "Entrar em contato",
            altBtn: "Contato via E-mail"
        },

        footer: {
            form: {
                title: "Me mande uma mensagem...",

                altField: "Campo obrigatório",

                yourName: "Seu nome:",

                yourEmail: "Seu E-mail:",

                yourMessage: "Sua mensagem:",

				errorName: "<span class='error-message__figure'>!</span> Primeiro seu nome, amigão!",

				errorEmail: "<span class='error-message__figure'>!</span> Como entrarei em contato?",

				errorMessage: "<span class='error-message__figure'>!</span> Não quer me dizer nada mesmo?",

                btnSend: "Enviar",

                altSend: "Enviar mensagem"
            },

            socialMedia: {
                instagram: "Acessar Instagram",

                linkedin: "Acessar LinkedIn",

                gitHub: "Acessar GitHub",

                gitLab: "Acessar GitLab"
            }
        }
    },

    en: {
        htmlLang: "en-us",

        title: "Ryan Web - Portfolio",

        header: {
            about: "About",

            services: "Services",

            projects: "Projects",

            knowledges: "Knowledges"
        },

        sectionInitial: {
            greeting: "<span class='section-initial__text'>Hello, I am</span> <br> Ryan Oliveira",

            description: "Front-End Developer!",
            
            btnContact: "Contact",
            altBtnContact: "Get in touch",

            btnResume: "Resume",
            altBtnResume: "Open resume in new tab",

            altIllustration: "Rocket"
        },

        sectionAbout: {
            title: "About",

            subtitle: "LET ME INTRODUCE MYSELF",

            paragraphOne: "My name is Ryan Matheus de Oliveira and I live in Matão-SP in Brazil.",

            paragraphTwo: "Going to the 3rd year of High School, I remained in doubt about which professional career to pursue, so I decided to make a technical course at Etec, where I had my first contact with systems development, so I became passionate about the area.",

            paragraphThree: "I am currently graduating in Internet Systems at Fatec Taquaritinga and I have knowledge in the sectors of Web Development and Web Design."
        },

        sectionServices: {
            title: "Services",

            subtitle: "WHAT I CAN DO FOR YOU",

            frontEnd: {
                title: "Front-End",

                altProject: "Front-End service",

                text: "Development of a website's graphical user interface"
            },

            responsiveWebsites: {
                title: "Responsive Websites",

                altProject: "Responsive websites service",

                text: "Sites that adapt to different types of devices"
            },

            semanticHtml: {
                title: "Semantic HTML",

                altProject: "Semantic HTML service",

                text: "Better understanding <br> of HTML in search <br> engines"
            },

            webAccessibility: {
                title: "Web Accessibility",

                altProject: "Web accessibility service",

                text: "Accessible websites for people with some disability"
            },

            webSeo: {
                title: "Web SEO",

                altProject: "Web SEO service",

                text: "White Hat techniques <br> for a content <br> optimization"
            },
        },

        sectionProjects: {
            title: "Projects",

            subtitle: "MY KNOWLEDGE IN PRACTICE",

            technologies: "Technologies",

            btnGitHub: "Code",
            altBtnGitHub: "View code",          

            btnAccess: "Project",
            altBtnAccess: "Access project",          

            farmino: {
                title: "Farmino",

                altProject: "Farmino project",

                description: "Personal project, about a virtual store focused on selling organic products. In it were used <a href='https://router.vuejs.org/' target='_blank' rel='noopener noreferrer' class='card-project__farmino-link'>Vue Router</a>, <a href='https://vuex.vuejs.org/' target='_blank' rel='noopener noreferrer' class='card-project__farmino-link'>Vuex</a>, <a href='https://vue-meta.nuxtjs.org/' target='_blank' rel='noopener noreferrer' class='card-project__farmino-link'>Vue Meta</a> and <a href='https://vuelidate.js.org/' target='_blank' rel='noopener noreferrer'class='card-project__farmino-link'>Vuelidate</a>."
            },

            voidX: {
                title: "Void X",

                altProject: "Void X project",

                description: "Project developed for an exam in college. With the requirement to be a website for a revolutionary product and form validation with <a href='https://vuelidate.js.org/' target='_blank' rel='noopener noreferrer' class='card-project__void-link'>Vuelidate</a>."
            },

            fatecMatao: {
                title: "Fatec Matão",

                altProject: "Fatec Matão project",

                description: "Project developed in group, during the Integrator Project classes. I was responsible for the homepage and internationalization <a href='https://pt.wikipedia.org/wiki/Internacionaliza%C3%A7%C3%A3o_(inform%C3%A1tica)' target='_blank' rel='noopener noreferrer' class='card-project__fatec-link'>(i18n)</a>."
            },

            soffitConsulting: {
                title: "Soffit Consultoria",

                altProject: "Soffit Consulting project",

                description: "Personal project, about a fictitious consultancy, with services in business plans, analytics, strategies, sales, marketing and more."
            },

            rickAndMorty: {
                title: "Rick and morty",

                altProject: "Rick and Morty project",

                description: "Consuming the API from the Rick and Morty series, with <a href='https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API' target='_blank' rel='noopener noreferrer' class='card-project__rick-and-morty-link'>fetch API</a>. This API contains various information about the characters, such as name, gender, origin, etc."
            },

            petitGlace: {
                title: "Petit Glace",

                altProject: "Petit Glace project",

                description: "Personal project, about a fictitious ice cream shop. The user can filter products, either by origin or product price. <br><br>"
            },

            vruum: {
                title: "Vruum",

                altProject: "Vruum project",

                description: "Personal project, about a fictitious driving school. It offers traditional driving and traffic training courses."
            },

            cloudMaster: {
                title: "Cloud Master",

                altProject: "Cloud Master project",

                description: "Personal project, about a fictitious company. It has web development services, hosting and Wi-Fi plans."
            }       
        },

        sectionKnowledges: {
            title: "Knowledges",

            subtitle: "EVERYTHING I ACQUIRED UNTIL THE MOMENT",

            html: {
                title: "HTML",

                altTitle: "HTML language",

                text: "Markup language, used in building websites <br><br>"
            },

            css: {
                title: "CSS",

                altTitle: "CSS language",

                text: "Cascading style sheet for website styling <br><br>"
            },

            sass: {
                title: "Sass / SCSS",

                altTitle: "Sass preprocessor",

                text: "Preprocessor, basically CSS with super powers <br><br>"
            },

            less: {
                title: "Less",

                altTitle: "Less preprocessor",

                text: "Preprocessor, that <br> was influenced <br> by Sass"
            },

            bootstrap: {
                title: "Bootstrap",

                altTitle: "Bootstrap framework",

                text: "CSS Framework, the great Front-End dinosaur"
            },

            bulma: {
                title: "Bulma",

                altTitle: "Bulma framework",

                text: "CSS Framework, was inspired by Bootstrap and does not require JS"
            },

            tailwind: {
                title: "Tailwind CSS",

                altTitle: "Tailwind CSS framework",

                text: "Hipster CSS Framework, based on utilities <br><br>"
            },

            javaScript: {
                title: "JavaScript (ES)",

                altTitle: "JavaScript (ES) language",

                text: "Web Developers' sweetheart language <br><br>"
            },

            jquery: {
                title: "jQuery",

                altTitle: "jQuery library",

                text: "Another Front-End dinosaur, but it is a JS library"
            },

            vue: {
                title: "Vue.js",

                altTitle: "Vue.js progressive framework",

                text: "Progressive framework, basically the best in the JS market"
            },

            nuxt: {
                title: "Nuxt",

                altTitle: "Nuxt.js framework",

                text: "JS Framework, Batman has the Robin, Vue has the Nuxt"
            },

            git: {
                title: "Git",

                altTitle: "Git versioner",

                text: "Code versioner, to save snapshots of your projects"
            }
        },

        sectionContact: {
            title: "Any projects in mind?",

            text: "If you have any questions or problems with any project, don't hesitate to call me!",

            btnContact: "Get in touch",
            altBtn: "Contact by E-mail"
        },

        footer: {
            form: {
                title: "Send me a message...",

                altField: "Required field",

                yourName: "Your name:",

                yourEmail: "Your E-mail:",

                yourMessage: "Your message:",

				errorName: "<span class='error-message__figure'>!</span> First your name, buddy!",

				errorEmail: "<span class='error-message__figure'>!</span> How will I get in touch?",

				errorMessage: "<span class='error-message__figure'>!</span> Do not you want to tell me anything anyway?",

                btnSend: "Send",

                altSend: "Send message"
            },

            socialMedia: {
                instagram: "View Instagram",

                linkedin: "View LinkedIn",

                gitHub: "View GitHub",

                gitLab: "View GitLab"
            }
        }
    }
};

export { languages };