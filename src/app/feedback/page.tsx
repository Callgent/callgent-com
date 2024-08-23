'use client';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import { useTheme } from 'next-themes';
import axios from '@/util/axios';

const Feedback = () => {
    const router = useRouter();
    const { theme } = useTheme();
    // Run the Canny script, integrating the feedback component.
    useEffect(() => {
        const BoardToken = process.env.NEXT_PUBLIC_CANNY_API_BOARDTOKEN;
        let userInfo: any = localStorage.getItem('userinfo');
        userInfo = userInfo && JSON.parse(userInfo);
        if (!userInfo) {
            router.push('/signin');
        } else {
            // https://developers.canny.io/install/widget/web
            (function (w: any, d, i, s) {
                function l() {
                    if (!d.getElementById(i)) {
                        var f = d.getElementsByTagName(s)[0],
                            e = d.createElement(s) as HTMLScriptElement;;
                        (e.type = "text/javascript"),
                            (e.async = !0),
                            (e.src = "https://canny.io/sdk.js"),
                            f.parentNode.insertBefore(e, f);
                    }
                }
                if ("function" !== typeof w.Canny) {
                    var c = function () {
                        c.q.push(arguments);
                    } as { (): void; q: any[]; };
                    (c.q = []),
                        (w.Canny = c),
                        "complete" === d.readyState
                            ? l()
                            : w.attachEvent
                                ? w.attachEvent("onload", l)
                                : w.addEventListener("load", l, !1);
                }
                const user = {
                    avatarURL: userInfo.avatar, // optional, but preferred
                    email: userInfo.id + '@callgent.com',
                    id: userInfo.id,
                    name: userInfo.name,
                };
                const cannyJwt = localStorage.getItem('canny');
                const Render = (ssoToken) => {
                    w.Canny('render', {
                        boardToken: BoardToken,
                        basePath: '/feedback',
                        ssoToken: ssoToken,
                        theme: theme,
                    });
                };
                if (!cannyJwt) {
                    axios.post('/jwt', user).then((req) => {
                        req?.data?.jwt && localStorage.setItem('canny', req.data.jwt);
                        Render(req?.data?.jwt);
                    });
                } else {
                    Render(cannyJwt);
                }
            })(window, document, "canny-jssdk", "script");
        }
    }, [router, theme]);
    return (
        <section className="relative overflow-hidden pt-[100px] lg:pt-[150px] min-h-80">
            <div data-canny />
        </section>
    );
};

export default Feedback;
