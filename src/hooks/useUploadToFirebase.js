import { useState, useCallback } from "react";
import { getStorage, ref, uploadBytesResumable, getDownloadURL, deleteObject } from "firebase/storage";
import app from "../config/firebase";

const useUploadToFirebase = () => {
  const [imgPerc, setImgPerc] = useState(0);
  const [videoPerc, setVideoPerc] = useState(0);
  const [filesUrl, setFilesUrl] = useState({});
  const [isUploading, setIsUploading] = useState(false);
  const [videoRefInFirebase, setVideoRefInFirebase] = useState(null);
  const [imgRefInFirebase, setImgRefInFirebase] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");

  const startUploadFileToFirebase = (file, urlType) => {
    const storage = getStorage(app);

    const uniqueFilename = `${Date.now()}-${file.name}`;
    const storageRef = ref(storage, uniqueFilename);
    const uploadTask = uploadBytesResumable(storageRef, file);

    urlType === "imgUrl" ? setImgRefInFirebase(storageRef) : setVideoRefInFirebase(storageRef);

    uploadTask.on(
      "state_changed",
      snapshot => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        urlType === "imgUrl" ? setImgPerc(Math.round(progress)) : setVideoPerc(Math.round(progress));
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            setIsUploading(false);
            break;
          case "running":
            console.log("Upload is running");
            setIsUploading(true);
            break;
        }
      },
      error => {
        switch (error.code) {
          case "storage/unauthorized":
            setErrorMsg("Unauthorized");
            break;
          case "storage/canceled":
            setErrorMsg("Canceled");
            break;
          case "storage/unknown":
            setErrorMsg("Unknown error occurred");
            break;
          default:
            setErrorMsg("Something went wrong on the server.");
        }
        setIsUploading(false);
      },
      async () => {
        // Upload completed successfully, now we can get the download URL
        const downloadUrl = await getDownloadURL(uploadTask.snapshot.ref);
        setFilesUrl(prev => ({ ...prev, [urlType]: downloadUrl }));
      }
    );
  };

  const clearHookStates = () => {
    setImgPerc(0),
      setVideoPerc(0),
      setFilesUrl({}),
      setIsUploading(false),
      setVideoRefInFirebase(null),
      setImgRefInFirebase(null),
      setErrorMsg("");
  };

  const deleteAllUploadedFiles = useCallback(() => {
    videoRefInFirebase && deleteObject(videoRefInFirebase);
    imgRefInFirebase && deleteObject(imgRefInFirebase);
  }, [videoRefInFirebase, imgRefInFirebase]);

  return {
    startUpload: startUploadFileToFirebase,
    imgPerc,
    videoPerc,
    filesUrl,
    isUploading,
    errorMsg,
    clearHookStates,
    deleteAllUploadedFiles,
  };
};

export default useUploadToFirebase;
