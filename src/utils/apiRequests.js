import firebase from "../config/firebase";

// Download a file url function
export const downloadFile = async (fileRef) => {
  try {
    return await firebase.storage().ref(fileRef).getDownloadURL();
  } catch (error) {
    console.error(error);
  }
};

// Download multiple file url function
export const downloadFiles = (filesArr) => {
  const files = [];

  try {
    for (let i = 0; i < filesArr.length; i++) {
      firebase
        .storage()
        .ref(filesArr[i])
        .getDownloadURL()
        .then((url) => files.push(url));
    }

    return files;
  } catch (error) {
    console.error(error);
  }
};
