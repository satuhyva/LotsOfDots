import React, { Suspense, lazy } from 'react'
import * as BrowserRouter from 'react-router-dom'

const Home = lazy(() => import('./home/Home'))
const CreateVoting = lazy(() => import('./create/CreateVoting'))
const Vote = lazy(() => import('./vote/Vote'))
const ViewVoting = lazy(() => import('./view/ViewVoting'))

// type Token = {
//     thetoken: string
// }
type Match = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    myMatch: any
}

const MyTokenTestComp: React.FC<Match> = ({ myMatch }) => {
    console.log(myMatch)
    const token = myMatch !== undefined ? (myMatch.params.thetoken) : 'xxxxx'
    return (
        <div>
            <div>TOKEN TEST COMPONENT</div>
            <div>{token}</div>
        </div>
        
    )
}

const LotsOfDots: React.FC = () => {

    // const myMatch = BrowserRouter.useRouteMatch('/token/:thetoken')
    // const parameters = myMatch?.params as Token
    // const possibleToken =  parameters !== undefined ? parameters.thetoken : 'No token' 

    return(
        <Suspense fallback={<div>LOADING DATA...</div>}>
            <BrowserRouter.Switch>
                <BrowserRouter.Route path='/home'>
                    <Home/>
                </BrowserRouter.Route>
                <BrowserRouter.Route path='/vote'>
                    <Vote/>
                </BrowserRouter.Route>
                <BrowserRouter.Route path='/create'>
                    <CreateVoting/>
                </BrowserRouter.Route>
                <BrowserRouter.Route path='/view'>
                    <ViewVoting/>
                </BrowserRouter.Route>
                <BrowserRouter.Route
                    path='/token/:thetoken'
                    render={({ match }) => <MyTokenTestComp myMatch={match}/>}
                />
               
                {/* <BrowserRouter.Route path='/token'>
                    <div>{possibleToken}</div>
                </BrowserRouter.Route> */}
                <BrowserRouter.Route path='/'>
                    <Home/>
                </BrowserRouter.Route>
            </BrowserRouter.Switch>
        </Suspense>  
    )
}

export default LotsOfDots

