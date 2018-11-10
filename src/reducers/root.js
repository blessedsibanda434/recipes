import { combineReducers } from 'redux';
import recipesReducer from './recipes-reducer';
import ingredientsReducer from './ingredients-reducer';

const rootReducer = combineReducers({
    recipes: recipesReducer,
    ingredients: ingredientsReducer
});

export default rootReducer;