import Card from '../components/common/Card';
import Button from '../components/common/Button';

const HomePage = () => {
  return (
    <div className="p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
        <Card
          imageSrc="/assets/properties/image 13.png"
          title="Cozy Apartment"
          description="A cozy apartment in the city center with 2 beds and 1 bath."
          price="$150/night"
        />
        <Card
          imageSrc="/assets/properties/image 12.png"
          title="Modern Loft"
          description="Spacious loft with stunning views and modern design."
          price="$200/night"
        />
      </div>

      <div className="flex justify-center">
        <Button onClick={() => alert('Clicked!')}>Book Now</Button>
      </div>
    </div>
  );
};

export default HomePage;
