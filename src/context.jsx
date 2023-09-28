import { createContext, useState, useContext } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    //₋Sidebar Functions ₋
    const openSidebar = () => {
        setIsSidebarOpen(true);
    }
    
        const closeSidebar = () => {
        setIsSidebarOpen(false);
    }
    

    //₋Moodal Functions ₋
    const openModal = () => {
        setIsModalOpen(true);
    }
    
        const closeModal = () => {
        setIsModalOpen(false);
    }
    
    
    
    return (
        <AppContext.Provider value={{isSidebarOpen, openSidebar, closeSidebar, isModalOpen, openModal, closeModal}}>
            {children}
        </AppContext.Provider>
    )
};

export const useGlobalContext = () => {
    return useContext(AppContext);
}