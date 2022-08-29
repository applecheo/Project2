import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  DropDownContainer,
  DropDownHeader,
  DropDownListContainer,
  DropDownList,
  ListItem,
} from "./styles";

const DropDown = ({ favorite, setFavorite }) => {
  const options = favorite
    .filter((x) => x.favorite === true)
    .map((x) => x.name);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggling = () => {
    setIsOpen(!isOpen);
    setFavorite(() => {
      const reset = favorite.map((x) => ({ ...x, displayArtist: false }));
      return reset;
    });
  };

  const onOptionClicked = (value) => (e) => {
    setSelectedOption(value);
    setIsOpen(false);

    setFavorite((prev) => {
      const selectedArtist = favorite.find(
        (x) => x.name === e.target.innerText
      );
      selectedArtist.displayArtist = true;
      return [...prev];
    });
  };

  return (
    <>
      <DropDownContainer>
        <DropDownHeader onClick={toggling}>
          {selectedOption || "Favorite Artists"}
        </DropDownHeader>
        {isOpen && (
          <DropDownListContainer>
            <DropDownList>
              {options.map((option) => (
                <ListItem onClick={onOptionClicked(option)} key={uuidv4()}>
                  {option}
                </ListItem>
              ))}
            </DropDownList>
          </DropDownListContainer>
        )}
      </DropDownContainer>
    </>
  );
};
export default DropDown;
