import React from 'react';
import './DesignSystemCatalog.css';
import { TabContainer } from './components';
import { AtomsSection } from './sections/AtomsSection';
import { MoleculesSection } from './sections/MoleculesSection';
import { OrganismsSection } from './sections/OrganismsSection';

const DesignSystemCatalog: React.FC = () => {
    const tabs = [
        {
            id: 'atoms',
            label: 'Atoms',
            content: <AtomsSection />
        },
        {
            id: 'molecules',
            label: 'Molecules',
            content: <MoleculesSection />
        },
        {
            id: 'organisms',
            label: 'Organisms',
            content: <OrganismsSection />
        }
    ];

    return (
        <div className="design-system-catalog-page">
            <h1 className="page-title">Design System</h1>

            <TabContainer
                tabs={tabs}
                activeTabId="atoms"
            />
        </div>
    );
};

export default DesignSystemCatalog;
