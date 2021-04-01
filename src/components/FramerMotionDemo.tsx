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

function useDummyItems() {
    const [state, dispatch] = useReducer(itemsReducer, {
        "Item 1": false,
        "Item 2": false,
        "Item 3": false
    } as {[key: string]: boolean});

    return [
        state,
        (id: string) => () => dispatch({ action: TOGGLE, id })
    ] as const;
}

//

function Switch({ isActive, onClick }: { isActive: boolean, onClick: () => void }) {
    return (
        <MotionConfig transition={{ duration: 0.3, ease: "easeOut" }}>
            <motion.div
                className="w-14 h-8 rounded-3xl border border-blue-600 shadow-inner p-1 cursor-pointer flex items-center"
                initial={false}
                animate={{ backgroundColor: isActive ? "#32b48a" : "#0f51ba" }}
                onClick={onClick}
                style={{ justifyContent: isActive ? "flex-end" : "flex-start" }}
            >
                <motion.div
                    layout
                    className="bg-gray-100 border border-gray-500 rounded-full w-6 h-6"
                />
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
        <div className="mt-4">
            <ul className="p-4 space-y-2 bg-gradient-to-r from-green-400 to-blue-500">
                {Object.keys(items).sort(compareActive).map((id) => (
                    <motion.li
                        className="px-2 py-2 w-48 rounded-md flex items-center justify-between bg-blue-600 text-gray-300"
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
    const [visible, setVisible] = React.useState(false);

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
