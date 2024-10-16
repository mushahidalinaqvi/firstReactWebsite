
function LoginPage() {
    return (
        <>
            <div className="container   rounded-4 bg-dark text-light" style={style.mainContainer}>
                <h1 className="pt-4 text-center">Login Here</h1>

                <form action="" >

                    <div className="form-group" style={style.inputGroup}>
                        <label htmlFor="email">Email</label>
                        <input type="text" id="email" className="form-control" />
                    </div>
                    <div className="form-group" style={style.inputGroup}>
                        <label htmlFor="password">Password</label>
                        <input type="text" id="Email" className="form-control" />
                    </div>

                    <button className="btn btn-warning mt-5 form-control" type="submit">Submit</button>

                </form>
            </div>

        </>
    )
}

const style = {
    mainContainer: {
        marginTop:'100px',
        marginBottom:'100px',
        height:'100',
        justifyContent:'center',
        maxWidth: '30%',
        fontFamily: 'Arial, san-serif',
        paddingTop: '50px',
        paddingRight: '50px',
        paddingLeft: '50px',
        paddingBottom: '30px'
    },
    inputGroup: {
        paddingTop: '20px',
    }
};

export default LoginPage
