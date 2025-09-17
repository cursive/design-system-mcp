export interface ComponentSectionProps {
    /** Title of the component section */
    title: string;
    /** The actual component to display */
    component: React.ReactNode;
    /** The controls for the component */
    controls: React.ReactNode;
    /** Additional CSS class name */
    className?: string;
}
