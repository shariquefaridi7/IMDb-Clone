'use client'
import { useState, useEffect } from "react";
import { useTheme } from 'next-themes';
import { MdLightMode, MdDarkMode } from 'react-icons/md';

const DarkModeSwitch = () => {
    const { theme, setTheme, systemTheme } = useTheme();
    const current = theme === 'system' ? systemTheme : theme;

    const [mount, setMount] = useState(false);
    useEffect(() => {
        setMount(true)
    }, [])

    return (
        <div>
            {
                mount &&
                (current === 'dark' ? (<MdLightMode className="text-xl cursor-pointer hover:text-amber-500"
                    onClick={() => setTheme('light')} />) : (
                    <MdDarkMode className="text-xl cursor-pointer hover:text-amber-500"
                        onClick={() => setTheme('dark')} />
                ))
            }
        </div>
    )
}

export default DarkModeSwitch
