import { useState } from 'react';

function AddData() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rows, setRows] = useState([]);

    const submitForm = (event) => {
        event.preventDefault();
        setRows([...rows, { name, email, password }]);
        setName("");
        setEmail("");
        setPassword("");
    };

    return (
        <div className='pt-5 bg-dark '>
            <h1 className='text-center pb-1 text-warning'> Form</h1>
            <h4 className="text-center pb-5 text-light">This is working using useState</h4>
            <hr />
            <div className="container p-5 shadow pt-5 bg-light rounded-5 " style={{ width: '60%' }}>
                {/* submit form function to set the values of the form entered into the tables */}
                <form onSubmit={submitForm}> 
                    <label className="form-label" htmlFor="name">Full Name</label>
                    <input className="form-control" type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
                    <label className="form-label" htmlFor="email">Email</label>
                    <input className="form-control" type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <label className="form-label" htmlFor="password">Phone</label>
                    <input className="form-control" type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    <button className="btn btn-warning mt-3" type="submit">Submit</button>
                </form>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '50vh' }}>
                <div className="container p-5  bg-light rounded-5 shadow-lg text-center" style={{ width: '80%' }}>
                    <table className="table text-center">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Password</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows.map((row, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{row.name}</td>
                                    <td>{row.email}</td>
                                    <td>{row.password}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
}

export default AddData;
