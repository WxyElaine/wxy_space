import React from 'react';

export const Education = [
    <h5>Education</h5>,
    <p><b>2016-2020</b> B.Sc. in Computer Science</p>,
    <p>University of Washington, Seattle, WA</p>
];

export const Skills = [
    <h5>Skills</h5>,
    <p>Python, Java, C++, HTML/CSS, JavaScript, Swift, C</p>,
    <p>Robot Operating System (ROS), Linux, Git, LATEX, SolidWorks, Fabrication</p>
];

export const RecentAppointments = [
    <h5>Undergraduate Research Assistant</h5>,
    <p>2019.4-2020.6</p>,
    <p><a href="https://hcrlab.cs.washington.edu">Human-Centered Robotics Lab</a>, University of Washington, Seattle, WA</p>
];

export const ResearchExperience = [
    [
        <h5>Robotic Limb Repositioning with Supervised Autonomy</h5>,
        <p><u>Mentors:</u> <a href="https://homes.cs.washington.edu/~mcakmak/">Dr. Maya Cakmak</a>, <a href="https://marucabrera.wixsite.com/homepage">Dr. Maria Cabrera</a></p>,
        <p><u>Location:</u> <a href="https://hcrlab.cs.washington.edu">Human-Centered Robotics Lab</a>, University of Washington, Seattle, WA</p>,
        <p><u>Description:</u> The goal of this project is to enable people with severe motor impairments to be able to reposition their limbs, to avoid sores and promote circulation, through a robot manipulator. Current tele-manipulation interfaces make this task slow and dangerous. In our project, we first modified the Fetch mobile manipulator by attaching the EZGripperTM robotic gripper from SAKE Robotics, so that Fetch can grasp human limbs without harming them. We then developed a tool for programming essential limb repositioning motions by demonstration on a human manikin. Next we developed a user interface for customizing programmed motions, anchoring motions on a new human body, and safely running the motion under user supervision. We are currently evaluating these tools on a manikin and will soon begin tests with novice users and on real human bodies.</p>
    ],
    [
        <h5>Accessible Tele-Manipulation through Split-View Cursor Control</h5>,
        <p><u>Mentors:</u> <a href="https://homes.cs.washington.edu/~mcakmak/">Dr. Maya Cakmak</a>, <a href="https://marucabrera.wixsite.com/homepage">Dr. Maria Cabrera</a></p>,
        <p><u>Location:</u> <a href="https://hcrlab.cs.washington.edu">Human-Centered Robotics Lab</a>, University of Washington, Seattle, WA</p>,
        <p><u>Description:</u> The goal of this project is to enable more efficient and accessible control of manipulators through a cursor-based interaction. We first systematically analyzed the impact of different interface elements on the speed with which 3-DoF (Degrees-of-Freedom) can be controlled through a 2D mouse cursor. Based on our findings we developed several alternative interfaces for controlling a 7-DoF robot manipulator (Fetch mobile manipulator) through three orthogonal views of the robot and manipulated scene. We are currently evaluating the efficiency of these interfaces in comparison to existing interfaces developed by other researchers. We are also developing speech-based control, for the subset of our interfaces that discretize all user actions, to further expand accessibility.</p>
    ]
];

export const Publications = [
    [
        <p><b>Xinyi Wang</b>, Kavita Krishnaswamy, Maria E. Cabrera, and Maya Cakmak. 2020. <a href="https://dl.acm.org/doi/10.1145/3371382.3378387">"Robotic Limb Repositioning with Supervised Autonomy"</a>. In Companion of the 2020 ACM/IEEE International Conference on Human-Robot Interaction (HRI ’20). Association for Computing Machinery, New York, NY, USA, 511–513.</p>
    ],
    [
        <p>Maria E. Cabrera, Maya Cakmak, Podshara Chanrungmaneekul, Brian J. Lee, Eric Pan, Vinitha Ranganeni, Nick Walker, <b>Xinyi Wang</b>. "Dawgs@Home: RoboCup 2020 Open Platform League Team Description Paper".</p>
    ]
];

export const Presentations = [
    <p><b>2020.4.4</b> <a href="http://wrd.cs.washington.edu//static/pdf/posters/LimbRepoPoster.pdf">Limb Repositioning with Supervised Autonomy.</a> Xinyi Wang.</p>,
    <p><a href="http://wrd.cs.washington.edu">University of Washington Allen School Women’s Research Day.</a> <b>Poster.</b></p>
];

export const Awards = [
    <p>2020 <b>Outstanding Undergraduate Researcher Award <u>Honorable Mention</u>, Computing Research Association</b></p>,
    <p>Recognizes undergraduate students in North American colleges and universities who show outstanding research potential in an area of computing research.</p>
];

export const Projects = [
    [
        <h5>RoboCup@Home 2020</h5>,
        <p>Worked as part of the <a href="https://github.com/homeskies">UW CSE team</a> to participate in RoboCup 2020 (now postponed to 2021) in the @Home Open Platform League with the Fetch mobile manipulator. Developed general-purpose navigation, manipulation, and interaction capabilities for robots to assist people in their homes.</p>
    ],
    [
        <h5>Web Interface for Autonomous Robot Feeding with Assistive Dexterous Arm (ADA)</h5>,
        <p>A web interface for the user test of the autonomous robot feeding project in Personal Robotics Lab at UW. Users can pick the food they want to eat and control the whole feeding process under various levels of autonomy.</p>
    ],
    [
        <h5>Auxie (Robotics capstone project)</h5>,
        <p>An assistive feeding robot developed using Fetch mobile manipulator (in a team of 5). Comes with food and face detection, special-designed fork and plate, and a web interface for tele-operation. Worked on the web interface, object recognition and fabrication using Python, C++, HTML, JavaScript and Solidworks. <a href="https://www.youtube.com/watch?v=CfT0oHKxfkM">(View the project video.)</a></p>
    ],
    [   
        <h5>Autonomous Driving Race Car (Mobile robots class project)</h5>,
        <p>An autonomous driving program with localization, control and planning developed on MuSHR race car (in a team of 3). Has the ability to visit all the known waypoints on a map while avoiding obstacles. Worked on all aspects of the project using Python.</p>
    ],
    [
        <h5>Website for MapleFood Trading Inc. (Personal project)</h5>,
        <p>Developed a website for displaying products and information of MapleFood Trading Inc., Chongqing, China, using HTML and JavaScript.</p>
    ]
];

export const Activities = [
    [
        <h5>Volunteer at Xi’an Gold Ribbon Childcare and Aid Center</h5>,
        <p>2015.9-present</p>,
        <p>Xi’an, Shaanxi, China</p>,
        <p>Maintain and update the organization website and organize childcare events.</p>
    ],
    [
        <h5>Officer of Han Chinese Cultural Association at UW</h5>,
        <p>2018.4-2020.6</p>,
        <p>Seattle, WA</p>,
        <p>In charge of publicity including newsletters and event invitations. (Our club aims to provide a platform for people to learn about traditional Chinese culture and connect people who are interested in Chinese history and traditional culture.)</p>
    ]
];