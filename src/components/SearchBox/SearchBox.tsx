import { FormEventHandler } from "react";
import "./SearchBox.scss"

type SearchBoxProps = {
    label: string;
    searchTerm: string;
    handleInput: FormEventHandler<HTMLInputElement>;
}

export const SearchBox = ({ label, searchTerm, handleInput}: SearchBoxProps)  => {

    return (
        <div className="search-box">
        <label htmlFor={label} className="search-box__label">Search Box
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
