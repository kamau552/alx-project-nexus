"use client";
import React from 'react'
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';


export default function ThemeToggle() {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const theme = localStorage.getItem("theme");
        if (theme === 'dark') {
            setDarkMode(true);
             document.documentElement.classList.add("dark");
        } else {
            setDarkMode(false);
            document.documentElement.classList.remove("dark");
        }
    }, []);
    
    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [darkMode]);

    {/*useEffect(() => {
        // Apply the initial theme based on localStorage
        const initialTheme = localStorage.getItem("theme"); 
        if (initialTheme === 'light') {
            document.documentElement.classList.add("light");
        } else {
            document.documentElement.classList.remove("light");
        }
    }, []);*/}

    const toggleTheme = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div className="inline-block ml-12 mr-0 items-center justify-center bg-white  rounded-full p-1 cursor-pointer">
            <div 
                onClick={toggleTheme}
                className={`flex h-4 w-8 cursor-pointer rounded-full border border-gray-800 ${
                    darkMode ? "justify-end bg-blue-950" : "justify-start bg-white"
                } p-[1px]`}
            >
                <motion.div
                    className={`h-3 w-3 rounded-full ${
                        darkMode ? "bg-white" : "bg-blue-950"
                    }`}
                    layout
                    transition={{ type: "spring", stiffness: 700, damping: 30 }}
                />
            </div>
        </div>
    );
}