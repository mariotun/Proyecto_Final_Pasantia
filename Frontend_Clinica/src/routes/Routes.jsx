import {Route,Routes } from 'react-router-dom'
import {ClientContainer} from '../components/container/ClienteContainer'
import {HomeContainer} from '../components/container/HomeContainer'
import {ProfessionalContainer} from '../components/container/ProfessContainer'
import {UserContainer} from '../components/container/UserContainer'
import {NotFound} from  '../components/layout/notfound/NotFound'


export function RoutesApp(){
    return(
        <>
            <Routes>
                <Route exact path='/' element={<HomeContainer/>}/>
                <Route exact path='/client' element={<ClientContainer/>}/>
                <Route exact path='/user' element={<UserContainer/>}/>
                <Route exact path='/professional' element={<ProfessionalContainer/>}/>
                <Route exact path='*' element={<NotFound/>}/>
            </Routes>
        </>
    )
}