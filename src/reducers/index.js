import { combineReducers } from 'redux';
import main from './main';
import basket from './basket';

export default combineReducers({
	main,
	basket,
});
