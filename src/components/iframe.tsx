import React from 'react';

const Iframe = (source) => {

    if (!source) {
        return <div>Loading...</div>;
    }

    const src = source;
    return (
        // basic bootstrap classes. you can change with yours.
        <div className="col-md-12">
            <div className="emdeb-responsive">
                <iframe
                    src="https://player.twitch.tv/?video=v40464143&parent=streamernews.example.com&autoplay=false"
                    height="720"
                    width="1280"
                    allowfullscreen="true">
                </iframe>
            </div>
        </div>
    );
};

export default Iframe;