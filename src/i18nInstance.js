import i18next from 'i18next'
import { reactI18nextModule } from 'react-i18next';

i18next
  .use(reactI18nextModule)
  .init({
    fallbackLng: 'en',
    debug: true,
    react: {
      wait: false,
    }
  })

export default i18next