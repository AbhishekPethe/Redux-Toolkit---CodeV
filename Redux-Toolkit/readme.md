--Extra Reducers--
In Redux , when we dispatch the actions , all the reducers listen to it.
It is upto the reducer whether to ignore it or execute it
But in the case of Redux-Toolkit , the reducer from particular slice will listen to the actions
dispatched from that own slices only 
This is where the concept of Extra reducers comes in
