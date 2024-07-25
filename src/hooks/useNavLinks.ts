import { usePathname } from "next/navigation"

interface NavLink {
    href: string;
    label: string;
    active: boolean;
    icon?: string;
}

export const useNavLinks = () => {
    const pathname = usePathname();
    return [
        {href: "/", label: "Home", active: pathname === "/", icon: "ic:baseline-home"},
        {href: "/about", label: "About Me", active: pathname === "/about", icon: "tabler:user-filled"},
        {href: "/services", label: "Services", active: pathname === "/services", icon: "eos-icons:service"},
        {href: "/projects", label: "Projects", active: pathname === "/projects", icon: "dashicons:portfolio"},
        {href: "/contact", label: "Contact", active: pathname === "/contact", icon: "dashicons:format-chat"},
    ] as NavLink[];
}
