export function TableProfessional(props){
    return(
        <div className="col-auto bg-light p-3">
        <div className="table-responsive">
            <table className="table">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                    {
                        props.users_prop.length > 0 ? (
                            props.users_prop.map(professional_table => (
                                <tr key={professional_table.id}>
                                    <td>{professional_table.name}</td>
                                    <td>{professional_table.description}</td>
                                    <td>
                                    <button 
                                        type="button" className="btn btn-outline-secondary m-1"
                                        onClick={() => {
                                            props.editRow_prop(professional_table)
                                        }}
                                        >
                                        Edit
                                    </button>
                                    <button 
                                        type="button" className="btn btn-outline-danger m-1"
                                        onClick={() => props.deleteUser(professional_table)}
                                        >
                                        Delete
                                    </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={3}>No Professional</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
  </div>
  </div>
    )
}   