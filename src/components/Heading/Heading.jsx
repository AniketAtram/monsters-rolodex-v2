import './Heading.css';
function Heading(props) {

    let { title } = props;
    return (
        <div className='title-container'>
            <h1>{title}</h1>
        </div>
    );
};


export default Heading;
