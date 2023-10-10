const { default: MainSectionArticulo2 } = require("./MainSectionArticulo2");
const { default: Section2Articulo2 } = require("./Section2Articulo2");
const { default: Section3Articulo2 } = require("./Section3Articulo2");
const { default: Section4Articulo2 } = require("./Section4Articulo2");

import image1 from "../../../../public/images/Feria Villa Dominico/villa-dominico-1.png";
import image2 from "../../../../public/images/Feria Villa Dominico/villa-dominico-2.png";
import image3 from "../../../../public/images/Feria Villa Dominico/villa-dominico-3.png";
import image4 from "../../../../public/images/Feria Villa Dominico/villa-dominico-4.png";
import image5 from "../../../../public/images/Feria Villa Dominico/villa-dominico-5.png";
const ArraySection = [
  {
    componente: <MainSectionArticulo2 image1={image1} image2={image2} />,
  },
  {
    componente: <Section2Articulo2 image={image3} />,
  },
  {
    componente: <Section3Articulo2 image={image4} />,
  },
  {
    componente: <Section4Articulo2 image={image5} />,
  },
];

export default ArraySection;
