import { createRootRoute, Outlet, useNavigate } from "@tanstack/react-router";
import { useState } from "react"

export const Route = createRootRoute({
    component: Root,
});

function Hamburger() {
    return (
        <div className="right-3 bg-amber-200 h-40 w-20 absolute z-1">
            <button>All</button>
        </div>
    )
}

function Root() {
    const [hamIsClicked, setHamIsClicked] = useState(false);
    const navigate = useNavigate();

    const hamMenu = () => {
        if (hamIsClicked) {
            setHamIsClicked(false)
        } else {
            setHamIsClicked(true)
        }
    }
    return (
        <>
            <div className="flex justify-between px-6 mb-10">
                <h1>Kanzard</h1>
                <div className="flex justify-around gap-30">
                    <button onClick={() => navigate({ to: "/home" })}>Home</button>
                    <button>1</button>
                    <button>2</button>
                </div>
                <button onClick={hamMenu}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5h16" /><path d="M4 12h16" /><path d="M4 19h16" /></svg></button>
            </div>
            {hamIsClicked && <Hamburger />}

            <Outlet />
        </>
    )
}