import * as actions from "../actions/sample";
import { Sample } from "../store";
import { INITIAL_STATE } from "./initialState";

export function sampleReducer(
  state: Sample[] = INITIAL_STATE.samples,
  action: typeof actions.updateSampleList.shape
): Sample[] {
  switch (action.type) {
    case actions.updateSampleList.type:
      return action.payload;
    default:
      return state;
  }
}
