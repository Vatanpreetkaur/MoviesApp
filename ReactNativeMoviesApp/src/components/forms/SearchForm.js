

import {
  FormControl,
  FormControlLabelText,
  VStack,
  Input,
  InputField,
  Button,
  InputIcon,
  Icon,
  SearchIcon,
  HStack,
  Select,
  SelectTrigger,
  SelectInput,
  SelectIcon,
  SelectBackdrop,
  ChevronDownIcon,
  SelectPortal,
  SelectContent,
  SelectDragIndicatorWrapper,
  SelectDragIndicator,
  SelectItem,
  ButtonText,
  ButtonIcon
} from '@gluestack-ui/themed';
import { StyleSheet, Text } from 'react-native';

const SearchForm = ({ onInputChange, onSubmit, searchType, setSearchType }) => {
  return (
    <VStack space={2} width='100%' p={10} my={10}>
      <FormControl isRequired mx={30}>
        <FormControl.Label fontSize='sm'>
          <FormControlLabelText>Search Movie/TV Show Name</FormControlLabelText>
        </FormControl.Label>
        <Input mr={10} px={5} style={styles.inputStyles}>
          <InputIcon>
            <Icon as={SearchIcon} size='sm' />
          </InputIcon>
          <InputField type='text' placeholder='i.e James Bond' onChangeText={onInputChange} />
        </Input>
      </FormControl>

      <FormControl isRequired mx={30} my={10}>
        <FormControl.Label fontSize='sm'>
          <FormControlLabelText>Choose Search Type</FormControlLabelText>
        </FormControl.Label>
        <HStack>
          <Select width='60%' mr={5} value={searchType} onValueChange={setSearchType}>
            <SelectTrigger variant="outline" size="md">
              <SelectInput placeholder="Select option"
              value={searchType} />
              <SelectIcon mr="$3">
                <Icon as={ChevronDownIcon} />
              </SelectIcon>
            </SelectTrigger>
            <SelectPortal>
              <SelectBackdrop />
              <SelectContent>
                <SelectDragIndicatorWrapper>
                  <SelectDragIndicator />
                </SelectDragIndicatorWrapper>
                <SelectItem label={<Text>Movie</Text>} value="movie" />
                <SelectItem label={<Text>Multi</Text>} value="multi" />
                <SelectItem label={<Text>TV</Text>} value="tv" />
              </SelectContent>
            </SelectPortal>
          </Select>
          <Button onPress={onSubmit} size='md' variant='solid' action='primary'>
            <ButtonIcon as={SearchIcon} />
            <ButtonText>Search</ButtonText>
          </Button>
        </HStack>
      </FormControl>
    </VStack>
  );
};

const styles = StyleSheet.create({
  inputStyles: {
    alignItems: 'center',
    justifyContent: 'start',
  },
});

export default SearchForm;

