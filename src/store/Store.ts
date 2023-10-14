import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { atmAPI } from "../services/ATMsService";
import { countryAPI } from "../services/CountriesService";
import { workDayAPI } from "../services/DaysService";
import { departamentAPI } from "../services/DepartamentsSetvice";
import { localityAPI } from "../services/LocalitiesService";
import { stateAPI } from "../services/StatesService";

const rootReducer = combineReducers({
    [countryAPI.reducerPath] : countryAPI.reducer,
    [stateAPI.reducerPath]: stateAPI.reducer,
    [localityAPI.reducerPath]: localityAPI.reducer,
    [departamentAPI.reducerPath]: departamentAPI.reducer,
    [atmAPI.reducerPath]: atmAPI.reducer,
    [workDayAPI.reducerPath]: workDayAPI.reducer
});

const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
            countryAPI.middleware, 
            stateAPI.middleware, 
            localityAPI.middleware,
            departamentAPI.middleware,
            atmAPI.middleware,
            workDayAPI.middleware
        )
    });
}

export const store = setupStore();
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']