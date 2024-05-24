import React, { useEffect, useState } from "react";
import { BlocklyWorkspace } from "react-blockly";
import './index.scss'
import Blockly from "blockly";
import "blockly/python";
import "blockly/javascript";
import './BlocklyBlocks'
import BlockToolBoxConfigurations from "./BlockToolBoxConfigurations";
import { phpGenerator } from "./PHPGenerator";
import { Button } from "@mui/material";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import AceEditor from "react-ace";
import "ace-builds/webpack-resolver";

import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-tomorrow";
import "ace-builds/src-noconflict/ext-language_tools";

import PreviewIcon from '@mui/icons-material/Preview';
import DataObjectIcon from '@mui/icons-material/DataObject';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import { ContentDialogBox } from "../../components/dialog_box";
import { toast } from 'react-toastify';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';


export type EditorConfigType = {
    mode: "html",
    font: number,
    theme: "monokai" | "tomorrow",
    tab: number,
}
export default function HTMLEditor() {
    const toolboxCategories = BlockToolBoxConfigurations
    const [xml, setXml] = useState(`<xml xmlns="http://www.w3.org/1999/xhtml"></xml>`);
    const [code, setCode] = useState(``);
    const [isPreview, setIsPreview] = useState(false);
    const [isBlockBased, setIsBlockBased] = useState(true);
    const [editorConfigs, setEditorConfigs] = useState<EditorConfigType>({
        mode: "html",
        font: 18,
        theme: "tomorrow",
        tab: 4,
    })

    const [isDialogOpen, setIsDialogOpen] = useState(false)
    function setCodeValue(value: string) {
        setCode(value)
    }
    const [value, setValue] = React.useState('one');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };
    useEffect(() => {
        console.log(code);

    }, [code])
    return (
        <>
            <div className="main-container" style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
            }}>
                <div style={{
                    height: "7vh", width: "100vw", display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "10px",
                    border: "1px solid black",
                }}>
                    <h3 style={{
                        fontSize: "30px"
                    }}>HTML CSS Editor</h3>
                    <div>
                        <Button variant="contained" color={"success"} onClick={() => {
                            setIsDialogOpen(true)
                        }}>
                            Examples
                        </Button>
                    </div>
                </div>
                <div className="blockly-container" style={{
                    // border: "1px solid black",
                }}>
                    <BlocklyWorkspace

                        toolboxConfiguration={toolboxCategories}
                        initialXml={xml}
                        className="html-blockly"
                        workspaceConfiguration={{
                            horizontalLayout: false,
                            trashcan: true,
                            zoom: {
                                controls: true,
                                wheel: true,
                                startScale: 1.0,
                                maxScale: 3,
                                minScale: 0.3,
                                scaleSpeed: 1.2,
                                pinch: true,
                            },
                            move: {
                                scrollbars: {
                                    horizontal: true,
                                    vertical: true
                                },
                                drag: true, wheel: false
                            },
                            renderer: "zelos",
                            grid: {
                                spacing: 20,
                                length: 3,
                                colour: "#ccc00001",
                                snap: true,
                            },
                            readOnly: !isBlockBased
                        }}
                        onWorkspaceChange={(workspace) => {
                            if (isBlockBased) {
                                // console.log(phpGenerator.workspaceToCode(workspace));
                                setCode(phpGenerator.workspaceToCode(workspace));
                            }
                        }}
                        onXmlChange={setXml}
                    />
                </div>
                <div className="code-container" style={{
                }}>
                    <Box sx={{ width: '100%', display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            textColor="primary"
                            indicatorColor="primary"
                            aria-label="secondary tabs example"
                        >
                            <Tab value="one" label="Code" onClick={() => setIsPreview(false)} />
                            <Tab value="two" label="Preview" onClick={() => setIsPreview(true)} />
                        </Tabs>
                        {
                            !isBlockBased ?
                                <DataObjectIcon sx={{ fontSize: "35px" }} onClick={() => setIsBlockBased(!isBlockBased)} />
                                :
                                <AccountTreeIcon sx={{ fontSize: "35px" }} onClick={() => setIsBlockBased(!isBlockBased)} />
                        }
                    </Box>
                    <div>
                        {
                            isPreview ? <Preview code={code} /> :
                                <AceEditor
                                    placeholder=".....start coding here"
                                    mode={editorConfigs.mode}
                                    theme={editorConfigs.theme}
                                    name="PythonIDE"
                                    onChange={setCodeValue}
                                    fontSize={editorConfigs.font}
                                    highlightActiveLine={true}
                                    showPrintMargin={false}
                                    value={code}
                                    setOptions={{
                                        enableBasicAutocompletion: true,
                                        enableLiveAutocompletion: true,
                                        enableSnippets: true,
                                        showLineNumbers: true,
                                        tabSize: editorConfigs.tab,
                                        wrap:true
                                    }}
                                    style={{
                                        width: '100%',
                                        border: "1px solid gray",
                                        height: "80vh"
                                    }}
                                />
                        }
                    </div>
                </div>
            </div>
            <ContentDialogBox
                isOpen={isDialogOpen}
                onClose={() => setIsDialogOpen(false)}
                fullScreen={true}
                title={"HTML-CSS Examples"}
                actions={<>



                </>}
                content={<>
                    <div style={{
                        height: "80vh",
                        width: "80vw"
                    }}>

                    </div>



                </>}
            />
            <div className="col-lg-12 col-12" style={{
                position: "fixed",
                right: 0,
                bottom: 0,
                border:"1px solid gray",
                padding:"0 10px"
            }}>
                <p className="copyright-text text-center">Designed by <a rel="nofollow"
                    href="https://www.linkedin.com/in/neha-naikdhure/">Neha Naikdhure</a></p>
            </div>
        </>
    );
}


function Preview({ code }: { code: string }) {
    return (
        <div style={{
            width:"100%",
            position: "relative",
            overflow: "hidden",
            height: "80vh",
            // display:"flex",
            // justifyContent:"center",
            // alignItems:"center"
        }}>
            <iframe
                srcDoc={code}
                title="Preview"
                sandbox="allow-scripts"

            // width={"1920"}
            // height={"1080"}
            style={{width:"100%",height:"100%"}}
            />
        </div>
    );
}