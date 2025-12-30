import Header from '../Components/Header.jsx'
import Footer from '../Components/Footer.jsx'
import Title from '../Components/Title.jsx'
import FadeInDiv from "../Components/FadeIn.jsx";
import {useState} from 'react'
import '../Styles/index.css'
import '../Styles/Accordion.css'
//import '../Styles/imGrid.css'

function FAQ() {

    const [selected, setselected] = useState(null);
    const toggle = (i) => {
        if(selected === i){
            return setselected(null);
        }

        setselected(i);
    }
    
  return(
    <>
    <FadeInDiv>
          <div>
                <title>GiGiDiSi's Portfolio - FAQs</title>
                
                <Title title="Frequently Asked Questions"/>
                <Header/>
                    <div className='wrapper'>
                        <div className='Accordion'>
                            {data.map((item, i)=> (
                                <div className='item'>
                                    <div className='title' onClick={() => toggle(i)}>
                                        <h2>{item.question}</h2>
                                        <h2>{selected === i ? '-' : '+' }</h2>
                                    </div>
                                    <div className={selected === i ? 'answer show' : 'answer' }>
                                        <ul>
                                            {Array.isArray(item.answer) ? (
                                                item.answer.map((subItem, index) => <li key={index}>{subItem}</li>)
                                            ) : (
                                                <li>{item.answer}</li> // Fallback for single strings
                                            )}

                                        </ul>          
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                <Footer/>
          </div>
          </FadeInDiv>
    </>
  );
}

const data = [
    {
        question: 'Are you open for commissions?', 
        answer: ['No.', 
                'Even though I have plans to, as of now I don’t feel confident doing commissions for others.', 
                'Plus i don’t feel like monetizing my hobbies yet. Maybe in the a few years time I would be open for commissions. ']
    },
    {
        question: 'Want to art collab?', 
        answer:'Feel free to go to my socials and lets talk about it. '
    },
    {
        question: 'Can I repost your works?', 
        answer: ['Go ahead, but please credit me in your reposts.',
                'It would be better to repost my works in sites i’m not actively posting on such as Facebook, reddit, Pinterest.',
                'If you want to repost in say Bluesky or Tumblr, just reblog them.'
        ]
    },
    {
        question: 'Can I use your works?', 
        answer:['Please ask me directly through DMs or Emails and inform me what you are using them for.',
                'But if it is for headers or profile pictures, go ahead as long there’s credit on your bio or whatever. ',
                'DON’T USE MY WORKS FOR YOUR MONETARY GAIN'
        ]
    },
    {
        question: 'Why are you inactive in Pixiv and DeviantArt?', 
        answer:['I just don’t feel like it is worth to post my works there anymore',
                'I could repost some of my more recent works there.'
        ]
    },
    {
        question: 'What software and setup do you use?', 
        answer:['Krita for Illustrations, pixel art and quick animations',
                'Huion Insiproy H1060p',
                'Macbook Air'
        ]
    },
    {
        question: 'Why the self-made Portfolio?', 
        answer:'I think its cool to make one'
    },
]

export default FAQ
