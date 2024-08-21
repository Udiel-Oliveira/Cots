import Button from "./eventos/Button"

function Evento({numero}) {
    function meuEvento(){
        console.log("ativado meu primeiro evento")
    }
    
    function segundoEvento() {
        console.log("ativado meu segundo evento")
    }

    return(
        <div>
            <p>Clicke para ver o evento</p>
            <Button event={meuEvento} text="Primeiro Evento"/>
            <Button event={segundoEvento} text="Segundo Evento"/>
        </div>
    )
}

export default Evento