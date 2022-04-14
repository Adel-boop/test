import {
    render,
    fireEvent
} from '@testing-library/vue';
import Sorting from '../components/Sorting.vue';

test('sorting selected change', async () => {
    const optionFirstName = 'по возрастанию'
    const optionSecondName = 'по убыванию'
    const options = {
        props: {
            options: [
                {
                    name: optionFirstName,
                },
                {
                    name: optionSecondName,
                },
            ],
            selected: optionFirstName,
        }
    }

    const {
        getAllByTestId,
        getByTestId,
        rerender,
        emitted,
        debug
    } = render(Sorting, options);

    expect(getByTestId('sorting-selected-text')).toHaveProperty('textContent', optionFirstName)

    await fireEvent.click(getAllByTestId('sorting-option')[1])

    expect(emitted('select')).toHaveProperty('select', [[options.props.options[1]]])

    await rerender({selected: optionSecondName});

    expect(getByTestId('sorting-selected-text')).toHaveProperty('textContent', optionSecondName)

});