import {
    render,
    fireEvent
} from '@testing-library/vue';
import Pagination from '../components/Pagination.vue';

test('pagination next button click', async () => {
    const options = {
        props: {
            value: 5,
            length: 10
        }
    }
    const nextValue = 6
    const nextItemText = '7'

    const {queryByText, getByTestId, getByText, rerender, emitted} = render(Pagination, options);

    expect(queryByText(nextItemText)).toBeNull();

    await fireEvent.click(getByTestId('pagination-next-button'))

    expect(emitted('next')).toHaveProperty('input', [[nextValue]])

    await rerender({value: nextValue});

    expect(getByText(nextItemText))
});
