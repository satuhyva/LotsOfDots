import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import GetCode from '../GetCode'
import { StepsWithValuesType } from '../../../../types/create-voting/StepsWithValuesType'


// jest -i components/create/code/tests/GetCode.test.tsx



const testStepValues = [
    { index: 0, label: 'question', value: 'Some question' },
    { index: 1, label: 'options', value: ['option 1', 'option 2', 'option 3'] },
    { index: 2, label: 'count', value: 2 },
    { index: 3, label: 'identity', value: true },
    { index: 4, label: 'code', value: undefined },
] as StepsWithValuesType



describe('GET CODE -COMPONENT', () => {

    it('can be rendered', async () => {
        const setActiveStepMock = jest.fn()
        const stepsWithValuesMock = testStepValues
        const setCodeMock = jest.fn()
        const resetValuesMock = jest.fn()

        const component = render(
            <GetCode
                setActiveStep={setActiveStepMock}
                stepsWithValues={stepsWithValuesMock}
                setCode={setCodeMock}
                resetValues={resetValuesMock}
            />
        )
        expect(component.container.querySelector('#get-code')).not.toBeNull()
    })


})