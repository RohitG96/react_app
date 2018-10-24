import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

class Square extends React.Component {
  constructor(props) {
    super(props)
  }

  handleClick = (e) => {
    console.log(e.currentTarget.value)
    var value = e.currentTarget.value
    this.props.changeState(value)
  }

  render() {
    return (
      <Button variant="flat" className="square" color="primary" value={this.props.value} onClick={this.handleClick}>
        {this.props.value}
      </Button>
    );
  }
}

class Board extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ''
    }
  }
  changeStateText = (inp) => {
    if (inp == 'DEL') {
      if (this.state.text.length != 0)
        this.setState({ text: (this.state.text).slice(0, -1) })
    }
    else if(inp == '=')
    {
      var result = 0
      try{
        result = eval(this.state.text)}
      catch(err){
        result = 'wrong expression'
      }
      this.setState({text: result})
    }
    else {
      this.setState({ text: this.state.text + inp })
    }
  }
  renderSquare = (i) => {
    return <Square value={i} changeState={this.changeStateText} />;
  }
  handleChange = (e) => {
    e.currentTarget.value = this.state.text
  }
  render() {

    return (
      <div style={{ width: "258px" }}>
        <div className="status"><Input type='text' value={this.state.text} fullWidth={true} onChange={this.handleChange} /></div>
        <div className="board-row">
          {this.renderSquare(1)}
          {this.renderSquare(2)}
          {this.renderSquare(3)}
          {this.renderSquare('+')}
        </div>
        <div className="board-row">
          {this.renderSquare(4)}
          {this.renderSquare(5)}
          {this.renderSquare(6)}
          {this.renderSquare('-')}
        </div>
        <div className="board-row">
          {this.renderSquare(7)}
          {this.renderSquare(8)}
          {this.renderSquare(9)}
          {this.renderSquare("*")}
        </div>
        <div className="board-row">
          {this.renderSquare('DEL')}
          {this.renderSquare(0)}
          {this.renderSquare('=')}
          {this.renderSquare('/')}
        </div>

      </div>
    );
  }
}

// class Game extends React.Component {
//   render() {
//     return (
//       <div className="game">
//         <div className="game-board">
//           <Board />
//         </div>
//         <div className="game-info">
//           <div>{/* status */}</div>
//           <ol>{/* TODO */}</ol>
//         </div>
//       </div>
//     );
//   }
// }

// ========================================

// ReactDOM.render(
//   <Game />,
//   document.getElementById('root')
// );

export default App;

