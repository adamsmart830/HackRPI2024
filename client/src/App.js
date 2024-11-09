import './App.css';
import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);

const App = () => {
  return (
    <Authenticator>
      {({ signOut }) => (
        <div className="App">
          <Header signOut={signOut} />
          HELLO MAPS
        </div>
      )}
    </Authenticator>
  );
};

export default App;
