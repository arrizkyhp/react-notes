import { MdSearch } from 'react-icons/md';

const Search = ({ handleSearchNote }) => {


    return (
        <div className="search">
            <MdSearch className="search-icons" size="1.3em" />
            <input
                type='text'
                placeholder='type to search...'
                onChange={(e) => {
                    const search = e.target.value.toLowerCase();
                    handleSearchNote(search);
                }}
            />
        </div>
     );
}

export default Search;