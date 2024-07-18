import Header from "../Header/Header";
const DebugView = ({setView, minimizeClickHandler}) => {
    return (

        <div className='debug-view'>
           <Header name={"Manual Debugging"} minimizeClickHandler={minimizeClickHandler}/>
        </div>
    )
}

export default DebugView;