import { SET_POSITION } from '@/store/Actions/Common/PositionActions/index';

const initialState = 0;

const positionReducer = (state = initialState, action: { type: string; payload: number }) => {
    switch (action.type) {
        case SET_POSITION:
            return action.payload;
        default:
            return state;
    }
};

export default positionReducer;
