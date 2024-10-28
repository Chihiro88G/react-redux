import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from './reducers/store-reduxtoolkit';

function App() {
  const count = useSelector((state) => state.count.value);

  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment('payload test increment'));
  };

  const handleDecrement = () => {
    dispatch(decrement('payload test decrement'));
  };

  return (
    <div>
      <h3>Count: {count}</h3>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default App;