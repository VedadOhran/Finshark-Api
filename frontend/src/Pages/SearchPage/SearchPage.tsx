import React, { ChangeEvent, SyntheticEvent, useState } from 'react';
import ListPorftolio from '../../Components/ListPortfolio/ListPorftolio';
import CardList from '../../Components/CardList/CardList';
import Search from '../../Components/Search/Search';
import { CompanySearch } from '../../company';
import { searchCompanies } from '../../api';

interface Props {}

const SearchPage = (props: Props) => {
  const [search, setSearch] = useState<string>('');
  const [portfolioValues, setPortfolioValues] = useState<string[]>([]);
  const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
  const [serverError, setServerError] = useState<string>();

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value);
     
  };
  
  const onPortfolioCreate = (e: any) => {
    e.preventDefault();
    const exists = portfolioValues.find((value)=> value === e.target[0].value);
    if(exists) return;
    const updatedPorftolio = [...portfolioValues, e.target[0].value];
    setPortfolioValues(updatedPorftolio);
  }

  const onPortfolioDelete = (e: any) => {
   // e.prevenetDefault();
    const removed = portfolioValues.filter((value) => {
    return value !==  e.target[0].value;
    });
    setPortfolioValues(removed);
  };

  const onSearchSubmit = async (e: SyntheticEvent) => {
      e.preventDefault();
      const result = await searchCompanies(search);

      if(typeof result === 'string') {
        setServerError(result);
      }
      else if(Array.isArray(result.data)) {
        setSearchResult(result.data);
      }
    }
  return (
    <>
      <Search
       onSearchSubmit={onSearchSubmit}
        search={search}
         handleSearchChange={handleSearchChange} />
         <ListPorftolio portfolioValues={portfolioValues} onPortfolioDelete={onPortfolioDelete} />
      <CardList
       searchResults={searchResult}
        onPortfolioCreate={onPortfolioCreate} />
      {serverError && <h1>{serverError}</h1>}
    </>
  )
}

export default SearchPage;