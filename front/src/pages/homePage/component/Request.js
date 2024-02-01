import "./Request.css";
import sampleImg from "../../../assets/homePage/sample.png";
import { useMock } from '../../../components/MockContext';
import { useNavigate } from 'react-router-dom';

function Request() {
    const { mockDate } = useMock();
    const navigate = useNavigate();

    const Goto = (taskId) => {
        navigate(`/detailPage/${taskId}`);
    }

    return(
        <div className="request">
            {mockDate.map((request) => (
            <div key={request.taskId} onClick={() => Goto(request.taskId)}>
            <div className="contents">
                <div className="title">
                    <h2>{request.title}</h2>
                    <div className="isSolved">{request.taskStatus}</div>
                </div>

                <div className="detail">{request.content}</div>

                <div className="category">{request.category}</div>
            </div>
            
            <div className="price"><h2>{request.price || request.requestFee}</h2></div>
            <div className="img"><img src={sampleImg}/></div>
            </div>
            ))}
        </div>
    );
}

export default Request;