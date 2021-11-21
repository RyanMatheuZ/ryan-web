import { languages } from "./languages.js";

const btnSwitcher = document.getElementById("btn-switcher");
let defaultLanguage = "pt"

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

btnSwitcher.addEventListener("click", () => {
    btnSwitcher.classList.toggle("switcher-end");

    defaultLanguage === "pt" ? defaultLanguage = "en" : defaultLanguage = "pt"

    about.innerHTML = languages[defaultLanguage].header.about;
    services.innerHTML = languages[defaultLanguage].header.services;
    projects.innerHTML = languages[defaultLanguage].header.projects;
    knowledges.innerHTML = languages[defaultLanguage].header.knowledges;

    initialGreeting.innerHTML = languages[defaultLanguage].sectionInitial.greeting;
    initialDescription.innerHTML = languages[defaultLanguage].sectionInitial.description;
    initialBtnContact.innerHTML = languages[defaultLanguage].sectionInitial.btnContact;
    initialBtnResume.innerHTML = languages[defaultLanguage].sectionInitial.btnResume;

    aboutTitle.innerHTML = languages[defaultLanguage].sectionAbout.title;
    aboutSubtitle.innerHTML = languages[defaultLanguage].sectionAbout.subtitle;
    aboutParagraphOne.innerHTML = languages[defaultLanguage].sectionAbout.paragraphOne;
    aboutParagraphTwo.innerHTML = languages[defaultLanguage].sectionAbout.paragraphTwo;
    aboutParagraphThree.innerHTML = languages[defaultLanguage].sectionAbout.paragraphThree;

    servicesTitle.innerHTML = languages[defaultLanguage].sectionServices.title;
    servicesSubtitle.innerHTML = languages[defaultLanguage].sectionServices.subtitle;
    servicesFrontEndTitle.innerHTML = languages[defaultLanguage].sectionServices.frontEnd.title;
    servicesFrontEndText.innerHTML = languages[defaultLanguage].sectionServices.frontEnd.text;
    servicesResponsiveWebsitesTitle.innerHTML = languages[defaultLanguage].sectionServices.responsiveWebsites.title;
    servicesResponsiveWebsitesText.innerHTML = languages[defaultLanguage].sectionServices.responsiveWebsites.text;
    servicesSemanticHtmlTitle.innerHTML = languages[defaultLanguage].sectionServices.semanticHtml.title;
    servicesSemanticHtmlText.innerHTML = languages[defaultLanguage].sectionServices.semanticHtml.text;
    servicesWebAccessibilityTitle.innerHTML = languages[defaultLanguage].sectionServices.webAccessibility.title;
    servicesWebAccessibilityText.innerHTML = languages[defaultLanguage].sectionServices.webAccessibility.text;
    servicesWebSeoTitle.innerHTML = languages[defaultLanguage].sectionServices.webSeo.title;
    servicesWebSeoText.innerHTML = languages[defaultLanguage].sectionServices.webSeo.text;

    projectsTitle.innerHTML = languages[defaultLanguage].sectionProjects.title;
    projectsSubtitle.innerHTML = languages[defaultLanguage].sectionProjects.subtitle;
    projectsTechnologies.innerHTML = languages[defaultLanguage].sectionProjects.technologies;
    projectsBtnGitHub.innerHTML = languages[defaultLanguage].sectionProjects.btnGitHub;
    projectsBtnAccess.innerHTML = languages[defaultLanguage].sectionProjects.btnAccess;
    projectsFarminoDescription.innerHTML = languages[defaultLanguage].sectionProjects.farmino.description;
    projectsVoidXDescription.innerHTML = languages[defaultLanguage].sectionProjects.voidX.description;
    projectsFatecMataoDescription.innerHTML = languages[defaultLanguage].sectionProjects.fatecMatao.description;
    projectsSoffitDescription.innerHTML = languages[defaultLanguage].sectionProjects.soffitConsulting.description;
    projectsRickMortyDescription.innerHTML = languages[defaultLanguage].sectionProjects.rickAndMorty.description;
    projectsPetitGlaceDescription.innerHTML = languages[defaultLanguage].sectionProjects.petitGlace.description;
    projectsVruumDescription.innerHTML = languages[defaultLanguage].sectionProjects.vruum.description;
    projectsCloudMasterDescription.innerHTML = languages[defaultLanguage].sectionProjects.cloudMaster.description;

    servicesTitle.innerHTML = languages[defaultLanguage].sectionServices.title;
    servicesSubtitle.innerHTML = languages[defaultLanguage].sectionServices.subtitle;

    knowledgesTitle.innerHTML = languages[defaultLanguage].sectionKnowledges.title;
    knowledgesSubtitle.innerHTML = languages[defaultLanguage].sectionKnowledges.subtitle;
});