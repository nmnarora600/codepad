import React, {  useState } from "react";
import CodeEditor from "./CodeEditor";
import axios from "axios";

const Home = () => {
  const secret = process.env.REACT_APP_CODE;
  

//function to check for updates from api
const CheckForResponse=async(url)=>{


  const resp2 = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "client-secret": secret,
    },
  });
  let data2 = await resp2.json();
  let obj1 = data2.result.run_status;

  let obj2 = obj1.output;
  if(data2.request_status.code==='REQUEST_COMPLETED'){
    ValuePrint(obj2)
   
  }
  
  else if((obj2===null && data2.result.compile_status!=='OK' ) && data2.request_status.code==='CODE_COMPILED'){
   
    document.getElementById("output").value=data2.result.compile_status;
    
  }
  else{
   
    
    CheckForResponse(url)
    
  }
}


//function to print result values at output
const ValuePrint=async (obj2)=>{
  await axios
  .get(obj2)
  .then((response) => {
 
    document.getElementById("output").value = response.data;
  })
  .catch((error) => {
    console.log("Error retrieving file content:", error);
  });
}


//needed variables
  const [codeValue, setCodeValue] = useState("");
  const [lang, setLang] = useState("python");
  const [langu, setLangu] = useState("PYTHON");
  const [input, setInput] = useState("");
  const [mode, setMode] = useState("DarkMode");
  const [theme, setTheme] = useState("vs");
  const [defaultValue, setDefaultValue] = useState("#Enter your code here");
  
  

  //function to run on clicking run
  const coderunner = async () => {

    document.getElementById("output").value = "Waiting for response...";

    //sending data to api
    const resp = await fetch(
      "https://api.hackerearth.com/v4/partner/code-evaluation/submissions/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "client-secret": secret,
        },
        body: JSON.stringify({ source: codeValue, lang: langu, input: input }),
      }
    );

    const data = await resp.json();
  
 
    //checking updates on sent details
      CheckForResponse(data.status_update_url);
      
      
        
      
      
    
        }


  
  const sendToHome = (value) => {
    setCodeValue(value);
  };
  const changeMode = () => {
    if (mode === "DarkMode") setMode("LightMode");
    else setMode("DarkMode");
    if (theme === "vs") setTheme("vs-dark");
    else setTheme("vs");
  };

  const handleonchange = (e) => {
    setLang(e.target.value);
    // inp.value = "Enter input here";
    setInput('');
    document.getElementById("output").value = "";
    if (e.target.value === "python") {
      setDefaultValue("#Enter your code here");
      setLangu("PYTHON");
    } else if (e.target.value === "cpp") {
      setLangu("CPP14");
      setDefaultValue(`#include<bits/stdc++.h>
using namespace std;
int main(){
  // Enter your code here

return 0;
}`);
    } else {
      setLangu("JAVA14");
      setDefaultValue(`public class Main {
  public static void main(String[] args) {
    // Enter your code here
            
  }
}`);
    }
  };

  const editorOptions = {
    autoClosingQuotes: "always",
  };

  return (
    <div>
      <div className="row">
        <div className="col" style={{ paddingLeft: 0, paddingRight: 0 }}>
          <div
            className="d-flex justify-content-between bg-dark p-2"
            style={{ marginBottom: "0.25vh", marginRight: "0.25vh" }}
          >
            <div
              className="d-flex flex-column"
              style={{ paddingTop: "4px", marginTop: "2px" }}
            >
              <h4 className="text-light  mb-0">
                {" "}
                <i
                  className="fa-solid fa-code"
                  style={{ color: "#f2f2f2" }}
                ></i>{" "}
                CodePad
              </h4>
            </div>
            <div
              className="d-flex justify-content-between bg-dark "
              style={{ paddingRight: "35px", alignItems: "center" }}
            >
              <div
                className="col-12 w-50"
                style={{ paddingLeft: "25px", marginRight: "15px" }}
              >
                <select
                  className="form-select py-2"
                  id="autoSizingSelect"
                  onChange={handleonchange}
                  style={{ borderRadius: 0 }}
                >
                  <option value="python">Python</option>
                  <option value="cpp">C++</option>
                  <option value="java">Java</option>
                </select>
              </div>

              <div className="d-flex ">
                {/* <button type="button" className="btn btn-success mx-1 px-3" >CodePad</button> */}
                <button
                  type="button"
                  className="btn btn-success mx-1 px-3 "
                  onClick={changeMode}
                >
                  {mode}
                </button>
                <button
                  type="button"
                  onClick={coderunner}
                  className="btn btn-success mx-1 "
                  style={{ paddingLeft: "14px", paddingRight: "14px" }}
                >
                  <i className="fa-solid fa-play"></i>
                </button>
              </div>
            </div>
          </div>
          <div style={{ marginRight: "0.25vh" }}>
            <CodeEditor
              lang={lang}
              sendToHome={sendToHome}
              theme={theme}
              options={editorOptions}
              defaultValue={defaultValue}
            />
          </div>
        </div>
        <div
          className="col d-flex flex-column bg-dark px-4"
          style={{ height: "627px", marginBottom: "1px" }}
        >
          <div className="h-50">
            <label htmlFor="Input" className="text-light mt-4 mb-2">
              {" "}
              Input
            </label>
            <textarea
              type="text"
              id="input"
              onChange={(e) => setInput(e.target.value)}
              className="form-control h-75"
            />
          </div>
          <div className="h-50">
            <label htmlFor="Output" className="text-light my-2">
              {" "}
              Output
            </label>
            <textarea
              type="text"
              id="output"
              className="form-control h-75"
              readOnly={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
