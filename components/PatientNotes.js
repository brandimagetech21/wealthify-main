import { useRouter } from "next/router";
import React, { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { useAppcontext } from "../context/appContext";
import Loading from "./Loading";
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
let patientId;
if (typeof window !== "undefined") {
  patientId = localStorage.getItem("p_id");
}
const PatientNotes = () => {
  const effectRan = useRef(false);
  const { postData, getArrOfObj, details } = useAppcontext();
  const router = useRouter();
  const queryId = router.asPath.split("?")[1];
  const pat_id = queryId ? queryId : patientId;
  useEffect(() => {
    if (effectRan.current === false) {
      getArrOfObj("healthrecord", {
        api_key: "get_healthrecord_patient_notes",
        data: { p_id: pat_id },
      });
      return () => {
        effectRan.current = true;
      };
    }
  }, []);

  const [notes, setNotes] = useState();
  const handleChange = (e) => {
    setNotes(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    setNotes("");
    postData("healthrecord", {
      api_key: "add_healthrecord_patient_notes",
      data: {
        p_id: pat_id,
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
    </Wrappers>
  );
};

export default PatientNotes;
