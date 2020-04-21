import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import { fetchShow as mockFetchShow } from './api/fetchShow';

// mock the fetchMissions function
jest.mock('./api/fetchShow');

const showData = [
	{
		id: 553946,
		url:
			'http//www.tvmaze.com/episodes/553946/stranger-things-1x01-chapter-one-the-vanishing-of-will-byers',
		name: 'Chapter One: The Vanishing of Will Byers',
		season: 1,
		number: 1,
		airdate: '2016-07-15',
		airtime: '',
		airstamp: '2016-07-15T12:00:00+00:00',
		runtime: 60,
	},
];
//async
test('renders component', async () => {
	//Arrange
	//Act
	//Assert
	mockFetchShow.mockResolvedValueOnce(showData);
});
