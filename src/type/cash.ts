export const ADD_CASH = "ADD_CASH";
export const GET_CASH = "GET_CASH";

export enum CashActionTypes {
  ADD_CASH = "ADD_CASH",
  GET_CASH = "GET_CASH",
}

interface ICashAdd {
  type: CashActionTypes.ADD_CASH;
  payload: number;
}

interface ICashGet {
  type: CashActionTypes.GET_CASH;
  payload: number;
}

export interface ICashState {
  cash: number;
}

export type UserAction = ICashAdd | ICashGet;
