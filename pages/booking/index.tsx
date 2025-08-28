// pages/booking/index.tsx
import axios from "axios";
import { useState } from "react";

export default function BookingForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
    billingAddress: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.phoneNumber ||
      !formData.cardNumber ||
      !formData.expirationDate ||
      !formData.cvv ||
      !formData.billingAddress
    ) {
      setError("Please fill out all fields.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    if (!validateForm()) return;

    setLoading(true);

    try {
      const response = await axios.post("/api/bookings", formData);
      setSuccess("Booking confirmed! 🎉");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        cardNumber: "",
        expirationDate: "",
        cvv: "",
        billingAddress: "",
      });
    } catch (err) {
      setError("Failed to submit booking. Please try again.");
      console.error("Booking error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Confirm Your Booking</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {Object.keys(formData).map((key) => (
          <input
            key={key}
            type="text"
            name={key}
            placeholder={key.replace(/([A-Z])/g, " $1")}
            value={(formData as any)[key]}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg"
          />
        ))}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
        >
          {loading ? "Processing..." : "Confirm & Pay"}
        </button>
      </form>

      {error && <p className="mt-3 text-red-500">{error}</p>}
      {success && <p className="mt-3 text-green-600">{success}</p>}
    </div>
  );
}
