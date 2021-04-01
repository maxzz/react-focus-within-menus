import React from 'react';

const useAutoClose = ({ setIsOpen, menu }: { setIsOpen: React.Dispatch<React.SetStateAction<boolean>>, menu: React.RefObject<Element>; }) => {
    const handleClosure = React.useCallback((event: MouseEvent | FocusEvent) => {
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

    return (
        <nav
            ref={menu}
            className="
                my-4 mx-auto max-w-xl px-4
                text-gray-300 flex items-center justify-between bg-gradient-to-r from-green-400 to-blue-500"
            role='navigation'
        >
            {/* nav-toggle */}
            <button
                className="my-4 px-2 py-1 border rounded border-gray-300 bg-gray-500 uppercase tracking-wide bg-gradient-to-r from-blue-600 to-blue-400"
                type='button'
                onClick={event => {
                    event.stopPropagation();
                    console.log('Click', isOpen, Date.now());

                    setIsOpen(isOpen => !isOpen);
                }}
                aria-expanded={isOpen}
                aria-controls='nav-content'
            >
                Extra controls
            </button>
            {/* nav-content */}
            <div className={`${!isOpen ? 'hidden' : ''}`} aria-hidden={!isOpen} aria-labelledby='nav-toggle'>
                <ul className="flex space-x-4">
                    <li className="px-4 py-2 text-gray-700 hover:bg-yellow-300 uppercase">
                        <a href='#'>Link 1</a>
                    </li>
                    <li className="px-4 py-2 text-gray-700 hover:bg-yellow-400 uppercase">
                        <a href='#'>Link 2</a>
                    </li>
                    <li className="px-4 py-2 text-gray-700 hover:bg-yellow-400 uppercase">
                        <a href='#'>Link 3</a>
                    </li>
                </ul>
            </div>
        </nav>
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
