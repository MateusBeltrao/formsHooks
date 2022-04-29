import { createContext, useState } from "react";

export const CustomerContext = createContext()


export const CustomerProvaider = ({children})  => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const handleSubit = ({name, email}) => {
        console.log("Dados App", {name, email})
        setName(name)
        setEmail(email)
    }

    return(
        <CustomerContext.Provider value={{name, email, submit: handleSubit}}>
            {children}
        </CustomerContext.Provider>
    )
}