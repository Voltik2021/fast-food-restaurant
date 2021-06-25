import React, {}from 'react';
import { Link } from 'react-scroll';
import './StickyPanel.css';

export default function StickyPanel() {    
    
    
      
    return (                           

        <div className = 'sticky-panel'>
            <div className="beacon-drop-down-panel">Категории
                    <div className="drop-down-panel">
                        <Link
                            className = 'sticky-panel-link'
                            activeClass= 'active'
                            spy={true}
                            to='1c'
                            smooth={true}
                        >
                            Бургеры
                        </Link>
                        <Link
                            className = 'sticky-panel-link'
                            activeClass= 'active'
                            spy={true}
                            to='2c'
                            smooth={true}
                        >
                            Твистеры
                        </Link>
                        <Link
                            className = 'sticky-panel-link'
                            activeClass= 'active'
                            spy={true}
                            to='3c'
                            smooth={true}
                        >
                            Курица
                        </Link>
                        <Link
                            className = 'sticky-panel-link'
                            activeClass= 'active'
                            spy={true}
                            to='4c'
                            smooth={true}
                        >
                            Хиты
                        </Link>
                        <Link
                            className = 'sticky-panel-link'
                            activeClass= 'active'
                            spy={true}
                            to='5c'
                            smooth={true}
                        >
                            Новое
                        </Link>
                    </div>
                </div>
           
            <Link
                className = 'sticky-panel-link sticky-panel-link-hidden '
                activeClass= 'active'
                spy={true}
                to='1c'
                smooth={true}
            >
                Бургеры
            </Link>
            <Link
                className = 'sticky-panel-link sticky-panel-link-hidden'
                activeClass= 'active'
                spy={true}
                to='2c'
                smooth={true}
            >
                Твистеры
            </Link>
            <Link
                className = 'sticky-panel-link sticky-panel-link-hidden'
                activeClass= 'active'
                spy={true}
                to='3c'
                smooth={true}
            >
                Курица
            </Link>
            <Link
                className = 'sticky-panel-link sticky-panel-link-hidden'
                activeClass= 'active'
                spy={true}
                to='4c'
                smooth={true}
            >
                Хиты
            </Link>
            <Link
                className = 'sticky-panel-link sticky-panel-link-hidden'
                activeClass= 'active'
                spy={true}
                to='5c'
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
