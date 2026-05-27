import React from 'react'
import './style.css'
import hero from '../assets/hero.png'
function Mid() {
    return (
        <>
            <div className="w-full text-white">
                {/* TOP NAV */}
                <div className='fixed top-0 w-full md:w-[78%] lg:w-[50%] xl:w-[52%] z-20 bg-black/70 backdrop-blur-md border border-zinc-700'>
                    <div className='h-14 p-4 flex justify-evenly '>
                        <div className=' hover:bg-zinc-900'>
                            <div className='font-bold relative after:content-[""] after:absolute after:left-0 after:-bottom-2 after:w-full after:h-1 after:bg-blue-500 after:rounded-full '>
                                For you
                            </div>
                        </div>

                        <div className='hover:bg-zinc-900'>
                            <div>Following</div>
                        </div>
                    </div>
                </div>

                {/*USER POST */}
                <div className='pt-14'>
                    <div className='border border-zinc-700'>
                        <div className='flex items-center gap-5 m-5'>
                            <img src={hero} alt="User" className='w-12 h-12 rounded-full' />
                            <span className='text-zinc-500 text-xl '>What's happening?</span>
                        </div>
                        <div className='m-4 flex items-center justify-between'>
                            <div className=' flex gap-3 '>
                                <span className='w-7 h-7 flex justify-center items-center rounded-full hover:bg-zinc-900 hover:scale-125 transition-all duration-200 ' >
                                    <svg viewBox="0 0 24 24" aria-hidden="true" className="  w-5 invert-40 hover:invert-75 r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1otekoa r-175dae4 r-1cciapn">
                                        <g><path d="M15 7c1.105 0 2 .895 2 2s-.895 2-2 2-2-.895-2-2 .895-2 2-2z">
                                        </path><path clip-rule="evenodd" d="M14.1 2.5c1.103 0 1.991-.001 2.709.058.728.06 1.368.185 1.96.487.941.48 1.707 1.245 2.186 2.185.302.593.428 1.233.487 1.961.059.718.058 1.606.058 2.71V14.1c0 1.103.001 1.991-.058 2.709-.06.728-.185 1.368-.487 1.96-.48.941-1.245 1.707-2.185 2.186-.593.302-1.233.428-1.961.487-.718.059-1.606.058-2.71.058H9.9c-1.103 0-1.991.001-2.709-.058-.728-.06-1.368-.185-1.96-.487-.941-.48-1.707-1.245-2.186-2.185-.302-.593-.428-1.233-.487-1.961-.059-.718-.058-1.606-.058-2.71V9.9c0-1.103-.001-1.991.058-2.709.06-.728.185-1.368.487-1.96.48-.941 1.245-1.707 2.185-2.186.593-.302 1.233-.428 1.961-.487.718-.059 1.606-.058 2.71-.058H14.1zM4.506 15.442c.006.473.017.865.045 1.203.05.606.142.954.276 1.217.288.565.746 1.023 1.31 1.31.264.135.612.228 1.217.277.617.05 1.41.051 2.546.051h4.2c.36 0 .685-.003.981-.005L7.96 12.373l-3.453 3.07zM9.9 4.5c-1.136 0-1.929 0-2.546.05-.605.05-.953.143-1.216.277-.565.288-1.023.746-1.31 1.31-.135.264-.228.612-.277 1.217C4.5 7.971 4.5 8.764 4.5 9.9v2.873l3.54-3.147 9.63 9.63c.07-.026.133-.053.192-.083.565-.288 1.023-.746 1.31-1.31.135-.264.228-.612.277-1.218.05-.616.051-1.409.051-2.545V9.9c0-1.136 0-1.929-.05-2.546-.05-.605-.143-.953-.277-1.216-.288-.565-.746-1.023-1.31-1.31-.264-.135-.612-.228-1.218-.277C16.03 4.5 15.236 4.5 14.1 4.5H9.9z" fill-rule="evenodd"></path></g>
                                    </svg>
                                </span>
                                <span className='w-7 h-7 flex justify-center items-center rounded-full hover:bg-zinc-900 hover:scale-125 transition-all duration-200 ' >
                                    <svg viewBox="0 0 24 24" aria-hidden="true" className="  w-5 invert-40 hover:invert-75 r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1otekoa r-175dae4 r-1cciapn">
                                        <g><path d="M15 7c1.105 0 2 .895 2 2s-.895 2-2 2-2-.895-2-2 .895-2 2-2z">
                                        </path><path clip-rule="evenodd" d="M14.1 2.5c1.103 0 1.991-.001 2.709.058.728.06 1.368.185 1.96.487.941.48 1.707 1.245 2.186 2.185.302.593.428 1.233.487 1.961.059.718.058 1.606.058 2.71V14.1c0 1.103.001 1.991-.058 2.709-.06.728-.185 1.368-.487 1.96-.48.941-1.245 1.707-2.185 2.186-.593.302-1.233.428-1.961.487-.718.059-1.606.058-2.71.058H9.9c-1.103 0-1.991.001-2.709-.058-.728-.06-1.368-.185-1.96-.487-.941-.48-1.707-1.245-2.186-2.185-.302-.593-.428-1.233-.487-1.961-.059-.718-.058-1.606-.058-2.71V9.9c0-1.103-.001-1.991.058-2.709.06-.728.185-1.368.487-1.96.48-.941 1.245-1.707 2.185-2.186.593-.302 1.233-.428 1.961-.487.718-.059 1.606-.058 2.71-.058H14.1zM4.506 15.442c.006.473.017.865.045 1.203.05.606.142.954.276 1.217.288.565.746 1.023 1.31 1.31.264.135.612.228 1.217.277.617.05 1.41.051 2.546.051h4.2c.36 0 .685-.003.981-.005L7.96 12.373l-3.453 3.07zM9.9 4.5c-1.136 0-1.929 0-2.546.05-.605.05-.953.143-1.216.277-.565.288-1.023.746-1.31 1.31-.135.264-.228.612-.277 1.217C4.5 7.971 4.5 8.764 4.5 9.9v2.873l3.54-3.147 9.63 9.63c.07-.026.133-.053.192-.083.565-.288 1.023-.746 1.31-1.31.135-.264.228-.612.277-1.218.05-.616.051-1.409.051-2.545V9.9c0-1.136 0-1.929-.05-2.546-.05-.605-.143-.953-.277-1.216-.288-.565-.746-1.023-1.31-1.31-.264-.135-.612-.228-1.218-.277C16.03 4.5 15.236 4.5 14.1 4.5H9.9z" fill-rule="evenodd"></path></g>
                                    </svg>
                                </span>
                                <span className='w-7 h-7 flex justify-center items-center rounded-full hover:bg-zinc-900 hover:scale-125 transition-all duration-200 ' >
                                    <svg viewBox="0 0 24 24" aria-hidden="true" className="  w-5 invert-40 hover:invert-75 r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1otekoa r-175dae4 r-1cciapn">
                                        <g><path d="M15 7c1.105 0 2 .895 2 2s-.895 2-2 2-2-.895-2-2 .895-2 2-2z">
                                        </path><path clip-rule="evenodd" d="M14.1 2.5c1.103 0 1.991-.001 2.709.058.728.06 1.368.185 1.96.487.941.48 1.707 1.245 2.186 2.185.302.593.428 1.233.487 1.961.059.718.058 1.606.058 2.71V14.1c0 1.103.001 1.991-.058 2.709-.06.728-.185 1.368-.487 1.96-.48.941-1.245 1.707-2.185 2.186-.593.302-1.233.428-1.961.487-.718.059-1.606.058-2.71.058H9.9c-1.103 0-1.991.001-2.709-.058-.728-.06-1.368-.185-1.96-.487-.941-.48-1.707-1.245-2.186-2.185-.302-.593-.428-1.233-.487-1.961-.059-.718-.058-1.606-.058-2.71V9.9c0-1.103-.001-1.991.058-2.709.06-.728.185-1.368.487-1.96.48-.941 1.245-1.707 2.185-2.186.593-.302 1.233-.428 1.961-.487.718-.059 1.606-.058 2.71-.058H14.1zM4.506 15.442c.006.473.017.865.045 1.203.05.606.142.954.276 1.217.288.565.746 1.023 1.31 1.31.264.135.612.228 1.217.277.617.05 1.41.051 2.546.051h4.2c.36 0 .685-.003.981-.005L7.96 12.373l-3.453 3.07zM9.9 4.5c-1.136 0-1.929 0-2.546.05-.605.05-.953.143-1.216.277-.565.288-1.023.746-1.31 1.31-.135.264-.228.612-.277 1.217C4.5 7.971 4.5 8.764 4.5 9.9v2.873l3.54-3.147 9.63 9.63c.07-.026.133-.053.192-.083.565-.288 1.023-.746 1.31-1.31.135-.264.228-.612.277-1.218.05-.616.051-1.409.051-2.545V9.9c0-1.136 0-1.929-.05-2.546-.05-.605-.143-.953-.277-1.216-.288-.565-.746-1.023-1.31-1.31-.264-.135-.612-.228-1.218-.277C16.03 4.5 15.236 4.5 14.1 4.5H9.9z" fill-rule="evenodd"></path></g>
                                    </svg>
                                </span>
                                <span className='w-7 h-7 flex justify-center items-center rounded-full hover:bg-zinc-900 hover:scale-125 transition-all duration-200 ' >
                                    <svg viewBox="0 0 24 24" aria-hidden="true" className="  w-5 invert-40 hover:invert-75 r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1otekoa r-175dae4 r-1cciapn">
                                        <g><path d="M15 7c1.105 0 2 .895 2 2s-.895 2-2 2-2-.895-2-2 .895-2 2-2z">
                                        </path><path clip-rule="evenodd" d="M14.1 2.5c1.103 0 1.991-.001 2.709.058.728.06 1.368.185 1.96.487.941.48 1.707 1.245 2.186 2.185.302.593.428 1.233.487 1.961.059.718.058 1.606.058 2.71V14.1c0 1.103.001 1.991-.058 2.709-.06.728-.185 1.368-.487 1.96-.48.941-1.245 1.707-2.185 2.186-.593.302-1.233.428-1.961.487-.718.059-1.606.058-2.71.058H9.9c-1.103 0-1.991.001-2.709-.058-.728-.06-1.368-.185-1.96-.487-.941-.48-1.707-1.245-2.186-2.185-.302-.593-.428-1.233-.487-1.961-.059-.718-.058-1.606-.058-2.71V9.9c0-1.103-.001-1.991.058-2.709.06-.728.185-1.368.487-1.96.48-.941 1.245-1.707 2.185-2.186.593-.302 1.233-.428 1.961-.487.718-.059 1.606-.058 2.71-.058H14.1zM4.506 15.442c.006.473.017.865.045 1.203.05.606.142.954.276 1.217.288.565.746 1.023 1.31 1.31.264.135.612.228 1.217.277.617.05 1.41.051 2.546.051h4.2c.36 0 .685-.003.981-.005L7.96 12.373l-3.453 3.07zM9.9 4.5c-1.136 0-1.929 0-2.546.05-.605.05-.953.143-1.216.277-.565.288-1.023.746-1.31 1.31-.135.264-.228.612-.277 1.217C4.5 7.971 4.5 8.764 4.5 9.9v2.873l3.54-3.147 9.63 9.63c.07-.026.133-.053.192-.083.565-.288 1.023-.746 1.31-1.31.135-.264.228-.612.277-1.218.05-.616.051-1.409.051-2.545V9.9c0-1.136 0-1.929-.05-2.546-.05-.605-.143-.953-.277-1.216-.288-.565-.746-1.023-1.31-1.31-.264-.135-.612-.228-1.218-.277C16.03 4.5 15.236 4.5 14.1 4.5H9.9z" fill-rule="evenodd"></path></g>
                                    </svg>
                                </span>
                                <span className='w-7 h-7 flex justify-center items-center rounded-full hover:bg-zinc-900 hover:scale-125 transition-all duration-200 ' >
                                    <svg viewBox="0 0 24 24" aria-hidden="true" className="  w-5 invert-40 hover:invert-75 r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1otekoa r-175dae4 r-1cciapn">
                                        <g><path d="M15 7c1.105 0 2 .895 2 2s-.895 2-2 2-2-.895-2-2 .895-2 2-2z">
                                        </path><path clip-rule="evenodd" d="M14.1 2.5c1.103 0 1.991-.001 2.709.058.728.06 1.368.185 1.96.487.941.48 1.707 1.245 2.186 2.185.302.593.428 1.233.487 1.961.059.718.058 1.606.058 2.71V14.1c0 1.103.001 1.991-.058 2.709-.06.728-.185 1.368-.487 1.96-.48.941-1.245 1.707-2.185 2.186-.593.302-1.233.428-1.961.487-.718.059-1.606.058-2.71.058H9.9c-1.103 0-1.991.001-2.709-.058-.728-.06-1.368-.185-1.96-.487-.941-.48-1.707-1.245-2.186-2.185-.302-.593-.428-1.233-.487-1.961-.059-.718-.058-1.606-.058-2.71V9.9c0-1.103-.001-1.991.058-2.709.06-.728.185-1.368.487-1.96.48-.941 1.245-1.707 2.185-2.186.593-.302 1.233-.428 1.961-.487.718-.059 1.606-.058 2.71-.058H14.1zM4.506 15.442c.006.473.017.865.045 1.203.05.606.142.954.276 1.217.288.565.746 1.023 1.31 1.31.264.135.612.228 1.217.277.617.05 1.41.051 2.546.051h4.2c.36 0 .685-.003.981-.005L7.96 12.373l-3.453 3.07zM9.9 4.5c-1.136 0-1.929 0-2.546.05-.605.05-.953.143-1.216.277-.565.288-1.023.746-1.31 1.31-.135.264-.228.612-.277 1.217C4.5 7.971 4.5 8.764 4.5 9.9v2.873l3.54-3.147 9.63 9.63c.07-.026.133-.053.192-.083.565-.288 1.023-.746 1.31-1.31.135-.264.228-.612.277-1.218.05-.616.051-1.409.051-2.545V9.9c0-1.136 0-1.929-.05-2.546-.05-.605-.143-.953-.277-1.216-.288-.565-.746-1.023-1.31-1.31-.264-.135-.612-.228-1.218-.277C16.03 4.5 15.236 4.5 14.1 4.5H9.9z" fill-rule="evenodd"></path></g>
                                    </svg>
                                </span>
                                <span className='w-7 h-7 flex justify-center items-center rounded-full hover:bg-zinc-900 hover:scale-125 transition-all duration-200 ' >
                                    <svg viewBox="0 0 24 24" aria-hidden="true" className="  w-5 invert-40 hover:invert-75 r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1otekoa r-175dae4 r-1cciapn">
                                        <g><path d="M15 7c1.105 0 2 .895 2 2s-.895 2-2 2-2-.895-2-2 .895-2 2-2z">
                                        </path><path clip-rule="evenodd" d="M14.1 2.5c1.103 0 1.991-.001 2.709.058.728.06 1.368.185 1.96.487.941.48 1.707 1.245 2.186 2.185.302.593.428 1.233.487 1.961.059.718.058 1.606.058 2.71V14.1c0 1.103.001 1.991-.058 2.709-.06.728-.185 1.368-.487 1.96-.48.941-1.245 1.707-2.185 2.186-.593.302-1.233.428-1.961.487-.718.059-1.606.058-2.71.058H9.9c-1.103 0-1.991.001-2.709-.058-.728-.06-1.368-.185-1.96-.487-.941-.48-1.707-1.245-2.186-2.185-.302-.593-.428-1.233-.487-1.961-.059-.718-.058-1.606-.058-2.71V9.9c0-1.103-.001-1.991.058-2.709.06-.728.185-1.368.487-1.96.48-.941 1.245-1.707 2.185-2.186.593-.302 1.233-.428 1.961-.487.718-.059 1.606-.058 2.71-.058H14.1zM4.506 15.442c.006.473.017.865.045 1.203.05.606.142.954.276 1.217.288.565.746 1.023 1.31 1.31.264.135.612.228 1.217.277.617.05 1.41.051 2.546.051h4.2c.36 0 .685-.003.981-.005L7.96 12.373l-3.453 3.07zM9.9 4.5c-1.136 0-1.929 0-2.546.05-.605.05-.953.143-1.216.277-.565.288-1.023.746-1.31 1.31-.135.264-.228.612-.277 1.217C4.5 7.971 4.5 8.764 4.5 9.9v2.873l3.54-3.147 9.63 9.63c.07-.026.133-.053.192-.083.565-.288 1.023-.746 1.31-1.31.135-.264.228-.612.277-1.218.05-.616.051-1.409.051-2.545V9.9c0-1.136 0-1.929-.05-2.546-.05-.605-.143-.953-.277-1.216-.288-.565-.746-1.023-1.31-1.31-.264-.135-.612-.228-1.218-.277C16.03 4.5 15.236 4.5 14.1 4.5H9.9z" fill-rule="evenodd"></path></g>
                                    </svg>
                                </span>
                                <span className='w-7 h-7 flex justify-center items-center rounded-full hover:bg-zinc-900 hover:scale-125 transition-all duration-200 ' >
                                    <svg viewBox="0 0 24 24" aria-hidden="true" className="  w-5 invert-40 hover:invert-75 r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1otekoa r-175dae4 r-1cciapn">
                                        <g><path d="M15 7c1.105 0 2 .895 2 2s-.895 2-2 2-2-.895-2-2 .895-2 2-2z">
                                        </path><path clip-rule="evenodd" d="M14.1 2.5c1.103 0 1.991-.001 2.709.058.728.06 1.368.185 1.96.487.941.48 1.707 1.245 2.186 2.185.302.593.428 1.233.487 1.961.059.718.058 1.606.058 2.71V14.1c0 1.103.001 1.991-.058 2.709-.06.728-.185 1.368-.487 1.96-.48.941-1.245 1.707-2.185 2.186-.593.302-1.233.428-1.961.487-.718.059-1.606.058-2.71.058H9.9c-1.103 0-1.991.001-2.709-.058-.728-.06-1.368-.185-1.96-.487-.941-.48-1.707-1.245-2.186-2.185-.302-.593-.428-1.233-.487-1.961-.059-.718-.058-1.606-.058-2.71V9.9c0-1.103-.001-1.991.058-2.709.06-.728.185-1.368.487-1.96.48-.941 1.245-1.707 2.185-2.186.593-.302 1.233-.428 1.961-.487.718-.059 1.606-.058 2.71-.058H14.1zM4.506 15.442c.006.473.017.865.045 1.203.05.606.142.954.276 1.217.288.565.746 1.023 1.31 1.31.264.135.612.228 1.217.277.617.05 1.41.051 2.546.051h4.2c.36 0 .685-.003.981-.005L7.96 12.373l-3.453 3.07zM9.9 4.5c-1.136 0-1.929 0-2.546.05-.605.05-.953.143-1.216.277-.565.288-1.023.746-1.31 1.31-.135.264-.228.612-.277 1.217C4.5 7.971 4.5 8.764 4.5 9.9v2.873l3.54-3.147 9.63 9.63c.07-.026.133-.053.192-.083.565-.288 1.023-.746 1.31-1.31.135-.264.228-.612.277-1.218.05-.616.051-1.409.051-2.545V9.9c0-1.136 0-1.929-.05-2.546-.05-.605-.143-.953-.277-1.216-.288-.565-.746-1.023-1.31-1.31-.264-.135-.612-.228-1.218-.277C16.03 4.5 15.236 4.5 14.1 4.5H9.9z" fill-rule="evenodd"></path></g>
                                    </svg>
                                </span>
                                <span className='w-7 h-7 flex justify-center items-center rounded-full hover:bg-zinc-900 hover:scale-125 transition-all duration-200 ' >
                                    <svg viewBox="0 0 24 24" aria-hidden="true" className="  w-5 invert-40 hover:invert-75 r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1otekoa r-175dae4 r-1cciapn">
                                        <g><path d="M15 7c1.105 0 2 .895 2 2s-.895 2-2 2-2-.895-2-2 .895-2 2-2z">
                                        </path><path clip-rule="evenodd" d="M14.1 2.5c1.103 0 1.991-.001 2.709.058.728.06 1.368.185 1.96.487.941.48 1.707 1.245 2.186 2.185.302.593.428 1.233.487 1.961.059.718.058 1.606.058 2.71V14.1c0 1.103.001 1.991-.058 2.709-.06.728-.185 1.368-.487 1.96-.48.941-1.245 1.707-2.185 2.186-.593.302-1.233.428-1.961.487-.718.059-1.606.058-2.71.058H9.9c-1.103 0-1.991.001-2.709-.058-.728-.06-1.368-.185-1.96-.487-.941-.48-1.707-1.245-2.186-2.185-.302-.593-.428-1.233-.487-1.961-.059-.718-.058-1.606-.058-2.71V9.9c0-1.103-.001-1.991.058-2.709.06-.728.185-1.368.487-1.96.48-.941 1.245-1.707 2.185-2.186.593-.302 1.233-.428 1.961-.487.718-.059 1.606-.058 2.71-.058H14.1zM4.506 15.442c.006.473.017.865.045 1.203.05.606.142.954.276 1.217.288.565.746 1.023 1.31 1.31.264.135.612.228 1.217.277.617.05 1.41.051 2.546.051h4.2c.36 0 .685-.003.981-.005L7.96 12.373l-3.453 3.07zM9.9 4.5c-1.136 0-1.929 0-2.546.05-.605.05-.953.143-1.216.277-.565.288-1.023.746-1.31 1.31-.135.264-.228.612-.277 1.217C4.5 7.971 4.5 8.764 4.5 9.9v2.873l3.54-3.147 9.63 9.63c.07-.026.133-.053.192-.083.565-.288 1.023-.746 1.31-1.31.135-.264.228-.612.277-1.218.05-.616.051-1.409.051-2.545V9.9c0-1.136 0-1.929-.05-2.546-.05-.605-.143-.953-.277-1.216-.288-.565-.746-1.023-1.31-1.31-.264-.135-.612-.228-1.218-.277C16.03 4.5 15.236 4.5 14.1 4.5H9.9z" fill-rule="evenodd"></path></g>
                                    </svg>
                                </span>
                            </div>
                            <div className='bg-zinc-700 text-black h-8 w-20 flex justify-center items-center rounded-full'>Post</div>
                        </div>
                    </div>

                    {/* SHOW MORE */}
                    <div className='border border-zinc-700 flex justify-center items-center p-3 text-sky-500 hover:text-sky-300 hover:bg-zinc-900 cursor-pointer transition-colors duration-200'>
                        Show 197 posts
                    </div>

                    {/* POST */}
                    <div className='border border-zinc-700 '>
                        <div className='border border-zinc-700 hover:bg-zinc-950' >
                            <div className=' flex'>
                                <div className='w-12 h-12 rounded-full m-2'>
                                    <img src={hero} alt="" />
                                </div>
                                <div className=' w-full'>
                                    <div className='flex justify-between m-2 items-center'>
                                        <div className='flex items-center gap-1 '>
                                            <span className='font-semibold'>Elon Musk</span>
                                            <svg viewBox="0 0 22 22" aria-label="Verified account" role="img" className="w-4 invert fill-orange-500 r-4qtqp9 r-yyyyoo r-1xvli5t r-bnwqim r-lrvibr r-m6rgpd r-1cvl2hr r-f9ja8p r-og9te1 r-3t4u6i" data-testid="icon-verified">
                                                <g><path d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z"></path></g>
                                            </svg>
                                            <img alt="" draggable="false" src="https://pbs.twimg.com/profile_images/1955359038532653056/OSHY3ewP_bigger.jpg" className="w-4 border border-zinc-700 rounded-xs"></img>
                                            <span className='text-zinc-500'>@elonmusk</span>
                                            <span className='text-zinc-500 flex items-center before:content-[""] before:w-1 before:h-1 before:bg-zinc-500 before:rounded-full before:mx-1'>May 23</span>
                                        </div>
                                        <div className='flex items-center justify-center gap-2'>
                                            <svg viewBox="0 0 33 32" aria-hidden="true" className="w-4 invert-60 r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd">
                                                <g><path d="M12.745 20.54l10.97-8.19c.539-.4 1.307-.244 1.564.38 1.349 3.288.746 7.241-1.938 9.955-2.683 2.714-6.417 3.31-9.83 1.954l-3.728 1.745c5.347 3.697 11.84 2.782 15.898-1.324 3.219-3.255 4.216-7.692 3.284-11.693l.008.009c-1.351-5.878.332-8.227 3.782-13.031L33 0l-4.54 4.59v-.014L12.743 20.544m-2.263 1.987c-3.837-3.707-3.175-9.446.1-12.755 2.42-2.449 6.388-3.448 9.852-1.979l3.72-1.737c-.67-.49-1.53-1.017-2.515-1.387-4.455-1.854-9.789-.931-13.41 2.728-3.483 3.523-4.579 8.94-2.697 13.561 1.405 3.454-.899 5.898-3.22 8.364C1.49 30.2.666 31.074 0 32l10.478-9.466"></path></g>
                                            </svg>
                                            <span >...</span>
                                        </div>
                                    </div>
                                    <div className='pl-2 text-zinc-200'>
                                        Liftoff of Starship on its twelfth flight test
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className=' flex justify-center '>
                                    <div className='w-[90%] sm:w-[70%] md:w-[60%] lg:w-[40%] m-5 border border-zinc-600 rounded-2xl  ' >
                                        <img alt="Image" draggable="true" src="https://pbs.twimg.com/media/HJAcZS2bgAAqxEv?format=jpg&amp;name=900x900" className="rounded-2xl"></img>
                                    </div>
                                </div>
                                <div className='flex w-full'>
                                    <div className='text-zinc-400 w-[90%] flex justify-evenly '>
                                        <span className='flex items-center gap-1 group cursor-pointer hover:text-blue-500 transition-all duration-200'>
                                            <span className='w-7 h-7 flex justify-center items-center rounded-full group-hover:bg-blue-500/20 transition-all duration-200'>
                                                <svg
                                                    viewBox="0 0 24 24"
                                                    aria-hidden="true"
                                                    className="w-5 h-5 fill-current text-zinc-500 group-hover:text-blue-500 transition-all duration-200"
                                                >
                                                    <g>
                                                        <path d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z"></path>
                                                    </g>
                                                </svg>
                                            </span>
                                            <span>2.6k</span>
                                        </span>
                                        {/* Retweet - Green */}
                                        <span className='flex items-center gap-1 group cursor-pointer hover:text-green-500 transition-all duration-200'>
                                            <span className='w-7 h-7 flex justify-center items-center rounded-fullgroup-hover:bg-green-500/20 transition-all duration-200'>
                                                <svg
                                                    viewBox="0 0 24 24"
                                                    aria-hidden="true"
                                                    className="w-5 h-5 fill-current text-zinc-500 group-hover:text-green-500 transition-all duration-200"
                                                >
                                                    <g>
                                                        <path d="M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z"></path>
                                                    </g>
                                                </svg>
                                            </span>
                                            <span>205</span>
                                        </span>
                                        {/* Like - Red */}
                                        <span className='flex items-center gap-1 group cursor-pointer hover:text-red-500 transition-all duration-200'>
                                            <span className='w-7 h-7 flex justify-center items-center rounded-full group-hover:bg-red-500/20 transition-all duration-200'>
                                                <svg
                                                    viewBox="0 0 24 24"
                                                    aria-hidden="true"
                                                    className="w-5 h-5 fill-current text-zinc-500  group-hover:text-red-500 transition-all duration-200"
                                                >
                                                    <g>
                                                        <path d="M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5c-1.243.07-2.349.78-2.91 1.91-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04 1.03-3.7.477-4.82-.561-1.13-1.666-1.84-2.908-1.91zm4.187 7.69c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z"></path>
                                                    </g>
                                                </svg>
                                            </span>
                                            <span>791</span>
                                        </span>
                                        {/* Views - Blue */}
                                        <span className='flex items-center gap-1 group cursor-pointer hover:text-blue-500 transition-all duration-200'>
                                            <span className='w-7 h-7 flex justify-center items-center rounded-full group-hover:bg-blue-500/20 transition-all duration-200'>
                                                <svg
                                                    viewBox="0 0 24 24"
                                                    aria-hidden="true"
                                                    className="w-5 h-5 fill-current text-zinc-500 group-hover:text-blue-500 transition-all duration-200"
                                                >
                                                    <g>
                                                        <path d="M8.75 21V3h2v18h-2zM18 21V8.5h2V21h-2zM4 21l.004-10h2L6 21H4zm9.248 0v-7h2v7h-2z"></path>
                                                    </g>
                                                </svg>
                                            </span>
                                            <span>142k</span>
                                        </span>
                                    </div>
                                    <div className='flex gap-3'>
                                        {/* Bookmark */}
                                        <span className='flex items-center justify-center w-8 h-8 rounded-full hover:bg-blue-500/20 group cursor-pointer transition-all duration-200'>
                                            <svg
                                                viewBox="0 0 24 24"
                                                aria-hidden="true"
                                                className="w-5 h-5 fill-current text-zinc-500 group-hover:text-blue-500 transition-all duration-200"
                                            >
                                                <g>
                                                    <path d="M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V4.5c0-.28-.224-.5-.5-.5h-11z"></path>
                                                </g>
                                            </svg>
                                        </span>
                                        {/* Share */}
                                        <span className='flex items-center justify-center w-8 h-8 rounded-fullhover:bg-blue-500/20 group cursor-pointer transition-all duration-200'>
                                            <svg
                                                viewBox="0 0 24 24"
                                                aria-hidden="true"
                                                className="w-5 h-5 fill-current text-zinc-500 group-hover:text-blue-500 transition-all duration-200"
                                            >
                                                <g>
                                                    <path d="M12 2.59l5.7 5.7-1.41 1.42L13 6.41V16h-2V6.41l-3.3 3.3-1.41-1.42L12 2.59zM21 15l-.02 3.51c0 1.38-1.12 2.49-2.5 2.49H5.5C4.11 21 3 19.88 3 18.5V15h2v3.5c0 .28.22.5.5.5h12.98c.28 0 .5-.22.5-.5L19 15h2z"></path>
                                                </g>
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='border border-zinc-700 hover:bg-zinc-950' >
                            <div className=' flex'>
                                <div className='w-12 h-12 rounded-full m-2'>
                                    <img src={hero} alt="" />
                                </div>
                                <div className=' w-full'>
                                    <div className='flex justify-between m-2 items-center'>
                                        <div className='flex items-center gap-1 '>
                                            <span className='font-semibold'>Elon Musk</span>
                                            <svg viewBox="0 0 22 22" aria-label="Verified account" role="img" className="w-4 invert fill-orange-500 r-4qtqp9 r-yyyyoo r-1xvli5t r-bnwqim r-lrvibr r-m6rgpd r-1cvl2hr r-f9ja8p r-og9te1 r-3t4u6i" data-testid="icon-verified">
                                                <g><path d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z"></path></g>
                                            </svg>
                                            <img alt="" draggable="false" src="https://pbs.twimg.com/profile_images/1955359038532653056/OSHY3ewP_bigger.jpg" className="w-4 border border-zinc-700 rounded-xs"></img>
                                            <span className='text-zinc-500'>@elonmusk</span>
                                            <span className='text-zinc-500 flex items-center before:content-[""] before:w-1 before:h-1 before:bg-zinc-500 before:rounded-full before:mx-1'>May 23</span>
                                        </div>
                                        <div className='flex items-center justify-center gap-2'>
                                            <svg viewBox="0 0 33 32" aria-hidden="true" className="w-4 invert-60 r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd">
                                                <g><path d="M12.745 20.54l10.97-8.19c.539-.4 1.307-.244 1.564.38 1.349 3.288.746 7.241-1.938 9.955-2.683 2.714-6.417 3.31-9.83 1.954l-3.728 1.745c5.347 3.697 11.84 2.782 15.898-1.324 3.219-3.255 4.216-7.692 3.284-11.693l.008.009c-1.351-5.878.332-8.227 3.782-13.031L33 0l-4.54 4.59v-.014L12.743 20.544m-2.263 1.987c-3.837-3.707-3.175-9.446.1-12.755 2.42-2.449 6.388-3.448 9.852-1.979l3.72-1.737c-.67-.49-1.53-1.017-2.515-1.387-4.455-1.854-9.789-.931-13.41 2.728-3.483 3.523-4.579 8.94-2.697 13.561 1.405 3.454-.899 5.898-3.22 8.364C1.49 30.2.666 31.074 0 32l10.478-9.466"></path></g>
                                            </svg>
                                            <span >...</span>
                                        </div>
                                    </div>
                                    <div className='pl-2 text-zinc-200'>
                                        Liftoff of Starship on its twelfth flight test
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className=' flex justify-center '>
                                    <div className='w-[90%] sm:w-[70%] md:w-[60%] lg:w-[40%] m-5 border border-zinc-600 rounded-2xl  ' >
                                        <img alt="Image" draggable="true" src="https://pbs.twimg.com/media/HJAcZS2bgAAqxEv?format=jpg&amp;name=900x900" className="rounded-2xl"></img>
                                    </div>
                                </div>
                                <div className='flex w-full'>
                                    <div className='text-zinc-400 w-[90%] flex justify-evenly '>
                                        <span className='flex items-center gap-1 group cursor-pointer hover:text-blue-500 transition-all duration-200'>
                                            <span className='w-7 h-7 flex justify-center items-center rounded-full group-hover:bg-blue-500/20 transition-all duration-200'>
                                                <svg
                                                    viewBox="0 0 24 24"
                                                    aria-hidden="true"
                                                    className="w-5 h-5 fill-current text-zinc-500 group-hover:text-blue-500 transition-all duration-200"
                                                >
                                                    <g>
                                                        <path d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z"></path>
                                                    </g>
                                                </svg>
                                            </span>
                                            <span>2.6k</span>
                                        </span>
                                        {/* Retweet - Green */}
                                        <span className='flex items-center gap-1 group cursor-pointer hover:text-green-500 transition-all duration-200'>
                                            <span className='w-7 h-7 flex justify-center items-center rounded-fullgroup-hover:bg-green-500/20 transition-all duration-200'>
                                                <svg
                                                    viewBox="0 0 24 24"
                                                    aria-hidden="true"
                                                    className="w-5 h-5 fill-current text-zinc-500 group-hover:text-green-500 transition-all duration-200"
                                                >
                                                    <g>
                                                        <path d="M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z"></path>
                                                    </g>
                                                </svg>
                                            </span>
                                            <span>205</span>
                                        </span>
                                        {/* Like - Red */}
                                        <span className='flex items-center gap-1 group cursor-pointer hover:text-red-500 transition-all duration-200'>
                                            <span className='w-7 h-7 flex justify-center items-center rounded-full group-hover:bg-red-500/20 transition-all duration-200'>
                                                <svg
                                                    viewBox="0 0 24 24"
                                                    aria-hidden="true"
                                                    className="w-5 h-5 fill-current text-zinc-500  group-hover:text-red-500 transition-all duration-200"
                                                >
                                                    <g>
                                                        <path d="M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5c-1.243.07-2.349.78-2.91 1.91-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04 1.03-3.7.477-4.82-.561-1.13-1.666-1.84-2.908-1.91zm4.187 7.69c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z"></path>
                                                    </g>
                                                </svg>
                                            </span>
                                            <span>791</span>
                                        </span>
                                        {/* Views - Blue */}
                                        <span className='flex items-center gap-1 group cursor-pointer hover:text-blue-500 transition-all duration-200'>
                                            <span className='w-7 h-7 flex justify-center items-center rounded-full group-hover:bg-blue-500/20 transition-all duration-200'>
                                                <svg
                                                    viewBox="0 0 24 24"
                                                    aria-hidden="true"
                                                    className="w-5 h-5 fill-current text-zinc-500 group-hover:text-blue-500 transition-all duration-200"
                                                >
                                                    <g>
                                                        <path d="M8.75 21V3h2v18h-2zM18 21V8.5h2V21h-2zM4 21l.004-10h2L6 21H4zm9.248 0v-7h2v7h-2z"></path>
                                                    </g>
                                                </svg>
                                            </span>
                                            <span>142k</span>
                                        </span>
                                    </div>
                                    <div className='flex gap-3'>
                                        {/* Bookmark */}
                                        <span className='flex items-center justify-center w-8 h-8 rounded-full hover:bg-blue-500/20 group cursor-pointer transition-all duration-200'>
                                            <svg
                                                viewBox="0 0 24 24"
                                                aria-hidden="true"
                                                className="w-5 h-5 fill-current text-zinc-500 group-hover:text-blue-500 transition-all duration-200"
                                            >
                                                <g>
                                                    <path d="M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V4.5c0-.28-.224-.5-.5-.5h-11z"></path>
                                                </g>
                                            </svg>
                                        </span>
                                        {/* Share */}
                                        <span className='flex items-center justify-center w-8 h-8 rounded-fullhover:bg-blue-500/20 group cursor-pointer transition-all duration-200'>
                                            <svg
                                                viewBox="0 0 24 24"
                                                aria-hidden="true"
                                                className="w-5 h-5 fill-current text-zinc-500 group-hover:text-blue-500 transition-all duration-200"
                                            >
                                                <g>
                                                    <path d="M12 2.59l5.7 5.7-1.41 1.42L13 6.41V16h-2V6.41l-3.3 3.3-1.41-1.42L12 2.59zM21 15l-.02 3.51c0 1.38-1.12 2.49-2.5 2.49H5.5C4.11 21 3 19.88 3 18.5V15h2v3.5c0 .28.22.5.5.5h12.98c.28 0 .5-.22.5-.5L19 15h2z"></path>
                                                </g>
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='border border-zinc-700 hover:bg-zinc-950' >
                            <div className=' flex'>
                                <div className='w-12 h-12 rounded-full m-2'>
                                    <img src={hero} alt="" />
                                </div>
                                <div className=' w-full'>
                                    <div className='flex justify-between m-2 items-center'>
                                        <div className='flex items-center gap-1 '>
                                            <span className='font-semibold'>Elon Musk</span>
                                            <svg viewBox="0 0 22 22" aria-label="Verified account" role="img" className="w-4 invert fill-orange-500 r-4qtqp9 r-yyyyoo r-1xvli5t r-bnwqim r-lrvibr r-m6rgpd r-1cvl2hr r-f9ja8p r-og9te1 r-3t4u6i" data-testid="icon-verified">
                                                <g><path d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z"></path></g>
                                            </svg>
                                            <img alt="" draggable="false" src="https://pbs.twimg.com/profile_images/1955359038532653056/OSHY3ewP_bigger.jpg" className="w-4 border border-zinc-700 rounded-xs"></img>
                                            <span className='text-zinc-500'>@elonmusk</span>
                                            <span className='text-zinc-500 flex items-center before:content-[""] before:w-1 before:h-1 before:bg-zinc-500 before:rounded-full before:mx-1'>May 23</span>
                                        </div>
                                        <div className='flex items-center justify-center gap-2'>
                                            <svg viewBox="0 0 33 32" aria-hidden="true" className="w-4 invert-60 r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd">
                                                <g><path d="M12.745 20.54l10.97-8.19c.539-.4 1.307-.244 1.564.38 1.349 3.288.746 7.241-1.938 9.955-2.683 2.714-6.417 3.31-9.83 1.954l-3.728 1.745c5.347 3.697 11.84 2.782 15.898-1.324 3.219-3.255 4.216-7.692 3.284-11.693l.008.009c-1.351-5.878.332-8.227 3.782-13.031L33 0l-4.54 4.59v-.014L12.743 20.544m-2.263 1.987c-3.837-3.707-3.175-9.446.1-12.755 2.42-2.449 6.388-3.448 9.852-1.979l3.72-1.737c-.67-.49-1.53-1.017-2.515-1.387-4.455-1.854-9.789-.931-13.41 2.728-3.483 3.523-4.579 8.94-2.697 13.561 1.405 3.454-.899 5.898-3.22 8.364C1.49 30.2.666 31.074 0 32l10.478-9.466"></path></g>
                                            </svg>
                                            <span >...</span>
                                        </div>
                                    </div>
                                    <div className='pl-2 text-zinc-200'>
                                        Liftoff of Starship on its twelfth flight test
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className=' flex justify-center '>
                                    <div className='w-[90%] sm:w-[70%] md:w-[60%] lg:w-[40%] m-5 border border-zinc-600 rounded-2xl  ' >
                                        <img alt="Image" draggable="true" src="https://pbs.twimg.com/media/HJAcZS2bgAAqxEv?format=jpg&amp;name=900x900" className="rounded-2xl"></img>
                                    </div>
                                </div>
                                <div className='flex w-full'>
                                    <div className='text-zinc-400 w-[90%] flex justify-evenly '>
                                        <span className='flex items-center gap-1 group cursor-pointer hover:text-blue-500 transition-all duration-200'>
                                            <span className='w-7 h-7 flex justify-center items-center rounded-full group-hover:bg-blue-500/20 transition-all duration-200'>
                                                <svg
                                                    viewBox="0 0 24 24"
                                                    aria-hidden="true"
                                                    className="w-5 h-5 fill-current text-zinc-500 group-hover:text-blue-500 transition-all duration-200"
                                                >
                                                    <g>
                                                        <path d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z"></path>
                                                    </g>
                                                </svg>
                                            </span>
                                            <span>2.6k</span>
                                        </span>
                                        {/* Retweet - Green */}
                                        <span className='flex items-center gap-1 group cursor-pointer hover:text-green-500 transition-all duration-200'>
                                            <span className='w-7 h-7 flex justify-center items-center rounded-fullgroup-hover:bg-green-500/20 transition-all duration-200'>
                                                <svg
                                                    viewBox="0 0 24 24"
                                                    aria-hidden="true"
                                                    className="w-5 h-5 fill-current text-zinc-500 group-hover:text-green-500 transition-all duration-200"
                                                >
                                                    <g>
                                                        <path d="M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z"></path>
                                                    </g>
                                                </svg>
                                            </span>
                                            <span>205</span>
                                        </span>
                                        {/* Like - Red */}
                                        <span className='flex items-center gap-1 group cursor-pointer hover:text-red-500 transition-all duration-200'>
                                            <span className='w-7 h-7 flex justify-center items-center rounded-full group-hover:bg-red-500/20 transition-all duration-200'>
                                                <svg
                                                    viewBox="0 0 24 24"
                                                    aria-hidden="true"
                                                    className="w-5 h-5 fill-current text-zinc-500  group-hover:text-red-500 transition-all duration-200"
                                                >
                                                    <g>
                                                        <path d="M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5c-1.243.07-2.349.78-2.91 1.91-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04 1.03-3.7.477-4.82-.561-1.13-1.666-1.84-2.908-1.91zm4.187 7.69c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z"></path>
                                                    </g>
                                                </svg>
                                            </span>
                                            <span>791</span>
                                        </span>
                                        {/* Views - Blue */}
                                        <span className='flex items-center gap-1 group cursor-pointer hover:text-blue-500 transition-all duration-200'>
                                            <span className='w-7 h-7 flex justify-center items-center rounded-full group-hover:bg-blue-500/20 transition-all duration-200'>
                                                <svg
                                                    viewBox="0 0 24 24"
                                                    aria-hidden="true"
                                                    className="w-5 h-5 fill-current text-zinc-500 group-hover:text-blue-500 transition-all duration-200"
                                                >
                                                    <g>
                                                        <path d="M8.75 21V3h2v18h-2zM18 21V8.5h2V21h-2zM4 21l.004-10h2L6 21H4zm9.248 0v-7h2v7h-2z"></path>
                                                    </g>
                                                </svg>
                                            </span>
                                            <span>142k</span>
                                        </span>
                                    </div>
                                    <div className='flex gap-3'>
                                        {/* Bookmark */}
                                        <span className='flex items-center justify-center w-8 h-8 rounded-full hover:bg-blue-500/20 group cursor-pointer transition-all duration-200'>
                                            <svg
                                                viewBox="0 0 24 24"
                                                aria-hidden="true"
                                                className="w-5 h-5 fill-current text-zinc-500 group-hover:text-blue-500 transition-all duration-200"
                                            >
                                                <g>
                                                    <path d="M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V4.5c0-.28-.224-.5-.5-.5h-11z"></path>
                                                </g>
                                            </svg>
                                        </span>
                                        {/* Share */}
                                        <span className='flex items-center justify-center w-8 h-8 rounded-fullhover:bg-blue-500/20 group cursor-pointer transition-all duration-200'>
                                            <svg
                                                viewBox="0 0 24 24"
                                                aria-hidden="true"
                                                className="w-5 h-5 fill-current text-zinc-500 group-hover:text-blue-500 transition-all duration-200"
                                            >
                                                <g>
                                                    <path d="M12 2.59l5.7 5.7-1.41 1.42L13 6.41V16h-2V6.41l-3.3 3.3-1.41-1.42L12 2.59zM21 15l-.02 3.51c0 1.38-1.12 2.49-2.5 2.49H5.5C4.11 21 3 19.88 3 18.5V15h2v3.5c0 .28.22.5.5.5h12.98c.28 0 .5-.22.5-.5L19 15h2z"></path>
                                                </g>
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Mid