'use client'

import {UIState} from "@/store/types/UIState";
import React from "react";

interface UIContextProps {
    ui: UIState | null
    setUI: (ui: UIState) => void
}

const UIContext = React.createContext<UIContextProps | undefined>(undefined)

export const UIProvider = ({ children }: { children: React.ReactNode }) => {
    const [ui, setUI] = React.useState<UIState | null>(null)

    return (
        <UIContext.Provider value={{ ui, setUI }}>
            {children}
        </UIContext.Provider>
    )
}

export const useUI= () => {
    const context = React.useContext(UIContext)
    if (context === undefined) {
        throw new Error('the function useUI must be used within a UIProvider')
    }
    return context
}