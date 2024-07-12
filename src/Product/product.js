import Button from "../Button/button"

function Prod({mess, increment}){

    return (
        <div>
            <h1>Produtos</h1>
            <h3>789 $</h3>
            <Button message={mess} incr={increment}/>
           
        </div>
    )
}

export default Prod