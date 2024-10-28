import React from 'react';
import { connect } from 'react-redux';

// map redux state to the component props
const mapStateToProps = (state) => ({
  count: state.count,
});

// map dispatch actions to component props
// dispatch() trigers state changes in redux store
// can have actions folder separately to define type & payload
const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch({ type: 'INCREMENT', payload: 'payload test' }),
  decrement: () => dispatch({ type: 'DECREMENT' }),
});

function App({ count, increment, decrement }) {
  return (
    <div>
      <h3>Count: {count}</h3>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

// export default App;
export default connect(mapStateToProps, mapDispatchToProps)(App);