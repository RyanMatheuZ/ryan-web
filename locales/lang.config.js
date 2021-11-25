import { languages } from "./languages.js";

const btnSwitcher = document.getElementById("btn-switcher");

let currentLanguage = "pt";

const about = document.getElementById("header-about");
const services = document.getElementById("header-services");
const projects = document.getElementById("header-projects");
const knowledges = document.getElementById("header-knowledges");

const initialGreeting = document.getElementById("initial-greeting");
const initialDescription = document.getElementById("initial-description");
const initialBtnContact = document.getElementById("initial-btn-contact");
const initialBtnResume = document.getElementById("initial-btn-resume");

const aboutTitle = document.getElementById("about-title");
const aboutSubtitle = document.getElementById("about-subtitle");
const aboutParagraphOne = document.getElementById("about-paragraph-one");
const aboutParagraphTwo = document.getElementById("about-paragraph-two");
const aboutParagraphThree = document.getElementById("about-paragraph-three");

const servicesTitle = document.getElementById("services-title");
const servicesSubtitle = document.getElementById("services-subtitle");
const servicesFrontEndTitle = document.getElementById("services-front-end-title");
const servicesFrontEndText = document.getElementById("services-front-end-text");
const servicesResponsiveWebsitesTitle = document.getElementById("services-responsive-websites-title");
const servicesResponsiveWebsitesText = document.getElementById("services-responsive-websites-text");
const servicesSemanticHtmlTitle = document.getElementById("services-semantic-html-title");
const servicesSemanticHtmlText = document.getElementById("services-semantic-html-text");
const servicesWebAccessibilityTitle = document.getElementById("services-web-accessibility-title");
const servicesWebAccessibilityText = document.getElementById("services-web-accessibility-text");
const servicesWebSeoTitle = document.getElementById("services-web-seo-title");
const servicesWebSeoText = document.getElementById("services-web-seo-text");

const projectsTitle = document.getElementById("projects-title");
const projectsSubtitle = document.getElementById("projects-subtitle");
const projectsTechnologies = document.getElementsByClassName("projects-technologies");
const projectsBtnGitHub = document.getElementsByClassName("projects-btn-github");
const projectsBtnAccess = document.getElementsByClassName("projects-btn-access");
const projectsFarminoDescription = document.getElementById("projects-farmino-description");
const projectsVoidXDescription = document.getElementById("projects-voidx-description");
const projectsFatecMataoDescription = document.getElementById("projects-fatec-matao-description");
const projectsSoffitDescription = document.getElementById("projects-soffit-description");
const projectsRickMortyDescription = document.getElementById("projects-rick-morty-description");
const projectsPetitGlaceDescription = document.getElementById("projects-petit-glace-description");
const projectsVruumDescription = document.getElementById("projects-vruum-description");
const projectsCloudMasterDescription = document.getElementById("projects-cloud-master-description");

const knowledgesTitle = document.getElementById("knowledges-title");
const knowledgesSubtitle = document.getElementById("knowledges-subtitle");
const knowledgesHtmlText = document.getElementById("knowledges-html-text");
const knowledgesCssText = document.getElementById("knowledges-css-text");
const knowledgesSassText = document.getElementById("knowledges-sass-text");
const knowledgesLessText = document.getElementById("knowledges-less-text");
const knowledgesBootstrapText = document.getElementById("knowledges-bootstrap-text");
const knowledgesBulmaText = document.getElementById("knowledges-bulma-text");
const knowledgesTailwindText = document.getElementById("knowledges-tailwind-text");
const knowledgesJavaScriptText = document.getElementById("knowledges-java-script-text");
const knowledgesJqueryText = document.getElementById("knowledges-jquery-text");
const knowledgesVueText = document.getElementById("knowledges-vue-text");
const knowledgesNuxtText = document.getElementById("knowledges-nuxt-text");
const knowledgesGitText = document.getElementById("knowledges-git-text");

const contactTitle = document.getElementById("contact-title");
const contactText = document.getElementById("contact-text");
const contactBtnContact = document.getElementById("contact-btn-contact");

const footerFormTitle = document.getElementById("footer-form-title");
const footerFormName = document.getElementById("input-name");
const footerFormEmail = document.getElementById("input-email");
const footerFormMessage = document.getElementById("input-message");
const footerFormBtnSend = document.getElementById("footer-form-btn-send");

