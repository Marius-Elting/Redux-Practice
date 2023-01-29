import redux from "redux"



const counterReducer = (state = { counter: 0 }, action) => {
    if (action.type === "increment") {
        return {
            counter: state.counter + 1
        }
    }
    if (action.type === "decrement") {
        return {
            counter: state.counter - 1
        }
    }

    return state
}


const store = redux.createStore(counterReducer)

const couterSubcriber = () => {
    const latestState = store.getState()
    console.log(latestState)
}

store.subscribe(couterSubcriber)


store.dispatch({ type: "increment" })
store.dispatch({ type: "decrement" })