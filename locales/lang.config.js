import { languages } from "./languages.js";

let currentLanguage = "pt";

const btnSwitcher = document.getElementById("btn-switcher");

// ==================== Tags - START ====================
const htmlTag = document.getElementsByTagName("html")[0];
const titleTag = document.getElementsByTagName("title")[0];
// ==================== Tags - END ====================

// ==================== Header - START ====================
const about = document.getElementById("header-about");
const services = document.getElementById("header-services");
const projects = document.getElementById("header-projects");
const knowledges = document.getElementById("header-knowledges");
// ==================== Header - END ====================

// ==================== Initial - START ====================
const initialGreeting = document.getElementById("initial-greeting");
const initialDescription = document.getElementById("initial-description");
const initialBtnContact = document.getElementById("initial-btn-contact");
const initialBtnResume = document.getElementById("initial-btn-resume");
const altIllustration = document.getElementById("alt-illustration");
// ==================== Initial - END ====================

// ==================== About - START ====================
const aboutTitle = document.getElementById("about-title");
const aboutSubtitle = document.getElementById("about-subtitle");

const aboutParagraphOne = document.getElementById("about-paragraph-one");
const aboutParagraphTwo = document.getElementById("about-paragraph-two");
const aboutParagraphThree = document.getElementById("about-paragraph-three");
// ==================== About - END ====================

// ==================== Services - START ====================
const servicesTitle = document.getElementById("services-title");
const servicesSubtitle = document.getElementById("services-subtitle");

const servicesFrontEndCard = document.getElementById("services-front-end-card");
const servicesResponsiveWebsitesCard = document.getElementById("services-responsive-websites-card");
const servicesSemanticHtmlCard = document.getElementById("services-semantic-html-card");
const servicesWebAccessibilityCard = document.getElementById("services-web-accessibility-card");
const servicesWebSeoCard = document.getElementById("services-web-seo-card");

const servicesFrontEndIcon = document.getElementById("services-front-end-icon");
const servicesResponsiveWebsitesIcon = document.getElementById("services-responsive-websites-icon");
const servicesSemanticHtmlIcon = document.getElementById("services-semantic-html-icon");
const servicesWebAccessibilityIcon = document.getElementById("services-web-accessibility-icon");
const servicesWebSeoIcon = document.getElementById("services-web-seo-icon");

const servicesFrontEndTitle = document.getElementById("services-front-end-title");
const servicesResponsiveWebsitesTitle = document.getElementById("services-responsive-websites-title");
const servicesSemanticHtmlTitle = document.getElementById("services-semantic-html-title");
const servicesWebAccessibilityTitle = document.getElementById("services-web-accessibility-title");
const servicesWebSeoTitle = document.getElementById("services-web-seo-title");

const servicesFrontEndText = document.getElementById("services-front-end-text");
const servicesResponsiveWebsitesText = document.getElementById("services-responsive-websites-text");
const servicesSemanticHtmlText = document.getElementById("services-semantic-html-text");
const servicesWebAccessibilityText = document.getElementById("services-web-accessibility-text");
const servicesWebSeoText = document.getElementById("services-web-seo-text");
// ==================== Services - END ====================

// ==================== Projects - START ====================
const projectsTitle = document.getElementById("projects-title");
const projectsSubtitle = document.getElementById("projects-subtitle");

const projectsTechnologies = document.querySelectorAll(".projects-technologies");
const projectsBtnGitHub = document.querySelectorAll(".projects-btn-github");
const projectsBtnAccess = document.querySelectorAll(".projects-btn-access");

const projectsFarminoCard = document.getElementById("projects-farmino-card");
const projectsVoidXCard = document.getElementById("projects-voidx-card");
const projectsFatecMataoCard = document.getElementById("projects-fatec-matao-card");
const projectsSoffitCard = document.getElementById("projects-soffit-card");
const projectsRickMortyCard = document.getElementById("projects-rick-morty-card");
const projectsPetitGlaceCard = document.getElementById("projects-petit-glace-card");
const projectsVruumCard = document.getElementById("projects-vruum-card");
const projectsCloudMasterCard = document.getElementById("projects-cloud-master-card");

const projectsFarminoDescription = document.getElementById("projects-farmino-description");
const projectsVoidXDescription = document.getElementById("projects-voidx-description");
const projectsFatecMataoDescription = document.getElementById("projects-fatec-matao-description");
const projectsSoffitDescription = document.getElementById("projects-soffit-description");
const projectsRickMortyDescription = document.getElementById("projects-rick-morty-description");
const projectsPetitGlaceDescription = document.getElementById("projects-petit-glace-description");
const projectsVruumDescription = document.getElementById("projects-vruum-description");
const projectsCloudMasterDescription = document.getElementById("projects-cloud-master-description");
// ==================== Projects - END ====================

