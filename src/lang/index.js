import en from './en'
import es from './es'

const browserLang = navigator.language.split('-')[0]

let exportedLang = en

if(browserLang === 'es') {
    exportedLang = es
}

export default exportedLang