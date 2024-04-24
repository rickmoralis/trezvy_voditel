"use client";


import Script from "next/script";

export default function YaMetrika() {


    // useEffect(() => {
    //     ym(97120978, "hit", window.location.href);
    // }, [pathname, searchParams]);

    return (
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
    );
}