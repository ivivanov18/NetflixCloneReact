import * as React from 'react';
import {shallow} from 'enzyme';

import Message from './Message';

test('renders the component without errors', () => {
    const component = shallow(<Message from="Ivan" body="Hello React"/>);

    expect(component).toMatchSnapshot();
});
