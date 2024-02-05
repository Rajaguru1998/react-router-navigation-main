import React from 'react';

const UIUX = () => {
    return (
        <div>
            <header>
                <h1>UI/UX Course</h1>
                <img id='FSD-banner-1' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3p47HuuO4qihAJ8ITUlj6GcKt9i5vu1YhsdtmWUAby5oSqFrZ53RgDp5NdtMsmPdTXw&usqp=CAU" classNameName="card-img-top " alt="UI/UX banner" />
            </header>

            <main className='uiux'>
                <section >
                    <h2>Introduction to UI/UX</h2>
                    <div className="card mb-3">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img id=''
                                    src="https://img.freepik.com/free-vector/gradient-ui-ux-background_23-2149052117.jpg" className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This section provides an introduction to User Interface (UI) and User Experience (UX) design. Topics covered include:</p>

                                    <p className="card-text">UI/UX stands for User Interface (UI) and User Experience (UX). UI focuses on the visual and interactive elements of a digital product, while UX is concerned with the overall experience and satisfaction of users when interacting with the product.</p>
                                    <p className="card-text"><small className="text-body-secondary">UI design involves creating visually appealing and intuitive interfaces that facilitate user interaction. It includes aspects such as layout, typography, color schemes, and iconography. UI designers aim to create interfaces that are aesthetically pleasing and easy to navigate.</small></p>
                                    <ul>
                                        <li>What is UI/UX design?</li>
                                        <li>Key differences between UI and UX</li>
                                        <li>Importance of good UI/UX design</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <h2>UI Design Principles</h2>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6e-iB7Aq-xIDgSuFnwDo4iEkIWNzaQELKBZAecEL_SD07Q4by11Pf8VkxfN8HWuhSOr0&usqp=CAU" alt="UI Design Principles" />
                    <p>In this section, we will explore the fundamental principles of UI design. Topics covered include:</p>
                    <ul>
                        <li>Color theory and typography</li>
                        <li>Layout and composition</li>
                        <li>Visual hierarchy and balance</li>
                        <li>Usability and accessibility</li>
                    </ul>
                </section>
                <section>
                    <h2>UX Design Process</h2>
                    <p>This section focuses on the User Experience (UX) design process. Topics covered include:</p>
                    <ul>
                        <li>User research and personas</li>
                        <li>Information architecture</li>
                        <li>Wireframing and prototyping</li>
                        <li>User testing and feedback</li>
                    </ul>
                    <img src="https://www.istnetworks.com/wp-content/uploads/2019/11/our-design-process-07-1-1-1024x723.png" alt="UX Design Process" />
                </section>


            </main>

        </div>
    );
};

export default UIUX;