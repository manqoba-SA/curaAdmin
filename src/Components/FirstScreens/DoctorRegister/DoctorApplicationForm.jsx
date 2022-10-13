import { async } from "@firebase/util";
import { doc, setDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import storage, {
  auth,
  createUserWithEmailAndPassword,
  firestore,
} from "../../../firebase/firebase";
import CustomInput from "../../Common/CustomInput/CustomInput";
import CustomSelect from "../../Common/CustomSelect";
import doctorSpecialist from "./doctorSpecialist";
import "./style.css";

export default function DoctorApplicationForm() {
  const [progress, setProgress] = useState(0);
  const [certificate, setCerticate] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [patients, setPatients] = useState("");
  const [aboutDoctor, setAboutDoctor] = useState("");
  const [speciality, setSpeciality] = useState("");
  const [medRegCouncil, setMedRegCouncil] = useState("");
  const [medRegNum, setmedRegNum] = useState("");
  const [yearsEx, setYearsEx] = useState("");
  const [study, setStudy] = useState("");
  const [clinic, setClinic] = useState("");
  const [pwd1, setPwd1] = useState("");
  const [pwd2, setPwd2] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  console.log(email);

  const onSubmit = () => {
    setLoading(true);
    if (pwd1 != pwd2) {
      setError("Please ensure your PASSWORDS match");
      setLoading(false);
    } else {
      createUserWithEmailAndPassword(auth, email, pwd1)
        .then((userAuth) => {
          // uploadFiles(certificate, userAuth.user.uid)
          console.log("FDSFD");
        })
        .catch((error) => {
          setError(error.message);
          setLoading(false);
        });
    }
  };
  const formHandler = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    setCerticate(file);
    // uploadFiles(file);
  };
  const uploadFiles = (file, user) => {
    //
    if (!file) return;
    const storageRef = ref(storage, `/files/${Date.now()}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(prog);
      },
      (err) => console.log(err),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(async (url) => {
          console.log(url);
          const doctorApplicationRef = doc(
            firestore,
            "DoctorsApplications",
            user
          );
          await setDoc(doctorApplicationRef, {
            Fname: firstName,
            Certificate: url,
            Lname: lastName,
            MedRegCouncil: medRegCouncil,
            MedRegNumber: medRegNum,
            Password: pwd1,
            PatientsaDay: patients,
            PhoneNumber: phone,
            Speciality: speciality,
            Study: study,
            YearsExperience: yearsEx,
            Email: email,
            Address: location,
            AboutDoctor: aboutDoctor,
            HaveClinic: clinic,
          })
            .then(history.push("/doctor-apply-success"))
            .catch((error) => {
              setError(error.message);
              setLoading(false);
            });
        });
      }
    );
  };
  return (
    <div class="container">
      <div class="row">
        <div class="col-xs-12 container">
          <form role="form" onSubmit={formHandler}>
            <h2>
              <b>
                Please fill in the following details to apply to be a doctor on
                Cura Health
              </b>
            </h2>
            <h3>
              <b>Personal Information</b>
            </h3>
            <div class="row">
              <div class="col-xs-6 col-sm-6 col-md-6">
                <CustomInput
                  label="First Name"
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div class="col-xs-6 col-sm-6 col-md-6">
                <CustomInput
                  label="Last Name"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>
            <div class="row">
              <div class="col-xs-6 col-sm-6 col-md-6">
                <CustomInput
                  label="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div class="col-xs-6 col-sm-6 col-md-6">
                <CustomInput
                  label="Phone Number"
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>

            <div class="row">
              <div class="col-xs-6 col-sm-6 col-md-6">
                <CustomSelect
                  label={"Your Speciality"}
                  options={doctorSpecialist}
                  onChange={(e) => setSpeciality(e.target.value)}
                />
              </div>
              <div class="col-xs-6 col-sm-6 col-md-6">
                <CustomInput
                  label="Your Location/Address"
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
            </div>

            <CustomInput
              label="Tell us about you"
              type="text-area"
              onChange={(e) => setAboutDoctor(e.target.value)}
            />

            <h3>
              <b>Professional Information</b>
            </h3>

            <div class="row">
              <div class="col-xs-6 col-sm-6 col-md-6">
                <CustomInput
                  label="
                Your Medical Registration Number"
                  onChange={(e) => setmedRegNum(e.target.value)}
                />
              </div>
              <div class="col-xs-6 col-sm-6 col-md-6">
                <CustomInput
                  label="
                Your Medical Registration Council"
                  onChange={(e) => setMedRegCouncil(e.target.value)}
                />
              </div>
            </div>

            <div class="row">
              <div class="col-xs-6 col-sm-6 col-md-6">
                <CustomInput
                  label="
                What is your experience in years?"
                  onChange={(e) => setYearsEx(e.target.value)}
                />
              </div>
              <div class="col-xs-6 col-sm-6 col-md-6">
                <CustomInput
                  label="
                Where did you study?"
                  onChange={(e) => setStudy(e.target.value)}
                />
                <small>Can be latest institution you attended</small>
              </div>
            </div>

            <div class="row">
              <div class="col-xs-6 col-sm-6 col-md-6">
                <CustomInput
                  label="
                How many patients do you see in a day?"
                  onChange={(e) => setPatients(e.target.value)}
                />
              </div>
              <div class="col-xs-6 col-sm-6 col-md-6">
                <CustomSelect
                  label="
                Do you have a clinic?"
                  options={[
                    { label: "Yes", value: "yes" },
                    { label: "No", value: "no" },
                  ]}
                  onChange={(e) => setClinic(e.target.value)}
                />
              </div>
            </div>

            <label>Please upload your medical registration certificate</label>
            <CustomInput
              label="
                "
              type="file"
              onChange={formHandler}
            />

            <h3>
              <b>Complete your application</b>
            </h3>
            <h3>Uploaded {progress} %</h3>

            <div class="row">
              <div class="col-xs-6 col-sm-6 col-md-6">
                <CustomInput
                  label="
               Password"
                  type="password"
                  onChange={(e) => setPwd1(e.target.value)}
                />
              </div>
              <div class="col-xs-6 col-sm-6 col-md-6">
                <CustomInput
                  label="
               Repeat Password"
                  type="password"
                  onChange={(e) => setPwd2(e.target.value)}
                />
              </div>
            </div>

            <div class="row mt-5">
              <div class="col-xs-9 col-sm-9 col-md-9">
                By clicking <strong class="label label-primary">Submit</strong>,
                you agree to the{" "}
                <a href="#" data-toggle="modal" data-target="#t_and_c_m">
                  Terms and Conditions
                </a>{" "}
                set out by this site, including our Cookie Use.
              </div>
            </div>

            <div class="row submit-btn">
              <div class="col-xs-6 col-md-6">
                <button
                  class="btn"
                  tabindex="7"
                  disabled={loading}
                  onClick={onSubmit}
                >
                  Submit
                </button>
              </div>
              {error ? <p className="error">error</p> : ""}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
