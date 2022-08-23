import React, {useState,useEffect} from 'react';
import {methodPost,methodGet,methodPut} from '../../service/api.js'

//redux hook
import {useSelector,useDispatch} from 'react-redux'
import {loadData as setDataActions} from '../../redux/actions/appoitmentAction.js'


export function TableUser(){

    //instanciar useDispatch
    const dispatch = useDispatch();
     //utilizar useSelector
    const citas = useSelector(state => state.data)

    const handleListAppoitment = async ()=>{
        const listado = await methodGet('validuser')
        dispatch(setDataActions(listado))
    } 

     useEffect( ()=>{
        handleListAppoitment()
        console.log('CITAS: ',citas)

     },[]);

    
    console.log('--->',citas)
    return(
        <div>appoitment</div>
    )
}


/*const mapStateToProps = (reducers) =>{
    return reducers.appoitmentReducer;
}*/

//export default connect(mapStateToProps,appoitment)