import React from "react";
import { Check } from "lucide-react"; // ✅ Import pink check icon
import Button from "../components/Button"; // ✅ Import Button

const MoreAbout = () => {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12">
        {/* Left Column */}
        <div className="md:w-1/2 space-y-6">
          <h3 className="text-6xl text-gray-800">More About Us</h3>
          <p className="text-gray-600 leading-relaxed text-xl">
            In commodo auctor eget congue sit. Ultrices eget pretium sit euismod
            mi id. Risus, aliquam odio posuere ac in in nisl sed augue. Porta
            aenean egestas malesuada in pulvinar enim viverra.
          </p>
          <p className="text-gray-600 leading-relaxed text-xl">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut veniam
            inventore vero incidunt vitae deserunt laboriosam, voluptas ex!
          </p>
          <p className="text-gray-600 leading-relaxed text-xl">
            Deleniti, velit magni nemo culpa mollitia laudantium! Id vel
            voluptate autem quasi.
          </p>

          <Button>Read Blog</Button>
        </div>

        {/* Right Column */}
        <div className="md:w-1/2 space-y-6">
          <h3 className="text-6xl text-gray-800">How Beauty Started</h3>
          <p className="text-gray-600 text-xl leading-relaxed">
            In commodo auctor aenean egestas malesuada in pulvinar enim viverra.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut id
            delectus laudantium, reprehenderit reiciendis architecto doloribus.
          </p>

          {/* ✅ Checklist */}
          <ul className="space-y-4 text-xl">
            <li className="flex items-start">
              <Check className="text-pink-500 mr-3 mt-1" size={22} />
              Porta aenean egestas malesuada in pulvinar enim viverra.
            </li>
            <li className="flex items-start">
              <Check className="text-pink-500 mr-3 mt-1" size={22} />
              Ultrices eget pretium sit euismod mi id.
            </li>
            <li className="flex items-start">
              <Check className="text-pink-500 mr-3 mt-1" size={22} />
              Risus, aliquam odio posuere ac in in nisl sed augue.
            </li>
            <li className="flex items-start">
              <Check className="text-pink-500 mr-3 mt-1" size={22} />
              Commodo aenean egestas malesuada in pulvinar enim viverra.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MoreAbout;
