import { useState, useEffect } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    type: "Børnesponsorat",
    name: "",
    email: "",
    address: "",
    phone: "",
    amount: "",
  });

  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [popupVisible, setPopupVisible] = useState(false);

  useEffect(() => {
    const wasSubmitted = localStorage.getItem("sponsorSubmitted") === "true";
    setHasSubmitted(wasSubmitted);
  }, []);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    // Save to localStorage
    const newSponsor = {
      name: formData.name,
      amount: formData.amount,
      type: formData.type,
    };

    // Get existing list or empty array
    const storedList = JSON.parse(localStorage.getItem("sponsorList")) || [];

    // Add new sponsor
    storedList.push(newSponsor);

    // Save updated list
    localStorage.setItem("sponsorList", JSON.stringify(storedList));
    localStorage.setItem("sponsorSubmitted", "true");

    // Show popup and fade it
    setHasSubmitted(true);
    setPopupVisible(true);

    setTimeout(() => setPopupVisible(false), 4000); // fade out
    setTimeout(() => setHasSubmitted(false), 5000); // remove from DOM
  }

  return (
    <section className='sponsor-form-section'>
      <h2>Udfyld formularen</h2>

      {hasSubmitted && (
        <div className={`popup ${!popupVisible ? "disappearing" : ""}`}>
          🎉 Tak for din tilmelding! Vi har modtaget dine oplysninger.
        </div>
      )}

      <form className='sponsor-form' onSubmit={handleSubmit}>
        <label>
          Støttetype
          <select name='type' value={formData.type} onChange={handleChange}>
            <option>Børnesponsorat</option>
            <option>Lejrsponsorat</option>
            <option>Støtte til foreningen</option>
          </select>
        </label>
        <label>
          Firmanavn
          <input
            type='text'
            name='name'
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email
          <input
            type='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Adresse
          <input
            type='text'
            name='address'
            value={formData.address}
            onChange={handleChange}
          />
        </label>
        <label>
          Telefon
          <input
            type='tel'
            name='phone'
            value={formData.phone}
            onChange={handleChange}
          />
        </label>
        <label>
          Beløb (DKK)
          <input
            type='number'
            name='amount'
            value={formData.amount}
            onChange={handleChange}
          />
        </label>
        <button type='submit'>Send</button>
      </form>
    </section>
  );
}
