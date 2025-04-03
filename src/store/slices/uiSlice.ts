import {UIState} from "@/store/types/UIState";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState: UIState = {
    isLoading: false,
    isError: false,
    isSuccess: false,
    errorMessage: '',
    successMessage: '',
    showModal: false,
    showToast: false,
}

export const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload
        },
        setError: (state, action: PayloadAction<string>) => {
            state.isError = true
            state.errorMessage = action.payload
        },
        setSuccess: (state, action: PayloadAction<string>) => {
            state.isSuccess = true
            state.successMessage = action.payload
        },
        setShowModal: (state, action: PayloadAction<boolean>) => {
            state.showModal = action.payload
        },
        setShowToast: (state, action: PayloadAction<boolean>) => {
            state.showToast = action.payload
        },
    },
})

export const {
    setLoading,
    setError,
    setSuccess,
    setShowModal,
    setShowToast,
} = uiSlice.actions

export default uiSlice.reducer