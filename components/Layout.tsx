import { useEffect, useState } from "react";
import anime from "animejs";

type LayoutProps = {
    children: React.ReactNode
}

const Layout = ({children}: LayoutProps) => {
    const [animationRef, setAnimationRef] = useState<ReturnType<typeof anime> | undefined>();
    useEffect(() => {
        setAnimationRef(
            anime({
              targets: '.title-path',
              strokeDashoffset: [anime.setDashoffset, 0],
              easing: 'easeInOutSine',
              duration: 8000,
              delay: function(el, i) { return i * 250 },
              direction: 'alternate',
              loop: false
            }),
        );
    }, []);

    return (
        <main className="min-h-screen">
            {children}
        </main>
    )
}
export default Layout