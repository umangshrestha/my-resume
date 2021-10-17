import './App.css';
import React from 'react';
import 'font-awesome/css/font-awesome.min.css';

import Table, {Extra, AboutMe}  from './components/table';
import PersonalDetails  from './components/personalDetails';
import Skills  from './components/skills';

class App extends React.Component {
 
  constructor(props) {
    // initializing
    super(props);
    this.experience = require("./details/resume.json");
  }

  componentDidMount() {
    // Setting title of page
    document.title = "Resume";
    document.body.style.backgroundColor = "lightbrown";
  }

  render() {
    return (
       
        <div  className="container">
          <PersonalDetails /> 

          <div className="main">
            <AboutMe details={this.experience.AboutMe} />
            <Table
              details={this.experience.Experience}  
              icon="fa fa-briefcase"
              title="Experience" />
            <Table
              details={this.experience.Internship}
              icon="fa fa-industry"
              title="Internship" />
            <Table details={this.experience.Education}
              icon="fa fa-graduation-cap"
              title="Education" />   
            <Extra details={this.experience.Extra} />
          </div>
          <Skills />

          
      </div>
    );
  }
}

export default App;

