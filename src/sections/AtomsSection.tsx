import React from 'react';
import { ComponentSection } from '../components';
import { RadioIcon } from '../atoms/RadioIcon';
import { Icon } from '../atoms/Icon';
import { PlaceholderIcon } from '../atoms/placeholders';
import { CheckIcon } from '../atoms/CheckIcon';
import { ChevronDownIcon } from '../atoms/ChevronDownIcon';
import { PackageIcon } from '../atoms/PackageIcon';
import { CalendarFoldIcon } from '../atoms/CalendarFoldIcon';
import { CirclePauseIcon } from '../atoms/CirclePauseIcon';

export const AtomsSection: React.FC = () => {
    return (
        <section>
            <h2 className="section-title">Atoms</h2>

            <ComponentSection
                title="RadioIcon"
                component={
                    <div className="flex-demo">
                        <RadioIcon state="unchecked" />
                        <RadioIcon state="checked" />
                    </div>
                }
                controls={
                    <div className="control-group">
                        <label>
                            <input type="checkbox" defaultChecked />
                            Selected
                        </label>
                    </div>
                }
            />

            <ComponentSection
                title="Icon"
                component={
                    <div className="flex-demo">
                        <Icon name="check" />
                        <Icon name="chevron-down" />
                        <Icon name="package" />
                    </div>
                }
                controls={
                    <div className="control-group">
                        <label>Icon Name</label>
                        <select>
                            <option value="check">Check</option>
                            <option value="chevron-down">Chevron Down</option>
                            <option value="package">Package</option>
                        </select>
                    </div>
                }
            />

            <ComponentSection
                title="Large Icons (40px)"
                component={
                    <div className="flex-demo">
                        <CheckIcon size={40} />
                        <ChevronDownIcon size={40} />
                        <PackageIcon size={40} />
                        <CalendarFoldIcon size={40} />
                        <CirclePauseIcon size={40} />
                    </div>
                }
                controls={
                    <div className="control-group">
                        <label>Size</label>
                        <select>
                            <option value="large">Large (40px)</option>
                        </select>
                    </div>
                }
            />

            <ComponentSection
                title="PlaceholderIcon"
                component={
                    <div className="flex-demo">
                        <PlaceholderIcon />
                    </div>
                }
                controls={
                    <div className="control-group">
                        <label>Placeholder for missing icons</label>
                    </div>
                }
            />

            <ComponentSection
                title="Individual Icons"
                component={
                    <div className="grid-demo-5">
                        <CheckIcon />
                        <ChevronDownIcon />
                        <PackageIcon />
                        <CalendarFoldIcon />
                        <CirclePauseIcon />
                    </div>
                }
                controls={
                    <div className="control-group">
                        <label>Icon Variants</label>
                        <p>Various icon components available in the design system</p>
                    </div>
                }
            />
        </section>
    );
};
