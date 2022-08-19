
export function TableClient(props){
    return(
        <table>
            <thead>
            <tr>
                <th>Names</th>
                <th>Last Names</th>
                <th>Phone</th>
                <th>Address</th>
                <th>Age</th>
                <th>Fono</th>
                <th>Prevision</th>
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
                                <td>{user_table.fono}</td>
                                <td>{user_table.prevision}</td>
                                <td>{user_table.input_date}</td>
                                <td>
                                <button 
                                    className="button muted-button"
                                    onClick={() => {
                                        props.editRow_prop(user_table)
                                    }}
                                    >
                                    Edit
                                </button>
                                <button 
                                    className="button muted-button"
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
    )
}