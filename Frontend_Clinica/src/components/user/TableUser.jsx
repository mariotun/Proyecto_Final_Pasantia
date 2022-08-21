export function TableUser(props){
    return(
        <div className="col-auto bg-light p-3">
        <div className="table-responsive">
            <table className="table">
                <thead>
                <tr>
                    <th>Names</th>
                    <th>Last Names</th>
                    <th>Phone</th>
                    <th>Address</th>
                    <th>Age</th>
                    <th>Email</th>
                    <th>Professional</th>
                    <th>Input Date</th>
                    <th>Operation</th>
                </tr>
                </thead>
                <tbody>
                    {
                        props.users_prop.length > 0 ? (
                            props.users_prop.map(user_table => (
                                <tr key={user_table.id}>
                                    <td>{user_table.names}</td>
                                    <td>{user_table.last_names}</td>
                                    <td>{user_table.phone_number}</td>
                                    <td>{user_table.address}</td>
                                    <td>{user_table.age}</td>
                                    <td>{user_table.email}</td>
                                    <td>{user_table.professional}</td>
                                    <td>{user_table.input_date}</td>
                                    <td>
                                    <button 
                                        type="button" className="btn btn-outline-secondary m-1"
                                        onClick={() => {
                                            props.editRow_prop(user_table)
                                        }}
                                        >
                                        Edit
                                    </button>
                                    <button 
                                        type="button" className="btn btn-outline-danger m-1"
                                        onClick={() => props.deleteUser(user_table)}
                                        >
                                        Delete
                                    </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={3}>No users</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
  </div>
  </div>
    )
}