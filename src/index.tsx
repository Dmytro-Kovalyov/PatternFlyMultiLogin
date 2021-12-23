import React from "react";
import ReactDOM from "react-dom";
import App from '@app/index';
import {I18nextProvider} from "react-i18next";
import i18next from "i18next";

import common_ua from "./app/translations/ua/common.json";
import common_en from "./app/translations/en/common.json";

i18next.init({
  interpolation: { escapeValue: false },  // React already does escaping
  
  lng: 'en',                              // language to use
  resources: {
      en: {
          common: common_en               // 'common' is our custom namespace
      },
      ua: {
          common: common_ua
      },
  },
});

if (process.env.NODE_ENV !== "production") {
  const config = {
    rules: [
      {
        id: 'color-contrast',
        enabled: false
      }
    ]
  };
  // eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
  const axe = require("react-axe");
  axe(React, ReactDOM, 1000, config);
}

ReactDOM.render(
  <I18nextProvider i18n={i18next}>
    <App />
  </I18nextProvider>,
  document.getElementById("root") as HTMLElement
);
