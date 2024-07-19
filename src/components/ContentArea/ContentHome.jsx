import Widgets from "../Widgets/Widgets";
const ContentHome = ({setView}) => {
  return (
    <div>
      <div className="debug-manually-container">
        <div className="debug-manually">
          <div className="debug-manually-text">
            Content not displaying as expected?
          </div>
          <button 
            className="debug-manually-button"
            onClick={()=> {
                setView("debugView");
            }}
            >Debug manually</button>
        </div>
      </div>
      <Widgets setView={setView} />
    </div>
  );
};

export default ContentHome;
