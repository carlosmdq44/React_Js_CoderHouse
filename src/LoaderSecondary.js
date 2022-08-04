import MoonLoader from 'react-spinners/MoonLoader'

const LoaderSecondary = () => {

    return (
        <>
            <div className="loaderSecondaryContainerMobile">
                <MoonLoader color='#dc3545' size={150} />
            </div>
            <div className="loaderSecondaryContainer">
                <MoonLoader color='#dc3545'  size={150} />
            </div>
        </>
    )
}

export default LoaderSecondary