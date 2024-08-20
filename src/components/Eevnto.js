function Evento({numero}) {
    function meuEvento(){
        console.log(`ae caraleo ${numero}`)
    }
    
    return(
        <div>
            <p>Clicke para ver o evento</p>
            <button onClick={meuEvento}>Ativar!</button>
        </div>
    )
}

export default Evento