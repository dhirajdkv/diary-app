import React from 'react'
const InlineStyles=[
    {label:"Bold", style:"BOLD"},
    {label:"Italic", style:"ITALIC"},
    {label:"Underline", style:"UNDERLINE"},
    {label:"Monospace", style:"CODE"},
]
const EditorController = ({editorState, toggleInlineStyle}) => {
    const currentStyle = editorState.getCurrentInlineStyle();
    return(
        <div style={{margin:"20px 20px"}}>
            {
                InlineStyles.map((styleObject, styleIndex)=>{
                    const handleTheClick = e =>{
                        e.preventDefault();
                        toggleInlineStyle(styleObject.style)
                    };
                    
                    return(
                        <span key={styleIndex} onMouseDown={handleTheClick} style={{
                            backgroundColor: currentStyle.has(styleObject.style)? "silver" : "white",
                            margin:"10px 10px 10px 0px",
                            border: "3px solid black",
                            padding:"4px 8px",
                        }}>{styleObject.style}
                    </span>
                    )
        })
        }
        </div>
    )
}

export default EditorController