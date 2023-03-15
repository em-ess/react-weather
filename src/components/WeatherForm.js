function WeatherForm({
    latInput, longInput, handleLatChange, handleLongChange, handleSubmit
}) {
    return (
        <form onSubmit={handleSubmit} className='pb-16 flex gap-x-4'>
            <input className='px-3 py-2 border rounded-lg' type='text' placeholder='Enter latitude' value={latInput} onChange={handleLatChange}/>
            <input className='px-3 py-2 border rounded-lg' type='text' placeholder='Enter longitude' value={longInput} onChange={handleLongChange}/>
            <button className='bg-gray-800 text-white px-3 py-2 rounded-lg' type='submit'>Get Weather</button>
        </form>
    );
}

export default WeatherForm;