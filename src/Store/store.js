// import { compose, createStore, applyMiddleware } from 'redux';
// import logger from 'redux-logger';

// import { rootReducer } from './root.reducer';

// const loggerMiddelware = (store)=>(next)=>(action) =>{
//   if(!action.type){
//     return next(action);
//   }

//   console.log('type:',action.type);
//   console.log('payload:',action.payload);
//   console.log('currentState:',store.getState());

//   next(action);
// }

// const middleWares = [process.env.NODE_ENV === 'development' && loggerMiddelware].filter(
//   Boolean
// );

// const composedEnhancers = compose(applyMiddleware(...middleWares));

// export const store = createStore(rootReducer, undefined, composedEnhancers);


import {compose,createStore,applyMiddleware} from 'redux';

// import logger from 'redux-logger;'

import { rootReducer } from './root.reducer';

const middleWares = []

const composeEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(rootReducer,undefined,composeEnhancers);