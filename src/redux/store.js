import { createStore } from "redux";
import { rootReducers } from "./reducers";

// STORE : Attaché à l'app React - Accessible depuis tous les composants
export const store = createStore(rootReducers)