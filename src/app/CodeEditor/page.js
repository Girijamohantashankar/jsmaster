"use client";
import { useRef, useState } from "react";
import Editor from "@monaco-editor/react";



export default function MonacoEditor({ code, setCode, onRunCode }) {
    const [editor, setEditor] = useState(null);

    const handleEditorMount = (editor) => {
        setEditor(editor);
    };

    const handleCodeChange = (value) => {
        setCode(value);
    };

    return (
        <>
            <Editor
                height="300px"
                language="javascript"
                value={code}
                onChange={handleCodeChange}
                onMount={handleEditorMount}
            />
            <button className="button" onClick={onRunCode}>Run</button>
        </>
    );
}
