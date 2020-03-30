import React, { useState } from 'react';
import { StyleSheet, View, Image, Dimensions, TextInput, Button, Text } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'flex-start',
		flexDirection: 'column'
	},
	bodytitlepicture: {
		flex: 1
	},
	body: {
		flex: 100,
		flexWrap: 'wrap',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center'
	},
	bodyobject: {
		borderColor: 'gray',
		borderRadius: 5,
		borderWidth: 2,
		width: width - 20,
		height: 50,
		alignItems: 'flex-start',
		justifyContent: 'center',
		padding: 10,
		flexWrap: 'wrap'
	},

	bodybutton: {
		margin: 5,
		width: width - 20,
		height: 45,
		backgroundColor: 'dodgerblue',
		borderRadius: 5,
		justifyContent: 'center',
		alignItems: 'center'
	}
});

export default function App() {
	const [ password, setPassword ] = useState('');
	const [ message, setMessage ] = useState('');
	const [ messageColor, setMessageColor ] = useState('red');

	const onPressLogin = () => {
		if (password === '1234') {
			setMessage('登入成功');
			setMessageColor('green');
		} else {
			setMessage('登入失敗');
			setMessageColor('red');
		}
	};
	return (
		<View style={styles.container}>
			<View style={styles.bodytitlepicture}>
				<Image
					style={{ width: width, height: 300, resizeMode: 'cover' }}
					source={{ uri: 'https://piglife.tw/wp-content/uploads/2017/10/facebook.jpg' }}
				/>
			</View>
			<View style={styles.body}>
				<TextInput
					id='account'
					placeholder='手機號碼或電子郵件地址'
					style={styles.bodyobject}
					keyboardType='twitter'
					autoFocus={true}
				/>
				<TextInput
					placeholder='密碼'
					style={styles.bodyobject}
					keyboardType='email-address'
					onChangeText={(value) => setPassword(value)}
					secureTextEntry={true}
					maxLength='6'
				>
					{password}
				</TextInput>
				<Text style={{ padding: 3, color: messageColor }}>{message}</Text>
				<View style={styles.bodybutton}>
					<Button title='登入' color='azure' onPress={() => onPressLogin()} />
				</View>
			</View>
		</View>
	);
}
