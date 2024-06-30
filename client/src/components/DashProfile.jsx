import { Alert, Button, TextInput } from "flowbite-react";
import React, { useRef, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"; // Corrected import
import { CircularProgressbar } from 'react-circular-progressbar';
import { updateStart,updateFailure,updateSuccess } from "../redux/user/userSlice";
import 'react-circular-progressbar/dist/styles.css';
import { useDispatch } from "react-redux";

export default function DashProfile() {
  const { currentUser } = useSelector((state) => state.user);
  const [imgFile, setImgFile] = useState(null);
  const [imgFileUrl, setImgFileUrl] = useState(null);
  const [imageFileUploadProgress, setImageFileUploadProgress] = useState(null);
  const filePickerRef = useRef();
  const [imageFileUploadError, setImageFileUploadError] = useState(null);
  const [formData,setFormData]=useState({});
  const [imageFileUploading, setImageFileUploading] = useState(false);
  const [updateUserSuccess, setUpdateUserSuccess] = useState(null);
  const [updateUserError, setUpdateUserError] = useState(null);
  const dispatch=useDispatch();

  const handleChange=(e)=>{
    setFormData({...formData,[e.target.id]:e.target.value});
  }
  // console.log(formData);

  const handleImgChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImgFile(file);
      setImgFileUrl(URL.createObjectURL(file));
    }
  };
  const handleSubmit=async(e)=>{
    e.preventDefault();
    setUpdateUserError(null);
    setUpdateUserSuccess(null);
    if(Object.keys(formData).length === 0){
      setUpdateUserError('No changes made');
      return;
    }
   // console.log('Form Data:', formData);
   if(imageFileUploading){
    setUpdateUserError('Please wait for image to upload');
    return;
   }
    try{
      dispatch(updateStart());
      const res = await fetch(`/api/user/update/${currentUser._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) {
        dispatch(updateFailure(data.message));
        setUpdateUserError(data.message);
      } else {
        dispatch(updateSuccess(data));
       setUpdateUserSuccess("User's profile updated successfully");
      }
    } catch (error) {
      dispatch(updateFailure(error.message));
      setUpdateUserError(error.message);
    }
  };

  useEffect(() => {
    if (imgFile) {
      uploadImage(imgFile);
    }
  }, [imgFile]);

  const uploadImage = async (imageFile) => {
    setImageFileUploading(true);
    const storage = getStorage(); // Assuming firebase is already initialized
    const fileName = new Date().getTime() + imageFile.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, imageFile);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setImageFileUploadProgress(progress.toFixed(0));
      },
      (error) => {
        setImageFileUploadError('Could not upload image (File must be less than 2MB)');
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImgFileUrl(downloadURL);
          setFormData({...formData,profilePicture:downloadURL});
          setImageFileUploading(false);
        
        });
      }
    );
  };

  return (
    <div className="max-w-lg mx-auto p-3 w-full">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <h1 className="text-center my-4 text-3xl font-semibold">Profile</h1>
        <input type="file" accept="image/*" onChange={handleImgChange} ref={filePickerRef} hidden />

        <div className="relative w-32 h-32 self-center cursor-pointer shadow-md overflow-hidden" onClick={() => filePickerRef.current.click()}>
          {imageFileUploadProgress && (
            <div className="absolute inset-0 flex items-center justify-center">
              <CircularProgressbar
                value={imageFileUploadProgress || 0}
                text={`${imageFileUploadProgress}%`}
                strokeWidth={5}
                styles={{
                  root: {
                    width: '80%',
                    height: '80%',
                  },
                  path: {
                    stroke: `rgba(62, 152, 199, ${imageFileUploadProgress / 100})`,
                  },
                  text: {
                    fill: '#f88',
                    fontSize: '24px',
                  },
                }}
              />
            </div>
          )}
          <img
            src={imgFileUrl || currentUser.profilePicture}
            alt="user"
            className={`rounded-full w-full h-full object-cover border-8 border-[lightgray] ${
              imageFileUploadProgress && imageFileUploadProgress < 100 && 'opacity-60'
            }`}
          />
        </div>
        {imageFileUploadError && (
          <Alert color='failure'>{imageFileUploadError}</Alert>
        )}

        <TextInput type="text" id="username" defaultValue={currentUser.username}  onChange={handleChange}></TextInput>
        <TextInput type="email" id="email" defaultValue={currentUser.email} onChange={handleChange}></TextInput>
        <TextInput type="password" id="password" placeholder="Password" onChange={handleChange}></TextInput>
        <Button type="submit" className="" gradientDuoTone="purpleToBlue">Update</Button>
      </form>
      <div className="text-red-500 flex justify-between mt-5">
        <span className="cursor-pointer">Delete Account</span>
        <span className="cursor-pointer">Sign Out</span>
      </div>
      {updateUserSuccess && (
        <Alert color={'success'} className="mt-5">
          {updateUserSuccess}
        </Alert>
      )}
      {updateUserError && (
        <Alert color={'failure'} className="mt-5">
          {updateUserError}
        </Alert>
      )}
      
    </div>
  );
}
