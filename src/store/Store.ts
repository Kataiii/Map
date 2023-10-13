import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { countryAPI } from "../services/CountriesService";
import { stateAPI } from "../services/StatesService";

const rootReducer = combineReducers({
    [countryAPI.reducerPath] : countryAPI.reducer,
    [stateAPI.reducerPath]: stateAPI.reducer
});

const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(countryAPI.middleware, stateAPI.middleware)
    });
}

export const store = setupStore();
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']