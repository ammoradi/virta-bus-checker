export enum ActionType {
  SET_BASE_TIME = 'SET_BASE_TIME'
};

export type Action<T> = {
  type: ActionType
  payload: T
};

export const setBaseTimeAction = <T extends number>(baseTime: T): Action<T> => ({
  type: ActionType.SET_BASE_TIME,
  payload: baseTime
});