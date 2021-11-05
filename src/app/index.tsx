import * as React from 'react';
import '@patternfly/react-core/dist/styles/base.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppLayout } from '@app/AppLayout/AppLayout';
import { AppRoutes } from '@app/routes';
import '@app/app.css';
import '@patternfly/react-styles/css/utilities/Sizing/sizing.css'
import '@patternfly/react-styles/css/utilities/Spacing/spacing.css'
import '@patternfly/react-styles/css/utilities/BackgroundColor/BackgroundColor.css'
import '@patternfly/react-styles/css/utilities/Text/Text.css'
//import '@patternfly/patternfly/patternfly.css'

const App: React.FunctionComponent = () => (
  <Router>
    <AppLayout>
      <AppRoutes />
    </AppLayout>
  </Router>
);

export default App;
