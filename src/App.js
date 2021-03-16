import React from 'react';
import { Route, Link } from 'react-router-dom';
import NavBar from './../NavBar/NavBar'
import News from './../News/News';
import Resources from './Resources/Resources';
import Statistics from './Statistics/Statistics';
import SymptonsBestPractices from './SymptonsBestPractices/SymptonsBestPractices';

class App extends React.Component {
  state = {
    articles: [],
    statistics: []
  };
  
  // componentDidMount() {

  // }

  renderMainRoutes() {
    return (
      <>
        <Route path="/resources" component={Resources}/>
        <Route path="/statistics" component={Statistics}/>
        <Route exact path="symptons-and-best-practices" component={SymptonsBestPractices}/>
        <Route exact path="/news" component={News}/>
      </>
    )
  }



  render() {
    return (
      <main className='App'>
        <NavBar />
        <h1>Home/Demo Page</h1>
        <span>Offer of a demo and then starting point of site if declined</span>
        <button type="Get Started">Learn More</button>
      </main>
    );
  }
}

export default App;