
import clsx from "clsx";
import { twMerge } from "tw-merge";


function cn (...inputs){
    return twMerge(clsx(...inputs))

}
export default cn