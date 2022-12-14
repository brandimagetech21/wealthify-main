import React, { useState } from "react";
import Wrappers from "../assets/wrappers/AssessmentForm3";
import { initialData } from "../utils/assessmentData";
const AssessmentForm3 = ({
  medicalCondition,
  seasonalAllergies,
  setAssessmentData,
  updateFeilds,
}) => {
  const [state, setState] = useState(initialData.tableData);
  console.log(state);

  const [inputFields, setInputFields] = useState([
    {
      description: "",
      dosage: "",
      frequency: "",
      startdate: "",
      stopdate: "",
    },
    {
      description: "",
      dosage: "",
      frequency: "",
      startdate: "",
      stopdate: "",
    },
    {
      description: "",
      dosage: "",
      frequency: "",
      startdate: "",
      stopdate: "",
    },
  ]);
  const handleFormChange = (index, event) => {
    let data = [...inputFields];
    data[index][event.target.name] = event.target.value;
    setInputFields(data);
    updateFeilds({
      tableData: inputFields,
    });
  };
  const addFields = () => {
    let newfield = {
      description: "",
      dosage: "",
      frequency: "",
      startdate: "",
      stopdate: "",
    };

    setInputFields([...inputFields, newfield]);
  };
  const submit = (e) => {
    e.preventDefault();
    updateFeilds({
      tableData: inputFields,
    });

    console.log(initialData);
    // console.log(...inputFields);
  };
  return (
    <Wrappers>
      <div className="container">
        <section className="form-section">
          <h1 className="heading">Health History </h1>
          <p>Welcome to Wealthify </p>
          <div className="form">
            <div className="textarea">
              <label for="">
                List any medical conditions or diagnoses you have been treated
                for with prescription, surgery , or medical care in the last 5
                years
              </label>

              <textarea
                id=""
                name=""
                rows="4"
                cols="50"
                onChange={(e) =>
                  updateFeilds({
                    medicalCondition: e.target.value,
                  })
                }
              ></textarea>
            </div>
            <div className="textarea">
              <label for="">
                List any seasonal allergies and / or food allergies,
                sensitivities or intolerances
              </label>
              <textarea
                id=""
                name=""
                rows="4"
                cols="50"
                onChange={(e) =>
                  updateFeilds({
                    seasonalAllergies: e.target.value,
                  })
                }
              ></textarea>
            </div>
          </div>
          {/* sdf */}
        </section>

        <section className="img-section"></section>
      </div>
      <div className="bottom-table">
        <p style={{ maxWidth: "70%" }}>
          Please list all of the following taken currently or within the last
          year: medications, hormone replacement therapies, antibiotics or other
          medically related medications or remedies. (Vitamins, Minerals,
          Nutraceuticals, etc. will be asked for in a different section.)
        </p>
        <table id="myTable">
          <thead>
            <tr>
              <th>Name/Description</th>
              <th>Dosage / Quantity</th>
              <th>Frequency</th>
              <th>Start Date</th>
              <th>Stop Date</th>
            </tr>
          </thead>

          <tbody>
            {inputFields.map((input, index) => {
              return (
                <tr key={index}>
                  <td>
                    <input
                      name="description"
                      value={input.description}
                      onChange={(event) => handleFormChange(index, event)}
                    />
                  </td>
                  <td>
                    <input
                      name="dosage"
                      value={input.dosage}
                      onChange={(event) => handleFormChange(index, event)}
                    />
                  </td>
                  <td>
                    <input
                      name="frequency"
                      value={input.frequency}
                      onChange={(event) => handleFormChange(index, event)}
                    />
                  </td>
                  <td>
                    <input
                      type={"date"}
                      name="startdate"
                      value={input.startdate}
                      onChange={(event) => handleFormChange(index, event)}
                    />
                  </td>
                  <td>
                    <input
                      type={"date"}
                      name="stopdate"
                      value={input.stopdate}
                      onChange={(event) => handleFormChange(index, event)}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <button onClick={addFields}>Add More..</button>
      </div>
    </Wrappers>
  );
};

export default AssessmentForm3;
