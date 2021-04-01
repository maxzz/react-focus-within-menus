import React from 'react';

const useAutoClose = ({ setIsOpen, menu }: { setIsOpen: React.Dispatch<React.SetStateAction<boolean>>, menu: React.RefObject<Element> }) => {
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
        <nav role='navigation'>
            <button
                type='button'
                id='nav-toggle'
                aria-expanded={isOpen}
                aria-controls='nav-content'
                onClick={event => {
                    event.stopPropagation();
                    setIsOpen(isOpen => !isOpen);
                }}
            >
                Navigation
            </button>
            <div ref={menu} id='nav-content' aria-hidden={!isOpen} aria-labelledby='nav-toggle'>
                <ul>
                    <li>
                        <a href='#'>Link 1</a>
                    </li>
                    <li>
                        <a href='#'>Link 2</a>
                    </li>
                    <li>
                        <a href='#'>Link 3</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

function ClickOutsideDemo() {
    return (
        <div>
            <ClickOutside />
        </div>
    );
}

export default ClickOutsideDemo;
