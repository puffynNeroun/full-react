import React, { useState, useEffect } from 'react';
import './burgerMenu.css'

const BurgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setIsOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div>
            {isOpen && (
                <div className="menu-overlay">
                    <ul className="menu-items">
                        <li>Главная</li>
                        <li>О нас</li>
                        <li>Меню</li>
                        <li>Контакты</li>
                    </ul>
                </div>
            )}
            <button className="menu-toggle" onClick={toggleMenu}>
                Меню
            </button>
        </div>
    );
};

export default BurgerMenu;
