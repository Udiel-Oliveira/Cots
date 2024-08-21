import { useState } from "react"

function Condicional() {
    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()

    function enviarEmail(e) {
        e.preventDefault()
        setUserEmail(email)
        console.log(userEmail)
    }
    function limparEmail(e) {
        setUserEmail('')
    }
    

    return (
        <div>
            <h2>Cadastre seu Email</h2>
            <form>
                <input type="email" 
                placeholder="Digite seu email..."
                onChange={(e) => setEmail(e.target.value)} />
                <button onClick={enviarEmail}>Enviar Email</button>
                {userEmail && (
                    <div>
                        <p>O e-mail do usuario é: {userEmail}</p>
                        <button onClick={limparEmail}>Limpar</button>
                    </div>
                )}
            </form>
        </div>
    )
}

export default Condicional