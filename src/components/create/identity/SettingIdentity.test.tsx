import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import SettingIdentity from './SettingIdentity'



// jest -i components/create/identity/SettingIdentity.test.tsx


const createComponent = (setActiveStepMock?: typeof jest.fn, updateStepsWithValuesMock?: typeof jest.fn, currentValue?: boolean) => {
    return render(
        <SettingIdentity
            setActiveStep={setActiveStepMock ? setActiveStepMock : jest.fn()}
            updateStepsWithValues={updateStepsWithValuesMock ? updateStepsWithValuesMock : jest.fn()}
            step={{ index: 0, label: 'question', value: currentValue === undefined ? undefined : currentValue }}
        />
    )
}


describe('SETTING IDENTITY COMPONENT', () => {

    it('can be rendered', async () => {
        const component = createComponent()
        const settingIdentity = component.container.querySelector('[data-testid="SettingIdentity"]')
        expect(settingIdentity).not.toBeNull()
    })

    it('correctly displays the two radio buttons with their labels', async () => {
        const component = createComponent(jest.fn(), jest.fn(), undefined)
        expect(component.container).toHaveTextContent('Anonymous voting')
        expect(component.container).toHaveTextContent('Show voter names')
    })

})