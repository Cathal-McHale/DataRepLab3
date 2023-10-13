function Content(){

    return(
    <div>
        <h1>Hello world</h1>
        <h2> It is {new Date().toLocaleTimeString()}.</h2> 
    </div>
    )
}
//exporting to import in main class
export default Content;