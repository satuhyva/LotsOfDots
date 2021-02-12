import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Home from '../Home'
import { BrowserRouter as Router} from 'react-router-dom'
import AppContext from '../../../state/AppContext'
import { State } from '../../../types/State'



const createComponent = () => {
    return render(
        <div>
            <Router>
                <Home/>
            </Router>
        </div>
    )
}

type TestComponentWithContextProps = {
    stateMock: State,
    dispatchMock: typeof jest.fn
}

const TestComponentWithContext: React.FC<TestComponentWithContextProps> = ({ stateMock, dispatchMock }) => {
    const [state, dispatch] = [stateMock, dispatchMock]
    return( 
        <AppContext.Provider value={{ state, dispatch }}>
            <Router>
                <Home/>
            </Router>
        </AppContext.Provider>
    )
}





describe('HOME COMPONENT', () => {

    it('can be rendered', async () => {
        const component = createComponent()
            
        const homeDiv = component.container.querySelector('[data-testid="Home"]')
        expect(homeDiv).not.toBeNull()
    })

    it('contains correct select buttons', async () => {
        const component = createComponent()
            
        const homeDiv = component.container.querySelector('[data-testid="Home"]')
        expect(homeDiv).not.toBeNull()

        const createText = component.container.querySelector('[data-testid="mode-title-CREATE"]')
        expect(createText).not.toBeNull()
        expect(createText?.textContent).toEqual('CREATE')

        const voteText = component.container.querySelector('[data-testid="mode-title-VOTE"]')
        expect(voteText).not.toBeNull()
        expect(voteText?.textContent).toEqual('VOTE')

        const viewText = component.container.querySelector('[data-testid="mode-title-VIEW RESULTS"]')
        expect(viewText).not.toBeNull()
        expect(viewText?.textContent).toEqual('VIEW RESULTS')
    })


    it('allows selection of app use mode correctly', async () => {
        const stateMock = {
            modeOfUse: undefined,
            votingNumber: undefined,
            votingData: undefined
        }
        const dispatchMock = jest.fn()
        const component = render( 
            <TestComponentWithContext stateMock={stateMock} dispatchMock={dispatchMock}/>
        )
        const createButton = component.container.querySelector('[data-testid="select-button-CREATE"]')
        if (createButton !== null) {
            fireEvent.click(createButton)
        }
        expect(dispatchMock.mock.calls).toHaveLength(1)
        expect(dispatchMock.mock.calls[0][0].type).toBe('mode')
        expect(dispatchMock.mock.calls[0][0].data).toBe('Create new voting')
    })


})