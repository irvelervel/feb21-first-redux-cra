import './App.css'
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap'

const mapStateToProps = (state) => state

// const mapStateToProps = (state) => ({
//   paul: state.count,
// })

// the properties of the Redux Store we want to receive as props
// mapStateToProps is a function returning AN OBJECT
// this object will hold the properties we want to receive as props

const mapDispatchToProps = (dispatch) => {
  return {
    increaseCounter: () => {
      dispatch({
        type: 'INCREMENT',
        // this is the action
      })
    },
    decreaseCounter: () => {
      dispatch({
        type: 'DECREMENT',
      })
    },
  }
}

// mapDispatchToProps as well is a function returning an object
// this object will have as many methods as you want
// each one of these methods will come as a prop to App

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <Button onClick={props.increaseCounter}>INCREASE</Button>
        <p>{props.count}</p>
        <Button onClick={props.decreaseCounter}>DECREASE</Button>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
// the result of this will be a HOC (high order component)
// similar to the router implementation, we're enriching the props of App
// the additional props the component is going to receive are:
// - the values from the Redux Store (read-only)
// - the capability of dispatching actions, therefore to create new states
// these two new set of props are called mapStateToProps and mapDispatchToProps
