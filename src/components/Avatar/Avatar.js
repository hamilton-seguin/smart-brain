import React, { useEffect, useState } from "react";

const avatar =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa1vrEL9ELu5SObfwQd_nYtVQQQY-Py4gh6w&usqp=CAU";
const defaultAvatar =
  "https://tachyons.io/components/avatars/circle-border/screenshot.jpg?version=cb0db27a4c651b43cedc9c1a60548a25";

export const Avatar = ({ id }) => {
  const [avatarImage, setAvatarImage] = useState(defaultAvatar);
  const [imageUrl, setImageUrl] = useState("");

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    console.log("file: ", file);
    setImageUrl(URL.createObjectURL(file))
    return setAvatarImage(file);
  };

  useEffect(() => {
    if (avatarImage === defaultAvatar) return;

    const formData = new FormData();
    formData.append("avatar", avatarImage);
    formData.append("userId", id);
    for (var pair of formData.entries()) {
      console.log(pair[0] + ", " + pair[1]);
    }

    fetch(
      `https://8hsk187s29.execute-api.eu-central-1.amazonaws.com/dev/upload-image`,
      {
        method: "POST",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "multipart/form-data",
        },
        body: { formData },
      }
    ).then((response) =>
      response.json().then((data) => {
        return data;
        // data should be {url: "http://...avatarS3bucket.jpg", id: 123}
        // then send this url to database to save at id of user and to load picture from
      })
    );
  }, [avatarImage]);

  return (
    <div>
      <img
        src={imageUrl || defaultAvatar}
        className="h3 w3 dib"
        alt="avatar"
      />
      <input type="file" name="avatar" onChange={handleFileUpload} />
    </div>
  );
};
