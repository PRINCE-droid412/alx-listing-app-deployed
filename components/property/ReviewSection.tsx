import axios from "axios";
import { useState, useEffect } from "react";

const ReviewSection = ({ propertyId }: { propertyId: string }) => {
  const [reviews, setReviews] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(`/api/properties/${propertyId}/reviews`);
        setReviews(response.data);
      } catch (error) {
        console.error("Error fetching reviews:", error);
        setError("Failed to load reviews. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    if (propertyId) {
      fetchReviews();
    }
  }, [propertyId]);

  if (loading) return <p>Loading reviews...</p>;
  if (error) return <p className="text-red-500">{error}</p>;
  if (reviews.length === 0) return <p>No reviews yet. Be the first to review!</p>;

  return (
    <div className="space-y-4">
      {reviews.map((review) => (
        <div key={review.id} className="border-b pb-2">
          <p className="font-semibold">{review.reviewerName}</p>
          <p className="text-yellow-500">⭐ {review.rating}</p>
          <p>{review.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewSection;
