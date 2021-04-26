import {useDispatch ,useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom'
import {useState} from 'react';
import {userAdded} from './User';

export function Add() {
    const dispatch=useDispatch();
    const history=useHistory();
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [error,setError]=useState(null);

     const handleName=(e)=>setName(e.target.value);
     const handleEmail=(e)=>setEmail(e.target.value);

     const userAmount =useSelector((state)=>state.users.entities.length);

    const handleClick=()=>{
        if(name && email){
            dispatch(
                userAdded({
                    id: userAmount+1,
                    name,
                    email,

                })
            );
            setError(null);
            history.push('/');


        }
        else{
            setError('Fill all the details');

        }
        setName('');
        setEmail('');

    };

    return (
        <div>
        <input type='text' placeholder='name' id='nameInput' onChange={handleName} value={name}/><br/>
        <input type='email' placeholder='email' id='emailInput' onChange={handleEmail} value={email}/><br/>
         {error && error}
        <button onClick={handleClick} className='button-primary'>Add user</button>   
        </div>
    )
}


