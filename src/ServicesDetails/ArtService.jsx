import React from "react";
import Blog_lg from "../assets/blog-lg.jpg";
import Blog2 from "../assets/blog-2 (1).jpg";
import { CheckCircle } from "lucide-react";
import Button from '../components/Button'

const ArtService = () => {
  return (
    <section className="px-6 py-10 max-w-9xl mx-auto my-20">
      <div className="grid md:grid-cols-3 gap-10">
        
        {/* ---------- LEFT (Main Content) ---------- */}
        <div className="md:col-span-2">
          <h1 className="text-3xl font-bold mb-4">Art Nail & Effects Service</h1>
          <img
            src={Blog_lg}
            alt="Nail art showcase"
            className="w-full rounded-2xl shadow-lg mb-8"
          />

          {/* About Section */}
          <h2 className="text-2xl font-semibold mb-2 text-gray-700">About this service</h2>
          <p className="mb-6 leading-relaxed text-gray-700 text-lg">
            Velit, praesent pharetra malesuada id pulvinar amet. Consequat potenti
            mollis massa iaculis et, dolor, eget lectus. Aliquam pellentesque
            molestie felis fames sed eget non euismod eget. Et eget ullamcorper
            urna, elit ac diam tellus viverra lacus.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur
            facilisis vivamus massa magna. Blandit mauris libero condimentum
            commodo morbi consectetur sociis convallis sit. Magna diam amet justo
            sed vel dolor et volutpat integer. Iaculis sit sapien hac odio
            elementum egestas neque. Adipiscing purus euismod orci sem amet, et.
            Turpis erat ornare nisi laoreet est euismod.
          </p>

          {/* Benefits Section */}
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">What are the Benefits</h2>
          <div className="grid md:grid-cols-2 gap-6 items-start mb-10">
            <ul className="space-y-2 text-gray-700 text-lg">
              <li className="flex items-center gap-2">
                <CheckCircle size={18} className="text-pink-500" />
                Blandit mauris libero condimentum commodo sociis convallis sit.
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={18} className="text-pink-500" />
                Magna diam amet justo sed vel dolor et volutpat integer.
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={18} className="text-pink-500" />
                Laculis sit sapien hac odio elementum egestas neque.
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={18} className="text-pink-500" />
                Blandit mauris libero condimentum commodo sociis convallis sit.
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={18} className="text-pink-500" />
                Magna diam amet justo sed vel dolor et volutpat integer.
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={18} className="text-pink-500" />
                Laculis sit sapien hac odio elementum egestas neque.
              </li>
            </ul>
            <img
              src={Blog2}
              alt="Different nail styles"
              className=" shadow-md"
            />
          </div>

          {/* Service Betterment Section */}
          <h2 className="text-2xl font-semibold mb-2">
            Service for your betterment
          </h2>
          <p className="leading-relaxed text-gray-700 text-lg">
            Tortor diam dignissim amet, in interdum aliquet. Magnis dictum et eros
            purus fermentum, massa ullamcorper sit sollicitudin. Nascetur libero
            elementum adipiscing mauris maecenas et magna. Etiam nec, rutrum a
            diam lacus, nunc integer etiam. Mattis pulvinar non viverra donec
            pellentesque. Odio mi consequat libero dolor. Porta ut diam lobortis
            eget leo, lectus. Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Officia totam veniam in quasi nisi quis, quaerat quisquam, nam
            id quas adipisci harum sequi amet commodi ea consequuntur natus
            dolores enim!
          </p>
        </div>

        {/* ---------- RIGHT (Sidebar) ---------- */}
        <aside className="space-y-8">
          {/* Services Offered */}
          <div className="border p-8">
            <h2 className="text-2xl font-semibold mb-4 border-b">Services Offered</h2>
            <ul className="space-y-3 text-gray-700">
              {[
                "Hydra Facial",
                "Art Nail & Effects",
                "Glitter For Nail Art",
                "Classic Nail Manicure",
                "Eyelashes Extensions",
                "Pedicure",
                
              ].map((service, index) => (
                <li
                  key={index}
                  className={`flex items-center gap-2 ${
                    service === "Get an Appointment"
                      ? "font-semibold text-pink-600"
                      : ""
                  }`}
                >
                  <CheckCircle
                    size={18}
                    className="text-pink-500 flex-shrink-0"
                  />
                  {service}
                </li>
              ))}
            </ul>
            
          </div>

          <div className="border  p-8 shadow-md bg-white">
  <h1 className="text-2xl font-semibold border-b pb-2 mb-4 text-gray-800">
    Get An Appointment
  </h1>
  <p className="text-gray-600 leading-relaxed mb-6">
    Efficia enim error fugit quod accusantium pariatur, quae voluptatibus 
    exercitationem. Quod, eveniet similique?
  </p>
  <Button className="">
    Book Now
  </Button>
</div>


          {/* Working Hours */}
          <div className="border p-8">
            <h2 className="text-2xl font-semibold mb-4 border-b">Working Hours</h2>
            <ul className="space-y-2 text-gray-700 text-lg">
              <li><span className="font-bold text-xl">Monday:</span> 9 AM - 5 PM</li>
              <li><span className="font-bold text-xl">Tuesday:</span> 9 AM - 5 PM</li>
              <li><span className="font-bold text-xl">Wednesday:</span> 9 AM - 5 PM</li>
              <li><span className="font-bold text-xl">Thursday:</span> 9 AM - 5 PM</li>
              <li><span className="font-bold text-xl">Friday:</span> 9 AM - 5 PM</li>
              <li><span className="font-bold text-xl">Saturday:</span> Closed</li>
              <li><span className="font-bold text-xl">Sunday:</span> Closed</li>
            </ul>
          </div>

          <div className="border  p-6 shadow-md bg-white">
  <h2 className="text-2xl font-semibold border-b pb-2 mb-6 text-gray-800">
    Have any question?
  </h2>

  <form className="space-y-4">
    {/* Full Name */}
    <div>
    
      <input
        type="text"
        placeholder="Full Name"
        className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-pink-400 focus:outline-none"
      />
    </div>

    {/* Email */}
    <div>
      
      <input
        type="email"
        placeholder="Email"
        className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-pink-400 focus:outline-none"
      />
    </div>

    {/* Details */}
    <div>
      <textarea
        placeholder="Write your message..."
        rows="4"
        className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-pink-400 focus:outline-none"
      ></textarea>
    </div>

    {/* Submit Button */}
    <Button >
      Send Message
    </Button>
  </form>
</div>

        </aside>
      </div>
    </section>
  );
};

export default ArtService;
