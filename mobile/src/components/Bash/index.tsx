import React from 'react';
import { View } from 'react-native';
import { Command } from '../Command';

import { Arrow, BashContent, Body, Circle, Header } from './styles';

interface IOption {
  name: string,
  type: string,
  hexadecimal_color: string,
  created_at: Date
}

interface IBashProps {
  options: IOption[]
}

export function Bash({ options }: IBashProps) {

  return (
    <View>
      <Header>
    	<Circle style={{ marginLeft: 16, backgroundColor: '#FF5A54' }} />
        <Circle style={{ backgroundColor: '#E5BF2F' }} />
        <Circle style={{ backgroundColor: '#51C22D' }} />
      </Header>

      <Body>
        <Arrow> {'>'} </Arrow>

        <BashContent>
          {options.map((line, index) => (
            <Command key={index} commandName={line.name} />
          ))}
        </BashContent>
      </Body>
    </View>
  )
}
