import useGetSprints from "./useGetSprints";
import './style.css';
import { DoneOutlineRounded } from "@mui/icons-material";

function Home() {
    // const { sprints, isLoading, error } = useGetSprints();
    
    return (
        <>
        <h1>Sprints</h1>
        <div className="sprint-list">
            <div className='sprint-card'>
                <div className='sprint-name'>Nome da sprint</div>
                <div className='progress-bar'>
                    <div className='progress'></div>
                </div>
                <div className='progress-labels'>
                    <div className='label'>Progress</div>
                    <div>60%</div>
                </div>
                <div className='due-date'>
                    <div>Due in: 3 days</div>
                </div>
                <div className='done-container'>
                    <div className='done'>
                        <DoneOutlineRounded fontSize="inherit" color="disabled" />
                    </div>
                    <div>2/8</div>
                </div>
            </div>
        </div>
        </> 
    );
}

export default Home;
