import loading from './loading.gif'

const Spinner = () => {
    return (
        <div className='text-center'>
            <img className="my-3" src={loading} alt="loader" />
        </div>
    )
}
export default Spinner
