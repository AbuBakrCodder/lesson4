function Users({ users, deletebtn}) {
    return (
        <div>
            {
                users.map((user) => {
                    return (
                        <div key={user.id} className='cars'>
                            <h1>
                                {user.name}
                            </h1>
                            <button onClick={()=>{deletebtn(user.id)}}>Delete</button>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default Users