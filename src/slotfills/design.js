
import { createSlotFill } from '@wordpress/components';

export const { Fill, Slot } = createSlotFill('BlocksBakeryDesignTabArea');

function BlocksBakeryDesignTabArea({ children }) {
    return (
        <Fill>
            {children}
        </Fill>
    );
}

BlocksBakeryDesignTabArea.Slot = Slot;

export default BlocksBakeryDesignTabArea;
