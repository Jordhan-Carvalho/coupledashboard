import React from "react";
import styled from "styled-components";

type ButtonProps = {
  secondary?: boolean;
  text: string;
  clickFunc?: () => void;
};

export default function Button(props: ButtonProps) {
  return (
    <ButtonContainer
      onClick={props.clickFunc}
      secondary={props.secondary || false}
    >
      <Paragraph>{props.text}</Paragraph>
    </ButtonContainer>
  );
}

type BtnProps = {
  secondary: boolean;
};

const ButtonContainer = styled.button`
  width: 150px;
  height: 45px;
  border-radius: 20px;
  outline: none;
  border: ${(props: BtnProps) =>
    props.secondary ? "1px solid #66438F" : "none"};
  background: ${(props: BtnProps) =>
    props.secondary ? "transparent" : "#a99de5"};
  box-shadow: ${(props: BtnProps) =>
    props.secondary ? "" : "inset 2px 4px 4px rgba(0, 0, 0, 0.25)"};
  cursor: pointer;
  color: ${(props: BtnProps) => (props.secondary ? "#66438F" : "white")}; ;
`;

const Paragraph = styled.p``;
