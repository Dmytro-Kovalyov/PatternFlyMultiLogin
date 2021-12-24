import React from 'react';
import {
  Grid,
  GridItem,
  PageSection,
  Title
} from '@patternfly/react-core';
import {MultiLoginFormTranslated} from "./MultiLoginForm"
import {withTranslation} from "react-i18next";

class MultiLoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }

    this.loginTitle={
      'en': "Log in to your account",
      'ua': "Увійдіть у свій обліковий запис"
    }

    this.loginSubtitle={
      'en': "Enter your single sign-on LDAP credentials.",
      'ua': "Введіть облікові дані LDAP для єдиного входу."
    }
    
    this.textContent={
      'en': "Taras Shevchenko National University of Kyiv",
      'ua': "Київський національний університет імені Тараса Шевченка"
    }
  }

  render() {
    const { t } = this.props;

    const images = {
      lg: '/assets/images/pfbg_1200.jpg',
      sm: '/assets/images/pfbg_768.jpg',
      sm2x: '/assets/images/pfbg_768@2x.jpg',
      xs: '/assets/images/pfbg_576.jpg',
      xs2x: '/assets/images/pfbg_576@2x.jpg'
    };

    return (
      <PageSection className="pf-m-limit-width pf-m-align-center pf-u-pt-3xl pf-u-background-color-dark-300">
        <Grid
          hasGutter
          xl2={6}
          xl={6}
          lg={6}
          md={12}
          sm={12}
          className="pf-u-px-lg pf-u-pt-3xl pf-u-pb-lg"
          style={{maxWidth: "1200px"}}
        >
          <GridItem
            className="pf-u-background-color-100 pf-u-px-2xl pf-u-py-2xl"
            style={{maxWidth: "568px"}}
          >
            <Title headingLevel="h1" size="3xl">
              {t("loginPage.title")}
            </Title>
            <Title headingLevel="h2" size="lg" className="pf-u-mt-lg">
              {t("loginPage.subtitle")}
            </Title>
            <MultiLoginFormTranslated
            />
          </GridItem>
          <GridItem
            className="pf-u-color-400 pf-u-px-2xl pf-u-py-2xl"
            style={{maxWidth: "568px"}}
          >
            {t("loginPage.content")}
          </GridItem>
        </Grid>
      </PageSection>
    );
  }
}

const MultiLoginPageTranslated = withTranslation('common')(MultiLoginPage)
export {MultiLoginPageTranslated}