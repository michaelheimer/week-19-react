// Include the Main React Dependencies
var React = require("react");
var ReactDOM = require("react-dom");
import { BrowserRouter, Match, Miss, Link } from 'react-router';

// Include the Main Component
var Main = require("./components/Main");
var Home = require("./components/Home");
var All  = require("./components/All");
//var App  = require("./components/App");

// This code here allows us to render our main component (in this case Main)
//ReactDOM.render(<Main />, document.getElementById("root"));

 var destination = document.querySelector("#root");


var App = React.createClass({
  render: function() {
    return (
      <div>
        <ul className="header">
          <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
          <li><Link to="/search" activeClassName="active">Search</Link></li>
          <li><Link to="/results" activeClassName="active">Search Results</Link></li>
        </ul>
        <div className="content">
          {this.props.children}
        </div>
      </div>
    )
  }
});
  ReactDOM.render(
  <Router>
    <Route path="/" component={App}>
    <IndexRoute component={Home}/>
      <Route path="/search" component={Main} />
      <Route path="/results" component={All} />
    </Route>
  </Router>, 
  destination
); 
  
  





// onst BasicExample = () => (
//   <Router>
//     <div>
//       <ul>
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/about">About</Link></li>
//         <li><Link to="/topics">Topics</Link></li>
//       </ul>

//       <hr/>

//       <Match exactly pattern="/" component={Home} />
//       <Match pattern="/about" component={About} />
//       <Match pattern="/topics" component={Topics} />
//     </div>
//   </Router>
// )