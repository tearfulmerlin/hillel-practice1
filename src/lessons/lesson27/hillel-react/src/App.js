import { useState, Component } from 'react';
import logo from './logo.svg';
import './App.css';

// const user = {
//   name: 'test',
//   age: 33,
// }

// user.name

// const name = user.name;
// const { name, age, home } = user;
// const { age } = user;

// console.log(name, age);

// const arr = [1,2,3];

// const one = arr[0];
// const two = arr[1];
// const [varOne, two] = arr;
// const [_, two] = arr;



const Header = ({ data, setCount }) => {
  return (
    <header className="App-header">
      <NoActionButton></NoActionButton>
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <Button title="header" globalCount={data} setCount={setCount}/>
    </header>
  )
}

const Content = ({ data, setCount }) => {
  return (
    <>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
      <br />
      <Button title={(() => "content 1")()} globalCount={data} setCount={setCount} />
      <br />
      {/* <Button title="content 2"/> */}
      <Button/>
    </>
  )
}

const NoActionButton = () => <button>no actoin</button>;


class Button extends Component {
  state = { count: 0 };

  handler = () => {
    const { globalCount, setCount } = this.props;
    const { count } = this.state;
    console.log('clicked');
    setCount(globalCount + 1)
    this.setState({ count: count + 1 })
  }

  constructor(props) {
    super(props);

    this.title = props.title;
    if (props.startCount) {
      this.state = props.startCount;
    }
  }

  render() {
    // return this.props.title && (
    //   <button onClick={this.handler}>click me from
    //     {
    //       typeof title === 'function'
    //         ? this.props.title()
    //         : this.props.title
    //     }
    //     {' '}
    //     {this.state.count}
    //   </button>
    // )


    return this.props.title 
      ? (
        <button onClick={this.handler}>click me from
          {
            typeof this.props.title === 'function'
              ? this.props.title()
              : this.props.title
          }
          {' '}
          {this.state.count}
          {'; '}
          {'global: ' + this.props.globalCount}
        </button>
      )
      : null;
}

}

const Footer = ({ title }) => { // title === undefined
  return (
    <Button title={() => 'function title'}  />
  )
}

function App() {
  const [data, setData] = useState(0);

  return (
    <div className="App">
      <Header data={data} setCount={setData}/>
      <Content data={data} setCount={setData} />
      <Footer data={data} setCount={setData} />
    </div>
  );
}

export default App;


// const someFunc = () => ({ name: 'john' })
{/* <button onclick={hendler()}>click me</button>
const button = document.querySelector('button');
button.onClick = (evevnt) => {}; */}

// button.addEventListener('click', () => {});