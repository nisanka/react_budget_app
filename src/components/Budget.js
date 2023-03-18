import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { dispatch, budget, currency } = useContext(AppContext);
    const changeBudget = (val) => {
        dispatch({
            type: 'SET_BUDGET',
            payload: val,
        });
    };

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}</span>
            <input type="number" value={budget} step="10" onChange={event => changeBudget(event.target.value)} />
        </div>
    );
};
export default Budget;