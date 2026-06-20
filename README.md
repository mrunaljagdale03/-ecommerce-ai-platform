# Multi-Vendor E-commerce with AI Personalization Engine

A modern, full-stack e-commerce platform featuring multiple vendors, AI-powered product recommendations, and a seamless shopping experience.

## 🌟 Features

- **Multi-Vendor Support**: Multiple sellers with individual dashboards
- **AI Personalization Engine**: Smart product recommendations using TensorFlow.js
- **User Wishlists**: Save favorite products for later
- **Secure Checkout**: Integrated Stripe payment processing
- **Seller Analytics**: Real-time inventory and sales tracking
- **Dynamic Offers**: AI-generated personalized discount recommendations
- **Real-time Notifications**: WebSocket-based updates
- **Admin Dashboard**: Comprehensive platform management

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 14
- **UI Library**: React 18
- **Styling**: Tailwind CSS
- **State Management**: Redux Toolkit
- **HTTP Client**: Axios
- **Real-time**: Socket.io client

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB + Mongoose
- **Authentication**: JWT + bcrypt
- **Payment**: Stripe API
- **ML/AI**: TensorFlow.js
- **Real-time**: Socket.io
- **Task Queue**: Bull (Redis)

## 📁 Project Structure

```
ecommerce-ai-platform/
├── frontend/                 # Next.js application
├── backend/                  # Express.js API
├── docker-compose.yml        # Docker services
├── .env.example              # Environment variables
└── package.json              # Dependencies
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- MongoDB
- Redis

### Installation

1. **Clone & Setup**
```bash
git clone https://github.com/mrunaljagdale03/-ecommerce-ai-platform.git
cd -ecommerce-ai-platform
npm run setup
```

2. **Start Development**
```bash
npm run dev
```

3. **Using Docker**
```bash
npm run docker:up
```

## 📚 API Documentation

### Authentication
- `POST /api/auth/register` - Register user
- `POST /api/auth/login` - User login

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get product details
- `POST /api/products` - Create product

### Orders
- `POST /api/orders` - Create order
- `GET /api/orders` - Get user orders

### Recommendations
- `GET /api/recommendations/:userId` - Get personalized products

## 🔐 Security

- JWT authentication
- Password hashing with bcrypt
- CORS protection
- Input validation
- Rate limiting

## 📝 License

MIT License

---

**Built with ❤️ | Full-Stack AI E-Commerce Platform**
