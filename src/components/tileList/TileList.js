import React from 'react';
import { Tile } from '../tile/Tile';

export const TileList = ({ tiles }) => {
	return (
		<div>
			{tiles.map((tile, idx) => (
				<Tile key={idx} tile={tile} />
			))}
		</div>
	);
};
