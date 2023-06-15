import React,{useEffect, useState} from 'react'
import { Editor } from '@monaco-editor/react'


const CodeEditor = (props) => {
    const [editorKey, setEditorKey] = useState(Date.now());
    const [width, setWidth]=useState('70vw');
   
    //key value for monaco
    useEffect(() => {
        setEditorKey(Date.now());
        if(window.innerWidth<740){
          setWidth('100vw')
        }
        else{
          setWidth('70vw');
        }
      }, [props.lang]);
      
    
    //sending all changes entered to home
      const handleEditorChange = (value) => {
       
        props.sendToHome(value);
      };

  return (
    <div>
      <Editor key={editorKey} height="568px" width={width} defaultLanguage={props.lang} defaultValue={props.defaultValue} theme={props.theme}
        onChange={handleEditorChange} options={{ autoClosingPairs: 'always' }} />
    </div>
  )
}

export default CodeEditor
