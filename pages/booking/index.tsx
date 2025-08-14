import BookingForm from "@/components/booking/BookingForm";
import OrderSummary from "@/components/booking/OrderSummary";
import CancellationPolicy from "@/components/booking/CancellationPolicy";

export default function BookingPage() {
  const bookingDetails = {
    propertyName: "Villa Arrecife Beach House",
    price: 7500,
    bookingFee: 65,
    totalNights: 3,
    startDate: "24 August 2025",
  };

  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Left Column: Form + Cancellation Policy */}
        <div className="md:col-span-2">
          <BookingForm />
          <CancellationPolicy />
        </div>

        {/* Right Column: Order Summary */}
        <div>
          <OrderSummary bookingDetails={bookingDetails} />
        </div>
      </div>
    </div>
  );
}
