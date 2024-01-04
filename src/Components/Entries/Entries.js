import './Entries.scss';

export default function Entries() {
    var date = new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"long", day:"numeric"}) 
    var entries = [
    {entry: "test 1", date: "1/1/24"}, 
    {entry: "TEST 2", date: "1/1/24"}, 
    {entry: "33333333333333", date: "1/1/24"}
    ]

    return(
      <div className='container'>
        <div className='date'>
          <span>{date}</span>
        </div>
        <div className='entries'>
            {entries.map(item => (
            <div className='entry'>
                <div dangerouslySetInnerHTML={{__html:item.entry}}></div>
            </div>
            )
            )}
        </div>
      </div>
    )
}