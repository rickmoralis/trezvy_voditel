'use client'
import {motion, useMotionValueEvent, useScroll,} from 'framer-motion';
import React, {useEffect, useState} from 'react';
import clsx from 'clsx'
import styles from './styles/styles.module.css'
import Link from "next/link";

const StickyMenu = () => {

    const {scrollY} = useScroll()
    const [hidden, setHidden] = useState(false)
    useMotionValueEvent(scrollY, 'change', (latest) => {
        const prev: any = scrollY.getPrevious()
        if (latest > prev && latest > 150) {
            setHidden(true)
        } else {
            setHidden(false)
        }
    })
    return (
        <motion.div
            className={clsx(`w-full flex sticky top-0 z-50 h-[70px] justify-between items-center text-white bg-black/80 px-4`)}
        >
            <div> logo</div>
            <ul className={`flex gap-3 justify-center items-center`}>
                <Link href={'/'}>
                    <li>Цены</li>
                </Link>
                <Link href={'/'}>
                    <li>Преимущества</li>
                </Link>
                <Link href={'/'}>
                    <li>Контакты</li>
                </Link>
            </ul>
        </motion.div>
    );
};

export default StickyMenu