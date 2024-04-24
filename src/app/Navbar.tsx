'use client'
import {motion, useMotionValueEvent, useScroll,} from 'framer-motion';
import React, {useState} from 'react';
import clsx from 'clsx'
import Image from 'next/image'
import Link from "next/link";
import img from '../assets/yKEFdG3JSD212a7L-mYSBQ_1-removebg-preview 1.png'
import {IoPhonePortraitOutline} from "react-icons/io5";

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
            className={clsx(`max-w-[1440px] m-auto w-full flex sticky top-0 z-50 h-[70px] justify-between items-center text-white bg-black/80 px-4`)}
        >
            <div className={'w-[170px] h-[50px]'}>
                <Image className={'w-full'}
                       src={img}
                       alt=""/>
            </div>
            <ul className={`gap-3 justify-center items-center hidden sm:flex`}>
                <Link href={'#price'}>
                    <li>Цены</li>
                </Link>
                <Link href={'/'}>
                    <li>Преимущества</li>
                </Link>
                <Link href={'/'}>
                    <li>Контакты</li>
                </Link>
            </ul>
            <a href="tel:+375333854577"
                  className={'flex sm:hidden bg-green-500 text-4xl cursor-pointer p-2 rounded-full'}><IoPhonePortraitOutline/></a>
        </motion.div>
    );
};

export default StickyMenu