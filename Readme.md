<a name="readme-top"></a>

# 📗 Table of Contents

- [📖 About the Project](#about-project)

  - [🛠 Built With](#built-with)
    - [Tech Stack](#tech-stack)
    - [Key Features](#key-features)

- [💻 Getting Started](#getting-started)

  - [Prerequisites](#prerequisites)
  - [Setup](#setup)
  - [Install](#install)
  - [Deployment](#deployment)
  - [Usage](#usage)
  - [Run Tests](#runtests)
  - [Live](#live)

- [👥 Authors](#authors)
- [🔭 Future Features](#features)
- [🤝 Contribution](#contributing)
- [⭐️ Show your support](#support)
- [🙏 Acknowledgements](#acknowledgements)
- [📝 License](#license)

<!-- PROJECT DESCRIPTION -->

# 📖 Live Vehicle Tracker <a name="about-project"></a>

**Live Vehicle Tracker** is a full-stack web application that simulates and tracks vehicles in real-time using Socket.io, Leaflet Maps (OpenStreetMap), and MongoDB for historical data logging. Vehicles are represented by live markers and polylines on a map, providing a visual history of their movement.

## 🛠 Built With <a name="built-with"></a>

### Tech Stack

<a name="built-with">JavaScript</a>  
<a name="tech-stack">React,</a>  
<a name="tech-stack">Node.js,</a>  
<a name="tech-stack">Express,</a>  
<a name="tech-stack">Socket.io,</a>  
<a name="tech-stack">MongoDB + Mongoose,</a>  
<a name="tech-stack">Leaflet (OpenStreetMap)</a>

<!-- Features -->

### Key Features <a name="key-features"></a>

- 🚗 Real-time vehicle tracking with WebSockets
- 🧭 Leaflet-based interactive map
- 🧵 Dynamic vehicle trails using polylines
- 💾 MongoDB integration for saving GPS history
- 🔁 Simulated location updates every 3 seconds

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## 💻 Getting Started <a name="getting-started"></a>

To get a local copy up and running, follow these steps.

### Prerequisites

- Node.js and npm installed
- MongoDB installed and running locally
- Code editor like VS Code

### Setup

Clone this repository to your desired folder:

  git clone https://github.com/your-username/live-vehicle-tracker.git
  cd live-vehicle-tracker

### Install
Install dependencies in server:

# In root/server
cd ../server
npm install

### Deployment

You can deploy the project using:

Backend: Render / Railway / Heroku

### Usage
Start backend server:

# Start backend
cd server
npm start

Visit: http://localhost:5173

Run Tests <a name="runtests"></a>
Currently, testing is manual. Automated testing will be added in future versions.

<!-- LIVE DEMO -->
Live <a name="live"></a>
🚀 Coming soon: Live Demo

<p align="right">(<a href="#readme-top">back to top</a>)</p> <!-- AUTHORS -->
👥 Authors <a name="authors"></a>
👤 Mudassir Nazir

GitHub: @Rana-Mudassir

LinkedIn: [@rana-mudassir-nazir](https://www.linkedin.com/in/mudassir-nazir)

### 🔭 Future Features <a name="features"></a>
Replay route by date from MongoDB

Add user authentication for admin view

Filter vehicles by ID or type

Deploy live version

Show vehicle clustering and labels

<!-- CONTRIBUTING -->
🤝 Contribution <a name="contributing"></a>
Contributions, issues, and feature requests are welcome!

Feel free to check the issues page.

<!-- SUPPORT -->
⭐️ Show your support <a name="support"></a>
If you like this project, please consider giving it a ⭐️ and sharing it with others!

<!-- ACKNOWLEDGEMENTS -->
🙏 Acknowledgements <a name="acknowledgements"></a>
Thanks to the open-source community for Leaflet, Socket.io, and MongoDB tools, and to Microverse for pushing devs to build great things.

<!-- LICENSE -->
📝 License <a name="license"></a>
This project is MIT licensed.

<p align="right">(<a href="#readme-top">back to top</a>)</p>