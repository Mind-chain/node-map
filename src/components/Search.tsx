import React, { useState } from 'react';
import { Select, Box, Heading } from '@chakra-ui/react';

export interface Props {
  ipInfo: (ip: string) => void;
}

const Search = (props: Props) => {
  const [selectedIP, setSelectedIP] = useState<string>(''); // Track the selected IP

  // List of predefined IPs with names
  const predefinedIPs = [
    { ip: '45.76.129.38', name: 'Server 1' },
    { ip: '104.238.173.226', name: 'Server 2' },
    { ip: '216.155.135.137', name: 'Server 3' },
    // ... (add other IPs without the port)
  ];

  const onIpChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = event.target.value;
    setSelectedIP(selected);
    if (isValidIP(selected)) {
      props.ipInfo(selected);
    }
  };

  return (
    <Box>
      <Heading as="h3" mb={4}>
        Predefined IPs
      </Heading>
      <Select value={selectedIP} onChange={onIpChange} placeholder="Select an IP">
        {predefinedIPs.map(({ ip, name }, index) => (
          <option key={index} value={ip} disabled={!isValidIP(ip)}>
            {name}
          </option>
        ))}
      </Select>
    </Box>
  );
};

export default Search;

export const isValidIP = (str: string): boolean => {
  // returns true if ip address is valid
  const ipRegex = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
  return ipRegex.test(str);
};