// ==================== Knowledges - START ====================
const knowledgesTitle = document.getElementById("knowledges-title");
const knowledgesSubtitle = document.getElementById("knowledges-subtitle");

const knowledgesHtmlCard = document.getElementById("knowledges-html-card");
const knowledgesCssCard = document.getElementById("knowledges-css-card");
const knowledgesSassCard = document.getElementById("knowledges-sass-card");
const knowledgesLessCard = document.getElementById("knowledges-less-card");
const knowledgesBootstrapCard = document.getElementById("knowledges-bootstrap-card");
const knowledgesBulmaCard = document.getElementById("knowledges-bulma-card");
const knowledgesTailwindCard = document.getElementById("knowledges-tailwind-card");
const knowledgesJavaScriptCard = document.getElementById("knowledges-java-script-card");
const knowledgesJqueryCard = document.getElementById("knowledges-jquery-card");
const knowledgesVueCard = document.getElementById("knowledges-vue-card");
const knowledgesNuxtCard = document.getElementById("knowledges-nuxt-card");
const knowledgesGitCard = document.getElementById("knowledges-git-card");

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
// ==================== Knowledges - END ====================

// ==================== Contact - START ====================
const contactTitle = document.getElementById("contact-title");

const contactText = document.getElementById("contact-text");
const contactBtnContact = document.getElementById("contact-btn-contact");
// ==================== Contact - END ====================

// ==================== Form - START ====================
const footerFormTitle = document.getElementById("footer-form-title");

const footerFormName = document.getElementById("input-name");
const footerFormEmail = document.getElementById("input-email");
const footerFormMessage = document.getElementById("input-message");
const footerFormBtnSend = document.getElementById("footer-form-btn-send");

const footerFormNameError = document.getElementById("input-name-error");
const footerFormEmailError = document.getElementById("input-email-error");
const footerFormMessageError = document.getElementById("input-message-error");
// ==================== Form - END ====================

// ==================== Social Media - START ====================
const footerSocialInstagram = document.getElementById("footer-social-instagram");
const footerSocialLinkedin = document.getElementById("footer-social-linkedin");
const footerSocialGitHub = document.getElementById("footer-social-github");
const footerSocialGitLab = document.getElementById("footer-social-gitlab");
// ==================== Social Media - END ====================

