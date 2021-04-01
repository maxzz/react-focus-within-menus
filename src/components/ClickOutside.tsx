import React from 'react';

const useAutoClose = ({ setIsOpen, menu }: { setIsOpen: React.Dispatch<React.SetStateAction<boolean>>, menu: React.RefObject<Element> }) => {
    const handleClosure = React.useCallback((event: MouseEvent | FocusEvent) => {
        console.log('Contains', menu.current?.contains(event.target as Node));
        
        !menu.current?.contains(event.target as Node) && setIsOpen(false);
    }, [setIsOpen, menu]);

    React.useEffect(() => {
        window.addEventListener('click', handleClosure);
        window.addEventListener('focusin', handleClosure);

        return () => {
            window.removeEventListener('click', handleClosure);
            window.removeEventListener('focusin', handleClosure);
        };
    }, [handleClosure, menu]);
};

function ClickOutside() {
    const menu = React.useRef(null);
    const [isOpen, setIsOpen] = React.useState(false);

    useAutoClose({ setIsOpen, menu });

    console.log('---------------', isOpen, Date.now());

    return (
            <div className="c" ref={menu} >
                {/* nav-toggle */}
                <button
                    className="my-4 px-2 py-1 border rounded border-gray-300 bg-gray-500"
                    type='button'
                    aria-expanded={isOpen}
                    aria-controls='nav-content'
                    onClick={event => {
                        event.stopPropagation();
                        console.log('Click', isOpen, Date.now());
                
                        setIsOpen(isOpen => !isOpen);
                        // setIsOpen(!isOpen);
                    }}
                >
                    Navigation
                </button>
                        <nav role='navigation'
                className="
                    my-4 mx-auto max-w-xl px-4 text-gray-300 flex items-center justify-between
                    bg-gradient-to-r from-green-400 to-blue-500"
                        >
                {/* nav-content */}
                <div className={`${!isOpen ? 'hidden' : ''}`} aria-hidden={!isOpen} aria-labelledby='nav-toggle'>
                    <ul className="flex space-x-4">
                        <li className="px-4 py-2 text-gray-700 hover:bg-yellow-400">
                            <a href='#'>Link 1</a>
                        </li>
                        <li className="px-4 py-2 text-gray-700 hover:bg-yellow-400">
                            <a href='#'>Link 2</a>
                        </li>
                        <li className="px-4 py-2 text-gray-700 hover:bg-yellow-400">
                            <a href='#'>Link 3</a>
                        </li>
                    </ul>
                </div>
                        </nav>
            </div>
    );
}

function ClickOutsideDemo() {
    const [visible, setVisible] = React.useState(true);

    return (
        <div className="pt-4">
            <h1>
                <button className="ml-4 px-4 py-3 font-bold text-gray-100 bg-gray-500 hover:bg-gray-600 focus:outline-none border border-gray-100 rounded-md"
                    onClick={() => setVisible(!visible)}
                >Click outside</button>
            </h1>

            {visible && <ClickOutside />}
        </div>
    );
}

export default ClickOutsideDemo;
