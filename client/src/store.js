import { combineReducers } from 'redux';
import { applyMiddleware, createStore } from 'redux'
import { thunk } from 'redux-thunk';

import { composeWithDevTools } from '@redux-devtools/extension';
import {registerContentCreatorReducer,getCreatorRequestReducer,getAllCreatorReducer} from './reducers/creator_reducer'

const rootReducer = combineReducers({

    registerContentCreatorReducer,getAllCreatorReducer,getCreatorRequestReducer
})


const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store;