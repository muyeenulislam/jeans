"use client";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Image from "next/image";
import Link from "next/link";

import DefaultInput from "../../components/input/defaultinput";
import DefaultSelect from "../../components/input/defaultselect";
import DefaultTextbox from "../../components/input/defaulttextbox";
import PrimaryButton from "../../components/buttons/primary-button";

const Page = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    company: "",
    reason: null,
    message: "",
  });
  const [error, setError] = useState({
    name: "",
    email: "",
    company: "",
    reason: null,
    message: "",
  });

  const reasons = [
    { label: "Speaking Engagements", value: "Speaking Engagements" },
    { label: "Media & Press", value: "Media & Press" },
    {
      label: "Book Orders & Bulk Purchases",
      value: "Book Orders & Bulk Purchases",
    },
    {
      label: "Consulting or Advisory Services",
      value: "Consulting or Advisory Services",
    },
    {
      label: "Collaboration Opportunities",
      value: "Collaboration Opportunities",
    },
    {
      label: "Reader Feedback or Testimonials",
      value: "Reader Feedback or Testimonials",
    },
    {
      label: "Academic or Educational Use",
      value: "Academic or Educational Use",
    },
    {
      label: "Other",
      value: "Other",
    },
  ];

  const isValidEmail = (email) => {
    // Basic email pattern
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = () => {
    const newErrors = {
      name: state.name ? "" : "Name is required",
      email: !state.email
        ? "Email is required"
        : !isValidEmail(state.email)
        ? "Invalid email address"
        : "",
      company: state.company ? "" : "Company/organization name is required",
      reason: state.reason ? "" : "Please select a reason",
      message: state.message ? "" : "Message is required",
    };

    setError(newErrors);

    const hasErrors = Object.values(newErrors).some((msg) => msg !== "");

    if (!hasErrors) {
      console.log(state);
      toast.success("Submitted successfully!");
    }
  };
  return (
    <div className="flex flex-col lg:flex-row w-full">
      <div className="w-full h-full lg:w-1/2 hidden lg:block">
        <Image
          src={"/images/contact-image.png"}
          alt="contact"
          height={500}
          width={500}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col lg:py-[8rem] lg:pr-[12.5rem] lg:pl-[4rem] w-full lg:w-1/2">
        <div className="px-[1.25rem] py-[2rem] lg:p-0 flex flex-col gap-[2rem] lg:gap-[1.5rem]">
          <div className="flex flex-col gap-[1rem]">
            <p className="text-[1rem] leading-[1.375rem] lg:text-[1.5rem] lg:leading-[2rem] text-primary">
              Scaling Innovation? Let’s Talk.
            </p>
            <h1 className="text-primary text-[3rem] leading-[3rem] lg:text-[5.5rem] lg:leading-[5.5rem] family-glook">
              Emad Masoud
            </h1>
          </div>
          <div className="flex flex-col gap-[2rem]">
            <p className="text-secondary text-[1.125rem] leading-[1.6875rem] lg:text-[1.5rem] lg:leading-[2rem]">
              Looking to transform your business with bold leadership, digital
              strategy, and product innovation?
            </p>
            <p className="text-[1.125rem] leading-[1.6875rem] lg:text-[1.5rem] lg:leading-[2rem] text-primary">
              I partner with CEOs, executives, and organizations to drive
              product leadership, UX strategy, and digital transformation at
              scale.
            </p>
          </div>
        </div>
        <div className="w-full lg:hidden">
          <Image
            src={"/images/contact-image.png"}
            alt="contact"
            height={500}
            width={500}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="px-[1.25rem] py-[2rem] lg:p-0 lg:pt-[2rem] flex flex-col gap-[2rem] lg:gap-[4rem]">
          <p className="text-secondary text-[1.125rem] leading-[1.6875rem] lg:text-[1.5rem] lg:leading-[2rem]">
            Looking to transform your business with bold leadership, digital
            strategy, and product innovation?
          </p>
          <div className="h-[0.0625rem] bg-[#99A1A9]"></div>
          {/* form */}
          <div className="flex flex-col gap-[1.5rem] lg:gap-[2rem]">
            <h3 className="text-primary text-[1.125rem] leading-[1.6875rem] lg:text-[1.5rem] lg:leading-[2rem]">
              Enter your information below
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[1rem]">
              <DefaultInput
                label={"Name"}
                placeholder={"Enter your name"}
                value={state.name}
                onChange={(e) => {
                  setState({ ...state, name: e.target.value });
                  if (error.name) setError({ ...error, name: "" });
                }}
                error={error.name}
              />

              <DefaultInput
                label={"Email"}
                type="email"
                placeholder={"Enter email address"}
                value={state.email}
                onChange={(e) => {
                  setState({ ...state, email: e.target.value });
                  if (error.email) setError({ ...error, email: "" });
                }}
                error={error.email}
              />

              <DefaultInput
                label={"Company/Organization"}
                placeholder={"Enter your company or organization name"}
                value={state.company}
                onChange={(e) => {
                  setState({ ...state, company: e.target.value });
                  if (error.company) setError({ ...error, company: "" });
                }}
                error={error.company}
              />

              <DefaultSelect
                label={"Reason of Inquiry"}
                placeholder={"Choose an option"}
                value={state.reason}
                items={reasons}
                onChange={(e) => {
                  setState({ ...state, reason: e });
                  if (error.reason) setError({ ...error, reason: "" });
                }}
                error={error.reason}
              />
              <div className="lg:col-span-2">
                <DefaultTextbox
                  label={"Your Message"}
                  placeholder={"Write your message here..."}
                  value={state.message}
                  onChange={(e) => {
                    setState({ ...state, message: e.target.value });
                    if (error.message) setError({ ...error, message: "" });
                  }}
                  error={error.message}
                />
              </div>
            </div>
            <div className="flex flex-col gap-[0.5rem] lg:gap-[1rem]">
              <PrimaryButton
                text={"Partner with Me"}
                icon={"/images/arrow-right-white.svg"}
                onClick={handleSubmit}
              />
              <p className="text-[0.875rem] lg:text-[1rem] text-primary leading-[1.25rem] lg:leading-[1.375rem]">
                * Rest assured. We will not spam at your inbox.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-[1.5rem] lg:gap-[2rem]">
            <p className="text-primary text-[1rem] leading-[1.375rem] lg:text-[1.5rem] lg:leading-[2rem]">
              For speaking, advisory, or consulting inquiries,
              <br /> contact me at{" "}
              <Link
                href={"mailto:hello@emasoud.dev"}
                className="font-semibold underline"
              >
                hello@emasoud.dev
              </Link>
            </p>
            <p className="text-primary text-[1rem] leading-[1.375rem] lg:text-[1.5rem] lg:leading-[2rem]">
              Follow me on{" "}
              <Link
                href={"https://www.linkedin.com/in/emad-m-65279714/"}
                className="font-semibold underline"
                target="_blank"
              >
                LinkedIn
              </Link>{" "}
              for insights on strategy & innovation.
            </p>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        rtl={false}
        draggable
        pauseOnHover
        closeButton={false}
        toastStyle={{ width: "15rem", minHeight: "4rem", top: "3rem" }}
        theme="light"
      />
    </div>
  );
};

export default Page;
