import React from 'react'
import { Route } from 'react-router-dom'
import UsfulContext from './UsfulContext'
import NavBar from './NavBar/NavBar'
import News from './News/News'
import Resources from './Resources/Resources'
import Statistics from './Statistics/Statistics'
import Symptoms from './Symptoms/Symptoms'
import BestPractices from './BestPractices/BestPractices'
import SignIn from './SignIn/SignIn'
import SignUp from './SignUp/SignUp'
import GettingStarted from './GettingStarted/GettingStarted'

class App extends React.Component {
  state = {
    articles: [],
    stats: {
      countries: [],
      global: []
    },
    store: []
  };

  render() {
    const value = {
      articles: this.state.articles,
      statistics: this.state.articles,
    }

    return (
      <UsfulContext.Provider value={value}>
        <div className='App'>
          <NavBar />
          <main className="App__main">
            {/* {this.renderMainRoutes()} */}
            <Route exact path="/" component={GettingStarted} />
            <Route exact path="/resources" component={Resources} />
            <Route exact path="/statistics" component={Statistics} />
            <Route exact path="/symptoms" component={Symptoms} />
            <Route exact path="/best-practices" component={BestPractices} />
            <Route exact path="/news" component={News} />
            <Route exact path="/sign-up" component={SignUp} />
            <Route exact path="/sign-in" component={SignIn} />
          </main>
        </div>
      </UsfulContext.Provider>
    );
  }
}

export default App;