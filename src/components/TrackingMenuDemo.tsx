import React from 'react';
import './FocusWithinMenuDemo.scss';

interface TrackingMenuProps {

}

const TrackingMenu: React.FC<TrackingMenuProps> = () => {
    return (
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" hidden>
                <symbol id="arrow" viewBox="0 0 16 16" >
                    <polyline points="4 6, 8 10, 12 6" stroke="#000" strokeWidth="2" fill="transparent" strokeLinecap="round" />
                </symbol>
            </svg>

            {/* <!-- In the real world, all hrefs would have go to real, unique URLs, not a "#" --> */}
            <nav id="site-navigation" className="site-navigation" aria-label="Clickable Menu Demonstration">
                <ul className="main-menu clicky-menu no-js">
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">
                            Services
				            <svg aria-hidden="true" width="16" height="16">
                                <use xlinkHref="#arrow" />
                            </svg>
                        </a>
                        <ul>
                            <li><a href="#">Design</a></li>
                            <li><a href="#">Development</a></li>
                            <li><a href="#">Accessibility</a></li>
                            <li><a href="#">Content Strategy</a></li>
                            <li><a href="#">Training</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">
                            Portfolio
				            <svg aria-hidden="true" width="16" height="16">
                                <use xlinkHref="#arrow" />
                            </svg>
                        </a>
                        <ul>
                            <li><a href="#">Nonprofits</a></li>
                            <li><a href="#">Higher Education</a></li>
                            <li><a href="#">Associations</a></li>
                            <li><a href="#">Consultants</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">
                            About
				            <svg aria-hidden="true" width="16" height="16">
                                <use xlinkHref="#arrow" />
                            </svg>
                        </a>
                        <ul>
                            <li><a href="#">Mission</a></li>
                            <li><a href="#">History</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

interface TrackingMenuDemoProps {

}

const TrackingMenuDemo: React.FC<TrackingMenuDemoProps> = () => {
    const [visible, setVisible] = React.useState(false);
    return (
        <div className="pt-4">
            <h1>
                <button className="ml-4 px-4 py-3 font-bold text-gray-100 bg-gray-500 hover:bg-gray-600 focus:outline-none border border-gray-100 rounded-md"
                    onClick={() => setVisible(!visible)}
                >javascript menu tracking demo</button>
            </h1>

            {visible && <div className="mt-4 flex justify-between items-center bg-gradient-to-r from-green-400 to-blue-500">
                <span className="pl-4">

                    <svg className="w-12 h-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 223.84 243.51">
                        <defs>
                            <filter id="luminosity-noclip" x="-38.5" y="-59.75" width="262.33" height="382" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodColor="#fff" result="bg" />
                                <feBlend in="SourceGraphic" in2="bg" />
                            </filter>
                            <mask id="mask" x="-38.5" y="-59.75" width="262.33" height="382" maskUnits="userSpaceOnUse">
                                <rect x="-38.5" y="-59.75" width="150.41" height="382" filter="url(#luminosity-noclip)" />
                            </mask>
                        </defs>
                        <title>Asset 2</title>
                        <g id="Layer_2" data-name="Layer 2">
                            <g id="Layer_2-2" data-name="Layer 2">
                                <path d="M117.92,4.8C99.47,2.6,81.13.42,58.92,3.14A174.27,174.27,0,0,0,9.78,16.73c-25,161.36,9.35,225.55,103.18,224.91S240,174.5,212.72,9.84a202.57,202.57,0,0,1-41.14,2.63C150.24,11.65,144.88,8,117.92,4.8Z" fill="#29abe2" stroke="#fff" strokeLinecap="square" strokeLinejoin="bevel" strokeWidth="3.74" />
                                <g mask="url(#mask)">
                                    <path d="M117.92,4.8C99.47,2.6,81.13.42,58.92,3.14A174.27,174.27,0,0,0,9.78,16.73c-25,161.36,9.35,225.55,103.18,224.91S240,174.5,212.72,9.84a202.57,202.57,0,0,1-41.14,2.63C150.24,11.65,144.88,8,117.92,4.8Z" fill="#0080c7" stroke="#fff" strokeLinecap="square" strokeLinejoin="bevel" strokeWidth="3.74" />
                                </g>
                                <path d="M117.41,14.62c-16.9-2-33.7-4-54-1.53a159.63,159.63,0,0,0-45,12.45c-22.94,147.81,8.57,206.61,94.51,206s116.41-61.5,91.38-212.33a185.56,185.56,0,0,1-37.68,2.41C147,20.89,142.11,17.57,117.41,14.62Z" fill="none" stroke="#fff" strokeLinecap="square" strokeWidth="3.43" />
                                <circle cx="66.76" cy="57.53" r="25.77" fill="none" stroke="#000" strokeLinecap="square" strokeLinejoin="bevel" strokeWidth="8" />
                                <path d="M42.67,91.42H90.85v26.37H42.67Z" fill="red" />
                                <g id="Pass">
                                    <g>
                                        <polygon points="59.63 179.35 67.57 169.15 55.29 170.73 55.29 163.72 67.49 165.3 59.62 155.08 65.86 151.5 71.06 163.16 76.17 151.41 82.33 154.9 74.37 165.38 86.92 163.72 86.92 170.72 74.39 169.23 82.43 179.27 76 182.95 70.96 171.19 65.49 183.05 59.63 179.35" fill="#fff" />
                                        <path d="M76.41,152.12l5.18,2.93-8.2,10.79V166l13-1.73v5.87l-13-1.55v.17l8.28,10.35-5.44,3.11-5.18-12.08h-.17l-5.61,12.16-4.92-3.1,8.2-10.53v-.17l-12.77,1.64v-5.87l12.68,1.64v-.17l-8.11-10.53,5.26-3,5.35,12h.17l5.26-12.08m-.47-1.42-.44,1-4.44,10.2L66.54,151.8l-.45-1-1,.55-5.26,3-1,.57.7.91,6.79,8.81L55.92,163.3l-1.13-.15v8.14l1.13-.15,10.51-1.35-6.86,8.81-.68.87.93.59,4.92,3.1,1,.61.48-1,4.76-10.32,4.38,10.21.44,1,1-.56L82.17,180l1-.58-.73-.91-6.91-8.64,10.76,1.28,1.12.13v-8.14l-1.13.15-10.79,1.43,6.89-9.07.69-.91-1-.56-5.18-2.93-1-.55Z" fill="#707070" />
                                    </g>
                                    <g>
                                        <polygon points="100.44 179.35 108.38 169.15 96.1 170.73 96.1 163.72 108.3 165.3 100.43 155.08 106.67 151.5 111.87 163.16 116.99 151.41 123.15 154.9 115.18 165.38 127.73 163.72 127.73 170.72 115.21 169.23 123.25 179.27 116.81 182.95 111.78 171.19 106.31 183.05 100.44 179.35" fill="#fff" />
                                        <path d="M117.22,152.12l5.18,2.93-8.2,10.79V166l13-1.73v5.87l-13-1.55v.17l8.28,10.35-5.44,3.11-5.18-12.08h-.17l-5.61,12.16-4.92-3.1,8.2-10.53v-.17L96.6,170.16v-5.87l12.68,1.64v-.17l-8.11-10.53,5.26-3,5.35,12H112l5.26-12.08m-.47-1.42-.44,1-4.44,10.2-4.51-10.12-.45-1-1,.55-5.26,3-1,.57.7.91,6.79,8.81L96.73,163.3l-1.13-.15v8.14l1.13-.15,10.51-1.35-6.86,8.81-.68.87.93.59,4.92,3.1,1,.61.48-1,4.76-10.32,4.38,10.21.44,1,1-.56L123,180l1-.58-.73-.91-6.91-8.64,10.76,1.28,1.12.13v-8.14l-1.13.15-10.79,1.43,6.89-9.07.69-.91-1-.56-5.18-2.93-1-.55Z" fill="#707070" />
                                    </g>
                                    <g>
                                        <polygon points="141.26 179.35 149.2 169.15 136.92 170.73 136.92 163.72 149.12 165.3 141.24 155.08 147.48 151.5 152.68 163.16 157.8 151.41 163.96 154.9 156 165.38 168.55 163.72 168.55 170.72 156.02 169.23 164.06 179.27 157.63 182.95 152.59 171.19 147.12 183.05 141.26 179.35" fill="#fff" />
                                        <path d="M158,152.12l5.18,2.93L155,165.84V166l13-1.73v5.87l-13-1.55v.17l8.28,10.35-5.44,3.11-5.18-12.08h-.17l-5.61,12.16-4.92-3.1,8.2-10.53v-.17l-12.77,1.64v-5.87l12.68,1.64v-.17L142,155.23l5.26-3,5.35,12h.17L158,152.12m-.47-1.42-.44,1-4.44,10.2-4.51-10.12-.45-1-1,.55-5.26,3-1,.57.7.91,6.79,8.81-10.44-1.35-1.13-.15v8.14l1.13-.15,10.51-1.35-6.86,8.81-.68.87.93.59,4.92,3.1,1,.61.48-1,4.76-10.32,4.38,10.21.44,1,1-.56L163.8,180l1-.58-.73-.91-6.91-8.64,10.76,1.28,1.12.13v-8.14l-1.13.15-10.79,1.43,6.89-9.07.69-.91-1-.56-5.18-2.93-1-.55Z" fill="#707070" />
                                    </g>
                                </g>
                            </g>
                        </g>
                    </svg>

                </span>

                <div id="fwin-menu-demo" className="clearfix pr-2">
                    <TrackingMenu></TrackingMenu>
                </div>
            </div>}
        </div>
    );
};

export default TrackingMenuDemo;
