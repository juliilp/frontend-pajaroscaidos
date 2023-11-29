import Image from "next/image";

const CardDev = ({ title, description, image }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-4 w-2/3">
      <div className="flex items-center space-x-4">
        <Image
          src={image}
          alt="User Avatar"
          width={100}
          height={100}
          className="h-12 w-12 object-cover rounded-full"
          onError={(e) => {
            e.target.style.display = "none";
          }}
        />
        <h4 className="text-xl font-bold mb-2">{title}</h4>
      </div>

      <div className="border-t border-gray-300 mt-2 mb-2"></div>

      <div className="description-box">
        <p className="text-gray-600">{description.aboutMe}</p>
      </div>

      <div className="border-t border-gray-300 mt-2 mb-2"></div>

      <div className="description-box">
        <p className="text-gray-600">{description.dev ? description.dev : null}</p>
      </div>

      <div className="border-t border-gray-300 mt-2 mb-2"></div>

      <div className="description-box">
        <p className="text-gray-600">Mis contactos:</p>
        {description.contact && description.contact[0]
          ? description.contact.map((e, i) => (
              <div key={i}>
                <a href={`${e.url}`} target="_blank">
                  {e.name}
                </a>
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default CardDev;
