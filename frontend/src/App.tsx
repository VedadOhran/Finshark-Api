import { ChangeEvent, SyntheticEvent, useState } from 'react';
import './App.css';
import CardList from './Components/CardList/CardList';
import Search from './Components/Search/Search';
import { CompanySearch } from './company';
import { searchCompanies } from './api';
import ListPorftolio from './Components/ListPortfolio/ListPorftolio';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';

function App() {
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

  };
  return (
    <div className='App'>
      <Navbar />
      <Search
       onSearchSubmit={onSearchSubmit}
        search={search}
         handleSearchChange={handleSearchChange} />
         <ListPorftolio portfolioValues={portfolioValues} onPortfolioDelete={onPortfolioDelete} />
      <CardList
       searchResults={searchResult}
        onPortfolioCreate={onPortfolioCreate} />
      {serverError && <h1>{serverError}</h1>}
    </div>
  );
}

export default App;
