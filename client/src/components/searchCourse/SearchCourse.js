import React,{useState,useEffect} from "react";
import Dropdown from "../dropdown/dropdown";
import styled from "styled-components";

import {
    Container,
    Row,
    Col1,
    Col2
} from "../../containers/rootContainers";

import programs from "../../data/programs";
import levels from "../../data/levels";

const SearchCourse = (props) => {

    const [searchVal, setSearchVal] = useState("");
    const [progArray, setProgArray] = useState([]);
    const [levelArray, setLevelArray] = useState([]);

    function handleSearch(e){
        setSearchVal(e.target.value);
    };

    const handleProgChange = (progs) => {
        setProgArray(progs);
    };

    const handleLevelChange = (lvls) => {
        setLevelArray(lvls);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const searchParams = [];
        const levelParams = [];

        if (progArray.length>0){
            progArray.forEach((prog)=>{
                searchParams.push(prog.value);
            });
        }
        if (levelArray.length>0){
            levelArray.forEach((lvl)=>{
                levelParams.push(lvl.value);
            });
        }
        
        const keywordParams = [];
        if (searchVal.length>0){
            const keywords = searchVal.split(",");
            if (keywords.length>0){
                keywords.forEach((word)=>{
                    keywordParams.push(word);
                });
            }
        }
        
        props.onSubmit(searchParams,levelParams,keywordParams);
    }

    return (
        <>
        <SearchContainer>
            <Row>
                <DropdownColumn>
                    <Dropdown 
                        label="Program"
                        singleSelect={false}
                        options = {programs}
                        handleProgChange={handleProgChange}
                    />
                </DropdownColumn>
                <DropdownColumn>
                    <Dropdown 
                        label="Level"
                        singleSelect={true}
                        options = {levels}
                        handleLevelChange={handleLevelChange}
                    />
                </DropdownColumn>
            </Row>
            <Row>
                <InputColumn>
                    <SearchBar 
                        type="text" 
                        placeholder="Keywords (seperated by commas)"
                        onChange={handleSearch}
                        value={searchVal}
                        />
                </InputColumn>
            </Row>
            <Row>
                <SubmitButton type="submit" value="Search" onClick={handleSubmit}/>
            </Row>
            
        </SearchContainer> 
        <div>
            <CourseRequestPara>Don't see the course you are looking for? <a href="/course-request">Submit a request here</a> and get it approved immediately!</CourseRequestPara>
        </div>
    </>
    )
}

const CourseRequestPara = styled.p`
    text-align: center;
`;
const SearchContainer = styled(Container)`
    display: grid;
    align-items: center;
    padding: 20px 0;
    height: 200px;
    background: #E8E1EA;
    margin-bottom: 20px;
`;

const DropdownColumn = styled(Col2)`
    display: flex;
    justify-content: center;
`;

const InputColumn = styled(Col1)`
    display: flex;
    justify-content: center;
`;

const SearchBar = styled.input`
    width: 80%;
    height: 30px;
`;

const SubmitButton = styled.input`
    background-color: #57068c;
    border: none;
    color: white;
    padding: 16px 32px;
    text-decoration: none;
    margin: 4px 2px;
    cursor: pointer;
    margin: 0 auto;
`;

export default SearchCourse;