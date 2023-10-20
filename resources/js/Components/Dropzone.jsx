import React, { useState } from "react";
import Dropzone from "react-dropzone";
import { useDropzone } from 'react-dropzone';

const DropZone = () => {

    const { acceptedFiles, getRootProps, getInputProps } = useDropzone();
    const [myfiles, setMyFiles] = useState([]);

    const handleOnDrop = (files, rejectedFiles) => {
        var arr = [...myfiles]
        arr.push(...files)
        console.log(arr)
        setMyFiles(arr)

    }



    return (
        <>
            <Dropzone onDrop={handleOnDrop}>
                {({ getRootProps, getInputProps }) => (
                    <>
                        <div className="col-lg-10">
                            <a {...getRootProps({ className: 'dropzone' })} className="dropzone-select btn btn-sm btn-primary me-2">Attach files</a>
                            {myfiles && myfiles.length > 0 ?
                                <>
                                    <a className="dropzone-remove-all btn btn-sm btn-light-primary">Remove all</a>
                                    {myfiles.map((file, i) => (
                                        <div className="dropzone-items wm-200px mt-5" key={i}>
                                            <div className="dropzone-item">
                                                <div className="dropzone-file">
                                                    <div className="dropzone-filename">
                                                        <span>{file.name} </span>
                                                        <strong>
                                                            {"("}
                                                            <span>
                                                                <strong>{file.size} </strong> KB
                                                            </span>
                                                            {")"}
                                                        </strong>
                                                    </div>
                                                </div>
                                                <div className="dropzone-progress">
                                                    <div className="progress">
                                                        <div className="progress-bar bg-primary" role="progressbar">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="dropzone-toolbar">
                                                    <span className="dropzone-delete">
                                                        <i className="bi bi-x fs-1"></i>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}

                                </> : ''}
                        </div>

                        <span className="form-text text-muted mt-2">Max file size is 1MB and max number of files is 5.</span>
                    </>
                )}
            </Dropzone>
        </>
    )
}

export default DropZone;