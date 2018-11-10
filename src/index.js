import store from './store'
import { addRecipe } from './actions/recipes'
import { addIngredient } from './actions/ingredients'

store.dispatch(addRecipe('Pancake'));
store.dispatch(addIngredient('Omelette', 'Eggs', 3));


console.log('This is great')