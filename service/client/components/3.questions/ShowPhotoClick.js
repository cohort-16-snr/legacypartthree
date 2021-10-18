import React from 'react'

export default function ShowPhotoClick(props) {
    return (
        <div className="photoad h-screen">
            <div onClick={() => props.handle()} className="insidead bg-gray-400 bg-opacity-60  h-screen w-3/4 ml-16  ">
                <div className="relative">
                    <img className="showphoto w-screen h-screen pl-20" src="https://img-19.ccm2.net/cI8qqj-finfDcmx6jMK6Vr-krEw=/1500x/smart/b829396acc244fd484c5ddcdcb2b08f3/ccmcms-commentcamarche/20494859.jpg" alt="image" />
                </div>
            </div>
        </div>
    )
}
