import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    originalData: [],
    filteredData: [],
    price: [20, 220],
    category: "any",
    sale: "any",
    size: "any",
    sortType: "default"
};

const prodSlice = createSlice({
    name: "prodSlice",
    initialState,
    reducers: {
        saveDataToState: (state, { payload }) => {
            state.originalData = payload;
            state.filteredData = payload;
        },
        saveChange: (state, { payload }) => {
            state[payload.name] = payload.value
        },
        filter: (state, action) => {
            let tempData = [...state.originalData];


            tempData = tempData.filter((item) => (
                item.price >= state.price[0] && item.price <= state.price[1]
            ));

            if (state.category !== "any") {
                tempData = tempData.filter((item) => {
                    return item.category === state.category;
                });
            }

            if (state.size !== "any") {
                tempData = tempData.filter((item) => {
                    return item.size === state.size;
                });
            }

            if (state.sale !== "any") {
                tempData = tempData.filter((item) => item.sale === true);
            }

            state.filteredData = tempData;

        },
        sortData: (state, { payload }) => {
            state.sortType = payload;
            if (payload === "max") {
                state.filteredData.sort((a, b) => b.price - a.price);
            } else if (payload === "min") {
                state.filteredData.sort((a, b) => a.price - b.price);
            }
        },
        clearFilters: (state) => {
            state.category = "any";
            state.price = [20, 220];
            state.size = "any";
            state.sale = "any";
            state.filteredData = state.originalData;
        }
    },
});
export default prodSlice.reducer;

export const { saveDataToState, saveChange, filter, clearFilters, sortData } = prodSlice.actions;
