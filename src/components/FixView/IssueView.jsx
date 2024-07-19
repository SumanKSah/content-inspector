import { useState } from "react";
import ReportIssueModal from "../ReportIssue/ReportIssueModal";

const IssueView = ({fix, name}) => {
    const [showReport, setShowReport] = useState(false);
    const searchIcon = () => {
        return 
    }
    return (
        <div className="issue-body">

            <div className="issue-header">
                <div className="icon">
                    <svg height={40} width={40} viewBox="0 0 122.88 113.65"><path class="cls-1" d="M56.26,0a50.59,50.59,0,0,1,50.46,63.44A49.92,49.92,0,0,1,102,75.25L122.19,96a2.43,2.43,0,0,1,0,3.42L108.2,113a2.42,2.42,0,0,1-3.42,0l-19.35-20A50.34,50.34,0,0,1,61.24,101a11.54,11.54,0,0,0,1.35-9.55,11.19,11.19,0,0,0,2.23-1.15,40.34,40.34,0,1,0-46.51-47.9A11.36,11.36,0,0,0,7.76,43.61a49.69,49.69,0,0,1,2.77-10.92A50.45,50.45,0,0,1,56.26,0Zm-5,53.3,4.27,4.5a3,3,0,0,1-.1,4.2l-3.63,3.44a23.38,23.38,0,0,1,2,5.91l4.58.11a3,3,0,0,1,2.9,3.05l-.16,6.21a3,3,0,0,1-3,2.89l-5-.13a23.42,23.42,0,0,1-2.74,5.62l3.16,3.32a3,3,0,0,1-.11,4.2l-4.5,4.28a3,3,0,0,1-4.2-.11L41.25,97.2a23.38,23.38,0,0,1-5.91,2l-.11,4.58a3,3,0,0,1-3,2.9L26,106.56a3,3,0,0,1-2.89-3l.13-5a24,24,0,0,1-5.62-2.74l-3.32,3.16a3,3,0,0,1-4.2-.11l-4.28-4.5a3,3,0,0,1,.11-4.2l3.62-3.44a23.81,23.81,0,0,1-2-5.91L2.9,80.66a3,3,0,0,1-2.9-3l.16-6.21a3,3,0,0,1,3.05-2.89l5,.12A23.35,23.35,0,0,1,10.94,63L7.78,59.7a3,3,0,0,1,.11-4.2l4.5-4.27a3,3,0,0,1,4.2.1L20,55a23.51,23.51,0,0,1,5.91-2.05l.12-4.57a3,3,0,0,1,3-2.9l6.21.16a3,3,0,0,1,2.89,3l-.12,5a23.53,23.53,0,0,1,5.61,2.74L47,53.22a3,3,0,0,1,4.21.11ZM31,63.88A12.2,12.2,0,1,1,18.44,75.77,12.2,12.2,0,0,1,31,63.88Z"/></svg>
                </div>
                <div className="issue-name">
                    {name}
                </div>
            </div>
            <div className="issue-suggestion">
                <div className="issue-suggestion-heading">
                    {"To fix the error try these options"}
                </div>
                <div className="fix-options">
                    {fix.map((item, index) => (
                        <div className="options">
                            <b>{"Option " + (index + 1) + ": "}</b>
                            {item}
                        </div>
                    ))}
                </div>

                <div className="seperator"></div>
                <div className="askai">
                    <div className="ailabel">
                        <div className="aihead">Ask AI</div>
                        <div className="aidesc">
                            Fix your issue with AI
                        </div>
                    </div>
                    <div className="airight">
                        <button className="aibutton">Run</button>
                    </div>
                </div>
                <div className="seperator"></div>
                <div className="reportissue">
                    <div className="issueheading">
                        {"Problem still unsolved?"}
                    </div>
                    <div className="reportbuttonparent">
                        <button 
                            className="reportbutton"
                            onClick={()=> {
                                setShowReport(true);
                            }}
                        >Report issue</button>
                    </div>
                </div>
            </div>
            {
                showReport &&
                <ReportIssueModal minimizeClickHandler={setShowReport}/>
            }
            
        </div>
    );
}

export default IssueView;