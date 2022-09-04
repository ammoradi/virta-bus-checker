import {ActionType, Action} from './store.actions'

export const initialState = {
  baseTime: new Date().getTime()
}

type State = typeof initialState

export const reducer = (state: State, action: Action<unknown>): State => {
  switch (action.type) {
    case ActionType.SET_BASE_TIME: {
      return {
        ...state,
        baseTime: action.payload as number
      }
    }

    default:
      return state
  }
}