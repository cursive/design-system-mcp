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
