import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app';
import 'bootstrap/dist/css/bootstrap.css'

// class WhoAmI extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       years: 26
//     }
//     // this.nextYear = this.nextYear.bind(this)


//     this.nextYear = () => {
//       this.setState(state => ({
//         years: ++this.state.years
//       }))
//     }

//   }
//   // nextYear() {
//   //   this.setState(state => ({
//   //     years: ++state.years
//   //   }))
//   // }
//   render() {
//     const { name, surname, link } = this.props
//     const { years } = this.state
//     return (
//       <>
//         <button onClick={this.nextYear}>+++++</button>
//         <h1>My name is {name},
//        surname {surname},
//     years {years}</h1>
//         <a href={link}>Link</a>
//       </>
//     )
//   }
// }

// function WhoAmI({ name, surname, link }) {
//   return (
//     <>
//       <h1>My name is {name},
//        surname {surname}</h1>
//       <a href={link}>Link</a>
//     </>
//   )
// }

// const All = () => {
//   return (
//     <>
//       <WhoAmI name="John" surname="Smith" link="Facebook" />
//       <WhoAmI name="Alex" surname="Smith" link="Facebook" />
//       <WhoAmI name="Ivan" surname="Smith" link="Facebook" />
//     </>
//   )
// }

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

