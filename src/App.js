import React, { useEffect, useState } from 'react';
import MouseReporterAssembled from './components/mouse-reporter-assembled';
import ExampleFunctionComponent from './components/example-function-component';
import './App.css';



class ComponentList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      componentList: [
        {
          'name': 'MouseReporterAssembled',
          'description': 'Mouse reporter',
          'component': <MouseReporterAssembled />
        },
        {
          'name': 'ExampleFunctionComponent',
          'description': 'Example function component',
          'component': <ExampleFunctionComponent />
        }
      ]
    }
  }

  componentChangeHandler = (component) => {
    this.props.onChange(component);
  }

  render() {
    const buttons = this.state.componentList.map((compInfo, idx) => (
      <div key={idx}><button className="component-list-button" onClick={() => this.componentChangeHandler(compInfo)}>{compInfo.name}</button></div>
    ));
    return <div className="component-list">{buttons}</div>
  }
}

function App() {
  const [component, setComponent] = useState(<></>);
  const [description, setDescription] = useState("Please select a component");
  const changeComponentHandler = compInfo => {
    setComponent(compInfo.component);
    setDescription(compInfo.description);
  }
  return (
    <div className="App">
      <div className="main-window">
        <div className="nav">
          <ComponentList onChange={changeComponentHandler} />
        </div>
        <div className="splitter">

        </div>
        <div className="component-view">
          <div className="component-view-description">
          {description}
          </div>
          <div className="component-view-component">
          {component}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
