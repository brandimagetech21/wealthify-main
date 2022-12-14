import axios from "axios";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import { useAppcontext } from "../context/appContext";
let patientId;
if (typeof window !== "undefined") {
  patientId = localStorage.getItem("p_id");
}
const TestReports = () => {
  const { postData, getTestReport, imageData } = useAppcontext();
  useEffect(() => {
    getTestReport("healthrecord", {
      api_key: "get_healthrecord_test_report",
      data: { p_id: 6 },
    });
  }, []);
  const [file, setFile] = useState();
  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };
  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };
  const convertToImage = (string) => {
    return decodeURIComponent(
      atob(string)
        .split("")
        .map((item) => {
          return "%" + ("00" + item.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      console.log("please select any files");
      return;
    }

    const base64 = await convertBase64(file);

    const obj = {
      api_key: "add_healthrecord_test_report",
      data: { p_id: 6, file: base64 },
    };
    postData("healthrecord", obj);
  };
  if (!imageData) {
    return (
      <Wrappers>
        <div className="reports-container">
          <div className="file-form">
            <label htmlFor="">Please submit the diet plans</label>
            <form action="" type="submit">
              <input type="file" onChange={(e) => handleChange(e)} />
              <div>
                <button className="btn" onClick={(e) => handleSubmit(e)}>
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </Wrappers>
    );
  }

  return (
    <Wrappers>
      <div className="reports-container">
        <div className="file-form">
          <label htmlFor="">Please submit your test Reports</label>
          <form action="" type="submit">
            <input type="file" onChange={(e) => handleChange(e)} />
            <div>
              <button className="btn" onClick={(e) => handleSubmit(e)}>
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="file-display">
          <table>
            <thead>
              <tr>
                <th>Patient Name</th>
                <th> Uploaded Date </th>
                <th> File </th>
              </tr>
            </thead>

            {imageData.map((item) => {
              const { s_no, patient_id, file } = item;
              return (
                <tr>
                  <td> {s_no} </td>
                  <td> {patient_id} </td>
                  <td>
                    <a href={convertToImage(file)} target="_blank">
                      click
                    </a>
                  </td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    </Wrappers>
  );
};
const Wrappers = styled.div`
  width: 700px;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  .file-form {
    margin-left: 4rem;
    margin-top: 2rem;
    position: absolute;
    top: 1rem;
    left: 20%;
  }
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
  }
  .btn {
    margin-top: 2rem;
    background-color: var(--primary-700);
    padding: 1rem 2rem;
    color: white;
  }
  @media (max-width: 480px) {
    width: 300px;
  }
`;
export default TestReports;


import Link from "next/link";
import React, { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import { useAppcontext } from "../context/appContext";
import PrescriptionForm from "./PrescriptionForm";

const Wrappers = styled.div`
  width: 700px;
  height: 400px;
  textarea {
    width: 100%;
    height: 150px;
    padding: 12px 20px;
    box-sizing: border-box;
    border: 2px solid #ccc;
    border-radius: 4px;
    background-color: #f8f8f8;
    font-size: 16px;
    resize: none;
  }
  .btn-green {
    background-color: var(--primary-700);
    padding: 1rem 7rem;
    border-radius: 2rem;
    text-decoration: none;
    border: none;
    color: white;
    margin-top: 3rem;
    margin-left: 15rem;
  }
  @media (max-width: 480px) {
    width: 300px;
  }
`;

const DoctorConsultation = () => {
  let doctorId;
  if (typeof window !== "undefined") {
    doctorId = localStorage.getItem("doctorId");
  }
  const [openForm, setOpenForm] = useState(false);
  const [state, setState] = useState(false);
  const { queryId, postData, getTestReports } = useAppcontext();
  const [notes, setNotes] = useState();
  const handleChange = (e) => {
    setNotes(e.target.value);
  };
  console.log(notes);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setNotes("");
    postData("healthrecord", {
      api_key: "add_healthrecord_test_notes",
      data: {
        patient_id: queryId,
        doctor_id: doctorId,
        notes: notes,
      },
    });
  };

  return (
    <Wrappers>
      <h2>Doctor Consultation</h2>
      <p>
        <strong>Tip:</strong>
        Doctor Write your notes here
      </p>
      <form onSubmit={(e) => handleSubmit(e)}>
        <textarea
          value={notes}
          placeholder="Some text..."
          onChange={(e) => handleChange(e)}
        ></textarea>
        <input type="submit" className="" />
      </form>
      {openForm ? <PrescriptionForm setOpenForm={setOpenForm} /> : null}

      <button onClick={() => setOpenForm(true)} className="btn-green">
        ADD PRESCRIPTION
      </button>
    </Wrappers>
  );
};

export default DoctorConsultation;
{/* {this.state.responseArray.map((res, i) => (
            <div key={i}>
              <div className={"img-alert alert alert-" + res.status}>
                <div>
                  {res.message} : {res.url}
                </div>
                <img src={res.base64} />
              </div>
            </div>
          ))} */}

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useRef, useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import { useAppcontext } from "../context/appContext";
let patientId;
if (typeof window !== "undefined") {
  patientId = localStorage.getItem("p_id");
}
const TestReports = () => {
  const { postData, getTestReport, imageData } = useAppcontext();
  const router = useRouter();
  const queryId = router.asPath.split("?")[1];
  useEffect(() => {
    getTestReport("healthrecord", {
      api_key: "get_healthrecord_test_report",
      data: { p_id: queryId },
    });
  }, []);
  const [file, setFile] = useState();
  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };
  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };
  const convertToImage = (string) => {
    return decodeURIComponent(
      atob(string)
        .split("")
        .map((item) => {
          return "%" + ("00" + item.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      console.log("please select any files");
      return;
    }

    const base64 = await convertBase64(file);

    const obj = {
      api_key: "add_healthrecord_test_report",
      data: { p_id: queryId, file: base64 },
    };
    postData("healthrecord", obj);
  };
  if (!imageData) {
    return (
      <Wrappers>
        <div className="reports-container">
          <div className="file-form">
            <label htmlFor="">Please submit your test Reports</label>
            <form action="" type="submit">
              <input type="file" onChange={(e) => handleChange(e)} />
              <div>
                <button className="btn" onClick={(e) => handleSubmit(e)}>
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </Wrappers>
    );
  }

  return (
    <Wrappers>
      <div className="reports-container">
        <div className="file-form">
          <label htmlFor="">Please submit your test Reports</label>
          <form action="" type="submit">
            <input type="file" onChange={(e) => handleChange(e)} />
            <div>
              <button className="btn" onClick={(e) => handleSubmit(e)}>
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="file-display">
          <table>
            <thead>
              <tr>
                <th>Patient Name</th>
                <th> Uploaded Date </th>
                <th> File </th>
              </tr>
            </thead>

            {imageData.map((item) => {
              const { s_no, patient_id, file } = item;
              return (
                <tr>
                  <td> {s_no} </td>
                  <td> {patient_id} </td>
                  <td>
                    {/* <img src={convertToImage(file)} alt="ds" srcset="" />{" "} */}
                    <a href={convertToImage(file)} target="_blank">
                      click here
                    </a>
                  </td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    </Wrappers>
  );
};
const Wrappers = styled.div`
  width: 700px;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  .file-form {
    margin-left: 4rem;
    margin-top: 2rem;
    position: absolute;
    top: 1rem;
    left: 20%;
  }
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
  }
  .btn {
    margin-top: 2rem;
    background-color: var(--primary-700);
    padding: 1rem 2rem;
    color: white;
  }
  .file-display {
    width: 600px;
    height: 200px;
    overflow: scroll;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media (max-width: 480px) {
    width: 300px;
  }
`;
export default TestReports;

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useRef, useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import { useAppcontext } from "../context/appContext";
let patientId;
if (typeof window !== "undefined") {
  patientId = localStorage.getItem("p_id");
}
const TestReports = () => {
  const router = useRouter();
  const queryId = router.asPath.split("?")[1];
  const { postData, getTestReport, imageData } = useAppcontext();

  useEffect(() => {
    getTestReport("healthrecord", {
      api_key: "get_diet_plan",
      data: { p_id: queryId },
    });
  }, []);
  const [file, setFile] = useState();
  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };
  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };
  const convertToImage = (string) => {
    return decodeURIComponent(
      atob(string)
        .split("")
        .map((item) => {
          return "%" + ("00" + item.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      console.log("please select any files");
      return;
    }

    const base64 = await convertBase64(file);

    const obj = {
      api_key: "add_diet_plan",
      data: { p_id: queryId, file: base64 },
    };
    postData("healthrecord", obj);
  };
  if (!imageData) {
    return (
      <Wrappers>
        <div className="reports-container">
          <div className="file-form">
            <label htmlFor="">Please submit your Diet Plan</label>
            <form action="" type="submit">
              <input type="file" onChange={(e) => handleChange(e)} />
              <div>
                <button className="btn" onClick={(e) => handleSubmit(e)}>
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </Wrappers>
    );
  }

  return (
    <Wrappers>
      <div className="reports-container">
        <div className="file-form">
          <label htmlFor="">Please submit Diet Plan</label>
          <form action="" type="submit">
            <input type="file" onChange={(e) => handleChange(e)} />
            <div>
              <button className="btn" onClick={(e) => handleSubmit(e)}>
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="file-display">
          <table>
            <thead>
              <tr>
                <th>Patient Name</th>
                <th> Uploaded Date </th>
                <th> File </th>
              </tr>
            </thead>

            {imageData.map((item) => {
              const { s_no, patient_id, file } = item;
              return (
                <tr>
                  <td> {s_no} </td>
                  <td> {patient_id} </td>
                  <td>
                    {/* <img src={convertToImage(file)} alt="ds" srcset="" />{" "} */}
                    <a href={convertToImage(file)} target="_blank">
                      click here
                    </a>
                  </td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    </Wrappers>
  );
};
const Wrappers = styled.div`
  width: 700px;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  .file-form {
    margin-left: 4rem;
    margin-top: 2rem;
    position: absolute;
    top: 1rem;
    left: 20%;
  }
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
  }
  .btn {
    margin-top: 2rem;
    background-color: var(--primary-700);
    padding: 1rem 2rem;
    color: white;
  }
  .file-display {
    width: 600px;
    height: 200px;
    overflow: scroll;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media (max-width: 480px) {
    width: 300px;
  }
`;
export default TestReports;


// today 


import React from "react";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAppcontext } from "../context/appContext";
import styled from "styled-components";
import { useRef } from "react";

const Fileupload2 = () => {
  let patientId;
  if (typeof window !== "undefined") {
    patientId = localStorage.getItem("p_id");
  }

  const [change, setChange] = useState(false);
  const [selectedFile, setSelectedFile] = useState("");
  const [responseArray, setResponseArray] = useState([]);
  const router = useRouter();
  const queryId = router.asPath.split("?")[1];
  const pat_id = queryId ? queryId : patientId;
  const { imageData, getTestReport } = useAppcontext();
  const effectRan = useRef(false);
  useEffect(() => {
    getTestReport("healthrecord", {
      api_key: "get_diet_plan",
      p_id: pat_id,
    });
    console.log("ran 1");
    return () => {
      effectRan.current = true;
    };
  }, [change]);
  console.log(imageData);

  const handleInputChange = (e) => {
    setSelectedFile(e.target.files);
    setResponseArray([]);
  };
  const resetFile = () => {
    // Reset file input control
    console.log(document.getElementById("file-select"));
    document.getElementById("file-select").value = null;
  };
  const onSubmit = async (e) => {
    setChange(!change);
    e.preventDefault();
    if (!selectedFile) {
      alert("Please selcet a file ");
      return false;
    }
    try {
      let formData = new FormData();
      for (let i = 0; i < selectedFile.length; i++) {
        formData.append("file[]", selectedFile[i]);
      }
      formData.append("p_id", pat_id);

      let url = "http://doctor.brandimagetech.com/diet_upload.php";

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
  if (!imageData) {
    return <h1>imageDAta no</h1>;
  }

  return (
    <Wrappers>
      <div className="reports-container">
        <div className="file-form">
          <label htmlFor="">Please submit Diet Plan</label>
          <form action="" type="submit">
            <input
              type="file"
              id="file-select"
              multiple
              onChange={handleInputChange}
            />
            <div>
              <button className="btn" onClick={(e) => onSubmit(e)}>
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="file-display">
          <table>
            {imageData.map((item) => {
              const urlData = window.atob(item);
              return (
                <tr>
                  <iframe
                    src={`http://doctor.brandimagetech.com/${urlData}`}
                    frameborder="0"
                  ></iframe>
                  <a
                    className="open-preview"
                    href={`http://doctor.brandimagetech.com/${urlData}`}
                    target="_blank"
                  >
                    Click
                  </a>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    </Wrappers>
  );
};
const Wrappers = styled.div`
  width: 700px;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  .file-form {
    margin-left: 4rem;
    margin-top: 2rem;
    position: absolute;
    top: 1rem;
    left: 20%;
  }
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
  }
  .btn {
    margin-top: 2rem;
    background-color: var(--primary-700);
    padding: 1rem 2rem;
    color: white;
  }
  .file-display {
    width: 600px;
    height: 200px;
    overflow: scroll;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .open-preview {
    margin-left: 7rem;
    margin-bottom: -2rem;
  }
  table {
    position: absolute;
    display: flex;
    flex-direction: row;
    top: 15rem;
    width: 300px;
    height: 200px;
    overflow: scroll;
  }
  @media (max-width: 480px) {
    width: 300px;
  }
`;
export default Fileupload2;