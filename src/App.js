import React, { Component } from "react";
import HeaderComponent from "./HeaderComponent";
import List from "./List";
import FormSubmit from "./FormSubmit";
import ListItem from "./ListItem";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        todos: [
            {id: 1, name: "Eatting", Component: false },
            {id: 2, name: "Sleepping", Component: false },
            {id: 3, name: "Watch Movie", Component: false },
            {id: 4, name: "Dinner", Component: false },
        ],
        message:""
     };

     this.onChangeMessage = this.onChangeMessage.bind(this);
     this.onSubmitMessage = this.onSubmitMessage.bind(this);
}

onChangeMessage(e){//เพิ่มข้อมูล
  this.setState({message: e.target.value});
}

onSubmitMessage(e){
  //ป้องกันการรีโหลดหน้า
  e.preventDefault();
  let oldTodos = this.state.todos;
  let todoLength = this.state.todos.length;
  let lastId = this.state.todos[todoLength -1].id;
  let newMessage = {
    id: lastId + 1,
    name: this.state.message,
    complete: false
  };
  oldTodos.push(newMessage);
  this.setState({todos: oldTodos})
}

  render() {
    return (
      <div
        style={{
          borderColor: "#e12c6a",
          borderWidth: 2,
          borderStyle: "solid",
          borderRadius: 4,
          width: 1024,
          margin: "auto",
          marginTop: 20
        }}
      >
        <HeaderComponent/>
        <List todos={this.state.todos}/>          
       <FormSubmit  
                    onChangeMessage={this.onChangeMessage} 
                    onSubmitMessage={this.onSubmitMessage}
        />
      </div>
    );
  }
}

export default App;