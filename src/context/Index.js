"use client";
import { useGetAllblog, useGetAllProject, useGetAllSuggestion } from "@/hooks";
import { createContext, useContext } from "react";

export const Global = createContext();

export const GlobalContext = ({ children }) => {
    const {
        data: blogAllData,
        isLoading: isBlogLoading,
        setData: setBlogAllData,
    } = useGetAllblog();
    const {
        data: projectAllData,
        isLoading: isProjectLoading,
        setData: setProjectAllData,
    } = useGetAllProject();
    const {
        data: suggestionAllData,
        isLoading: isSuggestionLoading,
        setData: setSuggestionAllData,
    } = useGetAllSuggestion();

    return (
        <Global.Provider
            value={{
                blogAllData,
                setBlogAllData,
                isBlogLoading,
                projectAllData,
                isProjectLoading,
                setProjectAllData,
                suggestionAllData,
                isSuggestionLoading,
                setSuggestionAllData,
            }}
        >
            {children}
        </Global.Provider>
    );
};
export const useGlobalContext = () => {
    return useContext(Global);
};
