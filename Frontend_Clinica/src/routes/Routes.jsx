import {Route,Routes } from 'react-router-dom'
import {ClientContainer} from '../components/container/ClienteContainer'
import {HomeContainer} from '../components/container/HomeContainer'
import {NotFound} from  '../components/layout/notfound/NotFound'


export function RoutesApp(){
    return(
        <>
            <Routes>
                <Route exact path='/' element={<HomeContainer/>}/>
                <Route exact path='/client' element={<ClientContainer/>}/>
                <Route exact path='*' element={<NotFound/>}/>
            </Routes>
        </>
    )
}