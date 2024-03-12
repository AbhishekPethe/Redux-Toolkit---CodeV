A store that holds the state of your application.
An action that describes what happened in the application.
A reducer which handles the action and decides how to update the state.


---Three Principles---

First Principle :
"The global state of your application is stored as an object inside a single store"
Maintain our application state in a single object which would be managed by the Redux store

Second Principle : 
"The only way to change the state is to dispatch an action, an object that describes what
happened"
To update the state of your app, you need to let Redux know about that with an action
Not allowed to directly update the state object

Third Principle :
"To specify how the state tree is updated based on actions, you write pure reducers"
Reducer - (previousState, action) => newState


![Redux Principle](https://github.com/AbhishekPethe/Redux-Toolkit-CodeV/assets/82797230/7a362b07-6ab3-4d52-828d-b6faad9a9555)



---Actions---

The only way your application can interact with the store
Carry some information from your app to the redux store
Plain JavaScript objects
Have a 'type' property that describes something that happened in the
application.
The 'type' property is typically defined as string constants



---Reducers---

Specify how the app's state changes in response to actions sent to the store
Function that accepts state and action as arguments, and returns the next state
of the application
(previousState, action) => newState


---Redux Store---

One store for the entire application
Responsibilities -
- Holds application state
- Allows access to state via getState()
- Allows state to be updated via dispatch(action)
- Registers listeners via subscribe(listener)
- Handles unregistering of listeners via the function returned by subscribe(listener)



--MiddleWare--
MiddleWare is used as a extension for third party functionalities.
It is executed during dispatching the action and moment it reaches the reducer.

--redux-thunk--
Thunk is used for async operations in redux