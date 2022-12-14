import React, { useEffect, useRef, useState } from "react";
import Wrappers from "../assets/wrappers/Assessment4";
import FormRow from "./customComponents.js/FormRow";

const AssessmentForm4 = ({
  updateFeilds,
  allergies_self,
  allergies_family,
  allergies_specifics,
  anemia_self,
  anemia_family,
  anemia_specifics,
  asthma_self,
  asthma_family,
  asthma_specifics,
  anxiety_or_panic_attacks_self,
  anxiety_or_panic_attacks_family,
  anxiety_or_panic_attacks_specifics,
  arthritis_self,
  arthritis_family,
  arthritis_specifics,
  autoimmune_condition_self,
  autoimmune_condition_family,
  autoimmune_condition_specifics,
  bronchitis_self,
  bronchitis_family,
  bronchitis_specifics,
  cancer_self,
  cancer_family,
  cancer_specifics,
  chronic_fatigue_syndrome_self,
  chronic_fatigue_syndrome_family,
  chronic_fatigue_syndrome_specifics,
  crohns_disease_or_ulcerative_colitis_self,
  crohns_disease_or_ulcerative_colitis_family,
  crohns_disease_or_ulcerative_colitis_specifics,
  depression_self,
  depression_family,
  depression_specifics,
  diabetes_self,
  diabetes_family,
  diabetes_specifics,
  dry_itchyskin_rashes_dermatitis_self,
  dry_itchyskin_rashes_dermatitis_family,
  dry_itchyskin_rashes_dermatitis_specifics,
  eczema_self,
  eczema_family,
  eczema_specifics,
  emphysema_self,
  emphysema_family,
  emphysema_specifics,
  epilepsy_convulsions_or_seizures_self,
  epilepsy_convulsions_or_seizures_family,
  epilepsy_convulsions_or_seizures_specifics,
  eye_disease_self,
  eye_disease_family,
  eye_disease_specifics,
  fibromyalgia_self,
  fibromyalgia_family,
  fibromyalgia_specifics,
  food_allergies_or_sensitivities_self,
  food_allergies_or_sensitivities_family,
  food_allergies_or_sensitivities_specifics,
  fungal_Infection_self,
  fungal_Infection_family,
  fungal_Infection_specifics,
  gallbladder_disease_self,
  gallbladder_disease_family,
  gallbladder_disease_specifics,
  gout_self,
  gout_family,
  gout_specifics,
  heart_attack_self,
  heart_attack_family,
  heart_attack_specifics,
  heartburn_self,
  heartburn_family,
  heartburn_specifics,
  heart_disease_self,
  heart_disease_family,
  heart_disease_specifics,
  hepatitis_self,
  hepatitis_family,
  hepatitis_specifics,
  high_blood_fats_self,
  high_blood_fats_family,
  high_blood_fats_specifics,
  high_blood_pressure_self,
  high_blood_pressure_family,
  high_blood_pressure_specifics,
  hypoglycemia_self,
  hypoglycemia_family,
  hypoglycemia_specifics,
  intestinal_disease_self,
  intestinal_disease_family,
  intestinal_disease_specifics,
  inflammatory_bowel_disease_self,
  inflammatory_bowel_disease_family,
  inflammatory_bowel_disease_specifics,
  irritable_bowel_syndrome_self,
  irritable_bowel_syndrome_family,
  irritable_bowel_syndrome_specifics,
  kidney_disease_self,
  kidney_disease_family,
  kidney_disease_specifics,
  lung_disease_self,
  lung_disease_family,
  lung_disease_specifics,
  liverdisease_self,
  liverdisease_family,
  liverdisease_specifics,
  mononucleosis_self,
  mononucleosis_family,
  mononucleosis_specifics,
  osteoporosis_self,
  osteoporosis_family,
  osteoporosis_specifics,
  pms_self,
  pms_family,
  pms_specifics,
  polycystic_ovarian_syndrome_self,
  polycystic_ovarian_syndrome_family,
  polycystic_ovarian_syndrome_specifics,
  pneumonia_self,
  pneumonia_family,
  pneumonia_specifics,
  prostate_problems_self,
  prostate_problems_family,
  prostate_problems_specifics,
  psychiatric_conditions_self,
  psychiatric_conditions_family,
  psychiatric_conditions_specifics,
  seizures_or_epilepsy_self,
  seizures_or_epilepsy_family,
  seizures_or_epilepsy_specifics,
  sinusitis_self,
  sinusitis_family,
  sinusitis_specifics,
  sleep_apnea_self,
  sleep_apnea_family,
  sleep_apnea_specifics,
  stroke_self,
  stroke_family,
  stroke_specifics,
  thyroid_disease_self,
  thyroid_disease_family,
  thyroid_disease_specifics,
  urinary_tract_infection_self,
  urinary_tract_infection_family,
  urinary_tract_infection_specifics,
  pfc_other_self,
  pfc_other_family,
  pfc_other_specifics,
}) => {
  const data = [
    {
      name: "Allergies (Please Specify type of allergy)",
      property: "allergies",
      value: [allergies_self, allergies_family, allergies_specifics],
    },
    {
      name: "Anemia",
      property: "anemia",
      value: [anemia_self, anemia_family, anemia_specifics],
    },
    {
      name: "Anxiety or Panic Attacks",
      property: "anxiety_or_panic_attacks",
      value: [
        anxiety_or_panic_attacks_self,
        anxiety_or_panic_attacks_family,
        anxiety_or_panic_attacks_specifics,
      ],
    },
    {
      name: "Arthritis (osteoarthritis or rheumatoid",
      property: "arthritis",
      value: [arthritis_self, arthritis_family, arthritis_specifics],
    },
    {
      name: "Asthma",
      property: "asthma",
      value: [asthma_self, asthma_family, asthma_specifics],
    },
    {
      name: "Autoimmune condition(specify type)",
      property: "autoimmune_condition",
      value: [
        autoimmune_condition_self,
        autoimmune_condition_family,
        autoimmune_condition_specifics,
      ],
    },
    {
      name: "Bronchitis",
      property: "bronchitis",
      value: [bronchitis_self, bronchitis_family, bronchitis_specifics],
    },
    {
      name: "Cancer (specify type)",
      property: "cancer",
      value: [cancer_self, cancer_family, cancer_specifics],
    },
    {
      name: "Chronic Fatigue Syndrome",
      property: "chronic_fatigue_syndrome",
      value: [
        chronic_fatigue_syndrome_self,
        chronic_fatigue_syndrome_family,
        chronic_fatigue_syndrome_specifics,
      ],
    },
    {
      name: "Crohn's Disease or ulcerative Colitis",
      property: "crohns_disease_or_ulcerative_colitis",
      value: [
        crohns_disease_or_ulcerative_colitis_self,
        crohns_disease_or_ulcerative_colitis_family,
        crohns_disease_or_ulcerative_colitis_specifics,
      ],
    },
    {
      name: "Depression",
      property: "depression",
      value: [depression_self, depression_family, depression_specifics],
    },
    {
      name: "Diabetes (Specify:Type 1, 2, Prediabetes , Gestational Diabetes) ",
      property: "diabetes",
      value: [diabetes_self, diabetes_family, diabetes_specifics],
    },
    {
      name: "Dry , itchy skin , rashes, dermatitis",
      property: "dry_itchyskin_rashes_dermatitis",
      value: [
        dry_itchyskin_rashes_dermatitis_self,
        dry_itchyskin_rashes_dermatitis_family,
        dry_itchyskin_rashes_dermatitis_specifics,
      ],
    },
    {
      name: "Eczema",
      property: "eczema",
      value: [eczema_self, eczema_family, eczema_specifics],
    },
    {
      name: "Emphysema",
      property: "emphysema",
      value: [emphysema_self, emphysema_family, emphysema_specifics],
    },
    {
      name: "Epilepsy , convulsions or seizures",
      property: "epilepsy_convulsions_or_seizures",
      value: [
        epilepsy_convulsions_or_seizures_self,
        epilepsy_convulsions_or_seizures_family,
        epilepsy_convulsions_or_seizures_specifics,
      ],
    },
    {
      name: "Eye Disease (please specify)",
      property: "eye_disease",
      value: [eye_disease_self, eye_disease_family, eye_disease_specifics],
    },
    {
      name: "Fibromyalgia",
      property: "fibromyalgia",
      value: [fibromyalgia_self, fibromyalgia_family, fibromyalgia_specifics],
    },
    {
      name: "Food Allergies or Sensitivities",
      property: "food_allergies_or_sensitivities",
      value: [
        food_allergies_or_sensitivities_self,
        food_allergies_or_sensitivities_family,
        food_allergies_or_sensitivities_specifics,
      ],
    },
    {
      name: "Fungal Infection (athlete's food , ringworm, other",
      property: "fungal_Infection",
      value: [
        fungal_Infection_self,
        fungal_Infection_family,
        fungal_Infection_specifics,
      ],
    },
    {
      name: "Gallbladder Disease/Gallstones(specify)",
      property: "gallbladder_disease",
      value: [
        gallbladder_disease_self,
        gallbladder_disease_family,
        gallbladder_disease_specifics,
      ],
    },
    {
      name: "Gout",
      property: "gout",
      value: [gout_self, gout_family, gout_specifics],
    },
    {
      name: "Heart attack/ Angina",
      property: "heart_attack",
      value: [heart_attack_self, heart_attack_family, heart_attack_specifics],
    },

    {
      name: "Heartburn",
      property: "heartburn",
      value: [heartburn_self, heartburn_family, heartburn_specifics],
    },
    {
      name: "Heart disease specify",
      property: "heart_disease",
      value: [
        heart_disease_self,
        heart_disease_family,
        heart_disease_specifics,
      ],
    },
    {
      name: "Hepatitis",
      property: "hepatitis",
      value: [hepatitis_self, hepatitis_family, hepatitis_specifics],
    },
    {
      name: "High blood fats (cholesterol, triglycerides)",
      property: "high_blood_fats",
      value: [
        high_blood_fats_self,
        high_blood_fats_family,
        high_blood_fats_specifics,
      ],
    },
    {
      name: "High blood pressure (hypertension)",
      property: "high_blood_pressure",
      value: [
        high_blood_pressure_self,
        high_blood_pressure_family,
        high_blood_pressure_specifics,
      ],
    },
    {
      name: "Hypoglycemia (low blood sugar)",
      property: "hypoglycemia",
      value: [hypoglycemia_self, hypoglycemia_family, hypoglycemia_specifics],
    },
    {
      name: "Intestinal Disease (specify)",
      property: "intestinal_disease",
      value: [
        intestinal_disease_self,
        intestinal_disease_family,
        intestinal_disease_specifics,
      ],
    },
    {
      name: "Inflammatory Bowel Disease (Crohn's or Ulcerative Colitis)",
      property: "inflammatory_bowel_disease",
      value: [
        inflammatory_bowel_disease_self,
        inflammatory_bowel_disease_family,
        inflammatory_bowel_disease_specifics,
      ],
    },
    {
      name: "Irritable bowel syndrome",
      property: "irritable_bowel_syndrome",
      value: [
        irritable_bowel_syndrome_self,
        irritable_bowel_syndrome_family,
        irritable_bowel_syndrome_specifics,
      ],
    },
    {
      name: "Kidney disease/failure or Kidney stones",
      property: "kidney_disease",
      value: [
        kidney_disease_self,
        kidney_disease_family,
        kidney_disease_specifics,
      ],
    },
    {
      name: "Lung disease (specify)",
      property: "lung_disease",
      value: [lung_disease_self, lung_disease_family, lung_disease_specifics],
    },
    {
      name: "Liver disease",
      property: "liverdisease",
      value: [liverdisease_self, liverdisease_family, liverdisease_specifics],
    },
    {
      name: "Mononucleosis",
      property: "mononucleosis",
      value: [
        mononucleosis_self,
        mononucleosis_family,
        mononucleosis_specifics,
      ],
    },
    {
      name: "Osteoporosis",
      property: "osteoporosis",
      value: [osteoporosis_self, osteoporosis_family, osteoporosis_specifics],
    },
    {
      name: "PMS",
      property: "pms",
      value: [pms_self, pms_family, pms_specifics],
    },
    {
      name: "Polycystic Ovarian Syndrome",
      property: "polycystic_ovarian_syndrome",
      value: [
        polycystic_ovarian_syndrome_self,
        polycystic_ovarian_syndrome_family,
        polycystic_ovarian_syndrome_specifics,
      ],
    },
    {
      name: "Pneumonia",
      property: "pneumonia",
      value: [pneumonia_self, pneumonia_family, pneumonia_specifics],
    },
    {
      name: "Prostate Problems",
      property: "prostate_problems",
      value: [
        prostate_problems_self,
        prostate_problems_family,
        prostate_problems_specifics,
      ],
    },
    {
      name: "Psychiatric Conditions",
      property: "psychiatric_conditions",
      value: [
        psychiatric_conditions_self,
        psychiatric_conditions_family,
        psychiatric_conditions_specifics,
      ],
    },
    {
      name: "Seizures or epilepsy",
      property: "seizures_or_epilepsy",
      value: [
        seizures_or_epilepsy_self,
        seizures_or_epilepsy_family,
        seizures_or_epilepsy_specifics,
      ],
    },
    {
      name: "Sinusitis",
      property: "sinusitis",
      value: [sinusitis_self, sinusitis_family, sinusitis_specifics],
    },
    {
      name: "Sleep apnea",
      property: "sleep_apnea",
      value: [sleep_apnea_self, sleep_apnea_family, sleep_apnea_specifics],
    },
    {
      name: "Stroke",
      property: "stroke",
      value: [stroke_self, stroke_family, stroke_specifics],
    },
    {
      name: "Thyroid disease (hypo- or hyperthyroid)",
      property: "thyroid_disease",
      value: [
        thyroid_disease_self,
        thyroid_disease_family,
        thyroid_disease_specifics,
      ],
    },
    {
      name: "Urinary Tract Infection",
      property: "urinary_tract_infection",
      value: [
        urinary_tract_infection_self,
        urinary_tract_infection_family,
        urinary_tract_infection_specifics,
      ],
    },
    {
      name: "Other (describe)",
      property: "pfc_other",
      value: [pfc_other_self, pfc_other_family, pfc_other_specifics],
    },
  ];
  const handleInput = (e) => {
    let value = e.target.checked ? e.target.value : "";
    console.log({ [e.target.name]: value });
    updateFeilds({ [e.target.name]: e.target.value });
  };

  const ref = useRef(null);

  return (
    <Wrappers>
      <table>
        <thead>
          <tr>
            <th>
              Please indicate if you of a blood relative has been diagnose with
              or experienced any of the following conditions or symptoms
            </th>
            <th>Self or Family Member?</th>
            <th>Specifics(Date, Explaisn, etc) </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            return (
              <tr>
                <td>{item.name}</td>
                <td>
                  <div className="checkbox">
                    <label htmlFor="self">Self</label>
                    {item.value[0] === "1" ? (
                      <input
                        ref={ref}
                        id="self"
                        type="checkBox"
                        value=""
                        checked
                        name={item.property + "_self"}
                        onChange={(e) => handleInput(e)}
                      />
                    ) : (
                      <input
                        ref={ref}
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
                        ref={ref}
                        id="self"
                        type="checkBox"
                        value=""
                        checked
                        name={item.property + "_family"}
                        onChange={(e) => handleInput(e)}
                      />
                    ) : (
                      <input
                        ref={ref}
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
    </Wrappers>
  );
};

export default AssessmentForm4;
