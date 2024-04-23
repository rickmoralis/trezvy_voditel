'use api'
import {PropsWithChildren, ReactNode} from "react";
import {useTransform, useMotionValue, useScroll} from "framer-motion";
import StickyMenu from "@/app/Navbar";

export default function ContainerProvider({children}: { children: ReactNode }) {
    return <div>
        {children}
    </div>
}
