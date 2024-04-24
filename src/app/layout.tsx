import type {Metadata} from "next";
import {PT_Sans_Caption} from "next/font/google";
import "./globals.css";
import StickyMenu from "@/app/Navbar";
import ContainerProvider from "@/app/ContainerProvider";
import {GoogleAnalytics, GoogleTagManager} from '@next/third-parties/google'
import Script from "next/script";


const sans_caption = PT_Sans_Caption({subsets: ['cyrillic', 'latin'], weight: ['400', '700']})

export const metadata: Metadata = {
    title: "🚗 Трезвый водитель Минск: Безопасное возвращение домой",
    description: "🌟 Ваш надежный партнер на дороге — Trezvy 🚗. С нами вы всегда в безопасности, независимо от времени и места 🌃. Наши опытные водители гарантируют вам спокойствие и уверенность в том, что ваш путь домой будет таким же приятным, как и вечер 🏠.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={sans_caption.className}>
        <GoogleAnalytics gaId="8008797785"/>
        <GoogleTagManager gtmId={"G-D9NWJ5P27W"}/>
        <Script id="yandex-metrika" strategy="afterInteractive">
            {`(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)}; 
        m[i].l=1*new Date(); 
        k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
      })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
      
      ym(97120978, "init", {
        defer: true,
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
        webvisor:true
      });`}
        </Script>
        <noscript>
            <div>
                <img src="https://mc.yandex.ru/watch/97120978" style={{position:"absolute",left:"-9999px"}} alt="ya_metrika"/>
            </div>
        </noscript>
        <ContainerProvider>
            <StickyMenu/>
            {children}
        </ContainerProvider>
        </body>
        </html>
    );
}