btnSwitcher.addEventListener("click", () => {
    btnSwitcher.classList.toggle("switcher-end");

    currentLanguage === "pt" ? currentLanguage = "en" : currentLanguage = "pt";

    // ========== Tags ==========
    htmlTag.setAttribute("lang", languages[currentLanguage].htmlLang);
    titleTag.innerHTML = languages[currentLanguage].title;

    // ========== Header ==========
    about.innerHTML = languages[currentLanguage].header.about;
    services.innerHTML = languages[currentLanguage].header.services;
    projects.innerHTML = languages[currentLanguage].header.projects;
    knowledges.innerHTML = languages[currentLanguage].header.knowledges;

    // ========== Initial ==========
    initialGreeting.innerHTML = languages[currentLanguage].sectionInitial.greeting;
    initialDescription.innerHTML = languages[currentLanguage].sectionInitial.description;
    initialBtnContact.innerHTML = languages[currentLanguage].sectionInitial.btnContact;
    initialBtnResume.innerHTML = languages[currentLanguage].sectionInitial.btnResume;

    initialBtnContact.setAttribute("title", languages[currentLanguage].sectionInitial.altBtnContact);
    initialBtnResume.setAttribute("title", languages[currentLanguage].sectionInitial.altBtnResume);
    altIllustration.setAttribute("title", languages[currentLanguage].sectionInitial.altIllustration);
    altIllustration.setAttribute("alt", languages[currentLanguage].sectionInitial.altIllustration);

    // ========== About ==========
    aboutTitle.innerHTML = languages[currentLanguage].sectionAbout.title;
    aboutSubtitle.innerHTML = languages[currentLanguage].sectionAbout.subtitle;

    aboutParagraphOne.innerHTML = languages[currentLanguage].sectionAbout.paragraphOne;
    aboutParagraphTwo.innerHTML = languages[currentLanguage].sectionAbout.paragraphTwo;
    aboutParagraphThree.innerHTML = languages[currentLanguage].sectionAbout.paragraphThree;

    // ========== Services ==========
    servicesTitle.innerHTML = languages[currentLanguage].sectionServices.title;
    servicesSubtitle.innerHTML = languages[currentLanguage].sectionServices.subtitle;

    servicesFrontEndTitle.innerHTML = languages[currentLanguage].sectionServices.frontEnd.title;
    servicesResponsiveWebsitesTitle.innerHTML = languages[currentLanguage].sectionServices.responsiveWebsites.title;
    servicesSemanticHtmlTitle.innerHTML = languages[currentLanguage].sectionServices.semanticHtml.title;
    servicesWebAccessibilityTitle.innerHTML = languages[currentLanguage].sectionServices.webAccessibility.title;
    servicesWebSeoTitle.innerHTML = languages[currentLanguage].sectionServices.webSeo.title;

    servicesFrontEndText.innerHTML = languages[currentLanguage].sectionServices.frontEnd.text;
    servicesResponsiveWebsitesText.innerHTML = languages[currentLanguage].sectionServices.responsiveWebsites.text;
    servicesSemanticHtmlText.innerHTML = languages[currentLanguage].sectionServices.semanticHtml.text;
    servicesWebAccessibilityText.innerHTML = languages[currentLanguage].sectionServices.webAccessibility.text;
    servicesWebSeoText.innerHTML = languages[currentLanguage].sectionServices.webSeo.text;

    servicesFrontEndCard.setAttribute("title", languages[currentLanguage].sectionServices.frontEnd.altProject);
    servicesResponsiveWebsitesCard.setAttribute("title", languages[currentLanguage].sectionServices.responsiveWebsites.altProject);
    servicesSemanticHtmlCard.setAttribute("title", languages[currentLanguage].sectionServices.semanticHtml.altProject);
    servicesWebAccessibilityCard.setAttribute("title", languages[currentLanguage].sectionServices.webAccessibility.altProject);
    servicesWebSeoCard.setAttribute("title", languages[currentLanguage].sectionServices.webSeo.altProject);

    servicesFrontEndIcon.setAttribute("title", languages[currentLanguage].sectionServices.frontEnd.title);
    servicesResponsiveWebsitesIcon.setAttribute("title", languages[currentLanguage].sectionServices.responsiveWebsites.title);
    servicesSemanticHtmlIcon.setAttribute("title", languages[currentLanguage].sectionServices.semanticHtml.title);
    servicesWebAccessibilityIcon.setAttribute("title", languages[currentLanguage].sectionServices.webAccessibility.title);
    servicesWebSeoIcon.setAttribute("title", languages[currentLanguage].sectionServices.webSeo.title);

    // ========== Projects ==========
    projectsTitle.innerHTML = languages[currentLanguage].sectionProjects.title;
    projectsSubtitle.innerHTML = languages[currentLanguage].sectionProjects.subtitle;

    projectsTechnologies.forEach(e => {
        e.innerHTML = languages[currentLanguage].sectionProjects.technologies;
    });
    projectsBtnGitHub.forEach(e => {
        e.innerHTML = languages[currentLanguage].sectionProjects.btnGitHub;
        e.setAttribute("title", languages[currentLanguage].sectionProjects.altBtnGitHub);
    });
    projectsBtnAccess.forEach(e => {
        e.innerHTML = languages[currentLanguage].sectionProjects.btnAccess;
        e.setAttribute("title", languages[currentLanguage].sectionProjects.altBtnAccess);
    });

    projectsFarminoCard.setAttribute("title", languages[currentLanguage].sectionProjects.farmino.altProject);
    projectsVoidXCard.setAttribute("title", languages[currentLanguage].sectionProjects.voidX.altProject);
    projectsFatecMataoCard.setAttribute("title", languages[currentLanguage].sectionProjects.fatecMatao.altProject);
    projectsSoffitCard.setAttribute("title", languages[currentLanguage].sectionProjects.soffitConsulting.altProject);
    projectsRickMortyCard.setAttribute("title", languages[currentLanguage].sectionProjects.rickAndMorty.altProject);
    projectsPetitGlaceCard.setAttribute("title", languages[currentLanguage].sectionProjects.petitGlace.altProject);
    projectsVruumCard.setAttribute("title", languages[currentLanguage].sectionProjects.vruum.altProject);
    projectsCloudMasterCard.setAttribute("title", languages[currentLanguage].sectionProjects.cloudMaster.altProject);

    projectsFarminoDescription.innerHTML = languages[currentLanguage].sectionProjects.farmino.description;
    projectsVoidXDescription.innerHTML = languages[currentLanguage].sectionProjects.voidX.description;
    projectsFatecMataoDescription.innerHTML = languages[currentLanguage].sectionProjects.fatecMatao.description;
    projectsSoffitDescription.innerHTML = languages[currentLanguage].sectionProjects.soffitConsulting.description;
    projectsRickMortyDescription.innerHTML = languages[currentLanguage].sectionProjects.rickAndMorty.description;
    projectsPetitGlaceDescription.innerHTML = languages[currentLanguage].sectionProjects.petitGlace.description;
    projectsVruumDescription.innerHTML = languages[currentLanguage].sectionProjects.vruum.description;
    projectsCloudMasterDescription.innerHTML = languages[currentLanguage].sectionProjects.cloudMaster.description;

    // ========== Knowledges ==========
    knowledgesTitle.innerHTML = languages[currentLanguage].sectionKnowledges.title;
    knowledgesSubtitle.innerHTML = languages[currentLanguage].sectionKnowledges.subtitle;

    knowledgesHtmlCard.setAttribute("title", languages[currentLanguage].sectionKnowledges.html.altTitle);
    knowledgesCssCard.setAttribute("title", languages[currentLanguage].sectionKnowledges.css.altTitle);
    knowledgesSassCard.setAttribute("title", languages[currentLanguage].sectionKnowledges.sass.altTitle);
    knowledgesLessCard.setAttribute("title", languages[currentLanguage].sectionKnowledges.less.altTitle);
    knowledgesBootstrapCard.setAttribute("title", languages[currentLanguage].sectionKnowledges.bootstrap.altTitle);
    knowledgesBulmaCard.setAttribute("title", languages[currentLanguage].sectionKnowledges.bulma.altTitle);
    knowledgesTailwindCard.setAttribute("title", languages[currentLanguage].sectionKnowledges.tailwind.altTitle);
    knowledgesJavaScriptCard.setAttribute("title", languages[currentLanguage].sectionKnowledges.javaScript.altTitle);
    knowledgesJqueryCard.setAttribute("title", languages[currentLanguage].sectionKnowledges.jquery.altTitle);
    knowledgesVueCard.setAttribute("title", languages[currentLanguage].sectionKnowledges.vue.altTitle);
    knowledgesNuxtCard.setAttribute("title", languages[currentLanguage].sectionKnowledges.nuxt.altTitle);
    knowledgesGitCard.setAttribute("title", languages[currentLanguage].sectionKnowledges.git.altTitle);

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

    // ========== Contact ==========
    contactTitle.innerHTML = languages[currentLanguage].sectionContact.title;
    contactText.innerHTML = languages[currentLanguage].sectionContact.text;
    contactBtnContact.innerHTML = languages[currentLanguage].sectionContact.btnContact;

    contactBtnContact.setAttribute("title", languages[currentLanguage].sectionContact.altBtn);

    // ========== Form ==========
    footerFormTitle.innerHTML = languages[currentLanguage].footer.form.title;

	footerFormBtnSend.innerHTML = languages[currentLanguage].footer.form.btnSend;
    footerFormBtnSend.setAttribute("title", languages[currentLanguage].footer.form.altSend);

    footerFormName.setAttribute("placeholder", languages[currentLanguage].footer.form.yourName);
    footerFormEmail.setAttribute("placeholder", languages[currentLanguage].footer.form.yourEmail);
    footerFormMessage.setAttribute("placeholder", languages[currentLanguage].footer.form.yourMessage);

    footerFormName.setAttribute("title", languages[currentLanguage].footer.form.altField);
    footerFormEmail.setAttribute("title", languages[currentLanguage].footer.form.altField);
    footerFormMessage.setAttribute("title", languages[currentLanguage].footer.form.altField);

	footerFormNameError.innerHTML = languages[currentLanguage].footer.form.errorName;
	footerFormEmailError.innerHTML = languages[currentLanguage].footer.form.errorEmail;
	footerFormMessageError.innerHTML = languages[currentLanguage].footer.form.errorMessage;

	// ========== Social Media ==========
	footerSocialInstagram.setAttribute("title", languages[currentLanguage].footer.socialMedia.instagram);
	footerSocialLinkedin.setAttribute("title", languages[currentLanguage].footer.socialMedia.linkedin);
	footerSocialGitHub.setAttribute("title", languages[currentLanguage].footer.socialMedia.gitHub);
	footerSocialGitLab.setAttribute("title", languages[currentLanguage].footer.socialMedia.gitLab);
});