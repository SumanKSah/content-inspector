import { useState } from "react";
import Header from "../Header/Header";
import "./DebugView.css"

const DebugView = ({setView, minimizeClickHandler}) => {
    const list = Object.keys(window.wfxTestBuddyData || {});
    const data = window.wfxTestBuddyData;
    const collections = window.wfxTestBuddyData[list[0]].map((obj) => {
      return {
        name: obj.name,
        id: obj.segmentId,
        flowId: obj.flow_id
      }
    })
    const [currentSegment, setCurrentSegment] = useState(collections);

    const updateSegmentSelected = (e) => {
      const value = e.target.value;
      const collections = window.wfxTestBuddyData[value].map((obj) => {
        return {
          name: obj.name,
          id: obj.segmentId,
          flowId: obj.flow_id
        }
      })
      setCurrentSegment(collections);
    }

    const getArrow = () => {
      return (<svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 12L17 12L13 16M13 8L15 10M4 7V4H20V20H4V11" stroke="#001A72" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>);
    }

    const getMapping = (suspect) => {
      const suspectMap = {
        0: "evaluation",
        1: "css-override",
        2: "overlap",
        3: "scroll",
        4: ""
      }
      return suspectMap[suspect];
    }

    const debugOnlick = () => {
      let widgetName = document.getElementById("widgetName");
      let collectionName = document.getElementById("collectionName");
      let collectionStep = document.getElementById("collectionStep").value;;
      let radioName;
      let radios = document.getElementsByName('debugSolution');
      for (var i = 0; i < radios.length; i++) {
          if (radios[i].checked) {
              radioName = i;
              break;
          }
      }

      window.viewData = {
        "widget" : widgetName.value,
        "collectionName": JSON.parse(collectionName.value),
        "issueNumber": radioName,
        "stepNumber": collectionStep
      }

      window.segmentId = JSON.parse(collectionName.value).id;
      window.flowId = JSON.parse(collectionName.value).flowId;
      window.suspect = getMapping(radioName);
      window.type = widgetName.value;
      window.step = collectionStep;
      if(window.suspect === "css-override") {
        const idx = window.wfxTestBuddyData[widgetName.value].findIndex((obj) => obj.segmentId === window.segmentId);
        if(idx != -1) {
          const i = window.wfxTestBuddyData[widgetName.value][idx].flowData.stepData.findIndex((obj) => obj.stepNumber === collectionStep.toString());
          if(i!=-1) {
            const stepKey = window.wfxTestBuddyData[widgetName.value][idx].flowData.stepData[i].key;
            window.flowId = window.flowId + ":" + stepKey;
          }
        }
      }

      window.setView("fixView");;
    }

    return (

        <div className='debug-view'>
           <Header name={"Manual Debugging"} minimizeClickHandler={minimizeClickHandler}/>
           <div className="view-body">

              <div className="widgetType debug-option">
                <div className="widgetName select-label">Widget Type</div>
                <select name="widgets" className="select-widget" id="widgetName" onChange={updateSegmentSelected}>
                  {
                    list.map((option) => {
                      return <option value={option}>{option}</option>
                    })
                  }
                </select>
              </div>

              <div className="collection debug-option">
                <div className="select-collection select-label">Select Collection</div>
                <select name="widgets" className="select-widget" id="collectionName">
                  {
                    currentSegment.map((obj) => {
                      return <option value={JSON.stringify(obj)}>{obj.name}</option>
                    })
                  }
                </select>
              </div>

              <div className="collection debug-option">
                <div className="select-collection select-label">Step Number</div>
                <input type="number" name="widgets" className="select-widget" id="collectionStep" />
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
              <button 
                className="next-button"
                onClick={debugOnlick}
              >Next</button>
           </div>
        </div>
    );
}

export default DebugView;