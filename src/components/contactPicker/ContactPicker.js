import React from 'react';

export const ContactPicker = ({ name, contacts, selected, onChange }) => {
	return (
		<select name={name} onChange={onChange}>
			<option key={-1} value={''} defaultValue={'selected'}>
				No Contact Selected
			</option>
			{contacts.map(contact => {
				return (
					<option key={contact} value={contact}>
						{contact}
					</option>
				);
			})}
		</select>
	);
};
