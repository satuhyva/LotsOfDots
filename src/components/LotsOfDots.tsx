import React, { Suspense, lazy } from 'react'
import * as BrowserRouter from 'react-router-dom'

const Home = lazy(() => import('./home/Home'))
const CreateVoting = lazy(() => import('./create/CreateVoting'))
const Vote = lazy(() => import('./vote/Vote'))
const ViewVoting = lazy(() => import('./view/ViewVoting'))


const LotsOfDots: React.FC = () => {


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
                <BrowserRouter.Route path='/'>
                    <Home/>
                </BrowserRouter.Route>
            </BrowserRouter.Switch>
        </Suspense>  
    )
}

export default LotsOfDots

