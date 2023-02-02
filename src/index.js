import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component {
// Supprimez le constructor de Square, puisqu’il ne maintient plus son propre état local ->
// constructor(props) {
//   super(props);
//   this.state = {
//     value: null,
//   };
// }

  // remplacer {this.state.value} par this.props.value
  // Remplacez this.setState() par this.props.onClick() dans la méthode render de Square
  render() {
    return (
      <button
      className="square"
      onClick={() => this.props.onClick()}
      >
        {this.props.value}
      </button>
    );
  }
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // Ajout constructeur  Board qui définiton état initial en 1 tableau de 9 nulls pour les 9 cases
      squares: Array(9).fill(null),
    };
  }

  // Lorsque nous cliquons sur un Square, nous devrions obtenir une erreur parce que nous n’avons pas encore défini handleClick. Nous allons donc l’ajouter dans la classe Board :
handleClick(i) {
  const squares = this.state.squares.slice();
  squares[i] = 'X';
  this.setState({squares: squares});
}

  renderSquare(i) {
    return (
      <Square
        // Nous passons désormais deux props de Board à Square : value et onClick
        value={this.state.squares[i]}
        // fonction de Board au Square, qui sera appelée par Square en réponse aux clics
        onClick={() => this.handleClick(i)}
      />
    );
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
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

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);
