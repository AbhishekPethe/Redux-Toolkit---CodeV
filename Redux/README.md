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