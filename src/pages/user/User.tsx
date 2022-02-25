import * as React from 'react';
import { useParams } from 'react-router-dom';

interface IUserProps {
}

const User: React.FunctionComponent<IUserProps> = (props) => {
    const { id } = useParams();

    return (
        <div className='user'>
            {id}
        </div>
    );
};

export default User;
