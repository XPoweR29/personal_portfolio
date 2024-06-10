import { AppContext } from "@/context/AppContext";
import {useContext} from "react";

export const useBreakpoints = () => {
    const {breakpoint} = useContext(AppContext)!;

    if(breakpoint === undefined) {
        throw new Error ("useBreakpoints hook must be used within ContexProvider");
    };

    return {breakpoint};
};
