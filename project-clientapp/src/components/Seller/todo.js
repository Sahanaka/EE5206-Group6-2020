import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import './style1.css'


class todo extends Component {
  constructor(props){
    super(props);

    this.state={
      newItem:"",
      list:[],
      
    }
  }

  updateInput(key, value){
    //update react state
    this.setState({
      [key]: value
    })
  }
  addItem(){
    //create item with unique id
    const newItem={
      id:1 + Math.random(),
      value: this.state.newItem.slice()
    };

    //copy of current list of items
    const list = [...this.state.list];

    //add new item to list
    list.push(newItem);

    //update state
    this.setState({
      list,
      newItem:""
    });
  }
  deleteItem(id){
    //copy current list of item
    const list = [...this.state.list];

    //filter out item being deleted
    const updatedList = list.filter(item => item.id !== id)

    this.setState({list: updatedList});
  }
    render() {
      return(
        <div className="todo1">
          <div>
            
          
            <input className="input"
            type="text"
            placeholder="Type Item here..."
            value={this.state.newItem}
            onChange={e => this.updateInput("newItem", e.target.value)}
            />
            <button className="button" onClick={() =>this.addItem()}>
            Add
            </button>
            <br/>
            <ul>
              {this.state.list.map(item => {
                return(
                  <li className="input1" key={item.id}>
                    {item.value}
                    <button className="button1" onClick={() => this.deleteItem(item.id)}>
                       X
                    </button>
                  </li>
                )
              })}
            </ul>
          </div>  
        </div>

      );
    }
  }

  export default todo;
