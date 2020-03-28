import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Text, useApp, Box } from 'ink';
import TextInput from 'ink-text-input';

// Hello world command
const Hello = ({ name }) => {
  const { exit } = useApp();
  const [input, setInput] = useState('');

  const onChange = (data) => {
    setInput(data);
  };
  const onSubmit = () => {
    console.info(input);
    exit();
  };

  return (
    <>
      <Box>
        <Box marginRight={1}>
          <Text>Hello, please type your name:</Text>
        </Box>
        <TextInput
          value={input}
          onChange={onChange}
          onSubmit={onSubmit}
        />
      </Box>
    </>
  );
};

Hello.propTypes = {
  // / Name of the person to greet
  name: PropTypes.string.isRequired
};

export default Hello;
