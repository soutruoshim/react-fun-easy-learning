import React from "react";
class App extends React.Component {
 state = {
   email: "",
   password: "",
   emailError:'',
   passwordError:''
 }


 validate(){
   if(true){

   }else if(true){

   }
 }
 formSubmit = (e) => {
   e.preventDefault();
   if(this.validate()){
     alert("Form Submit is Done.");
   }
 }
 
 render() {
   return (
     <div className="App">
       <h1>Email: {this.state.email}</h1>
       <h1>Password: {this.state.password}</h1>
       <div>
         <form onSubmit={this.formSubmit}>
           <div class="form-group" style={{ marginLeft: 200 }}>
             <label>Email: </label><br></br>
             <input type="text" name="email" onChange={(e) => { this.setState({ email: e.target.value }) }}></input><br></br>
             <strong style={{color: 'red'}}>Email and Password Invalid</strong><br></br>
             <label>Password: </label><br></br>
             <input type="text" name="password" onChange={(e) => { this.setState({ password: e.target.value }) }}></input><br></br>
             <strong style={{color: 'red'}}>Email and Password Invalid</strong><br></br>
             <button type="submit">Submit</button>
           </div>
         </form>
       </div>
     </div>
   )
 }
}
export default App;

