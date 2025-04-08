import React from "react";

const properties = [
  {
    id: 1,
    title: "Casa en Parque Los Avellanos II",
    img: "https://www.socovesa.cl/wp-content/uploads/2022/04/parque_los_avellanos-casa110.jpg",
  },
  {
    id: 2,
    title: "Departamento en Santiago Centro",
    img: "https://constructorarupanco.com/wp-content/uploads/2021/12/cozy-living-room-interior-with-panoramic-window-1.jpg",
  },
  {
    id: 3,
    title: "Casa en la florida",
    img: "https://http2.mlstatic.com/D_NQ_NP_2X_720415-MLC83283751673_032025-F-cumbres-de-la-vina-la-florida.webp",
  },
  {
    id: 4,
    title: "Casa en la reina",
    img: "https://cf.chilepropiedades.cl/imagenes/publicacion/venta/casa/la-reina/2/6daa0bd6b839457d9d531d41e7d293a9.jpeg",
  },
  {
    id: 1,
    title: "Casa en Parque Los Avellanos II",
    img: "https://www.socovesa.cl/wp-content/uploads/2022/04/parque_los_avellanos-casa110.jpg",
  },
  {
    id: 2,
    title: "Departamento en Santiago Centro",
    img: "https://constructorarupanco.com/wp-content/uploads/2021/12/cozy-living-room-interior-with-panoramic-window-1.jpg",
  },
  
];

const Cards = () => {
  return (
    <section className="p-40 grid justify-items-center">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-16">
        {properties.map((property) => (
          <div key={property.id} className="rounded-md text-center border-white bg-white transition-all duration-300 transform hover:scale-105 hover:shadow-2xl w-[520px] h-[480px]">
            <img
              src={property.img}
              alt={property.title}
              className="border-gray-200 h-[280px] w-full object-cover rounded-t-md"
            />
            <div className="p-4">
              <h4 className="text-lg font-semibold text-gray-800 py-2">
                {property.title}
              </h4>
              <p className="text-gray-600 text-sm mt-2">
                Some info about the property
              </p>
              <a
                href="#"
                className="inline-block mt-4 px-4 py-2 border-2 border-green-900 hover:bg-green-900 hover:rounded-2xl hover:text-white transition-all ease duration-300"
              >
                More info
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};


export default Cards;
