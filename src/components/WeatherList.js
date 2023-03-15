
function WeatherList({
    items
}
) {
    const weatherItems = items.map((item, i) => {
        return(
            <div key={i} className='px-3 py-2 border rounded-lg flex justify-between'>
                <div className='font-bold'>
                    {item.lat}, {item.long}
                </div>
                <div className='text-2xl'>
                    {item.temperature}*C
                </div>
            </div>
        );
    });

    return (
        <div>
            {weatherItems}
        </div>
    );
}

export default WeatherList;