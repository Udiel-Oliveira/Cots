import Item from "./Item" 

function List() {
    return (
        <>
        <h1>Minha lista</h1>
            <ul>
                <Item marca="Ferrari" ano_lancamento={1985}/>
                <Item marca="Ford" ano_lancamento={1964}/>
                <Item marca="Fiat" ano_lancamento={400}/>
                <Item/>
            </ul>
        </>
    )
}

export default List