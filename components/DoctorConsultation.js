import { useRouter } from "next/router";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { useAppcontext } from "../context/appContext";
import Loading from "./Loading";
import Popup from "./Popup";
import PrescriptionForm from "./PrescriptionForm";
const Wrappers = styled.div`
  margin-top: 2rem;
  width: 700px;
  height: 300px;
  input[type="text"],
  select {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }
  textarea[placeholder="Your notes.."] {
    margin-top: 1rem;
  }

  input[type="submit"] {
    width: 100%;
    background-color: #4caf50;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  .notes-container {
    height: 150px;
    overflow: scroll;
  }

  input[type="submit"]:hover {
    background-color: #45a049;
  }
  li {
    margin-bottom: 2rem;
  }
  @media (max-width: 480px) {
    width: 300px;
  }
`;
let doctorId;
if (typeof window !== "undefined") {
  doctorId = localStorage.getItem("doctorId");
}
let patientId;
if (typeof window !== "undefined") {
  patientId = localStorage.getItem("p_id");
}
const PatientNotes = () => {
  const { getDoctorId, uniqueDoctorId, getArrOfObj, details } = useAppcontext();
  const [openForm, setOpenForm] = useState(false);
  const [state, setState] = useState(false);
  const router = useRouter();
  const queryId = router.asPath.split("?")[1];
  const pat_id = queryId ? queryId : patientId;
  useEffect(() => {
    getDoctorId(pat_id);
    if (uniqueDoctorId) {
      getArrOfObj("healthrecord", {
        api_key: "get_healthrecord_doc_notes",
        data: {
          doctor_id: uniqueDoctorId,
          patient_id: pat_id,
        },
      });
    } else {
      getArrOfObj("healthrecord", {
        api_key: "get_healthrecord_doc_notes",
        data: {
          doctor_id: doctorId,
          patient_id: pat_id,
        },
      });
    }
  }, [state]);
  const { postData } = useAppcontext();
  console.log(uniqueDoctorId);
  const [notes, setNotes] = useState();
  const handleChange = (e) => {
    setNotes(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    setNotes("");
    setState(!state);
    postData("healthrecord", {
      api_key: "add_healthrecord_doc_notes",
      data: {
        patient_id: pat_id,
        doctor_id: uniqueDoctorId,
        notes: notes,
      },
    });
  };
  if (!details) {
    return <Loading center />;
  }
  return (
    <Wrappers>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label for="fname">Enter your Notes</label>
        {/* <input
          type="text"
          id="fname"
          name="firstname"
          value={notes}
          onChange={(e) => handleChange(e)}
          placeholder="Your notes.."
        ></input> */}

        <textarea
          cols="96"
          type="text"
          id="fname"
          name="firstname"
          value={notes}
          onChange={(e) => handleChange(e)}
          placeholder="Your notes.."
        />

        <input type="submit" className="" />
      </form>
      <ul className="notes-container">
        {details.map((item) => {
          return <li>{item.notes}</li>;
        })}
      </ul>

      {openForm ? <Popup setOpenForm={setOpenForm} /> : null}
    </Wrappers>
  );
};

export default PatientNotes;
