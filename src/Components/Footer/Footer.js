import React from 'react';
import './Footer.css'

export default function Footer () {

    return (
        <div>
            <div className = 'footer-top-logo' >
                <img src = './src/img/logoFooter.png' alt = 'logo' />
            </div>
            <div className ='footer-sections-wrapper'>
                <div className ='footer-sections'>
                    <p>Раздел 1</p>
                    <a href = "#"> подраздел</a>
                    <a href = "#"> подраздел</a>
                    <a href = "#"> подраздел</a>
                    <a href = "#"> подраздел</a>
                    <a href = "#"> подраздел</a>
                </div>
                <div className ='footer-sections'>
                <p>Раздел 2</p>
                    <a href = "#"> подраздел</a>
                    <a href = "#"> подраздел</a>
                    <a href = "#"> подраздел</a>
                    <a href = "#"> подраздел</a>
                    <a href = "#"> подраздел</a>
                </div>
                <div className ='circle-logo-wrapper'>
                    <div className ='circle-logo'>

                    </div>
                </div>
                <div className ='footer-sections'>
                <p>Раздел 3</p>
                    <a href = "#"> подраздел</a>
                    <a href = "#"> подраздел</a>
                    <a href = "#"> подраздел</a>
                    <a href = "#"> подраздел</a>
                    <a href = "#"> подраздел</a>
                </div>
                <div className ='footer-sections'>
                <p>Раздел 4</p>
                    <a href = "#"> подраздел</a>
                    <a href = "#"> подраздел</a>
                    <a href = "#"> подраздел</a>
                    <a href = "#"> подраздел</a>
                    <a href = "#"> подраздел</a>
                </div>
            </div>
            <div className ='footer-social-network-wrapper'>
                <div className ='footer-social-network-wrapper-adjustment'>
                    <div className ='footer-social-network'>
                        <img src = './src/img/vk.png' alt = 'vk' />
                        <img src = './src/img/faceboock.png' alt = 'fs' />
                        <img src = './src/img/twitter.png' alt = 'vk' />
                        <img src = './src/img/classmates.png' alt = 'vk' />
                    </div>
                    <div className ='footer-social-network-right' >
                        <img src = './src/img/AppStore.png' alt = 'app store' />
                        <img src = './src/img/GooglePlay.png' alt = 'google play' />

                    </div>
                </div>
            </div>
        </div>
    )
}