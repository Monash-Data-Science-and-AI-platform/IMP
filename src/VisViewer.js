import React, { Fragment, useEffect } from 'react';
import './LavaVu-amalgamated.css'
export const VisViewer = (props) => {

    useEffect(() => {
        console.log(props.filePath)
    }, [props.filePath])

    return (
        <div id="vis-panel">
            { props.filePath ?
                <Fragment>
                    <h3>Showing <span className="fileNameString">{props.filePath} </span></h3>


                    <iframe title="Viewer" id="frame1" className="resized" src={"./webview.html?" + props.filePath + "&background=white"} style={{ width: '100%', height: '100%', minHeight: '800px', border: '1px solid #888' }}>
                    </iframe>
                </Fragment>
                :
                <div className="selectPrompt"> Please select a file </div>
            }
        </div>
    )


}