import React from "react";
import axios from "axios";

class Fileupload extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedFile: "",
      responseArray: [],
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      selectedFile: event.target.files,
      responseArray: [],
    });
  }

  onSubmit() {
    if (!this.state.selectedFile) {
      alert("Please select a file!");
      return false;
    }
    const data = new FormData();

    for (let i = 0; i < this.state.selectedFile.length; i++) {
      data.append("file[]", this.state.selectedFile[i]);
    }
    // data.append("api_key", "add_healthrecord_test_report");
    data.append("p_id", 1);

    let url = "http://doctor.brandimagetech.com/test_upload.php";

    axios
      .post(url, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(
        (res) => {
          // then print response status
          this.setState({ responseArray: res.data });
          this.resetFile();
        },
        (error) => {
          alert(error);
        }
      );
  }

  resetFile() {
    // Reset file input control
    document.getElementsByName("file")[0].value = null;
  }

  render() {
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
                onChange={this.handleInputChange}
              />
            </div>
          </div>
          <br />
          <div className="form-row">
            <div className="col-md-6">
              <button
                type="submit"
                className="btn btn-success"
                onClick={() => this.onSubmit()}
              >
                Upload File
              </button>
            </div>
          </div>
          <br />
        </div>
      </div>
    );
  }
}

export default Fileupload;
