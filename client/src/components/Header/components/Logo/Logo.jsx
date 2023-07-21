import { useNavigate } from 'react-router-dom';

import logo from '../../../../resources/Header/logo.png';
import './logo.scss';

export const Logo = () => {
	const navigate = useNavigate();
	return (
		<img className='logo' src={logo} alt='Logo' onClick={() => navigate('/')} />
	);
};
