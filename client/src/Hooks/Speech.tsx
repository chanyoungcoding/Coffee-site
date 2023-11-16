import { useNavigate } from "react-router-dom";
import useSpeechRecognition from "./useSpeechRecognitionHook";
import React, { ChangeEvent, useState } from "react";
import styled from "styled-components";

import {  BsSearch, BsArrowRight, BsFillVolumeMuteFill, BsFillVolumeDownFill, BsFillVolumeUpFill  } from "react-icons/bs";

const InputIntro = styled.p`
  margin: 40px 0px 20px;
`
const TalkIntro = styled.p`
  margin: 10px 0px;
  font-size: 14px !important;
`
const TalkButtonIntro = styled.p`
  display: flex;
  align-items: center;
  span {
    display: inline-block;
    margin: 0px 10px;
  }
`

const InputContainer = styled.div`
  display: flex;
  align-items: center;
`
const TalkContainer = styled.div`
  display: flex;
  align-items: center;
`
const InputBox = styled.input`
  width: 270px;
  padding: 10px;
  border: 1px solid #9B7150;
  border-right: none;
  border-radius: 5px 0px 0px 5px;
  outline: none;
`
const SearchButton = styled.button`
  padding: 5.5px 6px 6.5px;
  background-color: white;
  border: 1px solid #9B7150;
  border-left: none;
  border-radius: 0px 5px 5px 0px;
  outline: none;
  cursor: pointer;
`
const TalkButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px 5px;
  padding: 7px 10px;
  background-color: white;
  border: 1px solid #9B7150;
  border-radius: 10px;
  outline: none;
  cursor: pointer;
`

const Speech:React.FC = () => {

  const [value, setValue] = useState('');

  const navigate = useNavigate();

  const {
    text,
    startListening,
    stopListening,
    isListening,
    hasRecognitionSupport
  } = useSpeechRecognition();

  if(text) {
    navigate(`/menuDetail/${text}`)
  }

  const onChange = (e:ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value)
  }
  const onKeyPress = (e:React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onClick();
    }
  };
  const onClick = () => {
    navigate(`/menuDetail/${value}`)
  }

  return ( 
    <>
      {hasRecognitionSupport ? (
        <>
        <div>
          <InputIntro>찾고 싶은 커피 이름을 입력해 보세요!!</InputIntro>
          <InputContainer>
            <InputBox 
              type="text" 
              value={value} 
              onChange={onChange}
              onKeyDown={onKeyPress}
              placeholder="카페 라떼"
            />
            <SearchButton onClick={onClick}>
              <BsSearch size="20"/>
            </SearchButton>
          </InputContainer>
          <TalkIntro>찾고 싶은 커피를 말해보세요.</TalkIntro>
          <TalkContainer>
            {isListening ? "듣고있는중입니다.." : <TalkButtonIntro>버튼을 클릭해 보세요<span><BsArrowRight/></span></TalkButtonIntro>}
            <TalkButton onClick={startListening}>
              {isListening ? <BsFillVolumeUpFill size="20"/> : <BsFillVolumeDownFill size="20"/>}
            </TalkButton>
            <TalkButton onClick={stopListening}><BsFillVolumeMuteFill size="20"/></TalkButton>
          </TalkContainer>
        {text}
        </div>
        </>
      ) : (<h1>your no Speech</h1>)}
    </>
  );
}

export default Speech;

