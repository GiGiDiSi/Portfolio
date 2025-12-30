import React, { useState } from 'react';
import Helmet from 'react-helmet';
import '../Styles/Modal.css'

const ImgGrid = ({ folder }) => {
    let imageModules;

    //for modal
    const [IsOpen, setIsOpen] = useState(false);
    const [ImgSrc, setImgSrc] = useState("");

    const openModal = (source) => {
        setImgSrc(source);
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
        setImgSrc("");
    };

   

    //get images in
    switch (folder) {
        case "Originals":
            imageModules = import.meta.glob('../assets/Originals/*.{png,jpg,jpeg,svg,mp4,webm}', { eager: true });
            break;
        case "FanArts":
            imageModules = import.meta.glob('../assets/FanArts/*.{png,jpg,jpeg,svg,mp4,webm}', { eager: true });
            break;
        case "Animation":
            // Added video formats alongside gifs
            imageModules = import.meta.glob('../assets/Animation/*.{gif,mp4,webm}', { eager: true });
            break;
        default:
            imageModules = {};
            break;
    }

    const mediaList = Object.entries(imageModules).map(([path, module], index) => {
        const src = module.default;
        const isVideo = path.match(/\.(mp4|webm|ogg)$/i);
        const commonClass = "w-full m-[50px] backface-hidden transition-opacity duration-150 cursor-pointer hover:opacity-50";

        if (isVideo) {
            return (
                <video 
                    key={index} 
                    src={src} 
                    className={commonClass} 
                    autoPlay
                    muted  
                    controls
                />
            );
        }

        return (
            
                <img 
                    key={index} 
                    src={src} 
                    alt={`${folder} item ${index + 1}`} 
                    className={commonClass}
                    onClick={() => openModal(src)}
                />
            
        );
    });

    return (
        <>
            <main className="mx-auto w-3/4 md:w-full columns-[275px] gap-x-10">
                <div className="group relative">
                    {mediaList.length > 0 ? mediaList : <p className="text-center">No assets found.</p>}
                </div>
            </main>

            {IsOpen && (
                <div id="imgModal" className="modal" onClick={() => closeModal()}>
                    <span className="close"
                        onClick={() => closeModal()}>
                        &times;
                    </span>
                    <img src={ImgSrc} className="modal-content" id="img01"/>
                </div>
            )}
            
            
        </>
        
    );


}

export default ImgGrid;