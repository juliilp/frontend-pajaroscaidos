"use client";
import React, { useState } from "react";
import eyeOn from "../../../public/images/eyeOn.png";
import eyeOff from "../../../public/images/eyeOff.png";
import Swal from "sweetalert2";
import api from "@/api/api";
import Link from "next/link";
import Image from "next/image";
import validate from "@/helpers/validate";

export default function Registro() {
  const [input, setInput] = useState({});
  const [error, setError] = useState({});
  const [password, setPassword] = useState("password");
  const [cpassword, setCpassword] = useState("password");
  const [submit, setSubmit] = useState(true);
  const [clickbtn, setClickbtn] = useState("");

  function onChange(e) {
    if (e === undefined || e[0] === "+") {
      e = {
        target: {
          name: "tel",
          value: e,
        },
      };
    }
    if (e.target.name === "password") {
      if (e.target.value !== input.cpassword) {
        setError((state) => ({
          ...state,
          cpassword: "The passwords you entered do not match",
        }));
      } else
        setError((state) => ({
          ...state,
          cpassword: "",
        }));
    }
    setInput((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
    setError((state) => {
      const err = {
        ...state,
        [e.target.name]: validate(
          e.target.name,
          e.target.value,
          input.password
        ),
      };
      if (
        err.username === "" &&
        err.password === "" &&
        err.email === ""
        // && err.date === ""
      ) {
        setSubmit(false);
      } else setSubmit(true);
      return err;
    });
  }

  function onSubmit(e) {
    e.preventDefault();
    setClickbtn("click");
    setTimeout(async () => {
      try {
        const resp = await api.post(`/user/create`, {
          first_name: input.username,
          pass: input.password,
          email: input.email,
        });
        // navigate("/login");
        Swal.fire(`${resp.data.msg}. Now you can start session`);
      } catch (error) {
        // console.log(error);
        Swal.fire(error.response.data.error);
      }
    }, 1000);
  }

  return (
    <>
      <div className="sign-up-container">
        <h1>Get started with Animmerce!</h1>
        <h2>
          Already have an account? <Link href="/login">Log in</Link>
        </h2>
        <form className="sign-up" onSubmit={onSubmit}>
          <div>
            <label
              htmlFor="username"
              className={error.username ? "label-error" : ""}
            >
              Username:
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={input.username || ""}
              onChange={onChange}
              className={error.username ? "input-error" : ""}
            />
            {!error.username ? (
              <div>&nbsp;</div>
            ) : (
              <div className="validate">{error.username}</div>
            )}
          </div>
          <div>
            <label htmlFor="email" className={error.email ? "label-error" : ""}>
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={input.email || ""}
              onChange={onChange}
              className={error.email ? "input-error" : ""}
            />
            {!error.email ? (
              <div>&nbsp;</div>
            ) : (
              <div className="validate">{error.email}</div>
            )}
          </div>
          <div style={{ position: "relative" }}>
            <label
              htmlFor="password"
              className={error.password ? "label-error" : ""}
            >
              Password:
            </label>
            <input
              type={password}
              id="password"
              name="password"
              value={input.password || ""}
              onChange={onChange}
              className={error.password ? "input-error" : ""}
            />
            {!error.password ? (
              <div>&nbsp;</div>
            ) : (
              <div className="validate">{error.password}</div>
            )}
            <Image
              src={password === "password" ? eyeOff : eyeOn}
              alt="on"
              height="25"
              onClick={() =>
                setPassword(password === "password" ? "text" : "password")
              }
            />
          </div>
          <div style={{ position: "relative" }}>
            <label
              htmlFor="cpassword"
              className={error.cpassword ? "label-error" : ""}
            >
              Confirm password:
            </label>
            <input
              type={cpassword}
              id="cpassword"
              name="cpassword"
              value={input.cpassword || ""}
              onChange={onChange}
              className={error.cpassword ? "input-error" : ""}
            />
            {!error.cpassword ? (
              <div>&nbsp;</div>
            ) : (
              <div className="validate">{error.cpassword}</div>
            )}
            <Image
              src={cpassword === "password" ? eyeOff : eyeOn}
              alt="on"
              height="25"
              onClick={() =>
                setCpassword(cpassword === "password" ? "text" : "password")
              }
            />
          </div>
          <Link href="/login">Do you already have an account?</Link>
          <br />
          <button
            type="submit"
            disabled={submit}
            className={clickbtn}
            onClick={() => setClickbtn("click")}
          >
            Sign Up
          </button>
          <div>
            By continuing, you accept our standard terms and conditions and our
            privacy policy.
          </div>
        </form>
      </div>
    </>
  );
}
