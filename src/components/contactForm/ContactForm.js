import React from 'react';

export const ContactForm = ({
	name,
	setName,
	phone,
	setPhone,
	email,
	setEmail,
	handleSubmit,
}) => {
	return (
		<form onSubmit={handleSubmit}>
			<label>
				<input
					type="text"
					value={name}
					onChange={e => setName(e.target.value)}
					placeholder="Contact Name"
					required
				/>
			</label>
			<label>
				<input
					type="tel"
					value={phone}
					onChange={e => setPhone(e.target.value)}
					pattern="(((\+44)? ?(\(0\))? ?)|(0))( ?[0-9]{3,4}){3}"
					placeholder="UK Contact Number"
					required
				/>
			</label>
			<label>
				<input
					type="email"
					value={email}
					onChange={e => setEmail(e.target.value)}
					placeholder="Contact Email Address"
					required
				/>
			</label>
			<input type="submit" value="Add Contact" />
		</form>
	);
};
