import { SharedReducer } from "../shared/state/shared.reducer";
import { SHARED_STATE_NAME } from "../shared/state/shared.selector";
import { SharedState } from "../shared/state/shared.state";

export interface AppSate{
    [SHARED_STATE_NAME]: SharedState
}


export const AppReducer = {
    [SHARED_STATE_NAME]: SharedReducer
}