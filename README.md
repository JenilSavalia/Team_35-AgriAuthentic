# 🌾 AgriAuthentic

### Farmer Dashboard Frontend :- https://agriauthentic-farmer-dashboard-sp5b.onrender.com

### Consumer Dashboard Frontend :- https://agriauthenti-consumer.onrender.com

### Backend postman Documentation :- https://documenter.getpostman.com/view/39189972/2sAYkDN1PN

## **Empowering Trust in Agriculture Through Blockchain-Verified Transparency**

## Table of Contents

- [Overview](#-overview)
- [Problem Statement](#-problem-statement)
- [Solution](#-solution)
- [Key Features](#-key-features)
- [Technology Stack](#-technology-stack)
- [Project Structure](#-project-structure)
- [Installation & Setup](#-installation--setup)
- [How It Works](#-how-it-works)
- [Team Members](#-team-members)
- [Contributing](#-contributing)

---

## 🌟 Overview

**AgriAuthentic** is a comprehensive agricultural transparency platform that bridges the gap between farmers and consumers. By leveraging QR code technology and real-time verification systems, we enable consumers to trace their produce back to its authentic source, ensuring trust, quality, and sustainability in the agricultural supply chain.

Our platform provides farmers with tools to showcase their authentic farming practices while giving consumers complete visibility into product lifecycle, farmer credentials, and sustainable farming methods.

---

## 🎯 Problem Statement

In today's agricultural marketplace, consumers face several critical challenges:

- **Lack of Transparency**: No visibility into product origin and farming practices
- **Trust Issues**: Difficulty verifying if farmers follow sustainable/organic methods
- **Information Gap**: Limited access to farmer credentials and product lifecycle data
- **Counterfeit Products**: Risk of purchasing non-authentic agricultural products
- **Complex Supply Chain**: Multiple intermediaries obscure the farm-to-consumer journey

---

## 💡 Solution

AgriAuthentic addresses these challenges through a multi-dashboard platform:

### For Farmers
- **Digital Profile Management**: Showcase farming credentials and certifications
- **Product Lifecycle Tracking**: Document each stage from seed to harvest
- **QR Code Generation**: Create unique identifiers for each product batch
- **Dashboard Analytics**: Monitor product distribution and consumer engagement

### For Consumers
- **QR Code Scanning**: Instant access to product and farmer information
- **Verification Dashboard**: View complete product lifecycle and authenticity
- **Farmer Profile Access**: See credentials, farming methods, and certifications
- **AI-Powered Assistance**: Get instant answers about products and farming practices

### For Verification
- **Certification Dashboard**: Validate farmer credentials and product authenticity
- **Real-time Data**: Access comprehensive farming and product data
- **Transparency Reports**: Generate detailed verification reports

---

## ✨ Key Features

### 🔍 QR-Based Product Verification
- Scan QR codes pre or post-purchase
- Instant access to complete product information
- View full product lifecycle from planting to harvest
- Verify farmer authenticity and credentials

### 👨‍🌾 Farmer Dashboard
- Comprehensive profile management
- Product registration and tracking
- Batch-wise QR code generation
- Integration with backend APIs for real-time updates
- Analytics and insights

### 🛒 Consumer Dashboard
- User-friendly interface for product scanning
- Detailed product history and origin information
- Farmer credential verification
- Purchase history and saved products
- Educational content about sustainable farming

### 🤖 AI-Powered Chatbot
- 24/7 customer support
- Answer queries about products, farmers, and farming practices
- Provide recommendations based on preferences
- Multi-language support

### ✅ Certification Dashboard
- Verify farmer credentials and certifications
- Access comprehensive farmer profiles
- View real-time farming data
- Generate authenticity certificates
- Track sustainable farming practices

---

## 🛠️ Technology Stack

### Frontend
- **React.js** - Component-based UI development
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **JavaScript/TypeScript** - Core programming languages

### Backend
- **Python** - Primary backend language
- **Flask/FastAPI** - RESTful API framework
- **Database Integration** - Complete CRUD operations
- **API Architecture** - Scalable and secure endpoints

### Additional Technologies
- **QR Code Generation & Scanning**
- **AI/ML Models** - Chatbot integration
- **Database** - (MongoDB/PostgreSQL/MySQL)
- **Cloud Storage** - Product images and documents

---

## 📁 Project Structure

```
Team_35-AgriAuthentic/
│
├── Farmer Dashboard/          # Farmer-facing dashboard
│   ├── src/
│   ├── public/
│   └── package.json
│
├── Consumer/                  # Consumer-facing application
│   ├── src/
│   ├── public/
│   └── package.json
│
├── Verification/vite-project/ # Certification & verification dashboard
│   ├── src/
│   ├── public/
│   └── package.json
│
├── Backend/                   # Python backend APIs
│   ├── api/
│   ├── models/
│   ├── controllers/
│   ├── database/
│   └── requirements.txt
│
├── AiChatBot/                # AI chatbot implementation
│   ├── model/
│   ├── training/
│   └── integration/
│
├── Designs/                  # UI/UX design files
│   └── mockups/
│
└── README.md
```

---

## 🚀 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- Python (v3.8 or higher)
- npm or yarn
- pip (Python package manager)

### Backend Setup

```bash
# Navigate to backend directory
cd Backend

# Create virtual environment
python -m venv venv

# Activate virtual environment
# On Windows:
venv\Scripts\activate
# On macOS/Linux:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Set up environment variables
cp .env.example .env
# Edit .env with your configuration

# Run database migrations
python manage.py migrate

# Start the backend server
python app.py
```

### Farmer Dashboard Setup

```bash
# Navigate to Farmer Dashboard
cd "Farmer Dashboard"

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Add backend API URL

# Start development server
npm run dev
```

### Consumer Dashboard Setup

```bash
# Navigate to Consumer directory
cd Consumer

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env

# Start development server
npm run dev
```

### Verification Dashboard Setup

```bash
# Navigate to Verification directory
cd Verification/vite-project

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env

# Start development server
npm run dev
```

### AI Chatbot Setup

```bash
# Navigate to AiChatBot directory
cd AiChatBot

# Install dependencies
pip install -r requirements.txt

# Configure chatbot settings
# Edit config.py with your AI model credentials

# Run chatbot service
python chatbot.py
```

---

## 🔄 How It Works

### For Farmers

1. **Registration**: Create an account with farming credentials
2. **Profile Setup**: Add certifications, farming methods, and location
3. **Product Registration**: Register products with details and lifecycle information
4. **QR Generation**: Generate unique QR codes for product batches
5. **Distribution**: Attach QR codes to products for consumer scanning

### For Consumers

1. **Scan QR Code**: Use mobile device to scan product QR code
2. **View Details**: Access complete product information instantly
3. **Verify Authenticity**: Check farmer credentials and farming practices
4. **Product Lifecycle**: View journey from seed to shelf
5. **Make Informed Decision**: Purchase with confidence and transparency

### For Verifiers

1. **Access Dashboard**: Log into certification dashboard
2. **Scan/Enter Code**: Input product QR code or farmer ID
3. **Review Data**: Access comprehensive farming and product data
4. **Verify Credentials**: Confirm certifications and practices
5. **Generate Report**: Create verification certificates

---

## 👥 Team Members

### 🏆 Team 35 - AgriAuthentic

| Name | Role | Responsibilities |
|------|------|-----------------|
| **Jatan Mathasoliya** | Team Leader & Frontend Developer | • Lead project development and coordination<br>• Farmer Dashboard development<br>• Backend integration with Python APIs<br>• Frontend-Backend connectivity<br>• Technical guidance and architecture decisions |
| **Jenil Savaliya** | Frontend Developer | • Consumer Dashboard development<br>• UI/UX implementation<br>• Backend integration support<br>• Component development and optimization |
| **Krutagya Kaneria** | Backend Developer | • Complete backend architecture<br>• API development and integration<br>• Database design and management<br>• CRUD operations implementation<br>• Backend optimization and security |
| **Homasvi Kaneria** | AI Developer & Frontend Developer | • AI Chatbot integration and training<br>• Certification Dashboard development<br>• Natural language processing implementation<br>• Chatbot-backend connectivity |

---

## 🎨 Design Philosophy

Our design focuses on:

- **Simplicity**: Easy-to-use interfaces for farmers with varying technical skills
- **Transparency**: Clear visualization of product lifecycle and farmer data
- **Trust**: Professional design that builds confidence in the platform
- **Accessibility**: Mobile-responsive design for scanning QR codes on-the-go
- **Performance**: Fast loading times and smooth interactions

---

## 🔐 Security & Privacy

- **Data Encryption**: All sensitive data encrypted in transit and at rest
- **Authentication**: Secure login systems for all user types
- **Privacy Controls**: Farmers control what information is shared publicly
- **QR Code Security**: Unique, tamper-proof QR codes for each product batch
- **Regular Audits**: Continuous security monitoring and updates

---

## 🌱 Future Enhancements

- [ ] Blockchain integration for immutable record-keeping
- [ ] IoT sensor integration for real-time farming data
- [ ] Multi-language support for broader accessibility
- [ ] Mobile applications for iOS and Android
- [ ] Advanced analytics dashboard for farmers
- [ ] Community marketplace integration
- [ ] Sustainability scoring system
- [ ] Integration with government agricultural databases

---

## 📊 API Documentation

### Base URL
```
http://localhost:5000/api/v1
```

### Key Endpoints

#### Farmer APIs
```
POST   /farmers/register       - Register new farmer
GET    /farmers/:id            - Get farmer profile
PUT    /farmers/:id            - Update farmer profile
POST   /farmers/products       - Add new product
GET    /farmers/products/:id   - Get product details
```

#### Consumer APIs
```
GET    /products/verify/:qr    - Verify product by QR code
GET    /products/:id           - Get product details
GET    /farmers/public/:id     - Get public farmer profile
```

#### Verification APIs
```
POST   /verify/farmer          - Verify farmer credentials
POST   /verify/product         - Verify product authenticity
GET    /certificates/:id       - Get certificate details
```

---

## 🤝 Contributing

We welcome contributions to AgriAuthentic! Here's how you can help:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Development Guidelines

- Follow existing code style and conventions
- Write clear commit messages
- Add comments for complex logic
- Test thoroughly before submitting PR
- Update documentation as needed

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 📞 Contact & Support

For questions, suggestions, or support:

- **Team Leader**: Jatan Mathasoliya
- **Repository**: [GitHub](https://github.com/Jatan-Mathasoliya/Team_35-AgriAuthentic)
- **Issues**: [Report Issues](https://github.com/Jatan-Mathasoliya/Team_35-AgriAuthentic/issues)

---

## 🙏 Acknowledgments

- Thanks to all team members for their dedication and hard work
- Appreciation for the hackathon organizers
- Gratitude to the farming community for their valuable feedback
- Thanks to open-source libraries and frameworks that made this possible

---

<div align="center">

**Built with ❤️ by Team 35**

*Jay HariKrushna Maharaj* 🙏

[⭐ Star this repo](https://github.com/Jatan-Mathasoliya/Team_35-AgriAuthentic) | [🐛 Report Bug](https://github.com/Jatan-Mathasoliya/Team_35-AgriAuthentic/issues) | [✨ Request Feature](https://github.com/Jatan-Mathasoliya/Team_35-AgriAuthentic/issues)

</div>
