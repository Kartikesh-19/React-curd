import {useDispatch,useSelector} from 'react-redux';
import {useHistory,useLocation } from 'react-router-dom';
import {useState} from 'react';
import {userUpdated} from './User';


export const Edit = () => {
    const {pathname} =useLocation();
    const userId=parseInt(pathname.replace('/edit-user/',''))
    const user =useSelector ((state)=>state.users.entities.find((user)=>user.id===userId));
    const dispatch=useDispatch();
    const history=useHistory();
    const [name,setName]=useState(user.name);
    const [email,setEmail]=useState(user.email); 
    const [error,setError]=useState(null); 
    const handleName = (e) =>setName(e.target.value);
    const handleEmail = (e) =>setEmail(e.target.value);

    const handleClick=()=>{
        if(name && email){
            dispatch (
                userUpdated({
                    id:userId,
                    name,
                    email,

                })
            );
            setError (null);
            history.push('/');

        }
        else{
            setError('Fill the details')
        }
       

    };
    return (
        <div>
        <input type='text' placeholder='name' id='nameInput' onChange={handleName} value={name}/><br/>
        <input type='text' placeholder='email' id='emailInput' onChange={handleEmail} value={email}/><br/>
        {error && error}
        <button onClick={handleClick} className='button-primary'>Save user</button>
            
        </div>
    );
}

