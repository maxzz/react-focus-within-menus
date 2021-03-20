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
                        <li><a href="#">Sub-1</a></li>
                        <li><a href="#">Sub-2</a></li>
                        <li><a href="#">Sub-3</a></li>
                    </ul>
                </li>
                <li><a href="#">Three</a></li>
            </ul>
        </nav>
    );
};

interface FocusWithinMenuDemoProps {
    
}

const FocusWithinMenuDemo: React.FC<FocusWithinMenuDemoProps> = () => {
    return (
        <div id="fwin-menu-demo">
            <FocusWithinMenu></FocusWithinMenu>
        </div>
    );
};

export default FocusWithinMenuDemo;
