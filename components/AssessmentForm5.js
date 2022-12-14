import { handReceiving } from "fontawesome";
import React from "react";
import Wrappers from "../assets/wrappers/AssessementForm5";
import FormRow from "./customComponents.js/FormRow";

const data3 = [
  "Appetite",
  "Constipation",
  "Menstrual difficulties",
  "Bleeding gums",
  "Diarrhea",
  "Seeing in dim light",
  "Bruising",
  "Edema",
  "Sudden weight change",
  "Chewing or swallowing",
  "Indigestion",
  "Stress",
];
const data4 = [
  { name: "Do you use tobacco in any way?", property: "tobacco" },
  { name: "Do you use alcohol in any way?", property: "alcohol" },
  { name: "Did you recently stop smoking?", property: "smoking" },
];
const AssessmentForm5 = ({
  updateFeilds,
  back_injury_self,
  back_injury_family,
  back_injury_specifics,
  broken_self,
  broken_family,
  broken_specifics,
  head_injury_self,
  head_injury_family,
  head_injury_specifics,
  neck_injury_self,
  neck_injury_family,
  neck_injury_specifics,
  pfi_other_self,
  pfi_other_family,
  pfi_other_specifics,
  barium_benema_self,
  barium_benema_family,
  barium_benema_specifics,
  bone_scan_self,
  bone_scan_family,
  bone_scan_specifics,
  cat_scan_self,
  cat_scan_family,
  cat_scan_specifics,
  chest_x_ray_self,
  chest_x_ray_family,
  chest_x_ray_specifics,
  colonoscopy_or_sigmoidoscopy_self,
  colonoscopy_or_sigmoidoscopy_family,
  colonoscopy_or_sigmoidoscopy_specifics,
  ekg_self,
  ekg_family,
  ekg_specifics,
  liver_scan_self,
  liver_scan_family,
  liver_scan_specifics,
  nmr_mri_self,
  nmr_mri_family,
  nmr_mri_specifics,
  upper_gi_series_self,
  upper_gi_series_family,
  upper_gi_series_specifics,
  ds_other_self,
  ds_other_family,
  ds_other_specifics,
  operations_self,
  operations_family,
  operations_specifics,
  dental_self,
  dental_family,
  dental_specifics,
  gall_bladder_self,
  gall_bladder_family,
  gall_bladder_specifics,
  hernia_self,
  hernia_family,
  hernia_specifics,
  hysterectomy_self,
  hysterectomy_family,
  hysterectomy_specifics,
  tonsillectomy_self,
  tonsillectomy_family,
  tonsillectomy_specifics,
}) => {
  const data1 = [
    {
      name: "Back injury",
      property: "back_injury",
      value: [back_injury_self, back_injury_family, back_injury_specifics],
    },
    {
      name: "Broken (specify)",
      property: "broken",
      value: [broken_self, broken_family, broken_specifics],
    },
    {
      name: "Head injury",
      property: "head_injury",
      value: [head_injury_self, head_injury_family, head_injury_specifics],
    },
    {
      name: "Neck injury",
      property: "neck_injury",
      value: [neck_injury_self, neck_injury_family, neck_injury_specifics],
    },
    {
      name: "Other (describe)",
      property: "pfi_other",
      value: [pfi_other_self, pfi_other_family, pfi_other_specifics],
    },
  ];
  const data2 = [
    {
      name: "Barium Enema",
      property: "barium_benema",
      value: [
        barium_benema_self,
        barium_benema_family,
        barium_benema_specifics,
      ],
    },
    {
      name: "Bone Scan",
      property: "bone_scan",
      value: [bone_scan_self, bone_scan_family, bone_scan_specifics],
    },
    {
      name: "CAT Scan: Abdomen, Brain, Spine (specify)",
      property: "cat_scan",
      value: [cat_scan_self, cat_scan_family, cat_scan_specifics],
    },
    {
      name: "Chest X-ray",
      property: "chest_x_ray",
      value: [chest_x_ray_self, chest_x_ray_family, chest_x_ray_specifics],
    },
    {
      name: "Colonoscopy or Sigmoidoscopy (specify)",
      property: "colonoscopy_or_sigmoidoscopy",
      value: [
        colonoscopy_or_sigmoidoscopy_self,
        colonoscopy_or_sigmoidoscopy_family,
        colonoscopy_or_sigmoidoscopy_specifics,
      ],
    },
    {
      name: "EKG",
      property: "ekg",
      value: [ekg_self, ekg_family, ekg_specifics],
    },
    {
      name: "Liver scan",
      property: "liver_scan",
      value: [liver_scan_self, liver_scan_family, liver_scan_specifics],
    },
    {
      name: "NMR/MRI",
      property: "nmr_mri",
      value: [nmr_mri_self, nmr_mri_family, nmr_mri_specifics],
    },
    {
      name: "Upper GI Series",
      property: "upper_gi_series",
      value: [
        upper_gi_series_self,
        upper_gi_series_family,
        upper_gi_series_specifics,
      ],
    },
    {
      name: "Other (describe)",
      property: "ds_other",
      value: [ds_other_self, ds_other_family, ds_other_specifics],
    },
    {
      name: "Operations",
      property: "operations",
      value: [operations_self, operations_family, operations_specifics],
    },
    {
      name: "Dental Surgery",
      property: "dental surgery",
      value: [dental_self, dental_family, dental_specifics],
    },
    {
      name: "Gall Bladder",
      property: "gall_bladder",
      value: [gall_bladder_self, gall_bladder_family, gall_bladder_specifics],
    },
    {
      name: "Hernia",
      property: "hernia",
      value: [hernia_self, hernia_family, hernia_specifics],
    },
    {
      name: "Hysterectomy",
      property: "hysterectomy",
      value: [hysterectomy_self, hysterectomy_family, hysterectomy_specifics],
    },
    {
      name: "Tonsillectomy",
      property: "tonsillectomy",
      value: [
        tonsillectomy_self,
        tonsillectomy_family,
        tonsillectomy_specifics,
      ],
    },
  ];
  const handleSubmit = (e) => {
    e.preventDefault();
    useEffect(() => {
      const getData = async () => {
        console.log('getData');
        /*const { data } = await axios.post(
          `http://doctor.brandimagetech.com/patient.php?api_key=get_patient&ph_num=918939068212`,
          { f_name: "rajesh" }
        );
        setResponseData(data);*/
      };
      getData();
    }, []);
    // next();
    // window.scrollTo(0, 0);
  };

  const handleInput = (e) => {
    let value = e.target.checked ? e.target.value : "";
    console.log({ [e.target.name]: value });
    // console.log(e.target.checked);
    updateFeilds({ [e.target.name]: e.target.value });
  };
  const handleRadio = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);

    updateFeilds({ [e.target.name]: e.target.value });
  };

  return (
    <Wrappers>
      <h1 className="heading">INJURIES</h1>
      <div className="table-one">
        <table>
          <thead>
            <tr>
              <th>
                Please indicate if you of a blood relative has been diagnose
                with or experienced any of the following conditions or symptoms
              </th>
              <th>Self or Family Member?</th>
              <th>Specifics(Date, Explain, etc) </th>
            </tr>
          </thead>
          <tbody>
            {data1.map((item) => {
              return (
                <tr>
                  <td>{item.name}</td>
                  <td>
                    <div className="checkbox">
                      <label htmlFor="self">Self</label>
                      {item.value[0] === "1" ? (
                        <input
                          id="self"
                          type="checkBox"
                          value=""
                          checked
                          name={item.property + "_self"}
                          onChange={(e) => handleInput(e)}
                        />
                      ) : (
                        <input
                          id="self"
                          type="checkBox"
                          value="1"
                          name={item.property + "_self"}
                          onChange={(e) => handleInput(e)}
                        />
                      )}
                      <label htmlFor="self">Family</label>
                      {item.value[1] === "1" ? (
                        <input
                          id="self"
                          type="checkBox"
                          value=""
                          checked
                          name={item.property + "_family"}
                          onChange={(e) => handleInput(e)}
                        />
                      ) : (
                        <input
                          id="self"
                          type="checkBox"
                          value="1"
                          name={item.property + "_family"}
                          onChange={(e) => handleInput(e)}
                        />
                      )}
                    </div>
                  </td>
                  <td>
                    <div className="text-area">
                      {/* <FormRow
                        type={"text"}
                        name={item.property + "_specifics"}
                        value={item.value[2]}
                        handleChange={(e) => handleInput(e)}
                      /> */}
                      <textarea
                        type={"text"}
                        name={item.property + "_specifics"}
                        value={item.value[2]}
                        onChange={(e) => handleInput(e)}
                      />
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <h1 className="heading">DIAGNOSTIC STUDIES</h1>
      <div className="table-two">
        <table>
          <thead>
            <tr>
              <th>
                Please indicate if you of a blood relative has been diagnose
                with or experienced any of the following conditions or symptoms
              </th>
              <th>Self or Family Member?</th>
              <th>Specifics(Date, Explain, etc) </th>
            </tr>
          </thead>
          <tbody>
            {data2.map((item) => {
              return (
                <tr>
                  <td>{item.name}</td>
                  <td>
                    <div className="checkbox">
                      <label htmlFor="self">Self</label>
                      {item.value[0] === "1" ? (
                        <input
                          id="self"
                          type="checkBox"
                          value=""
                          checked
                          name={item.property + "_self"}
                          onChange={(e) => handleInput(e)}
                        />
                      ) : (
                        <input
                          id="self"
                          type="checkBox"
                          value="1"
                          name={item.property + "_self"}
                          onChange={(e) => handleInput(e)}
                        />
                      )}
                      <label htmlFor="self">Family</label>
                      {item.value[1] === "1" ? (
                        <input
                          id="self"
                          type="checkBox"
                          value=""
                          checked
                          name={item.property + "_family"}
                          onChange={(e) => handleInput(e)}
                        />
                      ) : (
                        <input
                          id="self"
                          type="checkBox"
                          value="1"
                          name={item.property + "_family"}
                          onChange={(e) => handleInput(e)}
                        />
                      )}
                    </div>
                  </td>
                  <td>
                    <div className="text-area">
                      {/* <FormRow
                        type={"text"}
                        name={item.property + "_specifics"}
                        // name={item.property.split(" ")[0] + "_specific"}
                        value={item.value[2]}
                        handleChange={(e) => handleInput(e)}
                      /> */}
                      <textarea
                        type={"text"}
                        name={item.property + "_specifics"}
                        // name={item.property.split(" ")[0] + "_specific"}
                        value={item.value[2]}
                        onChange={(e) => handleInput(e)}
                      />
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <h3 className="heading">
        Do you have complaints about any of the following ?
      </h3>
      <div className="checkbox-container">
        {data3.map((item) => {
          return (
            <div className="check">
              <input
                type="checkBox"
                className="checkbox"
                name={item}
                value={"1"}
                onChange={(e) => handleInput(e)}
              />
              <label htmlFor="">{item}</label>
            </div>
          );
        })}
      </div>
      <div className="bottom-container">
        {data4.map((item, index) => {
          return (
            <div className="questions-container">
              <p> {item.name} </p>
              <div className="questions-input">
                <input
                  type="radio"
                  className="checkbox"
                  value="yes"
                  name={item.property}
                  onChange={(e) => handleRadio(e)}
                />
                Yes
                <input
                  type="radio"
                  className="checkbox"
                  value="No"
                  name={item.property}
                  onChange={(e) => handleRadio(e)}
                />
                NO
              </div>
            </div>
          );
        })}
        {/* <div className="questions-container">
          <p>Do you use tobacco in any way? </p>
          <div className="questions-input">
            <input
              type="checkBox"
              name="tobacco"
              className="checkbox"
              onChange={(e) => handleInput(e)}
            />
            <label htmlFor="">Yes</label>
            <input type="checkBox" className="checkbox" />
            <label htmlFor="">No</label>
          </div>
        </div>
        <div className="questions-container">
          <p>Do you use alcohol in any way? </p>
          <div className="questions-input">
            <input
              type="radio"
              className="checkbox"
              value="yes"
              name="alcohol"
              onChange={(e) => handleRadio(e)}
            />
            Yes
            <input
              type="radio"
              className="checkbox"
              value="No"
              name="alcohol"
              onChange={(e) => handleRadio(e)}
            />
            NO
          </div>
        </div>
        <div className="questions-container">
          <p>Did you recently stop smoking ?</p>
          <div className="questions-input">
            <input
              type="checkBox"
              className="checkbox"
              name="smoking"
              onChange={(e) => handleInput(e)}
            />
            <label htmlFor="">Yes</label>
            <input type="checkBox" className="checkbox" />
            <label htmlFor="">No</label>
          </div>
        </div> */}
      </div>
      <div className="food-area">
        <p>Are there certain foods that you do not eat ever? Why?</p>
        <textarea
          className="food-textarea"
          name="food_never_eat"
          id=""
          cols="30"
          rows="10"
          onChange={(e) => handleRadio(e)}
        ></textarea>
      </div>
      <button onSubmit={(e) => handleSubmit(e)} className="btn" type="submit">
        submit
      </button>
    </Wrappers>
  );
};

export default AssessmentForm5;
