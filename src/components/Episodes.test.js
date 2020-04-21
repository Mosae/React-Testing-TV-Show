import React from 'react';
import { render } from '@testing-library/react';
import Episodes from './Episodes';

test('Render without errors', () => {
	render(<Episodes episodes={[]} />);
});
