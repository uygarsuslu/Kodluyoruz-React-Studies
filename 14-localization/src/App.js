import './App.css';

// aktif dil neyse onu tutması için //
import { useState, useEffect } from "react";

import { IntlProvider, FormattedMessage } from 'react-intl'

const messages = {
  "tr-TR": {
    title: "merhaba dunya",
    description: "{count} yeni mesajiniz var"
  },
  "en-US": {
    title: "hello world",
    description: "you have {count} new messages"
  }
}

function App() {

  // ***** BU KISIM ÖNEMLİ ***** //
  // const defaultLocale = navigator.language;
  const isLocale = localStorage.getItem("locale");
  const defaultLocale = isLocale ? isLocale : navigator.language;
  const [locale, setLocale] = useState(defaultLocale);

  // browser dili türkçeyse ve biz ingilizce butonuna bastıktan sonra sayfayı yenilediğimizde tekrardan türkçe getiriyorsa localstorage'a yazıcaz ve sonraki kullanımlarda da eğer localstorage'da bir dil tanımı varsa oradan kullanmasına zorlayacağız, yoksa da navigator altındaki nesneyi kullanmaya çalışacağız //

  useEffect(() => {
    localStorage.setItem("locale", locale)
  }, [locale])

  return (
    <div className="App">
      <IntlProvider locale={locale} messages={messages[locale]}>

        <FormattedMessage id="title" />
        <p>
          <FormattedMessage id="description" values={{ count: 5 }} />
        </p>

        <br /> <br />

        <button onClick={() => setLocale("tr-TR")}>TR</button>
        <button onClick={() => setLocale("en-US")}>EN</button>

      </IntlProvider >
    </div >
  );
}


export default App;
