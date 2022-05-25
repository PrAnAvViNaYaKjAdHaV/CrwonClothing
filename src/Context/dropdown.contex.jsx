import { createContext,useState } from "react";
const p =[1,2,3,4,5];
export const DropdownContext = createContext({
    dropdownlist:[],
})

export const DropdownProvider = ({children}) =>{
    const [dropdownList, setDropdownList] = useState(p);
    // setDropdownList(p);
    const value = {dropdownList};
    return (
        <DropdownContext.Provider value={value}>{children}</DropdownContext.Provider>
    )
}