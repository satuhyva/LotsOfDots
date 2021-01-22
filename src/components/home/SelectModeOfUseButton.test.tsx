import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import SelectModeOfUseButton from './SelectModeOfUseButton'
import { modeOfUse } from '../../state/modeOfUse'
import { BrowserRouter as Router} from 'react-router-dom'



const modeWithDescription =     {
    modeOfUse: modeOfUse.CREATE,
    title: 'CREATE',
    to: '/create',
    description: 'With this tool you can create a new Dot Voting event.' 
}

type MockFunctionType = typeof jest.fn
const createComponent = (mockFunction?: MockFunctionType ) => {
    const selectModeOfUseMock = mockFunction || jest.fn()
    return render(
        <div>
            <Router>
                <SelectModeOfUseButton
                    modeWithDescription={modeWithDescription}
                    selectModeOfUse={selectModeOfUseMock}
                />
            </Router>
        </div>
    )
}



describe('SELECT MODE OF APP USE -BUTTON', () => {

    it('can be rendered', async () => {
        const component = createComponent()
            
        const selectButton = component.container.querySelector('[data-testid="select-button-CREATE"]')
        expect(selectButton).not.toBeNull()
    })

    it('contains the correct link', async () => {
        const component = createComponent()
            
        const selectButton = component.container.querySelector('[data-testid="select-button-CREATE"]')
        expect(selectButton).not.toBeNull()
        expect(selectButton?.getAttribute('href')).toEqual('/create')
    })  


    it('contains the correct title', async () => {
        const component = createComponent()

        const titleText = component.container.querySelector('[data-testid="mode-title-CREATE"]')
        expect(titleText).not.toBeNull()
        expect(titleText?.textContent).toEqual('CREATE')

    })

    it('contains the correct description', async () => {
        const component = createComponent()

        const descriptionText = component.container.querySelector('[data-testid="mode-description-CREATE"]')
        expect(descriptionText).not.toBeNull()
        expect(descriptionText?.textContent).toEqual('With this tool you can create a new Dot Voting event.')
    })

    it('can be clicked to select use mode', async () => {
        const mockFunction = jest.fn()
        const component = createComponent(mockFunction)
        const selectButton = component.container.querySelector('[data-testid="select-button-CREATE"]')
        expect(selectButton).not.toBeNull()
        if (selectButton !== null) {
            fireEvent.click(selectButton)
        }
        expect(mockFunction.mock.calls).toHaveLength(1)
        expect(mockFunction.mock.calls[0][0]).toBe(modeOfUse.CREATE)
    })
})