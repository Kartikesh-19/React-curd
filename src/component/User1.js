import {fetchUsers,userDeleted} from './User';
import {useDispatch,useSelector} from 'react-redux';
import {Link} from 'react-router-dom';


export const User1= () => {
    const dispatch=useDispatch(); 

    const {entities}=useSelector((state)=>state.users);
    const loading = useSelector((state)=>state.loading);

    const handleDelete = (id)=>{
        dispatch (userDeleted({id}));
    };

    return (
        <div>
        <button onClick={()=>dispatch(fetchUsers())} className='button-primary'>Load Users</button>
        <Link to='/add-user'><button className='button-primary'>Add user</button></Link>
        <div>
            {loading? (
                'Loading...'
            ):(
                <table className='u-full-width'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Actions</th>
                        </tr>

                    </thead>
                    <tbody>
                        {entities.length &&
                        entities.map(({id,name,email},i)=>(
                            <tr key={i}>
                                <td>{id}</td>
                                <td>{name}</td>
                                <td>{email}</td>
                                <button onClick={()=>handleDelete(id)}>Delete</button>
                                <Link to={`/edit-user/${id}`}><button >Edit</button></Link>
                            </tr>

                        ))}
                    </tbody>
                </table>
            )}
        </div>
        </div>
    );
}


