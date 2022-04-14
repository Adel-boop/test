import {
    render,
    fireEvent
} from '@testing-library/vue';
import Search from '../components/Search.vue';

test('search reset input', async () => {
    const options = {
        props: {
            name: 'name',
        }
    }

    const {getByTestId, rerender, emitted} = render(Search, options);

    expect(getByTestId('search-input')).toHaveProperty('value', options.props.name);

    await fireEvent.click(getByTestId('search-reset'))

    expect(emitted('reset')).toHaveProperty('reset')

    await rerender({name: ''});

    expect(getByTestId('search-input')).toHaveProperty('value', '');
});
