import { useState } from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css';

const Sidebar: React.FC = () => {
    const [sidebarVisible, setSidebarVisible] = useState(false);
    const toggleSidebar = () => {
        setSidebarVisible(prev => !prev);
    };


    return (
        <div>
            <div className={`sidebar ${sidebarVisible ? 'sidebar-visible' : ''} sidebarshown`}>
                <div className='sidetitle'>
                    <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg" className='menuiconout' onClick={toggleSidebar}>
                        <path d="M27 24.0807H3M27 15.0718H3M27 6.06299H3" stroke="white" strokeWidth="3" strokeLinecap="round" />
                    </svg>
                    <Link to="/chatpage"><h4 className='gpttitle'>GPTитор</h4></Link>
                    <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg" className='chaticonout'>
                        <path d="M15 15.0147V12.0118M15 12.0118V9.00883M15 12.0118H12M15 12.0118H18M18.2609 20.7595L15 27.0265L12 20.7595H6C4.34315 20.7595 3 19.415 3 17.7566V6.00588C3 4.3474 4.34315 3.00293 6 3.00293H24C25.6569 3.00293 27 4.3474 27 6.00588V17.7566C27 19.415 25.6569 20.7595 24 20.7595H18.2609Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
                <div className='historysearch'>
                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg" className='searchicon'>
                        <path d="M14.1057 15.077L17 17.877M9.5 6.87695C11.1569 6.87695 12.5 8.2201 12.5 9.87695M16.0667 10.4103C16.0667 14.0185 13.1416 16.9436 9.53333 16.9436C5.92507 16.9436 3 14.0185 3 10.4103C3 6.80203 5.92507 3.87695 9.53333 3.87695C13.1416 3.87695 16.0667 6.80203 16.0667 10.4103Z" stroke="#3B4168" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                    <input type="text" placeholder='History' className='historyinpt' />
                </div>
                <div className='fav'>
                    <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.5169 13.5748L10.9169 12.3736V7.35094M20.5169 11.1724C20.5169 5.86528 16.2188 1.56299 10.9169 1.56299C5.61496 1.56299 1.31689 5.86528 1.31689 11.1724C1.31689 16.4796 5.61496 20.7819 10.9169 20.7819C14.4702 20.7819 17.5727 18.8494 19.2326 15.9772M17.8834 10.1179L20.2833 12.5203L22.6833 10.1179" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <p>Latest</p>
                    <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg" className='favicon'>
                        <path d="M21.33 11.8242H8.67004M16.875 14.6395C15.319 14.6395 13.125 14.6395 13.125 14.6395M21.375 12.2008V19.8008C21.375 20.6818 20.6615 21.3961 19.7812 21.3961H10.2188C9.33855 21.3961 8.625 20.6818 8.625 19.8008V12.2008C8.625 11.9531 8.68261 11.7089 8.79326 11.4873L9.88837 9.29495C10.0909 8.8896 10.5047 8.63354 10.9575 8.63354H19.0425C19.4953 8.63354 19.9091 8.8896 20.1116 9.29495L21.2067 11.4873C21.3174 11.7089 21.375 11.9531 21.375 12.2008Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
                <div className='history'>
                    <p>TODAY</p>
                </div>
                <div className='queries'>
                    <div className='query'>
                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M8 2.22949C4.68629 2.22949 2 4.91874 2 8.23244C2 11.5494 4.68894 14.2413 8.00591 14.2413H11C12.6569 14.2413 14 12.8982 14 11.2413V8.22949C14 4.91578 11.3137 2.22949 8 2.22949ZM5 7.56808C5 7.01579 5.44772 6.56808 6 6.56808H10C10.5523 6.56808 11 7.01579 11 7.56808C11 8.12036 10.5523 8.56808 10 8.56808H6C5.44772 8.56808 5 8.12036 5 7.56808ZM7 10.2374C7 9.68508 7.44772 9.23737 8 9.23737H10C10.5523 9.23737 11 9.68508 11 10.2374C11 10.7897 10.5523 11.2374 10 11.2374H8C7.44772 11.2374 7 10.7897 7 10.2374Z" fill="white" />
                        </svg>
                        <p>Query 1</p>
                        <div className='actions'>
                            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <ellipse cx="8" cy="8.00786" rx="6" ry="6.00591" stroke="white" strokeWidth="2" />
                                <path d="M12 12.0117L4 4.00384" stroke="white" strokeWidth="2" />
                            </svg>
                            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.68273 8.91264C3.67007 8.92531 3.65704 8.93828 3.6437 8.95155C3.49168 9.1028 3.29925 9.29425 3.16252 9.53595C3.02579 9.77764 2.96082 10.0412 2.90949 10.2494C2.90483 10.2683 2.90028 10.2868 2.8958 10.3047L2.56522 11.6283C2.56242 11.6395 2.5595 11.6511 2.55649 11.6631C2.5197 11.8096 2.46875 12.0126 2.45122 12.1922C2.43105 12.3989 2.42447 12.8508 2.79333 13.2195L3.47434 12.5382L2.79333 13.2195C3.1622 13.5882 3.61415 13.5814 3.82084 13.5612C4.00045 13.5435 4.20335 13.4925 4.34983 13.4556C4.36183 13.4526 4.37346 13.4497 4.38466 13.4469L5.70525 13.1164C5.7232 13.1119 5.74166 13.1074 5.76057 13.1027C5.96897 13.0512 6.23276 12.9861 6.4746 12.849C6.71643 12.712 6.90788 12.5192 7.05912 12.3669C7.07273 12.3531 7.08602 12.3398 7.09898 12.3268C7.0991 12.3267 7.09922 12.3266 7.09933 12.3264L7.09934 12.3264L11.7086 7.71263L11.7086 7.71262C11.7096 7.71158 11.7107 7.71054 11.7117 7.7095C11.73 7.69122 11.7488 7.67252 11.7681 7.65342C11.9752 7.44761 12.2301 7.19443 12.3794 6.89241C12.6557 6.33368 12.6557 5.67807 12.3794 5.11934C12.2301 4.81732 11.9752 4.56414 11.7681 4.35833C11.7477 4.33814 11.7279 4.3184 11.7086 4.29912L11.7086 4.29912C11.7079 4.29838 11.7071 4.29765 11.7064 4.29692C11.6878 4.27829 11.6688 4.25911 11.6493 4.2395C11.4434 4.03177 11.1901 3.77626 10.8877 3.62655C10.3284 3.34957 9.67189 3.34957 9.11259 3.62655L9.55131 4.51245L9.11259 3.62655C8.81027 3.77627 8.55694 4.03177 8.35098 4.2395C8.33077 4.25988 8.31102 4.2798 8.29173 4.29912L3.68403 8.91134C3.6836 8.91178 3.68317 8.91221 3.68273 8.91264Z" stroke="white" strokeWidth="2" />
                                <path d="M8.3335 5.00481L10.3335 3.67017L12.3335 5.67213L11.0002 7.6741L8.3335 5.00481Z" fill="white" />
                            </svg>
                            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg" className='likeicon'>
                                <path fillRule="evenodd" clipRule="evenodd" d="M2.5375 4.1417C3.13759 3.5412 3.95138 3.20386 4.7999 3.20386C5.64843 3.20386 6.46221 3.5412 7.0623 4.1417L7.9999 5.07942L8.9375 4.1417C9.23269 3.83577 9.58579 3.59175 9.97621 3.42387C10.3666 3.256 10.7865 3.16764 11.2114 3.16394C11.6363 3.16024 12.0577 3.24129 12.451 3.40235C12.8442 3.5634 13.2015 3.80125 13.502 4.102C13.8024 4.40275 14.04 4.76039 14.2009 5.15404C14.3618 5.5477 14.4428 5.96949 14.4391 6.3948C14.4354 6.82011 14.3471 7.24043 14.1794 7.63123C14.0117 8.02202 13.7679 8.37548 13.4623 8.67096L7.9999 14.1395L2.5375 8.67096C1.9376 8.07028 1.60059 7.25569 1.60059 6.40633C1.60059 5.55697 1.9376 4.74238 2.5375 4.1417V4.1417Z" stroke="white" strokeWidth="2" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </div>
                    <div className='query'>
                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M8 2.22949C4.68629 2.22949 2 4.91874 2 8.23244C2 11.5494 4.68894 14.2413 8.00591 14.2413H11C12.6569 14.2413 14 12.8982 14 11.2413V8.22949C14 4.91578 11.3137 2.22949 8 2.22949ZM5 7.56808C5 7.01579 5.44772 6.56808 6 6.56808H10C10.5523 6.56808 11 7.01579 11 7.56808C11 8.12036 10.5523 8.56808 10 8.56808H6C5.44772 8.56808 5 8.12036 5 7.56808ZM7 10.2374C7 9.68508 7.44772 9.23737 8 9.23737H10C10.5523 9.23737 11 9.68508 11 10.2374C11 10.7897 10.5523 11.2374 10 11.2374H8C7.44772 11.2374 7 10.7897 7 10.2374Z" fill="white" />
                        </svg>
                        <p>Query 1</p>
                        <div className='actions'>
                            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <ellipse cx="8" cy="8.00786" rx="6" ry="6.00591" stroke="white" strokeWidth="2" />
                                <path d="M12 12.0117L4 4.00384" stroke="white" strokeWidth="2" />
                            </svg>
                            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.68273 8.91264C3.67007 8.92531 3.65704 8.93828 3.6437 8.95155C3.49168 9.1028 3.29925 9.29425 3.16252 9.53595C3.02579 9.77764 2.96082 10.0412 2.90949 10.2494C2.90483 10.2683 2.90028 10.2868 2.8958 10.3047L2.56522 11.6283C2.56242 11.6395 2.5595 11.6511 2.55649 11.6631C2.5197 11.8096 2.46875 12.0126 2.45122 12.1922C2.43105 12.3989 2.42447 12.8508 2.79333 13.2195L3.47434 12.5382L2.79333 13.2195C3.1622 13.5882 3.61415 13.5814 3.82084 13.5612C4.00045 13.5435 4.20335 13.4925 4.34983 13.4556C4.36183 13.4526 4.37346 13.4497 4.38466 13.4469L5.70525 13.1164C5.7232 13.1119 5.74166 13.1074 5.76057 13.1027C5.96897 13.0512 6.23276 12.9861 6.4746 12.849C6.71643 12.712 6.90788 12.5192 7.05912 12.3669C7.07273 12.3531 7.08602 12.3398 7.09898 12.3268C7.0991 12.3267 7.09922 12.3266 7.09933 12.3264L7.09934 12.3264L11.7086 7.71263L11.7086 7.71262C11.7096 7.71158 11.7107 7.71054 11.7117 7.7095C11.73 7.69122 11.7488 7.67252 11.7681 7.65342C11.9752 7.44761 12.2301 7.19443 12.3794 6.89241C12.6557 6.33368 12.6557 5.67807 12.3794 5.11934C12.2301 4.81732 11.9752 4.56414 11.7681 4.35833C11.7477 4.33814 11.7279 4.3184 11.7086 4.29912L11.7086 4.29912C11.7079 4.29838 11.7071 4.29765 11.7064 4.29692C11.6878 4.27829 11.6688 4.25911 11.6493 4.2395C11.4434 4.03177 11.1901 3.77626 10.8877 3.62655C10.3284 3.34957 9.67189 3.34957 9.11259 3.62655L9.55131 4.51245L9.11259 3.62655C8.81027 3.77627 8.55694 4.03177 8.35098 4.2395C8.33077 4.25988 8.31102 4.2798 8.29173 4.29912L3.68403 8.91134C3.6836 8.91178 3.68317 8.91221 3.68273 8.91264Z" stroke="white" strokeWidth="2" />
                                <path d="M8.3335 5.00481L10.3335 3.67017L12.3335 5.67213L11.0002 7.6741L8.3335 5.00481Z" fill="white" />
                            </svg>
                            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg" className='likeicon'>
                                <path fillRule="evenodd" clipRule="evenodd" d="M2.5375 4.1417C3.13759 3.5412 3.95138 3.20386 4.7999 3.20386C5.64843 3.20386 6.46221 3.5412 7.0623 4.1417L7.9999 5.07942L8.9375 4.1417C9.23269 3.83577 9.58579 3.59175 9.97621 3.42387C10.3666 3.256 10.7865 3.16764 11.2114 3.16394C11.6363 3.16024 12.0577 3.24129 12.451 3.40235C12.8442 3.5634 13.2015 3.80125 13.502 4.102C13.8024 4.40275 14.04 4.76039 14.2009 5.15404C14.3618 5.5477 14.4428 5.96949 14.4391 6.3948C14.4354 6.82011 14.3471 7.24043 14.1794 7.63123C14.0117 8.02202 13.7679 8.37548 13.4623 8.67096L7.9999 14.1395L2.5375 8.67096C1.9376 8.07028 1.60059 7.25569 1.60059 6.40633C1.60059 5.55697 1.9376 4.74238 2.5375 4.1417V4.1417Z" stroke="white" strokeWidth="2" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </div>
                    <div className='query'>
                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M8 2.22949C4.68629 2.22949 2 4.91874 2 8.23244C2 11.5494 4.68894 14.2413 8.00591 14.2413H11C12.6569 14.2413 14 12.8982 14 11.2413V8.22949C14 4.91578 11.3137 2.22949 8 2.22949ZM5 7.56808C5 7.01579 5.44772 6.56808 6 6.56808H10C10.5523 6.56808 11 7.01579 11 7.56808C11 8.12036 10.5523 8.56808 10 8.56808H6C5.44772 8.56808 5 8.12036 5 7.56808ZM7 10.2374C7 9.68508 7.44772 9.23737 8 9.23737H10C10.5523 9.23737 11 9.68508 11 10.2374C11 10.7897 10.5523 11.2374 10 11.2374H8C7.44772 11.2374 7 10.7897 7 10.2374Z" fill="white" />
                        </svg>
                        <p>Query 1</p>
                        <div className='actions'>
                            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <ellipse cx="8" cy="8.00786" rx="6" ry="6.00591" stroke="white" strokeWidth="2" />
                                <path d="M12 12.0117L4 4.00384" stroke="white" strokeWidth="2" />
                            </svg>
                            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.68273 8.91264C3.67007 8.92531 3.65704 8.93828 3.6437 8.95155C3.49168 9.1028 3.29925 9.29425 3.16252 9.53595C3.02579 9.77764 2.96082 10.0412 2.90949 10.2494C2.90483 10.2683 2.90028 10.2868 2.8958 10.3047L2.56522 11.6283C2.56242 11.6395 2.5595 11.6511 2.55649 11.6631C2.5197 11.8096 2.46875 12.0126 2.45122 12.1922C2.43105 12.3989 2.42447 12.8508 2.79333 13.2195L3.47434 12.5382L2.79333 13.2195C3.1622 13.5882 3.61415 13.5814 3.82084 13.5612C4.00045 13.5435 4.20335 13.4925 4.34983 13.4556C4.36183 13.4526 4.37346 13.4497 4.38466 13.4469L5.70525 13.1164C5.7232 13.1119 5.74166 13.1074 5.76057 13.1027C5.96897 13.0512 6.23276 12.9861 6.4746 12.849C6.71643 12.712 6.90788 12.5192 7.05912 12.3669C7.07273 12.3531 7.08602 12.3398 7.09898 12.3268C7.0991 12.3267 7.09922 12.3266 7.09933 12.3264L7.09934 12.3264L11.7086 7.71263L11.7086 7.71262C11.7096 7.71158 11.7107 7.71054 11.7117 7.7095C11.73 7.69122 11.7488 7.67252 11.7681 7.65342C11.9752 7.44761 12.2301 7.19443 12.3794 6.89241C12.6557 6.33368 12.6557 5.67807 12.3794 5.11934C12.2301 4.81732 11.9752 4.56414 11.7681 4.35833C11.7477 4.33814 11.7279 4.3184 11.7086 4.29912L11.7086 4.29912C11.7079 4.29838 11.7071 4.29765 11.7064 4.29692C11.6878 4.27829 11.6688 4.25911 11.6493 4.2395C11.4434 4.03177 11.1901 3.77626 10.8877 3.62655C10.3284 3.34957 9.67189 3.34957 9.11259 3.62655L9.55131 4.51245L9.11259 3.62655C8.81027 3.77627 8.55694 4.03177 8.35098 4.2395C8.33077 4.25988 8.31102 4.2798 8.29173 4.29912L3.68403 8.91134C3.6836 8.91178 3.68317 8.91221 3.68273 8.91264Z" stroke="white" strokeWidth="2" />
                                <path d="M8.3335 5.00481L10.3335 3.67017L12.3335 5.67213L11.0002 7.6741L8.3335 5.00481Z" fill="white" />
                            </svg>
                            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg" className='likeicon'>
                                <path fillRule="evenodd" clipRule="evenodd" d="M2.5375 4.1417C3.13759 3.5412 3.95138 3.20386 4.7999 3.20386C5.64843 3.20386 6.46221 3.5412 7.0623 4.1417L7.9999 5.07942L8.9375 4.1417C9.23269 3.83577 9.58579 3.59175 9.97621 3.42387C10.3666 3.256 10.7865 3.16764 11.2114 3.16394C11.6363 3.16024 12.0577 3.24129 12.451 3.40235C12.8442 3.5634 13.2015 3.80125 13.502 4.102C13.8024 4.40275 14.04 4.76039 14.2009 5.15404C14.3618 5.5477 14.4428 5.96949 14.4391 6.3948C14.4354 6.82011 14.3471 7.24043 14.1794 7.63123C14.0117 8.02202 13.7679 8.37548 13.4623 8.67096L7.9999 14.1395L2.5375 8.67096C1.9376 8.07028 1.60059 7.25569 1.60059 6.40633C1.60059 5.55697 1.9376 4.74238 2.5375 4.1417V4.1417Z" stroke="white" strokeWidth="2" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </div>
                </div>
                <Link to="/profile"><div className='profile'>
                    <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 32.8996C9.76862 32.0379 13.3684 28.0727 14.4233 28.0727H25.5773C27.106 28.0727 30.2266 31.3596 31 32.5183M36 20.8878C36 29.7331 28.8365 36.9036 20 36.9036C11.1634 36.9036 4 29.7331 4 20.8878C4 12.0426 11.1634 4.87207 20 4.87207C28.8365 4.87207 36 12.0426 36 20.8878ZM25.7314 15.429C25.7314 12.3735 23.1545 9.87699 20.0005 9.87699C16.8465 9.87699 14.2696 12.3735 14.2696 15.429C14.2696 18.4846 16.8465 20.9811 20.0005 20.9811C23.1544 20.9811 25.7314 18.4846 25.7314 15.429Z" stroke="white" strokeWidth="2.5" />
                    </svg>
                    <p>Profile</p>
                </div></Link>
                <div className='info'>
                    <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 20.944L20 28.9518M20 15.0084V14.9381M4 20.944C4 12.0987 11.1634 4.92822 20 4.92822C28.8366 4.92822 36 12.0987 36 20.944C36 29.7892 28.8366 36.9597 20 36.9597C11.1634 36.9597 4 29.7892 4 20.944Z" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <p>Help</p>
                </div>
            </div>
            <div className='sidebarhidden' style={{ display: sidebarVisible ? 'none' : 'block' }}>
                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" className='menuiconhidden' onClick={toggleSidebar}>
                    <path d="M23.3996 20.8H2.59961M23.3996 13H2.59961M23.3996 5.19995H2.59961" stroke="white" strokeWidth="3" strokeLinecap="round" />
                </svg>
                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" className='chaticonhidden'>
                    <path d="M12.9996 13.0001V10.4001M12.9996 10.4001V7.8001M12.9996 10.4001H10.3996M12.9996 10.4001H15.5996M12.6605 17.974L7.23439 23.4001V17.974H5.19961C3.76367 17.974 2.59961 16.8099 2.59961 15.374V5.2001C2.59961 3.76416 3.76367 2.6001 5.19961 2.6001H20.7996C22.2355 2.6001 23.3996 3.76416 23.3996 5.2001V15.374C23.3996 16.8099 22.2355 17.974 20.7996 17.974H12.6605Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                 <Link to="/profile"><svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg" className='profileiconhidden'>
                    <path d="M6.52539 23.1999C7.08264 22.5758 9.69249 19.7038 10.4573 19.7038H18.544C19.6523 19.7038 21.9147 22.0845 22.4754 22.9237M26.1004 14.4999C26.1004 20.9064 20.9069 26.0999 14.5004 26.0999C8.09389 26.0999 2.90039 20.9064 2.90039 14.4999C2.90039 8.0934 8.09389 2.8999 14.5004 2.8999C20.9069 2.8999 26.1004 8.0934 26.1004 14.4999ZM18.6557 10.5462C18.6557 8.33311 16.7874 6.5249 14.5007 6.5249C12.2141 6.5249 10.3458 8.33311 10.3458 10.5462C10.3458 12.7593 12.2141 14.5675 14.5007 14.5675C16.7874 14.5675 18.6557 12.7593 18.6557 10.5462Z" stroke="white" strokeWidth="2" />
                </svg></Link>
                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" className='infoiconhidden'>
                    <path d="M12.9996 13.0001L12.9996 18.2001M12.9996 9.1458V9.1001M2.59961 13.0001C2.59961 7.25633 7.25585 2.6001 12.9996 2.6001C18.7434 2.6001 23.3996 7.25634 23.3996 13.0001C23.3996 18.7439 18.7434 23.4001 12.9996 23.4001C7.25585 23.4001 2.59961 18.7439 2.59961 13.0001Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
        </div>
    );
};

export default Sidebar;
