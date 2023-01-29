import { useSelector, useDispatch } from 'react-redux';
import classes from './Counter.module.css';
import { coutnerActions } from "../store/index"

const Counter = () => {
  const counter = useSelector(state => state.counter.counter)
  const showCounter = useSelector(state => state.counter.showCounter)
  const dispatch = useDispatch()

  const incrementHandler = () => {
    dispatch(coutnerActions.increment())
  }
  const incrementby5Handler = () => {
    dispatch(coutnerActions.increase(5))
  }
  const decrementHandler = () => {
    dispatch(coutnerActions.decrement())

  }
  const toggleCounterHandler = () => {
    dispatch(coutnerActions.toggleCounter())

  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value} >{counter}</div>}
      <div>
        <button onClick={incrementHandler}>increment</button>
        <button onClick={incrementby5Handler}>increment by 5</button>
        <button onClick={decrementHandler}>decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main >
  );
};

export default Counter;
