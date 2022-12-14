import React from "react";
import axios from "axios";
import { useState } from "react";

const Fileupload2 = () => {
  const [selectedFile, setSelectedFile] = useState("");
  const [responseArray, setResponseArray] = useState([]);

  //   this.handleInputChange = this.handleInputChange.bind(this);
  const handleInputChange = (e) => {
    setSelectedFile(e.target.files);
    setResponseArray([]);
  };
  const resetFile = () => {
    // Reset file input control
    document.getElementsByName("file")[0].value = null;
  };
  const onSubmit = async () => {
    if (!selectedFile) {
      alert("Please selcet a file ");
      return false;
    }
    try {
      let formData = new FormData();
      for (let i = 0; i < selectedFile.length; i++) {
        formData.append("file[]", selectedFile[i]);
      }
      formData.append("p_id", 1);

      let url = "http://doctor.brandimagetech.com/test_upload.php";

      const { data } = await axios.post(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setResponseArray({ data });
      resetFile();
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="row">
      <div className="col-md-12">
        <h3>React Multiple File Upload Example - FreakyJolly.com</h3>

        <div className="form-row">
          <div className="form-group col-md-6">
            <label>Select File :</label>
            <input
              type="file"
              className="form-control"
              multiple
              name="file"
              onChange={handleInputChange}
            />
          </div>
        </div>
        <br />
        <div className="form-row">
          <div className="col-md-6">
            <button
              type="submit"
              className="btn btn-success"
              onClick={() => onSubmit()}
            >
              Upload File
            </button>
          </div>
        </div>
        <br />
      </div>
    </div>
  );
};
export default Fileupload2;
