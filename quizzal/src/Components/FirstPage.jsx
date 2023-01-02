import React from 'react'

export default function FirstPage(props){
    
    return (
        <div className='firstPage'>
            <div className='topSVG'>
                <svg width="187" height="164" viewBox="0 0 187 164" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M75.3361 -69.0293C114.696 -55.467 161.747 -47.6987 177.938 -9.32051C195.858 33.1577 184.302 84.4575 155.178 120.228C127.551 154.16 81.3136 167.887 37.9125 162.659C1.37644 158.258 -18.3523 123.291 -43.3816 96.3091C-70.3211 67.2675 -112.799 43.7857 -108.96 4.32587C-104.958 -36.8227 -64.6562 -64.3992 -26.2621 -79.6811C7.03935 -92.9361 41.4681 -80.6991 75.3361 -69.0293Z" fill="#8ff288"/>
                </svg>
                <svg className="yellowBlob" width="194" height="197" viewBox="0 0 194 197" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_33_8)">
                    <path fillRule="evenodd" clipRule="evenodd" d="M99.4095 81.3947C71.1213 50.8508 33.3179 21.7816 37.1727 -19.6933C41.4394 -65.599 75.854 -105.359 118.419 -123.133C158.797 -139.994 206.035 -130.256 241.822 -105.149C271.947 -84.0141 272.823 -43.8756 282.141 -8.27104C292.17 30.0508 318.521 70.8106 296.501 103.779C273.538 138.159 224.991 143.432 183.931 138.768C148.318 134.723 123.751 107.677 99.4095 81.3947Z" fill="#FFFAD1"/>
                    </g>
                    <defs>
                        <filter id="filter0_d_33_8" x="-4.00003" y="-182" width="376.786" height="386.726" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="4"/>
                        <feGaussianBlur stdDeviation="2"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_33_8"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_33_8" result="shape"/>
                        </filter>
                    </defs>
                </svg>
            </div>
            <div className='firstPageTextContainer'>
                <h1>Quizzical</h1>
                <p>Click to begin Quiz</p>
            </div>
            <button onClick={props.startQuiz}>Start Quiz</button>
            <svg className="blueBlob" width="148" height="118" viewBox="0 0 148 118" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M-5.55191 4.90596C35.9614 1.77498 82.2425 -9.72149 112.306 19.1094C145.581 51.0203 155.282 102.703 142.701 147.081C130.767 189.18 93.7448 220.092 51.8208 232.476C16.5281 242.902 -15.4332 218.605 -49.1007 203.738C-85.3375 187.737 -133.641 182.993 -145.741 145.239C-158.358 105.868 -132.269 64.5881 -103.064 35.3528C-77.7328 9.99541 -41.2727 7.60006 -5.55191 4.90596Z" fill="#DEEBF8"/>
            </svg>

        </div>
    )
}