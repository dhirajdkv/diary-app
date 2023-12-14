import React from 'react';
import Hooks from './Hooks'
import {Editor, EditorState, RichUtils} from 'draft-js';
import EditorController from './/Components/EditorController'
import {stateToHTML} from 'draft-js-export-html';
import {stateFromHTML} from 'draft-js-import-html';
const initialStyle = '<p>Tell us your story</p>';
class App extends React.Component{
  state={
    title:"",
    text:"",
    editorState : EditorState.createWithContent(stateFromHTML(initialStyle))
  }

  oneditorChange = editorState =>{
    this.setState({
      editorState
    })
  }

  toggleInlineStyle = inlineStyle => {
    this.setState({
      editorState:
          RichUtils.toggleInlineStyle(
            this.state.editorState,
            inlineStyle
          )
    })
  }



  submitInput=()=>{
    // this.setState({
    //   text:stateToHTML(this.state.editorState.getCurrentContent())
    // })
    console.log(stateToHTML(this.state.editorState.getCurrentContent()))
  }

  render(){
    return(
      <div>
        <div>
          <Hooks/>
        <EditorController
            editorState={this.state.editorState}
            toggleInlineStyle={this.toggleInlineStyle}
        />
        </div>
        <div style={{margin:"20px",borderLeft:"2px solid black",borderRight:"2px solid black",padding:"3px"}}>
        <Editor editorState={this.state.editorState} onChange={this.oneditorChange} />
        </div>
        <div>
          <button className="btn btn-primary" onClick={this.submitInput}>Submit</button>
        </div>
      </div>
    );
  }
}

export default App;
