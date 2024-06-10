import { usePathname } from "next/navigation"

interface NavLink {
    href: string;
    label: string;
    active: boolean;
    className?: string;
}

export const useNavLinks = () => {
    const pathname = usePathname();
    return [
        {href: "/", label: "Home", active: pathname === "/"},
        {href: "/about", label: "About Me", active: pathname === "/about"},
        {href: "/services", label: "Services", active: pathname === "/services"},
        {href: "/projects", label: "Projects", active: pathname === "/projects"},
        {href: "/contact", label: "Contact", active: pathname === "/contact"},
    ] as NavLink[];
}
