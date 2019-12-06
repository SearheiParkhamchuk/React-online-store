import * as React from 'react';
import { connect } from 'react-redux'

export interface IAppProps {
}

class App extends React.Component<IAppProps> {
  public render() {
    return (
      <div>
        
      </div>
    );
  }
}

const mapState2Props = () => {
  return {
  };
}

export default connect(mapState2Props)(App);
