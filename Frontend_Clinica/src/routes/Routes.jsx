import {Route,Routes } from 'react-router-dom'
import {ClientContainer} from '../components/container/ClienteContainer'
import {HomeContainer} from '../components/container/HomeContainer'
import {ProfessionalContainer} from '../components/container/ProfessContainer'
import {UserContainer} from '../components/container/UserContainer'
import {NotFound} from  '../components/layout/notfound/NotFound'

import {Auth} from '../components/auth/Auth'


export function RoutesApp(){
    return(
        <>
            <Routes>
                <Route exact path='/' element={<Auth/>}/>
                <Route exact path='/admin' element={<HomeContainer/>}/>
                <Route exact path='/admin/client' element={<ClientContainer/>}/>
                <Route exact path='/admin/user' element={<UserContainer/>}/>
                <Route exact path='/admin/professional' element={<ProfessionalContainer/>}/>
                <Route exact path='*' element={<NotFound/>}/>
            </Routes>
        </>
    )
}