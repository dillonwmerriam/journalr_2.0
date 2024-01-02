import './Entries.scss';

export default function Entries() {
    var entries = [
    {entry: "test 1", date: "1/1/24"}, 
    {entry: "TEST 2", date: "1/1/24"}, 
    {entry: "33333333333333", date: "1/1/24"}
    ]

    return(
        <div className='entries'>
            {entries.map(item => (
            <div className='entries'>
                <div dangerouslySetInnerHTML={{__html:item.entry}}></div>
            </div>
            )
            )}
        </div>
    )
}