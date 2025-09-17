import React from 'react';
import { Tab } from '../Tab';
import './TabContainer.css';

export interface TabItem {
    id: string;
    label: string;
    content: React.ReactNode;
}

export interface TabContainerProps {
    /** Array of tab items */
    tabs: TabItem[];
    /** Active tab ID */
    activeTabId?: string;
    /** Tab change handler */
    onTabChange?: (tabId: string) => void;
    /** Additional CSS class name */
    className?: string;
}

export const TabContainer: React.FC<TabContainerProps> = ({
    tabs,
    activeTabId,
    onTabChange,
    className = '',
}) => {
    const [currentTabId, setCurrentTabId] = React.useState(activeTabId || tabs[0]?.id || '');

    const handleTabClick = (tabId: string) => {
        setCurrentTabId(tabId);
        onTabChange?.(tabId);
    };

    const activeTab = tabs.find(tab => tab.id === currentTabId);

    return (
        <div className={`tab-container ${className}`}>
            <div className="tab-container__header">
                {tabs.map((tab) => (
                    <Tab
                        key={tab.id}
                        label={tab.label}
                        active={tab.id === currentTabId}
                        onClick={() => handleTabClick(tab.id)}
                    />
                ))}
            </div>

            <div className="tab-container__content">
                {activeTab?.content}
            </div>
        </div>
    );
};

export default TabContainer;
