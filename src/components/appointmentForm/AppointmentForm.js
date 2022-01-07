import React from 'react';
import { ContactPicker } from '../contactPicker/ContactPicker';

export const AppointmentForm = ({
	contacts,
	title,
	setTitle,
	contact,
	setContact,
	date,
	setDate,
	time,
	setTime,
	handleSubmit,
}) => {
	const getTodayString = () => {
		const [month, day, year] = new Date()
			.toLocaleDateString('en-US')
			.split('/');
		return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
	};

	const getContactNames = () => {
		return contacts.map(contact => contact.name);
	};

	return (
		<form onSubmit={handleSubmit}>
			<label>
				<input
					type="text"
					name="title"
					value={title}
					onChange={e => setTitle(e.target.value)}
					placeholder="Title"
				/>
			</label>
			<label>
				<ContactPicker
					name="contact"
					value={contact}
					contacts={getContactNames()}
					onChange={e => setContact(e.target.value)}
				/>
			</label>
			<label>
				<input
					type="date"
					name="date"
					value={date}
					onChange={e => setDate(e.target.value)}
					placeholder="Date"
					min={getTodayString()}
				/>
			</label>
			<label>
				<input
					type="time"
					name="time"
					value={time}
					onChange={e => setTime(e.target.value)}
					placeholder="Time"
				/>
			</label>
			<input type="submit" value="Add Apointmnent" />
		</form>
	);
};
