import '../Styles/index.css'
import '../Styles/Btns.css'

function Btn(){
    return(
        <div className = "container">
            <a href="Original">
                <button className='btn'>
                    <h2>Original</h2>
                </button>
            </a>

            <a href="FanArts">
                <button className='btn'>
                    <h2>Fan Arts</h2>
                </button>
            </a>

            <a href="Animation">
                <button className='btn'>
                    <h2>Animation</h2>
                </button>
            </a>

            <a href = "About">
                <button className='btn'>
                    <h2>About</h2>
                </button>
            </a>

            <a href = "FAQ">
                <button className='btn'>
                    <h2>FAQ</h2>
                </button>
            </a>

            
        </div>
    )
}
export default Btn