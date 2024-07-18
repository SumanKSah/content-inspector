import Widgets from "../Widgets/Widgets";
const ContentHome = () => {
  return (
    <div>
      <div className="debug-manually-container">
        <div className="debug-manually">
          <div className="debug-manually-text">
            Content not displaying as expected?
          </div>
          <button className="debug-manually-button">Debug manually</button>
        </div>
      </div>
      <Widgets />
    </div>
  );
};

export default ContentHome;
