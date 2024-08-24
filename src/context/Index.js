'use client'
import { useGetAllblog, useGetAllProject } from "@/hooks";
import { createContext, useContext } from "react";

export const Global = createContext()

export const GlobalContext = ({ children }) => {
    const { data: blogAllData, isLoading: isBlogLoading, setData: setBlogAllData } = useGetAllblog();
    const { data: projectAllData, isLoading: isProjectLoading, setData: setProjectAllData } = useGetAllProject();

    return (
        <Global.Provider value={{ blogAllData, setBlogAllData, projectAllData, setProjectAllData }}>
            {children}
        </Global.Provider>
    )
}
export const useGlobalContext = () => {
    return useContext(Global)
}