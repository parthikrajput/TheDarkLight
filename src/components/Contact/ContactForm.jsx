"use client";
import React, { useState } from "react";
//= Components
import Split from "@/components/Common/Split";
//= Static Data
import contentFormData from "@/data/contact-form.json";
import Select from "react-select";

function ContactForm({ theme }) {
  const [serviceOption, setServiceOption] = useState(null);
  const [budgetOption, setBudgetOption] = useState(null);
  const [TimelineOption, setTimelineOption] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const ServicesOptions = [
    { value: "digital-marketing", label: "Digital Marketing" },
    { value: "website-development", label: "Website Development" },
    { value: "ui-ux-design", label: "UI/UX Design" },
    { value: "e-commerce-solutions", label: "E-commerce Solutions" },
    { value: "mobile-app-development", label: "Mobile App Development" },
    { value: "social-media-marketing", label: "Social Media Marketing" },
    { value: "ai-automation", label: "AI & Automation" },
    { value: "other", label: "Other (Specify)" },
  ];

  const budgetOptions = [
    { value: "10000-50000", label: "₹10,000 - ₹50,000" },
    { value: "50000-100000", label: "₹50,000 - ₹1,00,000" },
    { value: "100000", label: "₹1,00,000+" },
    { value: "not-sure-yet", label: "Not Sure Yet" },
  ];

  const TimelineOptions = [
    { value: "urgent-within-1-month", label: "Urgent (Within 1 Month)" },
    { value: "1-3-months", label: "1-3 Months" },
    { value: "3-6-months", label: "3-6 Months" },
    { value: "flexible", label: "Flexible" },
  ];

  const customStyles = {
    control: (provided) => ({
      ...provided,
      backgroundColor: "#111215",
      color: "#fff",
      border: "none",
      borderBottom: "1px solid rgba(255, 255, 255, 0.3)",
      borderRadius: "0",
      boxShadow: "none",
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: "#000", // Dropdown options background color
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? "#4a4b4b" : "#333", // Highlight color when hovered
      color: state.isFocused ? "#fff" : "#ccc", // Text color
      cursor: "pointer",
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "#fff",
    }),
    multiValue: (provided) => ({
      ...provided,
      backgroundColor: "#000", // Tag background color
      color: "#fff",
    }),
    multiValueLabel: (provided) => ({
      ...provided,
      color: "#111215",
    }),
    multiValueRemove: (provided) => ({
      ...provided,
      color: "#fff",
      ":hover": {
        backgroundColor: "#FF5E5E",
        color: "#fff",
      },
    }),
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsSubmitted(false);

    const formData = new FormData(e.target);

    // Adding select inputs to formData
    if (serviceOption)
      formData.append(
        "services",
        serviceOption.map((option) => option.value).join(", ")
      );
    if (budgetOption) formData.append("budget", budgetOption.value);
    if (TimelineOption) formData.append("timeline", TimelineOption.value);

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbwb9h3aJV6YXQPGZ9ZvOmS64pQVgiv2V8_PrGnwkcsSN9D549fDazohkPwkvu-PsBCsrg/exec",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        setIsSubmitting(false);
        setIsSubmitted(true);

        // Clear form inputs
        e.target.reset();
        setServiceOption(null);
        setBudgetOption(null);
        setTimelineOption(null);
      } else {
        alert("Something went wrong. Please try again.");
        setIsSubmitting(false);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again later.");
      setIsSubmitting(false);
    }
  };
  return (
    <section className="contact section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="form md-mb50">
              <form onSubmit={handleSubmit} id="contact-form">
                <div className="messages"></div>

                <div className="controls">
                  <div className="form-group">
                    <input
                      id="form_name"
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      required="required"
                    />
                  </div>

                  <div className="form-group">
                    <input
                      id="form_email"
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      required="required"
                    />
                  </div>

                  <div className="form-group">
                    <input
                      id="form_phone"
                      type="number"
                      name="number"
                      placeholder="Phone Number"
                      required="required"
                    />
                  </div>

                  <div className="form-group">
                    <input
                      id="form_company"
                      type="text"
                      name="company"
                      placeholder="Company name"
                    />
                  </div>

                  <div className="form-group">
                    <input
                      id="form_url"
                      type="url"
                      name="website"
                      placeholder="Company website URL"
                    />
                  </div>

                  <div className="form-group mt-10">
                    <Select
                      value={serviceOption}
                      onChange={setServiceOption}
                      options={ServicesOptions}
                      isMulti
                      placeholder="Which services are you interested in?"
                      styles={customStyles}
                    />
                  </div>

                  <div className="form-group mt-10">
                    <Select
                      value={budgetOption}
                      onChange={setBudgetOption}
                      options={budgetOptions}
                      styles={customStyles}
                      placeholder="Project Budget Range"
                    />
                  </div>

                  <div className="form-group mt-10">
                    <Select
                      value={TimelineOption}
                      onChange={setTimelineOption}
                      options={TimelineOptions}
                      styles={customStyles}
                      placeholder="Project Timeline"
                    />
                  </div>

                  <div className="form-group">
                    <input
                      id="form_additionalInfo"
                      type="text"
                      name="additionalInfo"
                      placeholder="Additional Information (Optional)"
                    />
                  </div>

                  <div className="form-group">
                    <textarea
                      id="form_message"
                      name="message"
                      placeholder="Any specific requirements or goals?"
                      rows="4"
                      required="required"
                    ></textarea>
                  </div>

                  <div className="d-flex">
                    <button
                      type="submit"
                      className={`butn mb-10 ${
                        theme === "light" ? "dark" : "bord"
                      }`}
                      style={{
                        marginTop: "20px",
                        padding: "10px 20px",
                        cursor: isSubmitting ? "not-allowed" : "pointer",
                      }}
                      disabled={isSubmitting}
                    >
                      <span>
                        {" "}
                        {isSubmitting
                          ? "Submitting..."
                          : "Get a Free Consultation"}
                      </span>
                    </button>
                  </div>
                </div>
                {isSubmitted && (
                  <div
                    style={{
                      marginTop: "20px",
                      color: "#4A90E2",
                      fontWeight: "bold",
                    }}
                    className="text-center"
                  >
                    Thank you! Your form has been submitted successfully.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
