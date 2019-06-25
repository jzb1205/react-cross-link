import React from 'react'
import { MainMenu } from "../menu/menu";

export const Template = (props) => (
  <div className = 'page'>
    <MainMenu></MainMenu>
    {props.children}
  </div>
)