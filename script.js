body {
  font-family: 'Segoe UI', sans-serif;
  text-align: center;
  background: linear-gradient(#ffe6f0, #fff5fc);
  margin: 0;
  padding: 0;
}

.container {
  padding: 40px 20px;
}

h1 {
  color: #d63384;
  font-size: 2.5em;
}

.message {
  font-size: 1.2em;
  color: #555;
  margin-bottom: 40px;
}

.gift-box {
  cursor: pointer;
  display: inline-block;
  position: relative;
  animation: bounce 2s infinite;
}

.gift-box img {
  width: 180px;
  transition: transform 0.3s;
}

.gift-box:hover img {
  transform: scale(1.05);
}

.photo-gallery {
  display: none;
  margin-top: 30px;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
}

.photo {
  width: 150px;
  height: 150px;
  object-fit: cover;
  border: 5px solid #f06292;
  border-radius: 10px;
  animation: pop-up 0.5s ease forwards;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

@keyframes pop-up {
  0% {
    opacity: 0;
    transform: scale(0.5) translateY(20px);
  }
  100% {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}
