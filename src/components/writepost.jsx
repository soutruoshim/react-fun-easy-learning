import React, { Component } from "react";
import axios from "axios";
export default class WritePost extends Component{
    state= {
        title:"",
        body:""
    }
    formSubmit = (e) =>{
        e.preventDefault(); // this page not load
        axios.post('https://jsonplaceholder.typicode.com/posts', {
            title: this.state.title,
            body: this.state.body
          })
          .then(function (response) {
              console.log('success')
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });

    }
    render(){
        return(
            <div>
                <div class="container-sm">
                <div class="card">
                    <div class="card-body">
                        <form onSubmit={this.formSubmit}>
                            <div class="mb-3">
                                <label class="form-label">Title</label>
                                <input type="text" class="form-control" id="title" name="title" onChange={e=>{this.setState({title:e.target.value})}} />
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Body</label>
                                <textarea class="form-control" id="body" name="body" onChange={e=>{this.setState({body:e.target.value})}}></textarea>
                            </div>
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}