import React, { createContext } from "react";

interface SpotAddedTrigger {
    trigger: boolean;
    setTrigger: React.Dispatch<React.SetStateAction<boolean>>;
}

const defaultTriggerValue: SpotAddedTrigger = {
    trigger: false,
    setTrigger: () => {},
};

export const AppContext = createContext<SpotAddedTrigger>(defaultTriggerValue);
