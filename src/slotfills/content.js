
import { createSlotFill } from '@wordpress/components';

export const { Fill, Slot } = createSlotFill('BlocksBakeryContentTabArea');

function BlocksBakeryContentTabArea({ children }) {
    return (
        <Fill>
            {children}
        </Fill>
    );
}

BlocksBakeryContentTabArea.Slot = Slot;

export default BlocksBakeryContentTabArea;
