import { Dimensions as RNDimensions } from 'react-native';

const Dimensions = {
	screenWidth: RNDimensions.get('window').width,
	screenHeight: RNDimensions.get('window').height,
};

export default Dimensions;
