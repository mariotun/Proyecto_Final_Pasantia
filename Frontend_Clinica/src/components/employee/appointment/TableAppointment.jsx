export function TableAppointment(props){
    return(
        <div className="col-auto bg-light p-3">
        <div className="table-responsive">
            <table className="table">
                <thead>
                <tr>
                    <th>Date</th>
                    <th>Hour</th>
                    <th>Client</th>
                    <th>User</th>
                    <th>Operation</th>
                </tr>
                </thead>
                <tbody>
                    {
                        props.users_prop.length > 0 ? (
                            props.users_prop.map(user_table => (
                                <tr key={user_table.id}>
                                    <td>{user_table.date}</td>
                                    <td>{user_table.hour}</td>
                                    <td>{user_table.client.names}</td>
                                    <td>{user_table.employee.names}</td>
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