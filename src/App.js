import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

// class App extends React.Component {
//   render() {
//     return (
//       <div className="App">
//            <h1>Home Page</h1>
//       </div>
//     );
//   }
// }
// export default App;
// export const App = () =>{
//    const [count, setCount] = useState(1);

//    return (
//      <div>
//          <h1>Clicking me {count} </h1>
//          <button onClick={()=>{setCount(count + 1)}}>Click me</button>
//      </div>
//    )
// }
class App extends Component{
  state ={
    count: 0
  }
  increase = () =>{
    this.setState({count: this.state.count + 1});
  }
  render(){
    return (
         <div>
           <h1>Click me {this.state.count}</h1>
           <button onClick={this.increase}>Click</button>
         </div>
    );
  }
}
export default App;

