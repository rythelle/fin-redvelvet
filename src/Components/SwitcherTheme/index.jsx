import React from "react";
import ThemeOn from "../../assets/images/themeOn.svg";
import ThemeOff from "../../assets/images/themeOff.svg";
import { Icon } from "../UI";

const light = <Icon src={ThemeOn} alt="Ícone tema claro" />;
const dark = <Icon src={ThemeOff} alt="Ícone tema escuro" />;

const SelectTheme = ({ theme }) => (theme ? light : dark);

export default SelectTheme;
