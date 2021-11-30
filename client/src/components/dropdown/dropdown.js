import React,{useState,useEffect} from "react";
import { MultiSelect } from 'react-multi-select-component';
import css from "./dropdown.module.css";
import styled from "styled-components";

const Dropdown = (props) => {
    const [selectedValues, setSelectedValues] = useState([]);
    
    useEffect(() => {
        if (selectedValues.length < 2 && props.singleSelect===true) {
            props.handleLevelChange(selectedValues);
        }else if (selectedValues.length > 1 && props.singleSelect===true){
            setSelectedValues([selectedValues[selectedValues.length - 1]]);
        }
        else if (props.label === "Program"){
            props.handleProgChange(selectedValues);
        }
    }, [selectedValues]);

    return (
        <>  
            <DropdownLabel>{props.label}</DropdownLabel>
            <MultiSelect
            className={css.multiselectRoot}
            labelledBy={props.label}
            hasSelectAll={false}
            options={props.options}
            value={selectedValues}
            onChange={setSelectedValues}
            labelledBy="Select"
            />
        </>
    )

}

const DropdownLabel = styled.span`
    align-self: center;
    font-size: 20px;
    color: grey;
    padding: 0 10px 0 10px;
`;

export default Dropdown;