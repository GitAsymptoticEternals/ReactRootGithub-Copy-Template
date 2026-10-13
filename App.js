import React from "react";
import ReactDOM from "react-dom/client";

// {}  : We can write Pure JavaScript code inside these curly-brackets.

const Title=()=>{
    return (
        <>
        <span className="title" tabIndex="5">
            SpanTitle_
        </span></>)
};

const HeadingComponent=()=>{
    return (<>
        <h1>One and the same thing in 3 ways to code:</h1>
        <Title/>
        <Title></Title>
        {Title()}
    </>);
}


const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);