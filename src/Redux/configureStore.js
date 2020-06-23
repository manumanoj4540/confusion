import { createStore, combineReducers } from 'redux';
import { Dishes } from './dishes'
import { Comments } from './comments'
import { Leaders } from './leaders'
import { Promotions } from './promotions'
import { createForms } from 'react-redux-form';
import { InitialFeedback } from './forms'

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            dishes : Dishes,
            comments : Comments,
            leaders : Leaders,
            promotions : Promotions,
            ...createForms({ feedback : InitialFeedback })
        })
    );

    return store;
}