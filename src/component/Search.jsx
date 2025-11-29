import React, { useEffect, useState } from 'react';

const Search = ({ placeholder,searchData }) => {
    const [search, setSearch] = useState('');
    const [debouncedValue, setDebouncedValue] = useState('');
    useEffect(()=>{
        const timer = setTimeout(()=>{
            setDebouncedValue(search);
        },500);
        return ()=>clearTimeout(timer);
    },[search])

    useEffect(() => {
        if (debouncedValue !== "") {
            searchData(debouncedValue);
        }
    }, [debouncedValue]);


    const onChangeHandler = (e) => {
        setSearch(e.target.value);
    };

    return (
        <div className="px-4 py-3 bg-surface-light dark:bg-surface-dark">
            <label className="flex flex-col min-w-40 h-14 w-full">
                <div className="flex w-full flex-1 items-stretch rounded-lg h-full">

                    <div className="text-subtext-light dark:text-subtext-dark flex border-none bg-background-light dark:bg-background-dark items-center justify-center pl-4 rounded-l-lg border-r-0">
                        <span className="material-symbols-outlined">search</span>
                    </div>

                    <input
                        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-light dark:text-text-dark focus:outline-0 focus:ring-0 border-none bg-background-light dark:bg-background-dark px-4 rounded-l-none pl-2 text-base font-normal leading-normal"
                        placeholder={placeholder}
                        value={search}
                        onChange={onChangeHandler}
                    />
                </div>
            </label>
        </div>
    );
};

export default Search;
