import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';
class Square extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null,
        };
    }
    render() {
        return (
            <button
                className="square"
                OnClick={() => this.setState.props.OnClick()}
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
            squares: Array(9).fill(null),
        };
    }
    handleClick(i){
        const squares=this.state.squares.slice();
        squares[i]='X';
        this.setState({squares: squares})
    }
    renderSquare(i) {
        return (
            <Square
                value={this.state.squares[i]}
                OnClick={() => this.handleClick(i)}
            />
               );
    }

    render() {
        const status = 'Next Player:X';
        return (
            <div>
                <div className="status">{status}</div>
                <div className="Board-Row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="Board-Row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="Board-Row">
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
                <div className="Board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>{/*status*/}</div>
                    <ol>{/*ToDo*/}</ol>
                </div>
            </div>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />)