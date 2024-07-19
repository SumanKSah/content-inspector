import Header from "../Header/Header";
import "./DebugView.css"
const DebugView = ({setView, minimizeClickHandler}) => {

    const getArrow = () => {
      return (<svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 12L17 12L13 16M13 8L15 10M4 7V4H20V20H4V11" stroke="#001A72" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>);
    }
    return (

        <div className='debug-view'>
           <Header name={"Manual Debugging"} minimizeClickHandler={minimizeClickHandler}/>
           <div className="debugView-body">

              <div className="widgetType debug-option">
                <div className="widgetName select-label">Widget Type</div>
                <select name="widgets" id="select-widget">
                  <option value="smart-tip">Smart tip</option>
                  <option value="beacon">Beacon</option>
                  <option value="flow">Flow</option>
                  <option value="launcher">Launcher</option>
                  <option value="popup">Popup</option>
                  <option value="survey">Survey</option>
                </select>
              </div>

              <div className="collection debug-option">
                <div className="select-collection select-label">Select Collection</div>
                <select name="widgets" id="select-widget">
                  <option value="collection1">Collection 1</option>
                  <option value="collection2">Collection 2</option>
                  <option value="collection3">Collection 3</option>
                </select>
              </div>

              <div className="debugSolution debug-option">
                <div className="solution-label select-label">Possible bugs</div>

                <div className="solution-options">
                  <div className="solution">
                    <input type="radio" name="debugSolution" id="debugSolution" /> 
                    <label htmlFor="debugSolution">Content did not appear</label>
                  </div>
                  
                  <div className="solution">
                  <input type="radio" name="debugSolution" id="debugSolution" />
                  <label htmlFor="debugSolution">Styling issue detected</label>
                  </div>
            
                  <div className="solution">
                  <input type="radio" name="debugSolution" id="debugSolution" />
                  <label htmlFor="debugSolution">Content flickering issue</label>
                  </div>
                  
                  
                  <div className="solution">
                  <input type="radio" name="debugSolution" id="debugSolution" />
                  <label htmlFor="debugSolution">Scrolling issue Detected</label>
                  </div>
                  
                  <div className="solution">
                  <input type="radio" name="debugSolution" id="debugSolution" />
                  <label htmlFor="debugSolution">None of the above</label>
                  </div>

                </div>
              </div>
            </div>
           <div className="footer">
              <button className="next-button">Next</button>
           </div>
        </div>
    );
}

export default DebugView;