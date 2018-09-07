import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router';
import Routes from '../routes';

describe('routes', () => {
    it('should render without crashing', () => {
        const wrapper = mount((
            <MemoryRouter initialEntries={['/']}>
                <Routes />
            </MemoryRouter>));

        expect(wrapper.find('#react-entry')).toHaveLength(1);
    });
});
