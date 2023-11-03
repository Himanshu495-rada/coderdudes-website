import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia } from "react-syntax-highlighter/dist/esm/styles/prism";
import copy from "copy-to-clipboard";

function CodeBlock({ code, code_type }) {
    const [isCopied, setIsCopied] = useState(false);

    const handleCopyClick = () => {
        copy(code);
        setIsCopied(true);
    };
    return (
        <div>
            <div>
                <SyntaxHighlighter language={code_type} style={okaidia}>
                    {code}
                </SyntaxHighlighter>
            </div>
            <button onClick={handleCopyClick} style={{ backgroundColor: "green", borderRadius: "5px", color: "white", height: "35px", border: 'none' }} >
                {isCopied ? "Copied!" : "Copy to Clipboard"}
            </button>
        </div>
    )
}

export default CodeBlock