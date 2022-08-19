const ruta = "http://localhost:8000/api/v1";

export const methodGet = async (endpoint) => {
    const response = await fetch(`${ruta}/${endpoint}/`);
    const data = await response.json();
    //console.log("api:",data)
    return data;
}

export const methodPost = async (endpoint,data) => {
    const response = await fetch(`${ruta}/${endpoint}/`,{
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(data)
        })
    return response
}

export const methodPut = async (endpoint,data_update) => {
    const response = await fetch(`${ruta}/${endpoint}/`,{
        method: 'PUT',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(data_update)
    })
        return response
}