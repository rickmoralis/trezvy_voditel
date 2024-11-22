import type { Metadata } from "next";
import { PT_Sans_Caption } from "next/font/google";
import "./globals.css";
import StickyMenu from "@/app/Navbar";
import ContainerProvider from "@/app/ContainerProvider";
import { GoogleAnalytics } from '@next/third-parties/google';
import Script from "next/script";

// Подключение шрифта PT Sans Caption
const sans_caption = PT_Sans_Caption({ subsets: ['cyrillic', 'latin'], weight: ['400', '700'] });

// Метаданные страницы
export const metadata: Metadata = {
    title: "🚗 Трезвый водитель Минск: Безопасное возвращение домой",
    description: "🌟 Ваш надежный партнер на дороге — Trezv 🚗. С нами вы всегда в безопасности, независимо от времени и места 🌃. Наши опытные водители гарантируют вам спокойствие и уверенность в том, что ваш путь домой будет таким же приятным, как и вечер 🏠.",
};

// Главный компонент макета
export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={sans_caption.className}>
        <ContainerProvider>
            <StickyMenu />
            {children}
        </ContainerProvider>
        </body>
        </html>
    );
}
