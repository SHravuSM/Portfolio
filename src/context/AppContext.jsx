import { createContext, useContext, useState } from "react";

const appContext = createContext();

export default function AppContext({ children }) {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [light, setLight] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const handleSubmit = async (formData, e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("");

    try {
      // Simulated API call - replace with actual backend endpoint
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // In real implementation, make POST request to your backend
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // });

      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const values = {
    light,
    setLight,
    formData,
    setFormData,
    handleSubmit,
    isSubmitting,
    submitStatus,
    activeSection,
    scrollToSection,
    setActiveSection,
  };

  return <appContext.Provider value={values}>{children}</appContext.Provider>;
}

export const STORE = () => useContext(appContext);
