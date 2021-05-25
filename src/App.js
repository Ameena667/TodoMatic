import React from "react";
import { v4 as uuidv4 } from "uuid";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        { id: uuidv4(), todo: "Eat", checked: "n" },
        { id: uuidv4(), todo: "Sleep", checked: "n" },
        { id: uuidv4(), todo: "Read", checked: "n" },
      ],
      display: "c",
      temp_add_todo: "",
      temp_edit_todo: "",
    };
  }
  //function for adding element to list
  add = () => {
    //var addtext = document.getElementById("addTodo").value;
    const todos = Object.assign([], this.state.todos);
    const addText = this.state.temp_add_todo;
    console.log(addText);
    if (addText !== "") {
      var temp_obj = { id: uuidv4(), todo: addText, checked: "n" };
      this.setState({
        todos: [...todos, temp_obj],
      });
      document.getElementById("addTodo").value = "";
    }
  };
  //function for editing element of list
  edit = (index, e) => {
    const todos = Object.assign([], this.state.todos);
    const edit_text = this.state.temp_edit_todo;
    //console.log(index.target.value);
    //var edit_text = document.getElementById("editText").value;
    if (edit_text !== "") {
      todos[index.target.value].todo = edit_text;
      this.setState({
        todos: todos,
      });
      document.getElementById("editText").value = "";
    }
  };
  //function for chaging checkbox values
  check = (index, e) => {
    const todos = Object.assign([], this.state.todos);
    console.log(index.target.value);
    var check_edit = todos[index.target.value].checked;
    if (check_edit === "c") {
      todos[index.target.value].checked = "n";
    } else {
      todos[index.target.value].checked = "c";
    }
    this.setState({ todos: todos });
  };
  //function for deleting item from list
  delete = (index, e) => {
    const todos = Object.assign([], this.state.todos);
    todos.splice(index.target.value, 1);
    this.setState({ todos: todos });
  };
  //button on click functions to set display state
  all = () => {
    this.setState({ display: "a" });
  };
  completed = () => {
    this.setState({ display: "c" });
  };
  active = () => {
    this.setState({ display: "n" });
  };
  temp_add_todo = (e) => {
    //console.log(e.target.value);
    this.setState({
      temp_add_todo: e.target.value,
    });
  };
  temp_edit_todo = (e) => {
    this.setState({
      temp_edit_todo: e.target.value,
    });
  };
  render() {
    console.log(this.state.todos);
    //console.log(this.state.temp_add_todo);
    return (
      <div className="App">
        <h1>Todo Matic</h1>
        <h2>What needs to be done?</h2>
        {/* UI elements for adding and editing state variables */}
        <p>
          <input id="addTodo" onChange={this.temp_add_todo} />
          <button onClick={this.add}>Add</button>
          <label> | Enter text for editing</label>
          <input id="editText" onChange={this.temp_edit_todo} />
        </p>
        {/* buttons UI, onclick for setting display state  */}
        <h2>choose an option to display corresponding results :)</h2>
        <p>
          <input type="radio" id="all" name="display" onClick={this.all} />
          <label>All</label>
          <input
            type="radio"
            id="completed"
            name="display"
            onClick={this.completed}
          />
          <label>Completed</label>
          <input
            type="radio"
            id="active"
            name="display"
            onClick={this.active}
          />
          <label>active</label>
        </p>

        <ul>
          {this.state.todos.map((tasks, index) => (
            <div style={{ border: "2px" }}>
              {tasks.checked === this.state.display ||
              this.state.display === "a" ? (
                <p>
                  <input
                    type="checkbox"
                    onClick={this.check}
                    value={index}
                    checked={tasks.checked === "c" ? true : false}
                  />
                  {tasks.todo}
                  <button onClick={this.edit} value={index}>
                    edit
                  </button>
                  <button onClick={this.delete} value={index}>
                    delete
                  </button>
                </p>
              ) : null}
            </div>
          ))}
        </ul>
      </div>
    );
  }
}
export default App;
