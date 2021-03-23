import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import CreateVotingStepper from '../CreateVotingStepper'
import { StepsWithValuesType } from '../../../../types/create-voting/StepsWithValuesType'


// jest -i components/create/stepper/CreateVotingStepper.test.tsx

const stepsWithValues: StepsWithValuesType = [
    { index: 0, label: 'question', value:  undefined },
    { index: 1, label: 'options', value: undefined },
    { index: 2, label: 'count', value: undefined },
    { index: 3, label: 'identity', value: undefined },
    { index: 4, label: 'code', value: undefined }
]


const createComponent = (setActiveStepMock?: typeof jest.fn) => {
    return render(
        <CreateVotingStepper
            activeStep={0}
            setActiveStep={setActiveStepMock ? setActiveStepMock : jest.fn()}
            stepsWithValues={stepsWithValues}
        />
    )
}


describe('CREATE STEPPER COMPONENT', () => {

    it('can be rendered', async () => {
        const component = createComponent()
        const stepper = component.container.querySelector('[data-testid="stepper"]')
        expect(stepper).not.toBeNull()
    })

    it('displays correct step labels', async () => {
        const component = createComponent()
        expect(component.container).toHaveTextContent('question')
        expect(component.container).toHaveTextContent('options')
        expect(component.container).toHaveTextContent('count')
        expect(component.container).toHaveTextContent('identity')
        expect(component.container).toHaveTextContent('code')
        expect(component.container).not.toHaveTextContent('non-existent')
    })

    it('allows selection of a step', async () => {
        const setActiveStepMock = jest.fn()
        const component = createComponent(setActiveStepMock)
        const stepperButton = component.container.querySelector('[data-testid="step-button-2"]')
        if (stepperButton !== null) {
            fireEvent.click(stepperButton)
        }
        expect(setActiveStepMock.mock.calls[0][0]).toBe(2)
    })

})
