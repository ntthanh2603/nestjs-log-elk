<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

<h1 align="center">NestJS ELK Stack Logger</h1>

<p align="center">
  A NestJS application with ELK Stack integration for centralized logging
</p>

<p align="center">
  <a href="#prerequisites">📋 Prerequisites</a> •
  <a href="#installation">🔧 Installation</a> •
  <a href="#running-the-app">🚀 Running The App</a> •
  <a href="#logging-system">📝 Logging System</a> •
  <a href="#elk-stack">📊 ELK Stack</a>
</p>

## ✨ Features

- 🔄 Real-time logging with Winston
- 📊 ELK Stack integration (Elasticsearch, Logstash, Kibana)
- 🔍 Centralized log management
- 📈 Log visualization with Kibana
- 🐳 Docker containerization

## 📋 Prerequisites

- Node.js (v14+)
- Docker and Docker Compose
- Git

## 🔧 Installation

1. Clone the repository:

```bash
git clone https://github.com/ntthanh2603/nestjs-log-elk.git
cd nestjs-log-elk
```

2. Install dependencies:

```bash
npm install
```

3. Create necessary directories:

```bash
mkdir -p nestjs-log/logs
```

## 🚀 Running The App

1. Start the ELK stack and application:

```bash
docker-compose up -d
```

2. Access the services:

- NestJS Application: http://localhost:3000
- Kibana Dashboard: http://localhost:5601
- Elasticsearch: http://localhost:9200

## 📝 Logging System

The application uses Winston for logging with the following configuration:

- Log Format: JSON
- Log Levels: info, error, warn
- Storage: File system and Console output
- Log Directory: `nestjs-log/logs/app.log`

Example log output:

```json
{
  "level": "info",
  "message": "Welcome to home page",
  "timestamp": "2025-04-29T07:43:57.288Z"
}
```

## 📊 ELK Stack

### Components:

- **Elasticsearch**: Search and analytics engine
- **Filebeat**: Log shipper for forwarding logs to Elasticsearch
- **Kibana**: Visualization platform

### Directory Structure:

```
nestjs-log-elk/
├── src/
│   └── logger.ts          # Winston logger configuration
├── filebeat/
│   ├── Dockerfile         # Filebeat container configuration
│   └── filebeat.yml       # Filebeat configuration
├── docker-compose.yml     # Container orchestration
└── nestjs-log/
    └── logs/             # Application logs directory
```

## 🔍 Monitoring Logs

1. Access Kibana at http://localhost:5601
2. Navigate to "Discover" section
3. Create an index pattern: `nest-app-*`
4. View and analyze logs in real-time

## 🛠 Troubleshooting

If logs are not appearing in Kibana:

1. Check if log files are being created in `nestjs-log/logs/`
2. Verify Filebeat configuration
3. Check Elasticsearch connection
4. Ensure proper volume mounting in docker-compose.yml

## 📜 License

This project is licensed under the MIT License - see the LICENSE file for details.
