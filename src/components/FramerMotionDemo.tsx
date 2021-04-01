import React, { useReducer } from 'react';
import { motion, MotionConfig } from 'framer-motion';

// Dummy items

const TOGGLE = 'toggle';

type State = {
    [key: string]: boolean
};

function itemsReducer(state: State, { action, id }: { action: typeof TOGGLE, id: string }) {
    if (action === TOGGLE) {
        return { ...state, [id]: !state[id] };
    }
    return state;
}

function useDummyItems(): [State, (id: string) => () => void] {
    const [state, dispatch] = useReducer(itemsReducer, {
        "Item 1": false,
        "Item 2": false,
        "Item 3": false
    } as {[key: string]: boolean});

    return [
        state,
        (id: string) => () => dispatch({ action: TOGGLE, id })
    ];
}

//

function Switch({ isActive, onClick }: any) {
    return (
        <MotionConfig transition={{ duration: 0.3, ease: "easeOut" }}>
            <motion.div
                className="switch"
                initial={false}
                animate={{ backgroundColor: isActive ? "#f90566" : "#111" }}
                onClick={onClick}
                style={{ justifyContent: isActive ? "flex-end" : "flex-start" }}
            >
                <motion.div layout className="handle" />
            </motion.div>
        </MotionConfig>
    );
}

const FramerMotion = () => {
    const [items, toggleItem] = useDummyItems();

    const compareActive = (a: string, b: string) => {
        const itemA = items[a];
        const itemB = items[b];
        return itemA === itemB ? 0 : itemA === true ? -1 : 1;
    };

    return (
        <div className="container">
            <ul>
                {Object.keys(items).sort(compareActive).map((id) => (
                    <motion.li
                        layout
                        transition={{ delay: 0.5, type: "spring", duration: 0.5, bounce: 0.2 }}
                        key={id}
                    >
                        {id}
                        <Switch isActive={items[id]} onClick={toggleItem(id)} />
                    </motion.li>
                ))}
            </ul>
        </div>
    );
};

const FramerMotionDemo = () => {
    const [visible, setVisible] = React.useState(true);

    return (
        <div className="pt-4">
            <h1>
                <button
                    className="ml-4 px-4 py-3 font-bold text-gray-100 bg-gray-500 hover:bg-gray-600 focus:outline-none border border-gray-100 rounded-md"
                    onClick={() => setVisible(!visible)}
                >
                    framer-motion demo
                </button>
            </h1>

            {visible && <FramerMotion />}
        </div>
    );
};

export default FramerMotionDemo;
