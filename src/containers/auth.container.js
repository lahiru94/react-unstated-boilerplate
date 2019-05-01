import { Container } from 'unstated';

import { signIn } from '../api/auth.api';

class AuthContainer extends Container {
	state = {
		user: null,
		isSignedIn: false
	};

	signIn = async () => {
		console.log("auth container")
		try {
			// const res = await signIn();
			this.setState(
				{
					isSignedIn:true
				}
			)
		} catch (error) {
			console.log(error);
		}
	};
}

export default AuthContainer;
