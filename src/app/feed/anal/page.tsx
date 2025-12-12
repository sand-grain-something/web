"use client";
import { FileUpload } from "@/components/ui/file-upload";
import { useState } from "react";
// import CameraApp from "./camera";

export default function Anal() {
  const [files, setFiles] = useState<File[]>([]);
  const handleFileUpload = (files: File[]) => {
    setFiles(files);
    console.log(files);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl">Sand Analysis</h1>
      <div className="grid grid-cols-2">
        <div>
          {/* <CameraApp /> */}
        </div>
        <div>
          <FileUpload onChange={handleFileUpload} />
        </div>
      </div>
    </div>
  );
}
