import React, { useState } from 'react';
import AppTopBar from './AppTopBar';
import SearchBar from './SearchBar';
import MemberTable from './MemberTable';
import jsonData from './MonthlyTransactionData.json'; 
const ITEMS_PER_PAGE = 10;
export default function MonthlyTransaction({navigation}) {

    const [filterName, setFilterName] = useState('');
    const [data, setData] = useState(jsonData);
    const [currentPage, setCurrentPage] = useState(1);
  
    const handleSearch = (text) => {
      
      setFilterName(text); // Update the filterName state
    };
  
    const filteredData = filterData(data);
    function filterData(data) {
      const filteredData= data.filter((item) => item.name.toLowerCase().includes(filterName.toLowerCase()));
      const getTotalPages =  Math.ceil(filteredData.length / ITEMS_PER_PAGE);
      if(getTotalPages < currentPage){
        setCurrentPage(1);
      }
      return filteredData;
    }
    const updateData = (updatedData) => {
        setData(updatedData); // Update the data in the parent component
    };
    const updateCurrentPage = (updatedPageNo) => {
      setCurrentPage(updatedPageNo); // Update the data in the parent component
    };
    return (
        <>
          <AppTopBar navigation={navigation}/>
          <SearchBar onSearch={handleSearch}/>
          <MemberTable data={data} filteredData={filteredData} onUpdateData={updateData} onUpdateCurrentPage={updateCurrentPage} pageNum={currentPage}/>
        </>

    
    );
  }