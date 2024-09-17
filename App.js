import logo from './logo.svg';
import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
  Outlet,
} from "react-router-dom";

// HomePage Component
// const Home = () => {
//   const navigate = useNavigate();
//   return(
//     <div>
//       <h2>Home Page</h2>
//       <button onClick={() => navigate("/contact")}>Go To Contact Page</button>
//     </div>
//   );
// };


// // About Page Component
// const About = () => {
//   <div>
//     <h2>About Us Page</h2>
//     <nav>
//       <ul>
//         <li>
//           <Link to="team">Our Team</Link>
//         </li>
//         <li>
//         <Link to="company">Our Company</Link>
//         </li>
//       </ul>
//     </nav>
//   <Outlet/>
//   </div>
// };
// Outlet tag is used to provide activation to the links used in the components

// Components for Other Pages
// const Contact = () => <h2>Contact Page</h2>;
// const Team = () => <h2>Team Page</h2>;
// const Company = () => <h2>Company Page</h2>;


// function App() {
//   return (
//     <Router>
//       <nav>
//       <ul>
//       <li>
//           <Link to="/">Home</Link>
//         </li>
//         <li>
//           <Link to="/about">About</Link>
//         </li>
//         <li>
//         <Link to="/contact">Contact</Link>
//         </li>
//       </ul>
//       </nav>
//       {/** Implement the Paths for Respective routes */}
//       <Routes>
//         <Route path="/" element={<Home/>} />
//         <Route path="/about" element={<About/>}>
//           <Route path="team" element={<Team/>} />
//           <Route path="company" element={<Company/>} />
//         </Route>
//         <Route path="/contact" element={<Contact/>} />
//       </Routes>
//     </Router>
//   );
// }


/***************** Lifecycle Implementation     *********************/


// 1. Constructor
// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {name: 'himanshu'};
//   }
//   render() {
//     return(
//       <div className='App'>
//         <h1>welcome {this.state.name}</h1>
//       </div>
//     );
//   }
// }


// 2. getDerivedStateFromProps(): It takes the state as an argument and returns null or object with 
// changes to the state

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {name: 'himanshu'};
//   }

//   static getDerivedStateFromProps(props) {
//     return {name: 'himanshu sharma'};
//   }
//   render() {
//     return(
//       <div className='App'>
//         <h1>welcome {this.state.name}</h1>
//       </div>
//     );
//   }
// }


// 3. render(): This method outputs the HTML to the DOM on browser
// class App extends React.Component {
 
//   render() {
//     return(
//       <div className='App'>
//         <h1>welcome To React JS Lifecycle</h1>
//       </div>
//     );
//   }
// }


// 4. componentDidMount(): After the component is rendered on browser this method is called and it
// works when element is ready in the DOM
// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {name: 'himanshu'};
//   }

//   componentDidMount() {
//     setTimeout(() => {
//       this.setState({name: 'himanshu sharma'})
//     }, 2000);
//   }
//   render() {
//     return(
//       <div className='App'>
//         <h1>welcome {this.state.name}</h1>
//       </div>
//     );
//   }
// }

/*************************  Lifecyle implementation Ends  *********************/


/************** Higher Order Components (HOC) Start ********************/

// Higher Order Component (HOC): It is an advance function, which reuses component logic in a 
// react component and returns an enhanced new component. HOC wraps up some modifications, or 
// props change or state change in same component to achieve goal to improve the performance
// and optimization of the component


const withLoading = (WrappedComponent) => {
  return function WithLoadingComponent (props) {
    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {
      setLoading(true);
      const timer = setTimeout(() => {
        setLoading(false);
      }, 3000);
      return () => clearTimeout(timer);
    }, []);
    return <WrappedComponent {...props} loading = {loading} />
  };
};



const MyComponent = ({loading}) => (
  <div>
    {loading ? <p>Loading !!!!</p>: <p>Data Loaded Successfully!!</p>}
  </div>
);

const EnhancedComponent = withLoading(MyComponent);

function App() {
  return(
    <>
    <EnhancedComponent />
    </>
  )
}
/************** Higher Order Components (HOC)  Ends********************/

export default App;
