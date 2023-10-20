import { CashActionTypes, ICashState, UserAction } from "../../type/cash";

const initialState: ICashState = {
  cash: 5,
};

const cashReducer = (state = initialState, action: UserAction): ICashState => {
  switch (action.type) {
    case CashActionTypes.ADD_CASH:
      return { ...state, cash: state.cash + action.payload };

    case CashActionTypes.GET_CASH:
      return { ...state, cash: state.cash - action.payload };

    default:
      return state;
  }
};

export default cashReducer;
