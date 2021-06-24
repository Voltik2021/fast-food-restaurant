import React from 'react';
import { Link } from 'react-scroll'
import './StickyPanel.css'

export default function StickyPanel() {
    return (
        <div className = 'sticky-panel'>
            <Link
                className = 'sticky-panel-link'
                activeClass= 'active'
                spy={true}
                to='1'
                smooth={true}
            >
                Бургеры
            </Link>
            <Link
                className = 'sticky-panel-link'
                activeClass= 'active'
                spy={true}
                to='2'
                smooth={true}
            >
                Твистеры
            </Link>
            <Link
                className = 'sticky-panel-link'
                activeClass= 'active'
                spy={true}
                to='3'
                smooth={true}
            >
                Курица
            </Link>
            <Link
                className = 'sticky-panel-link'
                activeClass= 'active'
                spy={true}
                to='4'
                smooth={true}
            >
                Хиты
            </Link>
            <Link
                className = 'sticky-panel-link'
                activeClass= 'active'
                spy={true}
                to='5'
                smooth={true}
            >
                Новое
            </Link>
            <Link
                className = 'sticky-panel-link'
                activeClass= 'active'
                spy={true}
                to='header'
                smooth={true}
            >
                Корзина и способ доставки
            </Link>
        </div>
    )
}
