import React from "react";
class App extends React.Component {
  render() {
    const names = [
      {
        name: "Sout",
        age: 29,
        grade: 3.5,
      },
      {
        name: "Rahim",
        age: 30,
        grade: 4.5,
      },
      {
        name: "Khan",
        age: 28,
        grade: 3.6,
      },
    ];
    const items = names.map((item, idx) => {
      return (
        <li key={idx}>
          {" "}
          Name: {item.name}, Age: {item.age}, Grade: {item.grade}
          <button>Edit</button>
          <button>Delete</button>
        </li>
      );
    });
    return (
      <div className="App">
        <h1>Student List</h1>
        {items}
      </div>
    );
  }
}
export default App;
