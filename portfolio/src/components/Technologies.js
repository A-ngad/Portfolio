import React from "react";

const Technologies = () => {
  return (
    <div className="py-9 pb-9 relative top-[-123px]">
      <div className=" flex flex-wrap justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 container  gap-3 rounded-lg">
          <div className="bg-white rounded-lg border-red-600 border">
            <div>
              Frontend Tools & Technologies 
            </div>
            <div>
            <div className="bg-gray-300 p-2 m-2 rounded-lg">React.js</div>
            <div className="bg-gray-300 p-2 m-2 rounded-lg">HTML</div>
            <div className="bg-gray-300 p-2 m-2 rounded-lg">CSS</div>
            <div className="bg-gray-300 p-2 m-2 rounded-lg">JavaScript</div>
            <div className="bg-gray-300 p-2 m-2 rounded-lg">Vue</div>
            <div className="bg-gray-300 p-2 m-2 rounded-lg">Next.js</div>
            <div className="bg-gray-300 p-2 m-2 rounded-lg">Figma</div>

            </div>
          </div>

          <div className="bg-white rounded-lg border-red-600 border">
            <div>
              Other Technologies
            </div>
            <div>
            <div className="bg-gray-300 p-2 m-2 rounded-lg">.NET Core</div>
            <div className="bg-gray-300 p-2 m-2 rounded-lg">GIT</div>
            <div className="bg-gray-300 p-2 m-2 rounded-lg">Shopify</div>
            <div className="bg-gray-300 p-2 m-2 rounded-lg">Taiwind / Bootstrap</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
