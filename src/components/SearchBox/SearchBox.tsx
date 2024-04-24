import { FormEventHandler } from "react";
import "./SearchBox.scss"

type SearchBoxProps = {
    label: string;
    searchTerm: string;
    handleInput: FormEventHandler<HTMLInputElement>;
}

export const SearchBox = ({ label, searchTerm, handleInput}: SearchBoxProps)  => {

    const capitaliseLabel = label[0].toUpperCase()

    return (
        <div className="search-box">
        <label htmlFor={label} className="search-box__label">
            {capitaliseLabel}
        </label>
        <input
            className="search-box__input"
            type="text"
            id={label}
            name={label}
            value={searchTerm}
            onInput={handleInput}
        />
        </div>
    );
};

export default SearchBox;
