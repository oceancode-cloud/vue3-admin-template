import type { App } from 'vue';
import { createI18n } from 'vue-i18n'
import { useI18n } from "vue-i18n";
import { I18nPlugin,PluginType,useRouter } from '@oceancode/ocean-wui'

// const localLang = navigator.language.split('-')[0];
// const storageLang = window.localStorage.getItem('locale')?.split('"')[1].split('"')[0].toLocaleLowerCase() || 'en';
// const c = (storageLang.toLocaleLowerCase() !== 'zh' && storageLang.toLocaleLowerCase() !== 'en') ? 'en' : storageLang;


function loadLanguageAsync(i18n,lang:string) {
  const file = lang.replace('-','')
  return import(/* webpackChunkName: "lang-request" */`../i18n/${file}.json`).then((langfile) => {
    i18n.global.setLocaleMessage(lang, langfile);
    i18n.global.locale = lang;
  })
}

function convertLang(lang:string){
  return lang
}

export function i18nPlugin(i18n,app:App){
  const api = {
    name: PluginType.I18N,
    async setLang(lang: string){
      i18n.global.locale = lang
      window.localStorage.setItem('locale',lang)
      await loadLanguageAsync(i18n,lang)
    },
    getDefaultLang(){
      return convertLang(navigator.language)
    },
    getLang(){
      return convertLang(window.localStorage.getItem('locale'))
    },
    t(arg1:string,arg2:string){
      let resourceId = arg1
      let key = arg2
      if(arg1 && !arg2){
        resourceId = useRouter().getResourceId()
        key = arg1
      }
      
      const targetKey = `${resourceId ? resourceId+'.':''}${key}`
      console.log('====i18n',targetKey)
      return i18n.global.t(targetKey)
    }
  }
  return api
}

let i18n
export function setupI18n(app:App){
  i18n =  createI18n({
    locale: navigator.language,
    fallbackLocale:navigator.language,
    globalInjection: false,
    allowComposition: true,
    silentTranslationWarn:true,
    legacy:false
  })
  app.use(i18n)
  return i18n
}

