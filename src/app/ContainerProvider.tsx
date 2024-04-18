'use client'
import {PropsWithChildren, ReactNode} from "react";
import {useTransform, useMotionValue, useScroll} from "framer-motion";
import StickyMenu from "@/app/Navbar";

export default function ContainerProvider({children}: { children: ReactNode }) {
    const {scrollY} = useScroll()

    const offsetY = [0, 100]
    console.log(scrollY);
    return <div>

        {children}
    </div>
}
