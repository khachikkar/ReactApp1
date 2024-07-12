export default function Button({message, incr}){
   
    return (
        <div>
        {(message.has) ? console.log("yay") :console.log("none") }
        <button onClick={incr}>Click me</button>
        </div>
    )
}