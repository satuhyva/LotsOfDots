import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import EditQuestion from './EditQuestion'



// jest -i components/create/question/EditQuestion.test.tsx


const createComponent = (setActiveStepMock?: typeof jest.fn, current?: string) => {
    return render(
        <EditQuestion
            currentQuestion={current ? current : ''}
            saveQuestion={setActiveStepMock ? setActiveStepMock : jest.fn()}
        />
    )
}


describe('EDIT QUESTION COMPONENT', () => {

    it('can be rendered', async () => {
        const component = createComponent()
        const editQuestion = component.container.querySelector('[data-testid="EditQuestion"]')
        expect(editQuestion).not.toBeNull()
    })

    it('correctly displays a previously set value', async () => {
        const component = createComponent(jest.fn(), 'Previously set')
        expect(component.container).toHaveTextContent('Previously set')
    })

    it('allows typing new question', async () => {
        const component = createComponent()
        const inputTextArea = await screen.findAllByPlaceholderText('For example: Where should we go on next holiday?')
        fireEvent.change(inputTextArea[0], {
            target: { value: 'Test question?'}
        })
        expect(component.container).toHaveTextContent('Test question?')
    })

    it('displays save-button only after typing some text', async () => {
        const component = createComponent()
        expect(component.container).not.toHaveTextContent('SAVE')
        const inputTextArea = await screen.findAllByPlaceholderText('For example: Where should we go on next holiday?')
        fireEvent.change(inputTextArea[0], {
            target: { value: 'Test question?'}
        })
        expect(component.container).toHaveTextContent('SAVE')
    })

    it('allows saving a newly typed question', async () => {
        const saveQuestionMock = jest.fn()
        const component = createComponent(saveQuestionMock)
        const inputTextArea = await screen.findAllByPlaceholderText('For example: Where should we go on next holiday?')
        fireEvent.change(inputTextArea[0], {
            target: { value: 'Test question?'}
        })
        const saveButton = component.container.querySelector('[data-testid="save-edit-button"]')
        if (saveButton !== null) {
            fireEvent.click(saveButton)
        }
        expect(saveQuestionMock.mock.calls.length).toBe(1)
        expect(saveQuestionMock.mock.calls[0][0]).toBe('Test question?')
    })



})