import React from "react";
import alimentacao from "../assets/images/alimentacao.svg";
import outros from "../assets/images/outros.svg";
import saude from "../assets/images/saude.svg";
import transporte from "../assets/images/transporte.svg";
import utilidades from "../assets/images/utilidades.svg";
import { IconTheme } from "./UI";

const ImageFilter = ({ type }) => {
  const Images = {
    Restaurante: <IconTheme src={alimentacao} alt="Restaurante ícone" />,
    Utilidades: <IconTheme src={utilidades} alt="Utilidades ícone" />,
    Saude: <IconTheme src={saude} alt="Saúde ícone" />,
    Transporte: <IconTheme src={transporte} alt="Transporte ícone" />,
    Default: <IconTheme src={outros} alt="Outros ícone" />,
  };

  return Images[type] || Images.Default;
};

export default ImageFilter;
