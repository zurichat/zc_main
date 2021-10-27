import { LandingPage } from "./translations/pages/landing"
import { NavBar } from "./translations/nav"
import { Footer } from "./translations/footer"






export const googleTranslateElementInit = async () => {
  const lang = localStorage.getItem("myLanguage")
  ? localStorage.getItem("myLanguage")
  : "en"
  let locale = '/en/' + lang
  if(lang === 'zh'){
    locale = '/en/zh-CN'
  }
  let expires = new Date();
  expires.setTime(expires.getTime() + (1 * 24 * 60 * 60 * 1000));
  document.cookie = 'googtrans' + '=' + locale + ';expires=' + expires.toUTCString();
  // new google.translate.TranslateElement({ pageLanguage: 'en', layout: google.translate.TranslateElement.InlineLayout.SIMPLE, autoDisplay: false }, 'google_translate_element')

}


export const getTranslations =  () => {
  const resources = {};
  let langData = [ ...LandingPage, ...NavBar, ...Footer ]
  langData.forEach((o) => {
    Object.keys(o).forEach((key) => {
      var langCode = String, langKey =  String, langKeyVal = String;
      if (key !== "key") {
        langCode = key;
        langKey = o.key;
        langKeyVal = o[key];
        if (resources[langCode] === undefined) {
          resources[langCode] = {
            translation: {},
          };
        }
        resources[langCode].translation[langKey] = langKeyVal;
      }
    });
  });

  return resources

}