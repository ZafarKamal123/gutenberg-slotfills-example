/**
 * All slotfills should be included here.
 * 
 * @see https://developer.wordpress.org/block-editor/reference-guides/slotfills/
 */

import { __ } from '@wordpress/i18n';
import { addFilter } from '@wordpress/hooks';
import { TabPanel } from '@wordpress/components';
import { createHigherOrderComponent } from '@wordpress/compose';

import { InspectorControls, useBlockEditContext } from '@wordpress/block-editor'

import BlocksBakeryDesignTabArea from './design';
import BlocksBakeryContentTabArea from './content';


/**
 * Extending each block to include our custom slotfill
 */
const withTabs = createHigherOrderComponent((BlockEdit) => {

    return props => {

        const { clientId } = useBlockEditContext(); // Additional: Obtaining the client id of currently editing block.

        const tabs = [
            {
                name: 'content',
                title: __('Content', 'blocks-bakery'),
                render: () => (
                    <BlocksBakeryContentTabArea.Slot>
                        {(fills) => <>{fills}</>}
                    </BlocksBakeryContentTabArea.Slot>
                )
            },
            {
                name: 'design',
                title: __('Design', 'blocks-bakery'),
                render: () => (
                    <BlocksBakeryDesignTabArea.Slot>
                        {(fills) => <>{fills}</>}
                    </BlocksBakeryDesignTabArea.Slot>
                )
            },
        ]

        return (
            <>
                <BlockEdit {...props} />
                {
                    <InspectorControls>
                        <TabPanel
                            tabs={tabs}
                            initialTabName="content"
                            onSelect={console.log}
                        >
                            {(tab) => <tab.render />}
                        </TabPanel>
                    </InspectorControls>
                }
            </>
        )
    }
});

addFilter(
    "editor.BlockEdit",
    "blocksbakery/with-styling-tabs",
    withTabs
);