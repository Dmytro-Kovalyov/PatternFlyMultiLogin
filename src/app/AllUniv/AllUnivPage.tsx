import React from 'react';
import { 
  Grid,
  Card,
  CardHeader,
  CardHeaderMain,
  CardTitle,
  CardBody,
  CardFooter,
  PageSection
  } from '@patternfly/react-core';

class AllKNUPage extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {

    return (
      <PageSection className="pf-m-limit-width pf-m-align-center">
        <div
          className="pf-u-w-100"
          style={{maxWidth: "1200px"}}
        >
          <Grid
            hasGutter
            xl2={3}
            xl={3}
            lg={6}
            md={6}
            sm={12}
            className="pf-u-px-lg pf-u-pt-3xl pf-u-pb-lg"
          >
            <Card isHoverable isSelectable isLarge>
              <CardHeader>
                <CardHeaderMain>
                </CardHeaderMain>
                </CardHeader>
                <CardTitle>Header</CardTitle>
                <CardBody>Body</CardBody>
                <CardFooter>Footer</CardFooter>
            </Card>
            <Card isHoverable isSelectable isLarge>
              <CardHeader>
                <CardHeaderMain>
                </CardHeaderMain>
                </CardHeader>
                <CardTitle>Header</CardTitle>
                <CardBody>Body</CardBody>
                <CardFooter>Footer</CardFooter>
            </Card>
            <Card isHoverable isSelectable isLarge>
              <CardHeader>
                <CardHeaderMain>
                </CardHeaderMain>
                </CardHeader>
                <CardTitle>Header</CardTitle>
                <CardBody>Body</CardBody>
                <CardFooter>Footer</CardFooter>
            </Card>
            <Card isHoverable isSelectable isLarge>
              <CardHeader>
                <CardHeaderMain>
                </CardHeaderMain>
                </CardHeader>
                <CardTitle>Header</CardTitle>
                <CardBody>Body</CardBody>
                <CardFooter>Footer</CardFooter>
            </Card>
          </Grid>

          <hr className="pf-u-mx-lg pf-u-mt-lg" />

          <Grid
            hasGutter
            xl2={3}
            xl={3}
            lg={3}
            md={6}
            sm={12}
            className="pf-u-px-lg"
          >
            <Card isLarge isPlain>
              <CardHeader>
                <CardHeaderMain>
                </CardHeaderMain>
                </CardHeader>
                <CardTitle>Header</CardTitle>
                <CardBody>Body</CardBody>
                <CardFooter>Footer</CardFooter>
            </Card>
            <Card isLarge isPlain>
              <CardHeader>
                <CardHeaderMain>
                </CardHeaderMain>
                </CardHeader>
                <CardTitle>Header</CardTitle>
                <CardBody>Body</CardBody>
                <CardFooter>Footer</CardFooter>
            </Card>
            <Card isLarge isPlain>
              <CardHeader>
                <CardHeaderMain>
                </CardHeaderMain>
                </CardHeader>
                <CardTitle>Header</CardTitle>
                <CardBody>Body</CardBody>
                <CardFooter>Footer</CardFooter>
            </Card>
            <Card isLarge isPlain>
              <CardHeader>
                <CardHeaderMain>
                </CardHeaderMain>
                </CardHeader>
                <CardTitle>Header</CardTitle>
                <CardBody>Body</CardBody>
                <CardFooter>Footer</CardFooter>
            </Card>
          </Grid>
        </div>
      </PageSection>
      
    );
  }
}

export {AllKNUPage}