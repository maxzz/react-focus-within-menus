import React from 'react';
import './FocusWithinMenuDemo.scss';

interface FocusWithinMenuProps {

}

const FocusWithinMenu: React.FC<FocusWithinMenuProps> = () => {
    return (
        <nav role="navigation">
            <ul>
                <li><a href="#">One</a></li>
                <li><a href="#" aria-haspopup="true">Two</a>
                    <ul className="dropdown" aria-label="submenu">
                        <li><a className="text-sm" href="#">Item-1</a></li>
                        <li><a className="text-sm" href="#">Item-2</a></li>
                        <li><a className="text-sm" href="#">Item-3</a></li>
                    </ul>
                </li>
                <li><a href="#">Three</a>
                    <ul className="dropdown" aria-label="submenu">
                        <li>
                            <a href="#">Submenu-3-Item-1</a>
                            <div className="px-3 py-2 border rounded-md">
                                <h2 className="font-bold">Sub title</h2>
                                <p className="text-sm">Lorem ipsum dolor sit amet.</p>
                            </div>
                        </li>
                        <li><a href="#">Submenu-3-Item-2</a></li>
                        <li><a href="#">Submenu-3-Item-3</a></li>
                    </ul>
                </li>
            </ul>
        </nav>
    );
};

interface FocusWithinMenuDemoProps {

}

const FocusWithinMenuDemo: React.FC<FocusWithinMenuDemoProps> = () => {
    return (
        <div className="pt-4">
            <h1><span className="ml-4 px-4 py-3 font-bold text-gray-800 border border-gray-500 rounded-md">:focus-within demo</span></h1>

            <div className="mt-4 flex justify-between items-center bg-gradient-to-r from-green-400 to-blue-500">
                <span className="pl-4">
                    <svg className="w-12 h-12 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path fill="currentColor" d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path fill="bg-red-100" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                    </svg>
                </span>
                
                <div id="fwin-menu-demo" className="clearfix flex justify-end pr-10">
                    <FocusWithinMenu></FocusWithinMenu>
                </div>
            </div>
        </div>
    );
};

export default FocusWithinMenuDemo;
