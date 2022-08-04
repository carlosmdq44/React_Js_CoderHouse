import PacmanLoader from 'react-spinners/PacmanLoader';

const Loader = () => {

    return (
        <>
            <div className="loaderContainerMobile">
                <PacmanLoader color='#dc3545' size={60} />
            </div>
            <div className="loaderContainer">
                <PacmanLoader color='#dc3545' size={150} />
            </div>
        </>
    )
}

export default Loader;