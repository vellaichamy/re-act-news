import React, { Component } from "react";
import { render } from "react-dom";
import Hello from "./src/Hello";
import "./style.css";

// import React from "react";
// import ReactDOM from "react-dom";
// import { Router, Route, IndexRoute, hashHistory } from "react-router";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// import Archives from "./src/pages/Archives";
import Featured from "./src/pages/Featured";
import Layout from "./src/pages/Layout";
import Settings from "./src/pages/Settings";


import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./src/page/Home";
import About from "./src/page/About";
import ArticleListing from "./src/page/ArticleListing";
import Article from "./src/page/Article";

function App() {
  return (
    <div>
      <h1>not the father component?</h1>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/articles">Articles</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/articles">
            <ArticleListing />
          </Route>
          <Route path="/articles/:articleSlug">
            <Article />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

const Contact = () => <h1>C O N T A C T</h1>;

export default App;


// import createHistory from 'history/createBrowserHistory';
// const history = createHistory();

// const Route = ({ path, component }) => {
//   const pathName = window.location.pathname;

//   if (pathName.match(path)) {
//     return (
//       React.createElement(component)
//     );
//   } else {
//     return null;
//   }
// };

// const Link = ({ to, children }) => (
//   <a
//     onClick={(e) => {
//       e.preventDefault();
//       history.push(to);
//     }}
//     href={to} >
//     {children}
//   </a>
// );

// class App extends React.Component {
//   componentDidMount() {
//     history.listen(() => this.forceUpdate());
//   }
//   render() {
//     return (
//       <div
//         className='ui text container'
//       >
//         <h2 className='ui dividing header'>
//           Which body of water?
//         </h2>

//         <ul>
//           <li>
//             <Link to='/atlantic'>
//               <code>/atlantic</code>
//             </Link>
//           </li>
//           <li>
//             <Link to='/pacific'>
//               <code>/pacific</code>
//             </Link>
//           </li>
//         </ul>

//         <hr />

//         <Route path='/atlantic' component={Archives} />
//         <Route path='/pacific' component={Pacific} />
//       </div>
//     );
//   }
// }

// const Atlantic = () => (
//   <div>
//     <h3>Atlantic Ocean</h3>
//     <p>
//       The Atlantic Ocean covers approximately 1/5th of the
//       surface of the earth.
//     </p>
//   </div>
// );

// const Pacific = () => (
//   <div>
//     <h3>Pacific Ocean</h3>
//     <p>
//       Ferdinand Magellan, a Portuguese explorer, named the ocean
//       'mar pacifico' in 1521, which means peaceful sea.
//     </p>
//   </div>
// );

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   useRouteMatch,
//   useParams
// } from "react-router-dom";

// export default function App() {
//   return (
//     <Router>
//       <div>
//         <ul>
//           <li>
//             <Link to="/">Archives</Link>
//           </li>
//           <li>
//             <Link to="/about">About</Link>
//           </li>
//           <li>
//             <Link to="/topics">Topics</Link>
//           </li>
//         </ul>

//         <Switch>
//           <Route path="/about">
//             <About />
//           </Route>
//           <Route path="/topics">
//             <Topics />
//           </Route>
//           <Route path="/">
//             <Archives />
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// function Archives() {
//   return <h2>Archives</h2>;
// }

// function About() {
//   return <h2>About</h2>;
// }

// function Topics() {
//   let match = useRouteMatch();

//   return (
//     <div>
//       <h2>Topics</h2>

//       <ul>
//         <li>
//           <Link to={`${match.url}/components`}>Components</Link>
//         </li>
//         <li>
//           <Link to={`${match.url}/props-v-state`}>
//             Props v. State
//           </Link>
//         </li>
//       </ul>

//       {/* The Topics page has its own <Switch> with more routes
//           that build on the /topics URL path. You can think of the
//           2nd <Route> here as an "index" page for all topics, or
//           the page that is shown when no topic is selected */}
//       <Switch>
//         <Route path={`${match.path}/:topicId`}>
//           <Topic />
//         </Route>
//         <Route path={match.path}>
//           <h3>Please select a topic.</h3>
//         </Route>
//       </Switch>
//     </div>
//   );
// }

// function Topic() {
//   let { topicId } = useParams();
//   return <h3>Requested topic ID: {topicId}</h3>;
// }

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       name: "React"
//     };
//   }
//   // <Router history={hashHistory}>
//         //   <Route path="/" component={Layout}>
//         //     <IndexRoute component={Featured} />
//         //     <Route
//         //       path="archives(/:article)"
//         //       name="archives"
//         //       component={Archives}
//         //     />
//         //     <Route path="settings" name="settings" component={Settings} />
//         //   </Route>
//         // </Router>
//   render() {
//     return (
      
//       <div>
//         <Hello name={this.state.name} />
//  <Router>
//       <div>
//         <nav>
//           <ul>
//             <li>
//               <Link to="/">Archives</Link>
//             </li>
//             <li>
//               <Link to="/about">About</Link>
//             </li>
//             <li>
//               <Link to="/users">Users</Link>
//             </li>
//           </ul>
//         </nav>

//         {/* A <Switch> looks through its children <Route>s and
//             renders the first one that matches the current URL. */}
//         <Switch>
//           <Route path="/about">
//             <About />
//           </Route>
//           <Route path="/users">
//             <Users />
//           </Route>
//           <Route path="/">
//             <Archives />
//           </Route>
//         </Switch>
//       </div>
//     </Router>
      
//         <p>Start editing to see some magic happen :)</p>
//       </div>
//     );
//   }
// }

render(<App />, document.getElementById("root"));
