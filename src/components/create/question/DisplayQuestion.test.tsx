import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import DisplayQuestion from './DisplayQuestion'


// jest -i components/create/question/DisplayQuestion.test.tsx


const createComponent = (startEditingMock?: typeof jest.fn, current?: string) => {
    return render(
        <DisplayQuestion
            currentQuestion={current ? current : ''}
            startEditing={startEditingMock ? startEditingMock : jest.fn()}
        />
    )
}


describe('DISPLAY QUESTION COMPONENT', () => {

    it('can be rendered', async () => {
        const component = createComponent()
        const editQuestion = component.container.querySelector('[data-testid="DisplayQuestion"]')
        expect(editQuestion).not.toBeNull()
    })

    it('correctly displays a previously set value', async () => {
        const component = createComponent(jest.fn(), 'Previously set')
        expect(component.container).toHaveTextContent('Previously set')
    })

    it('allows starting editing', async () => {
        const startEditingMock = jest.fn()
        const component = createComponent(startEditingMock, 'Previously set')
        const iconButton = component.container.querySelector('[data-testid="icon-button"]')
        if (iconButton !== null) {
            fireEvent.click(iconButton)
        }
        expect(startEditingMock.mock.calls.length).toBe(1)
    })

})