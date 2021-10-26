let currentWorkspace = localStorage.getItem("currentWorkspace")
let token = sessionStorage.getItem("token")

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

  //new google.translate.TranslateElement({ pageLanguage: 'en', layout: google.translate.TranslateElement.InlineLayout.SIMPLE, autoDisplay: false }, 'google_translate_element')

}