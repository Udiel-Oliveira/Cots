function Form(){
    function cadastrarUsuario(e) {
        e.preventDefault()
        console.log("deu certo")
    }
    
    return (
        <div>
            <h1>Meu Cadastro: </h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <input type="text" placeholder="DIgite seu Nome" required/>
                </div>
                <div>
                    <input type="submit" value={"cadastrar"} />
                </div>
            </form>
        </div>
    )
}

export default Form