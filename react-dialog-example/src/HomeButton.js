import { useNavigate } from 'react-router-dom';

function HomeButton() {
    const navigate = useNavigate();

    function handleClick() {
        navigate('/')
    }

    return (
        <button onClick={handleClick}>
            Return to Home
        </button>
    )
}

export default HomeButton;