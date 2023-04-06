import React from "react";
import "./AddList.css";
class AddList extends React.Component {
  state = {
    todo: "",
  };
  add = (e) => {
    e.preventDefault();
    if (this.state.todo === "") {
      alert("Not Added Any Task");
      return;
    }
    console.log(this.state);
    this.props.addListHandler(this.state);
    this.setState({todo:''})
  };
  render() {
    return (
      <div className="AddList">
        <form onSubmit={this.add}>
          <div className="inputs">
            <input
              type="text"
              placeholder="Write here!"
              value={this.state.todo}
              onChange={(e) => this.setState({ todo: e.target.value })}
            />
            <button >Add</button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddList;
