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
            <tr>
              <td>
                <input
                  type="text"
                  name="description"
                  onChange={(e) => {
                    let des = e.target.value;
                    setState((prev) => {
                      return [
                        {
                          ...prev,
                          [e.target.name]: des,
                        },
                      ];
                    });
                  }}
                />
              </td>
              <td>
                <input type="text" name="dosage" />
              </td>
              <td>
                <input type="text" name="frequency" />
              </td>
              <td>
                <input type="date" name="startdate" />
              </td>
              <td>
                <input type="date" name="stopdate" />
              </td>
            </tr>
            <tr>
              <td>
                <input
                  type="text"
                  name="description"
                  // onChange={updateFeilds({
                  //   [e.target.name]: e.target.value,
                  // })}
                />
              </td>
              <td>
                <input type="text" name="dosage" />
              </td>
              <td>
                <input type="text" name="frequency" />
              </td>
              <td>
                <input type="date" name="startdate" />
              </td>
              <td>
                <input type="date" name="stopdate" />
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td>
                <input type="text" name="descriptionName" />
              </td>
              <td>
                <input type="text" name="dosage" />
              </td>
              <td>
                <input type="text" name="frequency" />
              </td>
              <td>
                <input type="date" name="startdate" />
              </td>
              <td>
                <input type="date" name="stopdate" />
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </Wrappers>
  );
};

export default AssessmentForm3;