btnSwitcher.addEventListener("click", () => {
    btnSwitcher.classList.toggle("switcher-end");

    currentLanguage === "pt" ? currentLanguage = "en" : currentLanguage = "pt";

    about.innerHTML = languages[currentLanguage].header.about;
    services.innerHTML = languages[currentLanguage].header.services;
    projects.innerHTML = languages[currentLanguage].header.projects;
    knowledges.innerHTML = languages[currentLanguage].header.knowledges;

    initialGreeting.innerHTML = languages[currentLanguage].sectionInitial.greeting;
    initialDescription.innerHTML = languages[currentLanguage].sectionInitial.description;
    initialBtnContact.innerHTML = languages[currentLanguage].sectionInitial.btnContact;
    initialBtnResume.innerHTML = languages[currentLanguage].sectionInitial.btnResume;

    aboutTitle.innerHTML = languages[currentLanguage].sectionAbout.title;
    aboutSubtitle.innerHTML = languages[currentLanguage].sectionAbout.subtitle;
    aboutParagraphOne.innerHTML = languages[currentLanguage].sectionAbout.paragraphOne;
    aboutParagraphTwo.innerHTML = languages[currentLanguage].sectionAbout.paragraphTwo;
    aboutParagraphThree.innerHTML = languages[currentLanguage].sectionAbout.paragraphThree;

    servicesTitle.innerHTML = languages[currentLanguage].sectionServices.title;
    servicesSubtitle.innerHTML = languages[currentLanguage].sectionServices.subtitle;
    servicesFrontEndTitle.innerHTML = languages[currentLanguage].sectionServices.frontEnd.title;
    servicesFrontEndText.innerHTML = languages[currentLanguage].sectionServices.frontEnd.text;
    servicesResponsiveWebsitesTitle.innerHTML = languages[currentLanguage].sectionServices.responsiveWebsites.title;
    servicesResponsiveWebsitesText.innerHTML = languages[currentLanguage].sectionServices.responsiveWebsites.text;
    servicesSemanticHtmlTitle.innerHTML = languages[currentLanguage].sectionServices.semanticHtml.title;
    servicesSemanticHtmlText.innerHTML = languages[currentLanguage].sectionServices.semanticHtml.text;
    servicesWebAccessibilityTitle.innerHTML = languages[currentLanguage].sectionServices.webAccessibility.title;
    servicesWebAccessibilityText.innerHTML = languages[currentLanguage].sectionServices.webAccessibility.text;
    servicesWebSeoTitle.innerHTML = languages[currentLanguage].sectionServices.webSeo.title;
    servicesWebSeoText.innerHTML = languages[currentLanguage].sectionServices.webSeo.text;

    projectsTitle.innerHTML = languages[currentLanguage].sectionProjects.title;
    projectsSubtitle.innerHTML = languages[currentLanguage].sectionProjects.subtitle;
    projectsTechnologies.innerHTML = languages[currentLanguage].sectionProjects.technologies;
    projectsBtnGitHub.innerHTML = languages[currentLanguage].sectionProjects.btnGitHub;
    projectsBtnAccess.innerHTML = languages[currentLanguage].sectionProjects.btnAccess;
    projectsFarminoDescription.innerHTML = languages[currentLanguage].sectionProjects.farmino.description;
    projectsVoidXDescription.innerHTML = languages[currentLanguage].sectionProjects.voidX.description;
    projectsFatecMataoDescription.innerHTML = languages[currentLanguage].sectionProjects.fatecMatao.description;
    projectsSoffitDescription.innerHTML = languages[currentLanguage].sectionProjects.soffitConsulting.description;
    projectsRickMortyDescription.innerHTML = languages[currentLanguage].sectionProjects.rickAndMorty.description;
    projectsPetitGlaceDescription.innerHTML = languages[currentLanguage].sectionProjects.petitGlace.description;
    projectsVruumDescription.innerHTML = languages[currentLanguage].sectionProjects.vruum.description;
    projectsCloudMasterDescription.innerHTML = languages[currentLanguage].sectionProjects.cloudMaster.description;

    knowledgesTitle.innerHTML = languages[currentLanguage].sectionKnowledges.title;
    knowledgesSubtitle.innerHTML = languages[currentLanguage].sectionKnowledges.subtitle;
    knowledgesHtmlText.innerHTML = languages[currentLanguage].sectionKnowledges.html.text;
    knowledgesCssText.innerHTML = languages[currentLanguage].sectionKnowledges.css.text;
    knowledgesSassText.innerHTML = languages[currentLanguage].sectionKnowledges.sass.text;
    knowledgesLessText.innerHTML = languages[currentLanguage].sectionKnowledges.less.text;
    knowledgesBootstrapText.innerHTML = languages[currentLanguage].sectionKnowledges.bootstrap.text;
    knowledgesBulmaText.innerHTML = languages[currentLanguage].sectionKnowledges.bulma.text;
    knowledgesTailwindText.innerHTML = languages[currentLanguage].sectionKnowledges.tailwind.text;
    knowledgesJavaScriptText.innerHTML = languages[currentLanguage].sectionKnowledges.javaScript.text;
    knowledgesJqueryText.innerHTML = languages[currentLanguage].sectionKnowledges.jquery.text;
    knowledgesVueText.innerHTML = languages[currentLanguage].sectionKnowledges.vue.text;
    knowledgesNuxtText.innerHTML = languages[currentLanguage].sectionKnowledges.nuxt.text;
    knowledgesGitText.innerHTML = languages[currentLanguage].sectionKnowledges.git.text;

    contactTitle.innerHTML = languages[currentLanguage].sectionContact.title;
    contactText.innerHTML = languages[currentLanguage].sectionContact.text;
    contactBtnContact.innerHTML = languages[currentLanguage].sectionContact.btnContact;

    footerFormTitle.innerHTML = languages[currentLanguage].footer.form.title;
    footerFormName.setAttribute("placeholder", languages[currentLanguage].footer.form.yourName);
    footerFormEmail.setAttribute("placeholder", languages[currentLanguage].footer.form.yourEmail);
    footerFormMessage.setAttribute("placeholder", languages[currentLanguage].footer.form.yourMessage);
    footerFormBtnSend.innerHTML = languages[currentLanguage].footer.form.btnSend;
});