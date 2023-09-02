import React, { useState, useEffect } from 'react';
import './Banner.css';

const Banner = () => {
    const [turn, setTurn] = useState(localStorage.getItem('turn') || '1');
    const bannerClass = turn === '2' ? 'banner yellow' : 'banner red';
    useEffect(() => {
        const interval = setInterval(() => {
            setTurn(localStorage.getItem('turn'));
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className={bannerClass}>
            {turn === '2' ? "GG's turn" : "Bruh's turn"}
        </div>
    );
};

export default Banner;
