import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import CreateQuestion from '../CreateQuestion'


// jest -i components/create/question/tests/CreateQuestion.test.tsx


const createComponent = (setActiveStepMock?: typeof jest.fn, updateStepsWithValuesMock?: typeof jest.fn, currentValue?: string) => {
    return render(
        <CreateQuestion
            setActiveStep={setActiveStepMock ? setActiveStepMock : jest.fn()}
            updateStepsWithValues={updateStepsWithValuesMock ? updateStepsWithValuesMock : jest.fn()}
            step={{ index: 0, label: 'question', value: currentValue ? currentValue : undefined }}
        />
    )
}


describe('CREATE QUESTION COMPONENT', () => {

    it('can be rendered', async () => {
        const component = createComponent()
        const createQuestion = component.container.querySelector('[data-testid="CreateQuestion"]')
        expect(createQuestion).not.toBeNull()
    })

    it('correctly displays a previously set value', async () => {
        const component = createComponent(jest.fn(), jest.fn(), 'Previously set')
        expect(component.container).toHaveTextContent('Previously set')
    })

    it('does not display a next button when value has not been set', async () => {
        const component = createComponent()
        expect(component.container).not.toHaveTextContent('NEXT')
    })

    it('displays a next button when value has been previously set', async () => {
        const component = createComponent(jest.fn(), jest.fn(), 'Previously set')
        expect(component.container).toHaveTextContent('NEXT')
    })

    it('allows moving to next step when value has been set', async () => {
        const moveToNextMock = jest.fn()
        const component = createComponent(moveToNextMock, jest.fn(), 'Previously set')
        const nextButton = component.container.querySelector('[data-testid="button-next"]')
        if (nextButton !== null) {
            fireEvent.click(nextButton)
        }
        expect(moveToNextMock.mock.calls.length).toBe(1)
        expect(moveToNextMock.mock.calls[0][0]).toBe(1)
    })

    it('allows setting value to question', async () => {
        const setValueMock = jest.fn()
        const component = createComponent(jest.fn(), setValueMock)
        const inputTextArea = await screen.findAllByPlaceholderText('For example: Where should we go on holiday?')
        fireEvent.change(inputTextArea[0], {
            target: { value: 'Test question?'}
        })
        const saveButton = component.container.querySelector('[data-testid="save-edit-button"]')
        if (saveButton !== null) {
            fireEvent.click(saveButton)
        }
        expect(setValueMock.mock.calls.length).toBe(1)
        const updatedStep = setValueMock.mock.calls[0][0]
        expect(updatedStep.index).toBe(0)
        expect(updatedStep.label).toBe('question')
        expect(updatedStep.value).toBe('Test question?')
    })

})