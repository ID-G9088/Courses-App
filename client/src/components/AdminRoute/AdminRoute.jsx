import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { PATH_COURSES } from '../../constants';
import { getUserRole } from '../../selectors';

const AdminRoute = ({ children }) => {
	const userRole = useSelector(getUserRole);
	return (
		<>{userRole === 'admin' ? children : <Navigate to={PATH_COURSES} />}</>
	);
};

export default AdminRoute;
