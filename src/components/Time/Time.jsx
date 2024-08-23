import './Time.css';

function Time (props) {
    const {duration} = props;
    if (!duration){
        return null
    }

    return(
        <div className='film-time'>
            <p className='time-text'>{duration}:00</p>
            <svg className='time-img' width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 0V2H12V0H4V2H2V0H0V18H2V16H4V18H12V16H14V18H16V0H14ZM4 14H2V12H4V14ZM4 10H2V8H4V10ZM4 6H2V4H4V6ZM10 16H6V2H10V16ZM14 14H12V12H14V14ZM14 10H12V8H14V10ZM14 6H12V4H14V6Z" fill="#FA2828" fill-opacity="0.98"/>
            </svg>
        </div>
    );
};

export default Time;